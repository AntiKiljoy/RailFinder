import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./DenmarkOverview.css";

export default function DenmarkOverview() {
  const [Denmark, setDenmark] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getDenmark() {
      const url = "https://railfinder-app-default-rtdb.europe-west1.firebasedatabase.app/railways/Denmark.json";
      try {
        console.log("Fetching data from:", url);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        const DenmarkArray = data ? Object.keys(data).map((key) => ({ id: key, ...data[key] })) : [];
        setDenmark(DenmarkArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    getDenmark();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Denmark-page">
      <h1>Heritage Operations in Denmark</h1>
      <div className="Denmark-list">
        {Denmark.length > 0 ? (
          Denmark.map((Denmark) => (
            <div key={Denmark.id} className="Denmark-card">
              <h2>{Denmark.name}</h2>
              <p className="Denmark-description">{Denmark.description}</p>
              <div className="Denmark-details">
                <p className="Denmark-location">Location: {Denmark.location}</p>
                <p className="Denmark-status">Status: {Denmark.status}</p>
                <p className="Denmark-tractionType">Traction Type: {Denmark.tractionType}</p>
              </div>
              <Link to={`/Denmark/${Denmark.id}`} className="Denmark-details-link">
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
