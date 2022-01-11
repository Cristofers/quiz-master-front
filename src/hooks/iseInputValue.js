import { useState } from "react";

export const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  const setForceValue = (nValue) => setValue(nValue);

  return { value, onChange, setForceValue };
};
