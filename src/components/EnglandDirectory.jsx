//Connor
import React from "react";
import { useNavigate } from "react-router-dom";

export default function EnglandDirectory() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/vets");
  }

  return (
    <div className="post-card" onClick={handleClick}>
      <h2>England</h2>
      <p>Find all the hertiage railways and operators in England here</p>
    </div>
  );
}