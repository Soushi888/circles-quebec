import React from "react";
import style from "./RegisterForm.module.css";

/**
 * Nom et Prénom
 * Adresse e-mail
 * Téléphone
 * Nom de l'entreprise, organisme ou projet
 * Service offert
 * Durée
 * Coût
 */

const RegisterForm = () => {
  return (
    <form className={style.RegisterForm} action="/repertoire" method="POST">
      <div>
        <label htmlFor="name">Nom et prénom : </label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Adresse e-mail :</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="phone">Numéro de téléphone : </label>
        <input type="tel" name="phone" id="phone" />
      </div>
      <div>
        <label htmlFor="entreprise">
          Nom de l'entreprise, organisme ou projet :{" "}
        </label>
        <input type="text" name="entreprise" id="entreprise" />
      </div>
      <div>
        <label htmlFor="service">Service offert : </label>
        <input type="text" name="service" id="service" />
      </div>
      <div>
        <label htmlFor="duree">Durée : </label>
        <input type="text" name="duree" id="duree" />
      </div>
      <div>
        <label htmlFor="cout">Coût :</label>
        <span>
          <input type="number" name="cout" id="cout" /> circles
        </span>
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default RegisterForm;
