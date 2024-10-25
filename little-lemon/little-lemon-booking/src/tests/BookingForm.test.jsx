import { render, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders form inputs and handles submission", () => {
  const mockOnSubmit = jest.fn();
  const { getByLabelText, getByText } = render(<BookingForm onBookingSuccess={mockOnSubmit} />);

  fireEvent.change(getByLabelText(/Name/i), { target: { value: "John Doe" } });
  fireEvent.change(getByLabelText(/Email/i), { target: { value: "john@example.com" } });
  fireEvent.change(getByLabelText(/Guests/i), { target: { value: "2" } });
  fireEvent.change(getByLabelText(/Date/i), { target: { value: "2024-10-31" } });

  fireEvent.click(getByText(/Book Table/i));

  expect(mockOnSubmit).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john@example.com",
    guests: "2",
    date: "2024-10-31",
  });
});
