import React from "react";

function BookingSummary({ booking }) {
  if (!booking) return null;

  return (
    <div className="card success">
      <h2>Booking Confirmed</h2>
      <p>Name: {booking.name}</p>
      <p>Event: {booking.eventName}</p>
      <p>Tickets: {booking.tickets}</p>
      <p>Total Amount: ₹{booking.tickets * booking.price}</p>
    </div>
  );
}

export default BookingSummary;