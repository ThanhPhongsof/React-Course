import { useState } from "react";

export default useToogle = () => {
  const [value, setValue] = useState();
  const handleToggle = () => {
    setValue((value) => !value);
  };

  return {
    value,
    handleToggle,
  };
};
