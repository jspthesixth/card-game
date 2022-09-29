import { render, screen, fireEvent } from "@testing-library/react";
import { DrawButton } from "@/components/buttons/draw-button";

const onClick = jest.fn();

describe("testing button functionalities", () => {
  it("should show text content passed to it as a child", () => {
    render(
      <>
        <DrawButton loading={false} disabled={false} onClick={onClick}>
          Start new game
        </DrawButton>

        <DrawButton loading={false} disabled={false} onClick={onClick}>
          Draw card
        </DrawButton>
      </>
    );

    expect(screen.getByText(/Start new game/i)).toBeTruthy();
    expect(screen.getByText(/Draw card/i)).toBeTruthy();
  });

  it("should indicate the state of loading inside of it", () => {
    render(
      <DrawButton loading disabled={false} onClick={onClick}>
        Draw card
      </DrawButton>
    );

    expect(screen.getByText(/Loading/i)).toBeTruthy();
  });

  it("should be disabled and no actions should be dispatched", () => {
    render(
      <DrawButton loading={false} disabled onClick={onClick}>
        Draw card
      </DrawButton>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveAttribute("disabled");
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it("should fire onClick once when enabled", () => {
    render(
      <DrawButton loading={false} disabled={false} onClick={onClick}>
        Draw card
      </DrawButton>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
