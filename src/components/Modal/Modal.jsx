import React from "react";
import style from "./Modal.module.css";

const Modal = ({ header, children, showModal, closeModal }) => {
  return (
    <div className={showModal ? style.Modal : style.hide}>
      <button onClick={closeModal}>X</button>
      <h2>{header}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
