import { render, screen } from "@testing-library/react";
import { SnapAlert } from "@/components/alerts/snap";

it("should display correct snap type message", () => {
  render(
    <>
      <SnapAlert type="value" />
      <SnapAlert type="suit" />
    </>
  );

  expect(screen.getByText(/snap suit!/i)).toBeTruthy();
  expect(screen.getByText(/snap value!/i)).toBeTruthy();
});
