import { render } from "@testing-library/react";
import { CardHolder } from "@/components/cards/card-holder";

it("should render the card holder element", () => {
  const { container } = render(<CardHolder>Test</CardHolder>);

  expect(container.getElementsByClassName("card-holder").length).toBe(1);
});
