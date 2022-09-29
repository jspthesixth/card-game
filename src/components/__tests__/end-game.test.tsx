import { render, screen } from "@testing-library/react";
import { EndGameAlert } from "@/components/alerts/end-game";

it("should display the right amount of suit and value matches", () => {
  const suitMatches = 10;
  const valueMatches = 2;

  render(
    <EndGameAlert suitMatches={suitMatches} valueMatches={valueMatches} />
  );

  expect(screen.getByText(/Suit matches: 10/i)).toBeTruthy();
  expect(screen.getByText(/Value matches: 2/i)).toBeTruthy();
});
