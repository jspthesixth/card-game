import React from "react";

type TCardHolderProps = {
  children: React.ReactNode;
};

export const CardHolder = ({ children }: TCardHolderProps) => {
  return <div className="card-holder">{children}</div>;
};
