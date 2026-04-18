import React, {useState} from "react";
import EventDetails from "./components/EventDetails";
import BookingForm from "./components/BookingForm";
import BookingSummary from "./components/BookingSummary";
import "./App.css";

function App() {
  const [availableTickets, setAvailableTickets] = useState(50);
  const [bookingData, setBookingData] = useState(null);

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
    <div className = "container">
      <h1>Ticket Booking System</h1>
      <EventDetails event = {event} availableTickets = {availableTickets}/>
      {/* <BookingForm onBook = {handleBooking} 
      isSoldOut = {availableTickets === 0}
      />
      {bookingData && <BookingSummary booking = {bookingData} />} */}
    </div>
  );
}
export default App;
