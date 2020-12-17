import React from "react";
import style from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <div className={style.header}>
      <h1>{children}</h1>
    </div>
  );
};

export default Header;
