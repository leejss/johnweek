import React, { createContext } from "react";
import { Section } from "./components/Section";
import { Title } from "./components/Title";
import "./Card.css";
import { SizeType } from "../types";
import clsx from "clsx";

// Context Type
export interface CardContextType {
  size: SizeType;
}

export const CardContext = createContext<CardContextType>({
  size: "medium",
});

export interface CardComposition {
  Title: typeof Title;
  Section: typeof Section;
}

export interface CardProps {
  size?: SizeType;
  borderd?: boolean;
  shadow?: boolean;
}

const Card: CardComposition & React.FC<CardProps> = ({
  children,
  size,
  borderd,
  shadow,
}) => {
  const value = {
    // Default size
    size: size ? size : "medium",
  };
  const classNames = clsx("Card", borderd && "bordered", shadow && "shadow");
  return (
    <CardContext.Provider value={value}>
      <div className={classNames}>{children}</div>
    </CardContext.Provider>
  );
};

Card.Section = Section;
Card.Title = Title;

export default Card;
