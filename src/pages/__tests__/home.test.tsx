import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import { HomePage } from "@/pages/home";
import { deck } from "@/constants/deck";
import axios from "axios";

const data = {
  data: {
    deck_id: "3s7cdcwhtx9h",
    remaining: 0,
    success: true,
    cards: deck,
  },
};

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

it("should render the home page component correctly", () => {
  render(<HomePage />);

  expect(screen.queryByText(/Snap suit/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Snap value/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/remaining/i)).not.toBeInTheDocument();
  expect(
    screen.queryByText(/Probability of next card having/i)
  ).not.toBeInTheDocument();
  expect(screen.getByText(/Start new game/i)).toBeTruthy();
  expect(screen.getAllByAltText(/Placeholder/i).length).toBe(2);
});

it("should act correctly after first button click", async () => {
  render(<HomePage />);

  const button = screen.getByText(/start new game/i);
  mockedAxios.get.mockReturnValue(Promise.resolve(data));

  act(() => {
    fireEvent.click(button);
  });

  expect(mockedAxios.get).toHaveBeenCalledTimes(1);

  await waitFor(() =>
    expect(
      screen.getAllByText(/Probability of next card having the same/i).length
    ).toBe(2)
  );

  const remainingCards = await screen.findByText(/51 cards/i);
  expect(remainingCards).toBeTruthy();
});

it("should act correctly at the end of the game", async () => {
  render(<HomePage />);

  const button = screen.getByRole("button");
  mockedAxios.get.mockReturnValue(Promise.resolve(data));

  act(() => {
    fireEvent.click(button);
  });

  await waitFor(() =>
    expect(
      screen.getAllByText(/Probability of next card having the same/i).length
    ).toBe(2)
  );

  await waitFor(() => expect(screen.getByText(/Draw card/i)).toBeTruthy());

  for (let i = 0; i <= 51; i++) {
    act(() => {
      fireEvent.click(button);
    });
  }

  await waitFor(() => expect(screen.getByText(/Value matches/i)).toBeTruthy());
  await waitFor(() => expect(screen.getByText(/Suit matches/i)).toBeTruthy());
  await waitFor(() =>
    expect(screen.queryByText(/Draw card/i)).not.toBeInTheDocument()
  );
});
