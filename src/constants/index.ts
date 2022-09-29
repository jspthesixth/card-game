import placeholderImage from "@/assets/images/placeholder.jpg";
import loadingImage from "@/assets/images/spinner.gif";

export const NUMBER_OF_CARDS_IN_DECK = 52;
export const NUMBER_OF_SAME_VALUES_IN_DECK = 4;
export const NUMBER_OF_SAME_SUITS_IN_DECK = 13;

export const INITIAL_DECK_STATE = {
  loading: false,
  error: null,
  cards: [],
  drawnCards: [],
  deck_id: "",
  remaining: 0,
  success: false,
  snapType: "",
  snapSuitMatches: 0,
  snapValueMatches: 0,
};

export const PLACEHOLDER_SRC = placeholderImage;
export const PLACEHOLDER_ALT = "Placeholder";
export const LOADING_IMAGE_SRC = loadingImage;
export const LOADING_IMAGE_ALT = "Loading";

export enum EDeckStateLitteral {
  suit = "snapSuitMatches",
  value = "snapValueMatches",
}
