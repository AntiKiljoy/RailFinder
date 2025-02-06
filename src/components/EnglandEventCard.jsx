//Connor
import React from "react";
import { useNavigate } from "react-router-dom";

export default function EnglandEventCard() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/vets");
  }

  return (
    <div className="post-card" onClick={handleClick}>
      <h2>England</h2>
      <p>Explore upcoming events in England</p>
    </div>
  );
}
