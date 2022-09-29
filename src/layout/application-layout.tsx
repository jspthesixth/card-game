import React from "react";
import "@/styles/global.css";

type TApplicationLayoutProps = {
  children: React.ReactNode;
};

export const ApplicationLayout = ({ children }: TApplicationLayoutProps) => {
  return (
    <div className="container">
      <header className="header text-content">SNAP!</header>
      <div className="content">{children}</div>;
    </div>
  );
};
