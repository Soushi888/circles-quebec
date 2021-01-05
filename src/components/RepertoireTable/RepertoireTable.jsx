import React, { useState } from "react";
import style from "./RepertoireTable.module.css";
import ReactModal from "react-modal";
import JSONdata from "../../data/repertoire.json";

const RepertoireTable = () => {
  const data = Object.values(JSONdata);

  // Modal setup
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
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
            <React.Fragment key={i}>
              <tr>
                <td>{i + 1}</td>
                <td className={style.RepertoireTable__link} onClick={openModal}>
                  {d.entreprise}
                </td>
                <td>{d.service}</td>
                <td>{d.duree}</td>
                <td>{d.cout} circles</td>
              </tr>

              <ReactModal
                className={style.Modal}
                overlayClassName={style.Modal__overlay}
                isOpen={showModal}
                onRequestClose={closeModal}
              >
                <h2>{d.entreprise}</h2>
                <p>{d.service}</p>
                <button onClick={closeModal}>Close</button>
              </ReactModal>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <p>
        <em>* Ou organisme ou projet</em>
      </p>
    </div>
  );
};

export default RepertoireTable;
