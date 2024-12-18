import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EnglandOverview.css";

export default function EnglandOverview() {
  const [England, setEngland] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEngland() {
      const url = "https://railfinder-app-default-rtdb.europe-west1.firebasedatabase.app/railways/England.json";
      try {
        console.log("Fetching data from:", url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        const EnglandArray = data ? Object.keys(data).map((key) => ({ id: key, ...data[key] })) : [];
        setEngland(EnglandArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    getEngland();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="England-page">
      <h1>Heritage Operations in England</h1>
      <div className="England-list">
        {England.length > 0 ? (
          England.map((England) => (
            <div key={England.id} className="England-card">
              <h2>{England.name}</h2>
              <p className="England-description">{England.description}</p>
              <div className="England-details">
                <p className="England-location">Location: {England.location}</p>
                <p className="England-status">Status: {England.status}</p>
                <p className="England-tractionType">Traction Type: {England.tractionType}</p>
              </div>
              <Link to={`/England/${England.id}`} className="England-details-link">
                More Details
              </Link>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
