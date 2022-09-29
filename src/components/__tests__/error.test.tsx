import { render, screen } from "@testing-library/react";
import { ErrorAlert } from "@/components/alerts/error";

it("should display the error message", () => {
  const errorMessage = "API ERROR";

  render(<ErrorAlert message={errorMessage} />);

  expect(screen.getByText(/API ERROR/i)).toBeTruthy();
});
