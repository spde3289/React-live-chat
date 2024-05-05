import { useState, ChangeEvent } from "react";

export const useTextArea = () => {
  const [value, setValue] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    setValue(e.target.value);
  }

  return { value, handleChange };
};
