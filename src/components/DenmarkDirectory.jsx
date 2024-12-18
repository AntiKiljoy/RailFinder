import { useNavigate } from "react-router-dom";

export default function DenmarkDirectory() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/DenmarkOverview");
  }

  return (
    <div className="post-card" onClick={handleClick}>
      <h2>Denmark</h2>
      <p>
        Find all the hertiage railways and operators in Denmark!
      </p>
    </div>
  );
}