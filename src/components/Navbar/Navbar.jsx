import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../logo.svg";
import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <Link to="/">
        <Logo className={style.navbar__logo} />
      </Link>

      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/register">Formulaire</Link>
        </li>
        <li>
          <Link to="/repertoire">Repertoire</Link>
        </li>
      </ul>

      <div></div>
    </nav>
  );
}
