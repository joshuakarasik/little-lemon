import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ onBookingSuccess }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      guests: "",
      date: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      guests: Yup.number().min(1, "At least 1 guest").required("Guests are required"),
      date: Yup.date().required("Date is required"),
    }),
    onSubmit: (values) => {
      onBookingSuccess(values); // Pass data to parent
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      {formik.errors.name ? <div>{formik.errors.name}</div> : null}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="guests">Guests</label>
      <input
        id="guests"
        name="guests"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.guests}
      />
      {formik.errors.guests ? <div>{formik.errors.guests}</div> : null}

      <label htmlFor="date">Date</label>
      <input
        id="date"
        name="date"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.date}
      />
      {formik.errors.date ? <div>{formik.errors.date}</div> : null}

      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
