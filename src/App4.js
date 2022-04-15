import React, { useState } from "react";
import ModalAdvance from "./components/modal/ModalAdvance";
// import Modal from "./components/modal/Modal";
import ModalBase from "./components/modal/ModalBase";
import TooltipAdvanced from "./components/tooltip/TooltipAdvanced";
// import Portal from "./components/portal/Portal";

const App = () => {
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex items-center justify-center h-screen p-5">
      {/* <Modal open={true} handleClose={() => {}}></Modal> */}
      {/* <Portal visible={false}></Portal> */}
      <button
        className="p-5 text-center text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModalBase(true)}
      >
        Open Modal Base
      </button>
      <button
        className="p-5 ml-5 text-center text-white bg-blue-400 rounded-lg"
        onClick={() => setOpenModal(true)}
      >
        Open Modal
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="p-10 bg-white rounded-lg w-full max-w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga non
          dolorum temporibus, corrupti ipsam in. Soluta quas expedita in velit
          facilis! Eum itaque delectus quos ex praesentium, laudantium
          aspernatur facilis!
        </div>
      </ModalBase>
      <ModalAdvance
        visible={openModal}
        onClose={() => setOpenModal(false)}
        bodyClassName="w-full max-w-[400px] bg-white p-10 rounded-lg"
      >
        <div className="modal-content bg-white relative z-10 p-10 rounded-lg w-full max-w-[482px] h-full max-h-[610px]">
          <span
            className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4"
            onClick={() => setOpenModal(false)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
                fill="#84878B"
              />
            </svg>
          </span>
          <h2 className="mb-5 text-4xl font-medium text-center text-back">
            Welcome Back!
          </h2>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="email" className="text-sm">
              Email address
            </label>
            <input
              type="text"
              className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <input
              type="password"
              className="w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4"
              placeholder="Enter your password"
            />
          </div>
          <button className="w-full p-4 font-semibold text-base text-white bg-[#316BFF] rounded-lg">
            Sign In
          </button>
        </div>
      </ModalAdvance>
      <div className="inline-block ml-5">
        <TooltipAdvanced title="Tooltip">This is a tooltip</TooltipAdvanced>
      </div>
    </div>
  );
};

export default App;
