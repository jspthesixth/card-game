type TSnapAlertProps = {
  type: string;
};

export const SnapAlert = ({ type }: TSnapAlertProps) => {
  return <div className="text-content">Snap {type}!</div>;
};
