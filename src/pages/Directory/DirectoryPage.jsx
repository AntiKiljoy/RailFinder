import React from "react";
import EnglandDirectory from "../../components/EnglandDirectory";
import DenmarkDirectory from "../../components/DenmarkDirectory";
import "./DirectoryPage.css";

const DirectoryPage = () => {
  return (
    <section className="page" id="info-page">
      <h1 tabIndex="0">Explore European Railways!</h1>
      <div tabIndex="0">
        {" "}
        <DenmarkDirectory />{" "}
      </div>
      <section tabIndex="0">
        <EnglandDirectory />{" "}
      </section>
    </section>
  );
};

export default DirectoryPage;
