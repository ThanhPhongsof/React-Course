import React, { useState } from "react";
import useHover from "../../hooks/useHover";
import ReactDOM from "react-dom";

// 1. Tạo component có tên là Tooltip
// 2. Component có props children,  props text
// 3. Áp dụng portal để khi rê chuột vào text thì sẽ hiện thị tooltip content ở phía trên và chính giữa đoạn text
// 4. Dùng kiển thức đã học ở video trước sử dụng getBoundingClientRect()

const Tooltip = ({ children, text }) => {
  const { hoverd, nodeRef } = useHover();
  const [coords, setCoords] = useState({});
  const handleHover = (e) => {
    setCoords(e.target.getBoundingClientRect());
  };
  return (
    <div>
      {hoverd && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span className="font-semibold" ref={nodeRef} onMouseOver={handleHover}>
        {text}
      </span>
    </div>
  );
};

const TooltipContent = ({ children, coords }) => {
  return ReactDOM.createPortal(
    <p
      className="absolute inline-block p-3 text-white -translate-y-full bg-black rounded-xl max-w-[200px] -translate-x-2/4"
      style={{
        top: coords.top - coords.height / 2,
        left: coords.left + coords.width / 2,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
};

export default Tooltip;
