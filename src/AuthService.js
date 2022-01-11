import jwt_decode from "jwt-decode";
import { useReducer } from "react";

export default class AuthService {
  // Initializing important variables
  constructor(domain) {
    this.domain = domain || "http://localhost:3001"; // API server domain
    this.fetch = this.fetch.bind(this); // React binding stuff
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(username, password) {
    // Get a token from api server using the fetch api
    return this.fetch(`${this.domain}/login`, {
      method: "POST",
      // mode: "no-cors",
      // "Access-Control-Allow-Origin": "http://localhost:3000",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        if (res.token) {
          this.setToken(res.token); // Setting the token in localStorage
          this.setProfile(res.user);
          return Promise.resolve(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  register(email, password, username) {
    return this.fetch("http://localhost:3001/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        username,
        role: "player",
      }),
    })
      .then((res) => {
        if (res.token) {
          this.setToken(res.token); // Setting the token in localStorage
          this.setProfile(res.user);
          return Promise.resolve(res);
        } else {
          return Promise.resolve(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // GEtting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  isTokenExpired(token) {
    try {
      const decoded = jwt_decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired. N
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  setToken(idToken) {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  logout() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("score");
  }

  setProfile(user) {
    const { username, role, email, score } = user;
    localStorage.setItem("username", username);
    localStorage.setItem("role", role);
    localStorage.setItem("email", email);
    if (score) {
      localStorage.setItem("score", score);
    } else {
      localStorage.setItem("score", 0);
    }
  }

  getProfile() {
    // Using jwt-decode npm package to decode the token
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    const email = localStorage.getItem("email");
    const score = localStorage.getItem("score");
    const user = { username, role, email, score };
    return user;
  }

  adminIn() {
    if (this.loggedIn()) {
      return localStorage.getItem("role") == "admin";
    }
  }

  // getProfile() {
  //   // Using jwt-decode npm package to decode the token
  //   var token = this.getToken();
  //   var decoded = jwt_decode(token);
  //   return decoded;
  // }

  fetch(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (this.loggedIn()) {
      headers["Authorization"] = "Bearer " + this.getToken();
    }

    return fetch(url, {
      headers,
      ...options,
    })
      .then(this._checkStatus)
      .then((response) => response.json());
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
}
