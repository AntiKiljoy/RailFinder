import React from "react";
import EnglandDirectory from "../../components/EnglandDirectory";
import DenmarkDirectory from "../../components/DenmarkDirectory";
import "./DirectoryPage.css";

const DirectoryPage = () => {
  return (
    <section className="page" id="info-page">
      <h1>Explore European Railways!</h1>
      <DenmarkDirectory />
      <EnglandDirectory />
    </section>
  );
};

export default DirectoryPage;
