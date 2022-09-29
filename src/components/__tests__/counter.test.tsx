import { render, screen } from "@testing-library/react";
import { CounterAlert } from "@/components/alerts/counter";

it("should display the right amount of remaining cards", () => {
  const remainingCards = 10;

  render(<CounterAlert remainingCards={remainingCards} />);

  expect(screen.getByText(/10 cards remaining/i)).toBeTruthy();
});
