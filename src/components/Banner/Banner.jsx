import React from "react";
import { ReactComponent as Logo } from "../../logo.svg";
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={style.banner}>
      <Logo />
      <h1>Circle Québec</h1>
    </div>
  );
};

export default Banner;
