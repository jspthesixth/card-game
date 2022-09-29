import { getSuitAndValueProbability } from "@/helpers/get-suit-value-probability";
import { TCard, TSuit, TValue } from "@/types";

type TProbabilityAlertProps = {
  cards: TCard[];
  suit: TSuit | undefined;
  value: TValue | undefined;
};

export const ProbabilityAlert = ({
  cards,
  suit,
  value,
}: TProbabilityAlertProps) => {
  const { withSameSuit, withSameValue } = getSuitAndValueProbability(
    cards,
    suit,
    value
  );

  return (
    <div className="text-content">
      <p>
        Probability of next card having the same suit: {withSameSuit.toFixed(2)}
        %
      </p>
      <p>
        Probability of next card having the same value:{" "}
        {withSameValue.toFixed(2)}%
      </p>
    </div>
  );
};
