import clsx from "clsx";
import React, { useContext } from "react";
import { pickSize } from "../../../utils/css";
import { CardContext } from "../../Card";

export interface SectionProps {
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  const value = useContext(CardContext);
  const classNames = clsx(
    "CardSection",
    value.size && pickSize("size", value.size),
    className
  );

  return <section className={classNames}>{children}</section>;
};

export default Section;
