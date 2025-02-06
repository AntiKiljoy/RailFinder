import { useNavigate } from "react-router-dom";

//Consuelo
export default function DenmarkEventCard() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/DenmarkEventsPage");
  }

  return (
    <div className="post-card" onClick={handleClick}>
      <h2>Denmark</h2>
      <p>Explore all Danish hertiage options</p>
    </div>
  );
}
