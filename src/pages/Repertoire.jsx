import React, { useState } from "react";
import Header from "../components/Header/Header";
import RepertoireTable from "../components/RepertoireTable/RepertoireTable";
import Modal from "../components/Modal/Modal";

export default function Repertoire() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <main>
      <Header>Repertoire des entreprises</Header>
      <button onClick={openModal}>Ouvrir Modal</button>
      <RepertoireTable />
      <Modal header="lorem ipsum" showModal={showModal} closeModal={closeModal}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
        voluptas? Officia quas harum dolorum cum laudantium nulla. Velit dolor
        assumenda impedit doloribus minima, veniam quam ullam harum maiores
        repellat ad?
      </Modal>
    </main>
  );
}
