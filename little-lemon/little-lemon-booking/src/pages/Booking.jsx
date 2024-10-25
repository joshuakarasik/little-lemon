import React, { useState } from "react";
import BookingForm from "../components/BookingForm";
import BookingConfirmation from "../components/BookingConfirmation";

const Booking = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  return (
    <div className="booking-page">
      {!bookingDetails ? (
        <BookingForm onBookingSuccess={setBookingDetails} />
      ) : (
        <BookingConfirmation details={bookingDetails} />
      )}
    </div>
  );
};

export default Booking;
