// Bad Naming, this is the England Card Component on the Directory Page
import React from "react";
import { useNavigate } from "react-router-dom";

export default function EnglandDirectory() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/EnglandOverview");
  }

  return (
    <div className="post-card" onClick={handleClick}>
      <h2>England</h2>
      <p>Find all the hertiage railways and operators in England here</p>
    </div>
  );
}