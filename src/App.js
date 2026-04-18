import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import EventDetails from "./components/EventDetails";
import BookingForm from "./components/BookingForm";
import BookingSummary from "./components/BookingSummary";

function App() {
  const [availableTickets, setAvailableTickets] = useState(50);
  const [bookingData, setBookingData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const event = {
    name: "Tech Fest 2026",
    department: "CSE",
    date: "22 April 2026",
    time: "10:00 AM",
    venue: "Convocation Hall",
    price: 100,
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleBooking = (data) => {
    if (data.tickets > availableTickets) {
      alert("Not enough tickets!");
      return;
    }

    setAvailableTickets(availableTickets - data.tickets);

    setBookingData({
      ...data,
      eventName: event.name,
      price: event.price,
    });
  };

  return (
    <div className="container">
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/event"
          element={
            isLoggedIn ? (
              <EventDetails
                event={event}
                availableTickets={availableTickets}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/booking"
          element={
            isLoggedIn ? (
              <BookingForm
                onBook={handleBooking}
                isSoldOut={availableTickets === 0}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
  path="/summary"
  element={
    isLoggedIn && bookingData ? (
      <BookingSummary booking={bookingData} />
    ) : (
      <Navigate to="/login" />
    )
  }
/>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );}
export default App;
