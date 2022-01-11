import styled from "styled-components";
import { GeneralStyle } from "../../GeneralStyle";

export const RankingContainer = styled.div`
  min-width: 285px;
  min-height: 308px;
  width: 85%;
  height: 80%;
  margin: 10px;
  background: linear-gradient(
    to bottom,
    ${GeneralStyle.principalColor},
    ${GeneralStyle.secondColor}
  );
  border-radius: 10px;
  box-shadow: 0 7px 30px rgba(62, 9, 11, 0.3);
  overflow-y: scroll;
  overflow-x: hidden;

  h1 {
    font-size: 18px;
    color: white;
    padding: 12px 13px 18px;
  }

  .the-most {
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 50vw;
    max-width: 200px;
    padding: 10px;

    img {
      max-width: 100%;
    }
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const RankingList = styled.ol`
  counter-reset: leaderboard;

  li {
    position: relative;
    z-index: 1;
    font-size: 18px;
    counter-increment: leaderboard;
    padding: 18px 10px 18px 50px;
    cursor: pointer;
    backface-visibility: hidden;
    transform: translateZ(0) scale(1, 1);

    &::before {
      content: counter(leaderboard);
      position: absolute;
      z-index: 2;
      top: 15px;
      left: 15px;
      width: 20px;
      height: 20px;
      line-height: 20px;
      color: white;
      background: ${GeneralStyle.principalColor};
      border-radius: 20px;
      text-align: center;
    }

    mark {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 18px 10px 18px 50px;
      margin: 0;
      background: none;
      color: white;

      &::before,
      &::after {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: -11px;
        left: -9px;
        border-top: 10px solid #c24448;
        border-left: 10px solid transparent;
        transition: all 0.1s ease-in-out;
        opacity: 0;
      }

      &::after {
        left: auto;
        right: -9px;
        border-left: none;
        border-right: 10px solid transparent;
      }
    }

    small {
      position: relative;
      z-index: 2;
      display: block;
      text-align: right;
      color: white;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fa6855;
      box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);
      // transform: scaleX(1.06) scaleY(1.03);
      transition: all 0.3s ease-in-out;
      opacity: 0;
    }

    &:nth-child(1) {
      background: #bc3200;
      &::after {
        background: #cd4616;
      }
    }

    &:nth-child(2) {
      background: #cd4616;
      &::after {
        background: #e25d2c;
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);
      }

      & mark {
        &::before,
        &::after {
          border-top: 6px solid #ba4741;
          bottom: -7px;
        }
      }
    }

    &:nth-child(3) {
      background: #e25d2c;
      &::after {
        background: #e96e41;
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.11);
      }

      & mark {
        &::before,
        &::after {
          border-top: 2px solid #b0433f;
          bottom: -3px;
        }
      }
    }

    &:nth-child(4) {
      background: #e96e41;
      &::after {
        background: #f7906a;
        box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);
      }

      & mark {
        &::before,
        &::after {
          top: -7px;
          bottom: auto;
          border-top: none;
          border-bottom: 6px solid #a63d3d;
        }
      }
    }

    &:nth-child(5) {
      background: #f7906a;
      /* border-radius: 0 0 10px 10px; */
      &::after {
        background: #ffae90;
        box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);
        /* border-radius: 0 0 10px 10px; */
      }

      & mark {
        &::before,
        &::after {
          top: -9px;
          bottom: auto;
          border-top: none;
          /* border-bottom: 8px solid #993639; */
        }
      }
    }

    &:nth-child(6) {
      background: #ffae90;
      /* border-radius: 0 0 10px 10px; */
      &::after {
        background: #ffc8b3;
        box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);
        /* border-radius: 0 0 10px 10px; */
      }

      & mark {
        &::before,
        &::after {
          top: -9px;
          bottom: auto;
          border-top: none;
          /* border-bottom: 8px solid #993639; */
        }
      }
    }
  }
`;
