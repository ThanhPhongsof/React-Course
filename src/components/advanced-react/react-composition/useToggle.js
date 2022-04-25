import { useState } from "react";

export default function useToogle() {
  const [value, setValue] = useState(false);
  const handleToggle = () => {
    setValue((value) => !value);
  };

  return {
    value,
    handleToggle,
  };
}
