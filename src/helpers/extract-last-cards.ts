import { TCard } from "@/types";

export const extractLastCards = (cards: TCard[]): (TCard | undefined)[] => {
  const penultimateCard = cards.at(-2);
  const lastCard = cards.at(-1);

  return [penultimateCard, lastCard];
};
