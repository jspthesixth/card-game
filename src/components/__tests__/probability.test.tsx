import { render, screen } from "@testing-library/react";
import { ProbabilityAlert } from "@/components/alerts/probability";
import { TCard } from "@/types";

it("should display the right probability of matching suit or value of a new card with the current", () => {
  const cards = [{ suit: "HEARTS", value: "KING" }];
  const suit = "HEARTS";
  const value = "KING";

  render(
    <ProbabilityAlert cards={cards as TCard[]} suit={suit} value={value} />
  );

  /* Expect the probability of the next card having the same suit to be 23.53% if the first card is a King of Hearts
   Left cards in the deck: 51, left cards with the same suit: 12, left cards with the same value: 3
   There is a 12/51 chance of the next card being a Heart, and a 3/51 chance of the next card being a King
  */

  expect(
    screen.getByText(/Probability of next card having the same suit: 23.53%/i)
  ).toBeTruthy();
  expect(
    screen.getByText(/Probability of next card having the same value: 5.88%/i)
  ).toBeTruthy();
});
