import { useMemo, useCallback } from "react";
import { SnapAlert } from "@/components/alerts/snap";
import { ErrorAlert } from "@/components/alerts/error";
import { CounterAlert } from "@/components/alerts/counter";
import { ProbabilityAlert } from "@/components/alerts/probability";
import { EndGameAlert } from "@/components/alerts/end-game";
import { CardHolder } from "@/components/cards/card-holder";
import { Card } from "@/components/cards/card";
import { DrawButton } from "@/components/buttons/draw-button";
import { extractLastCards } from "@/helpers/extract-last-cards";
import { fetchDeckData } from "@/api/services/cards/fetch-deck-data";
import { useDeckState } from "@/hooks/deck/use-deck-state";
import { TCard } from "@/types";

export const HomePage = () => {
  const {
    deckState: {
      loading,
      cards,
      drawnCards,
      remaining,
      error,
      snapType,
      snapSuitMatches,
      snapValueMatches,
    },
    toggleDeckStateLoading,
    setNewDeckStateData,
    drawCard,
    setDeckStateError,
  } = useDeckState();

  const [penultimateCard, lastCard] = useMemo<(TCard | undefined)[]>(
    () => extractLastCards(drawnCards),
    [drawnCards]
  );

  const handleDrawButtonClick = useCallback(async () => {
    if (!cards.length) {
      try {
        toggleDeckStateLoading();

        const { data: fetchedDeckData } = await fetchDeckData({
          initDeckDrawCount: 52,
        });

        setNewDeckStateData(fetchedDeckData);
      } catch (error) {
        console.error(error);
        setDeckStateError("API ERROR OCCURRED");
        toggleDeckStateLoading();
      }

      return;
    }

    drawCard();
  }, [
    cards.length,
    drawCard,
    setDeckStateError,
    setNewDeckStateData,
    toggleDeckStateLoading,
  ]);

  const isDrawButtonDisabled = loading;
  const drawButtonText =
    !drawnCards.length || !remaining || error ? "Start new game" : "Draw card";

  const isErrorAlertVisible = Boolean(error);
  const isCounterAlertVisible = !isErrorAlertVisible && Boolean(remaining);
  const isEndGameAlertVisible =
    !isErrorAlertVisible && !remaining && drawnCards.length > 0;
  const isSnapAlertVisible = !isErrorAlertVisible && snapType;

  const penultimateCardImageSrc = penultimateCard?.image;
  const lastCardCardImageSrc = lastCard?.image;
  const penultimateCardImageAlt = `${penultimateCard?.value} of ${penultimateCard?.suit}`;
  const lastCardImageAlt = `${lastCard?.value} of ${lastCard?.suit}`;

  return (
    <>
      <div className="alerts-holder">
        {isSnapAlertVisible && <SnapAlert type={snapType} />}
        {isErrorAlertVisible && <ErrorAlert message={error} />}
      </div>
      <CardHolder>
        <Card
          imageSrc={penultimateCardImageSrc}
          imageAlt={penultimateCardImageAlt}
        />
        <Card
          loading={loading}
          imageSrc={lastCardCardImageSrc}
          imageAlt={lastCardImageAlt}
        />
      </CardHolder>
      <div className="alerts-holder">
        {isCounterAlertVisible && (
          <>
            <CounterAlert remainingCards={remaining} />
            <ProbabilityAlert
              cards={drawnCards}
              suit={lastCard?.suit}
              value={lastCard?.value}
            />
          </>
        )}
        {isEndGameAlertVisible && (
          <EndGameAlert
            valueMatches={snapValueMatches}
            suitMatches={snapSuitMatches}
          />
        )}
      </div>
      {!isEndGameAlertVisible && (
        <DrawButton
          disabled={isDrawButtonDisabled}
          loading={loading}
          onClick={handleDrawButtonClick}
        >
          {drawButtonText}
        </DrawButton>
      )}
    </>
  );
};
