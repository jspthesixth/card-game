type TErrorAlertProps = {
  message: string | null;
};

export const ErrorAlert = ({ message }: TErrorAlertProps) => {
  return <div className="text-content">{message}</div>;
};
