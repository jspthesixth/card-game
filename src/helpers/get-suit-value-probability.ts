import {
  NUMBER_OF_CARDS_IN_DECK,
  NUMBER_OF_SAME_SUITS_IN_DECK,
  NUMBER_OF_SAME_VALUES_IN_DECK,
} from "@/constants";
import { TCard, TSuit, TValue } from "@/types";

export const getSuitAndValueProbability = (
  cards: TCard[],
  suit: TSuit | undefined,
  value: TValue | undefined
) => {
  const cardsWithSameSuit = cards.filter((card) => card.suit === suit);
  const cardsWithSameValue = cards.filter((card) => card.value === value);
  const remainingCardsWithSameSuit =
    NUMBER_OF_SAME_SUITS_IN_DECK - cardsWithSameSuit.length;
  const remainingCardsWithSameValue =
    NUMBER_OF_SAME_VALUES_IN_DECK - cardsWithSameValue.length;
  const remainingCards = NUMBER_OF_CARDS_IN_DECK - cards.length;

  return {
    withSameSuit: (remainingCardsWithSameSuit / remainingCards) * 100,
    withSameValue: (remainingCardsWithSameValue / remainingCards) * 100,
  };
};
