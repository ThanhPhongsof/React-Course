import React from "react";
import { CSSTransition } from "react-transition-group";
import Portal from "../portal/Portal";

const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
  return (
    <>
      <CSSTransition in={visible} unmountOnExit timeout={250} classNames="zoom">
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassname="flex items-center justify-center"
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
