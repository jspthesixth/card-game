import { extractLastCards } from "@/helpers/extract-last-cards";
import { TCard } from "@/types";

export const getSnapType = (cards: TCard[]) => {
  const [penultimateCard, lastCard] = extractLastCards(cards);
  if (penultimateCard?.value === lastCard?.value) {
    return "value";
  }

  if (penultimateCard?.suit === lastCard?.suit) {
    return "suit";
  }

  return "";
};
