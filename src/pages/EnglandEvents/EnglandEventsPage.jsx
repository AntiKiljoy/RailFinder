import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./EnglandEventsPage.css";

export default function EnglandEventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchEnglandEvents() {
      const eventsUrl =
        "https://railfinder-app-default-rtdb.europe-west1.firebasedatabase.app/events.json";
      const railwayUrl =
        "https://railfinder-app-default-rtdb.europe-west1.firebasedatabase.app/railways.json";

      try {
        // Fetch events & railways in parallel
        const [eventsResponse, railwayResponse] = await Promise.all([
          fetch(eventsUrl),
          fetch(railwayUrl),
        ]);

        if (!eventsResponse.ok || !railwayResponse.ok) {
          throw new Error(`HTTP error!`);
        }

        const eventsData = await eventsResponse.json();
        const railwayData = await railwayResponse.json();

        console.log("Fetched Events:", eventsData);
        console.log("Fetched Railways:", railwayData);

        if (eventsData && railwayData && railwayData.England) {
          // Create a lookup object for railway names by ID
          const railwayMap = {};
          railwayData.England.forEach((railway) => {
            railway.events.forEach((eventId) => {
              railwayMap[eventId] = railway.name;
            });
          });

          // Filter and map England events with correct railway names
          const filteredEvents = Object.keys(eventsData)
            .filter((eventId) => railwayMap[eventId]) // Only include England events
            .map((eventId) => ({
              id: eventId,
              title: eventsData[eventId].title || "No title",
              date: eventsData[eventId].date || "No date",
              description: eventsData[eventId].description || "No description",
              railwayName: railwayMap[eventId] || "Unknown Railway",
            }));

          setEvents(filteredEvents);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.error("Error fetching England events:", error);
      }
    }

    fetchEnglandEvents();
  }, []);

  return (
    <div className="england-events-page">
      <h1>England Heritage Runnings</h1>
      {events.length === 0 ? (
        <p>Loading events or no events available.</p>
      ) : (
        <div className="england-events-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h2>{event.title}</h2>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Railway:</strong> {event.railwayName}
              </p>
              <p>{event.description}</p>
              <Link to={`/events/${event.id}`} className="event-details-link">
                More Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
