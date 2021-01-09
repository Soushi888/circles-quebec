import React, { useState } from "react";
import style from "./RepertoireTable.module.css";
import ReactModal from "react-modal";
import JSONdata from "../../data/repertoire.json";

const RepertoireTable = () => {
  const data = Object.values(JSONdata);

  // Modal Data
  const [enterpriseId, setEnterpriseId] = useState(0);
  const entrepriseData = data[enterpriseId];

  console.log(entrepriseData.entreprise);

  // Modal setup
  const [showModal, setShowModal] = useState(false);
  const openModal = (evt) => {
    const trId = evt.target.parentNode.id;
    setEnterpriseId(trId);
    setShowModal(true);
  };
  const closeModal = () => setShowModal(false);
  ReactModal.setAppElement(document.querySelector("#root"));

  return (
    <div className={style.RepertoireTable}>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Entreprise*</th>
            <th>Service offert</th>
            <th>Durée</th>
            <th>Coût</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i} id={i}>
              <td>{i + 1}</td>
              <td
                className={style.RepertoireTable__link}
                onClick={(evt) => openModal(evt)}
              >
                {d.entreprise}
              </td>
              <td>{d.service}</td>
              <td>{d.duree}</td>
              <td>{d.cout} circles</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        <em>* Ou organisme ou projet</em>
      </p>

      <ReactModal
        className={style.Modal}
        overlayClassName={style.Modal__overlay}
        isOpen={showModal}
        onRequestClose={closeModal}
      >
        <div className={style.Modal__content}>
          <h2>{entrepriseData.entreprise}</h2>
          <p>Nom du contact : {entrepriseData.name}</p>
          <p>
            email :{" "}
            <a href={`mailto:${entrepriseData.email}`}>
              {entrepriseData.email}
            </a>
          </p>
          <p>Téléphone : {entrepriseData.phone}</p>
          <p>Service offert : {entrepriseData.service}</p>
          <p>durée : {entrepriseData.duree}</p>
          <p>coût : {entrepriseData.cout} Circles</p>
        </div>
        <span onClick={closeModal} className={style["close-button"]}>
          X
        </span>
      </ReactModal>
    </div>
  );
};

export default RepertoireTable;
