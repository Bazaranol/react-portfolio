import React from "react";
import "./modal.css";

export function Modal(props) {
  return (
    <div className={`modal ${props.show ? "active" : ""}`}>
      <div className="modal_content">{props.children}</div>
    </div>
  );
}

export const ModalHeader = (props) => {
  return <div className="modal_header">{props.children}</div>;
};
export const ModalBody = (props) => {
  return <div className="modal_body">{props.children}</div>;
};
export const ModalFooter = (props) => {
  return <div className="modal_footer">{props.children}</div>;
};
