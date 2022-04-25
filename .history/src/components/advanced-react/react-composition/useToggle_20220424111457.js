import { useState } from "react";

export default function useToogle() {
  const [value, setValue] = useState();
  const handleToggle = () => {
    setValue((value) => !value);
  };

  return {
    value,
    handleToggle,
  };
}
