import React from "react";

type TDrawButtonProps = {
  disabled: boolean;
  loading: boolean;
  onClick: () => Promise<void>;
  children: React.ReactNode;
};

export const DrawButton = ({
  disabled,
  loading,
  onClick,
  children,
}: TDrawButtonProps) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {loading ? "Loading..." : children}
    </button>
  );
};
