import React from "react";
import Header from "../components/Header/Header";
import RepertoireTable from "../components/RepertoireTable/RepertoireTable";

export default function Repertoire() {
  return (
    <main>
      <Header>Repertoire des entreprises</Header>
      <RepertoireTable />
    </main>
  );
}
