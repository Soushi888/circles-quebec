import React from "react";
import style from "./RepertoireTable.module.css";
import JSONdata from "../../data/repertoire.json";

const RepertoireTable = () => {
  const data = Object.values(JSONdata);

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
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{d.entreprise}</td>
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
    </div>
  );
};

export default RepertoireTable;
