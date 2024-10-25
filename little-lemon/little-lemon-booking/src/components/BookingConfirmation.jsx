import React from "react";

const BookingConfirmation = ({ details }) => {
  return (
    <div className="confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
      <p>Guests: {details.guests}</p>
      <p>Date: {details.date}</p>
    </div>
  );
};

export default BookingConfirmation;
