import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./DenmarkEventsPage.css";

export default function DenmarkEventsPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchDenmarkEvents() {
      const eventsUrl =
        "https://railfinder-app-default-rtdb.europe-west1.firebasedatabase.app/events.json";
      const railwayUrl =
        "https://railfinder-app-default-rtdb.europe-west1.firebasedatabase.app/railways.json";

      try {
        const [eventsResponse, railwayResponse] = await Promise.all([
          fetch(eventsUrl),
          fetch(railwayUrl),
        ]);

        if (!eventsResponse.ok || !railwayResponse.ok) {
          throw new Error("Failed to fetch data.");
        }

        const eventsData = await eventsResponse.json();
        const railwayData = await railwayResponse.json();

        console.log("Fetched Events:", eventsData);
        console.log("Fetched Railways:", railwayData);

        if (eventsData && railwayData && railwayData.Denmark) {
          // Get all event IDs related to Denmark railways
          const denmarkEventIds = Object.values(railwayData.Denmark).flatMap(
            (railway) => railway.events
          );

          // Filter events to only include Denmark events
          const filteredEvents = Object.keys(eventsData)
            .filter((eventId) => denmarkEventIds.includes(eventId))
            .map((eventId) => ({
              id: eventId,
              title: eventsData[eventId].title || "No title",
              date: eventsData[eventId].date || "No date",
              description: eventsData[eventId].description || "No description",
              railwayId: eventsData[eventId].railwayId || "N/A",
            }));

          setEvents(filteredEvents);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.error("Error fetching Denmark events:", error);
      }
    }

    fetchDenmarkEvents();
  }, []);

  return (
    <div className="denmark-events-page">
      <div className="header">
        <h1>Denmark Heritage Runnings</h1>
      </div>
      {events.length === 0 ? (
        <p>Loading events or no events available.</p>
      ) : (
        <div className="denmark-events-list">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <h2>{event.title}</h2>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>{event.description}</p>
              <Link to={`/events/${event.id}`} className="event-details-link">
                More Details
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Want to Learn More?</h2>
        <p>Discover more about Denmark's rich railway history and events.</p>
        <Link to="/about" className="cta-button">
          Learn More
        </Link>
      </div>
    </div>
  );
}
