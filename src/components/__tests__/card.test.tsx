import { render, screen } from "@testing-library/react";
import { Card } from "@/components/cards/card";

it("should render the placeholder image", () => {
  render(<Card loading={false} imageAlt="" imageSrc="" />);

  expect(screen.getByAltText(/Placeholder/i)).toBeTruthy();
});

it("should render the loading image", () => {
  render(<Card loading imageAlt="" imageSrc="" />);
  expect(screen.getByAltText(/Loading/i)).toBeTruthy();
});

it("should render the card image", () => {
  render(<Card loading={false} imageAlt="CARDALT" imageSrc="CARDSRC" />);

  expect(screen.getAllByAltText(/CARDALT/i)).toBeTruthy();
});
