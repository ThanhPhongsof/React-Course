import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const createPortalWrapper = () => {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
};

const portalWrapperElm = createPortalWrapper();
const Portal = ({
  containerClassname = "",
  bodyClassname = "",
  containerStyle = {},
  bodyStyle = {},
  onClose = () => {},
  visible = false,
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = (
    <div
      className={`fixed inset-0 z-[9999] ${containerClassname}`}
      style={{ containerStyle }}
    >
      <div
        className="absolute inset-0 bg-black overlay bg-opacity-20"
        onClick={onClose}
      ></div>
      <div
        className={`relative z-10 content ${bodyClassname}`}
        style={{ bodyStyle }}
      >
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};

Portal.propTypes = {
  containerClassname: PropTypes.string,
  bodyClassname: PropTypes.string,
  containerStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

export default Portal;
