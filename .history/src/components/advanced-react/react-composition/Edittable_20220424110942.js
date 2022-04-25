import React, { useState } from "react";

const Edittable = () => {
  const [edit, setEdit] = useState(false);
  const handleToggleEdit = () => {
    setEdit((edit) => !edit);
  };
  return (
    <div>
      {edit && <input type="text" className="border" />}
      <button onClick={handleToggleEdit}>Open Edit</button>
    </div>
  );
};

export default Edittable;
