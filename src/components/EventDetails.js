import React from "react";
import { useNavigate } from "react-router-dom";

function EventDetails({ event, availableTickets }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <h2>Event Details</h2>

      <p><b>Name:</b> {event.name}</p>
      <p><b>Department:</b> {event.department}</p>
      <p><b>Date:</b> {event.date}</p>
      <p><b>Time:</b> {event.time}</p>
      <p><b>Venue:</b> {event.venue}</p>
      <p><b>Price:</b> ₹{event.price}</p>

      {availableTickets > 0 ? (
        <>
          <p><b>Available Tickets:</b> {availableTickets}</p>

          {/* ✅ THIS BUTTON IS MISSING */}
          <button onClick={() => navigate("/booking")}>
            Book Tickets
          </button>
        </>
      ) : (
        <p className="sold-out">Sold Out ❌</p>
      )}
    </div>
  );
}

export default EventDetails;