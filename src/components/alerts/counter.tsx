type TCounterAlertProps = {
  remainingCards: number;
};

export const CounterAlert = ({ remainingCards }: TCounterAlertProps) => {
  return (
    <div className="text-content">
      {remainingCards} {Number(remainingCards) === 1 ? "card" : "cards"}{" "}
      remaining
    </div>
  );
};
