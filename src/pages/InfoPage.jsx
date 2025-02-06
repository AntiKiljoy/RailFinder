import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import DenmarkEventCard from "../components/DenmarkEventCard";
import EnglandEventCard from "../components/EnglandEventCard";
import { auth } from "../firebase-config";

const InfoPage = () => {
  return (
    <section className="page" id="info-page">
      <h1>Useful Information</h1>
      <EnglandEventCard />
      <DenmarkEventCard />
      {/* Include the FeedbackForm component */}
      <FeedbackForm />
    </section>
  );
};

export default InfoPage;
