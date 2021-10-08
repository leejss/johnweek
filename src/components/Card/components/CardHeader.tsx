import React from "react";

export interface CardHeaderProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
}

const CardHeader = ({ title, children }: CardHeaderProps) => {
  const heading = title ? title : children ? children : null;
  return (
    <header>
      <div>
        <h2>{heading}</h2>
      </div>
    </header>
  );
};

export default CardHeader;
