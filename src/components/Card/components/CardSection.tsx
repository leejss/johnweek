import React from "react";

export interface CardSectionProps {
  children?: React.ReactNode;
  section?: React.ReactNode;
}

const CardSection = ({ children, section }: CardSectionProps) => {
  const paragraph = section ? (
    <p>{section}</p>
  ) : children ? (
    <p>{children}</p>
  ) : null;

  return (
    <section>
      <div>{paragraph}</div>
    </section>
  );
};

export default CardSection;
