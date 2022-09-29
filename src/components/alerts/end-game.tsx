type TEndGameAlertProps = {
  suitMatches: number;
  valueMatches: number;
};

export const EndGameAlert = ({
  valueMatches,
  suitMatches,
}: TEndGameAlertProps) => {
  return (
    <div className="text-content">
      <p>Value matches: {valueMatches}</p>
      <p>Suit matches: {suitMatches}</p>
    </div>
  );
};
