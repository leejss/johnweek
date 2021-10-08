import React from "react";
import { SizeType } from "../types";
import "./Card.scss";
import CardFooter from "./components/CardFooter";
import CardHeader from "./components/CardHeader";
import CardSection from "./components/CardSection";

export interface CardProps {
  size?: SizeType;
  inverted?: boolean;
  title?: React.ReactNode;
  section?: React.ReactNode;
  children?: React.ReactNode;
}

export interface CardComposition {
  Header: typeof CardHeader;
  Section: typeof CardSection;
  Footer: typeof CardFooter;
}

const Card: React.FC<CardProps> & CardComposition = ({
  children,
  inverted,
  section,
  size,
  title,
}) => {
  const headerMarkup = title ? <CardHeader title={title} /> : null;
  const sectionMarkup = section ? <CardSection section={section} /> : null;
  return (
    <div data-testid="card" className="Card">
      <div>
        {title && headerMarkup}
        {section && sectionMarkup}
        {children}
      </div>
    </div>
  );
};

Card.Header = CardHeader;
Card.Section = CardSection;
Card.Footer = CardFooter;

export default Card;
