import React, {useState} from "react";
import EventDetails from "./components/EventDetails";
import BookingForm from "./components/BookingForm";
import BookingSummary from "./components/BookingSummary";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [availableTickets, setAvailableTickets] = useState(50);
  const [bookingData, setBookingData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
  setIsLoggedIn(true);
};
  const event = {
    name: "Tech Fest 2026",
    department: "CSE",
    date: "22 April 2026",
    time: "10:00 AM",
    venue: "Main Auditorium",
    price: 100,
  };
  const handleBooking = (data) => {
    if (data.tickets > availableTickets){
      alert("Not enough tickets available");
      return;
    }
    setAvailableTickets(availableTickets - data.tickets);
    setBookingData({
  ...data,
  eventName: event.name,
  price: event.price
});
  };
  return (
  <div className="container">
    {!isLoggedIn ? (
      <Login onLogin={handleLogin} />
    ) : (
      <>
        <h1>Ticket Booking System</h1>

        <EventDetails event={event} availableTickets={availableTickets} />

        <BookingForm
          onBook={handleBooking}
          isSoldOut={availableTickets === 0}
        />

        {bookingData && <BookingSummary booking={bookingData} />}
      </>
    )}
  </div>
);
}
export default App;
