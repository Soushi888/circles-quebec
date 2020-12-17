import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link><br/>
        <Link to="/register">Formulaire</Link><br/>
        <Link to="/repertoire">Repertoire</Link>
      </nav>
    </header>
  );
}
