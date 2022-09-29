import { useReducer } from "react";
import { getSnapType } from "@/helpers/get-snap-type";
import { INITIAL_DECK_STATE, EDeckStateLitteral } from "@/constants";
import { TDeckState, TCard } from "@/types";

export const useDeckState = () => {
  const [deckState, setDeckState] = useReducer(
    (state: TDeckState, newState: Partial<TDeckState>) => ({
      ...state,
      ...newState,
    }),
    INITIAL_DECK_STATE
  );

  const toggleDeckStateLoading = () => {
    setDeckState({ loading: !deckState.loading });
  };

  const setNewDeckStateData = (data: TDeckState) => {
    const cardsReplica = [...data.cards];
    const drawnCard = cardsReplica.shift() as TCard;
    setDeckState({
      remaining: 51,
      success: true,
      cards: [...cardsReplica],
      drawnCards: [drawnCard],
      loading: false,
      error: null,
    });
  };

  const drawCard = () => {
    const cardsReplica = [...deckState.cards];
    const drawnCard = cardsReplica.shift() as TCard;
    const populatedDrawnCards = [...deckState.drawnCards, drawnCard];
    const snapType =
      deckState.drawnCards.length >= 2 ? getSnapType(populatedDrawnCards) : "";
    const snapLitteral = snapType && EDeckStateLitteral[snapType];

    setDeckState({
      cards: cardsReplica,
      drawnCards: populatedDrawnCards,
      remaining: cardsReplica.length,
      snapType,
      ...(snapLitteral ? { [snapLitteral]: deckState[snapLitteral] + 1 } : {}),
    });
  };

  const setDeckStateError = (error: string | null) => {
    setDeckState({ ...INITIAL_DECK_STATE, error });
  };

  return {
    deckState,
    setNewDeckStateData,
    drawCard,
    setDeckStateError,
    toggleDeckStateLoading,
  };
};
