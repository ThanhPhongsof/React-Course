import React, { useState } from "react";

const Edittable = () => {
  const [edit, setEdit] = useState(false);
  const handleToggleEdit = () => {
    setEdit((edit) => !edit);
  };
  return (
    <div>
      {edit && <input />}
      <button>Open Edit</button>
    </div>
  );
};

export default Edittable;
