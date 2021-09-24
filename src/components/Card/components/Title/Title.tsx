import React, { useContext } from "react";
import { Heading } from "../../../Heading";
import type { HeadingProps } from "../../../Heading";
import clsx from "clsx";
import { CardContext } from "../../Card";
import { pickSize } from "../../../utils/css";

export interface TitleProps extends HeadingProps {
  borderBottom?: boolean;
}

const Title = ({ borderBottom, children, className, id }: TitleProps) => {
  const value = useContext(CardContext);

  const classNames = clsx(
    "CardTitle",
    borderBottom && "borderBottom",
    value.size && pickSize("size", value.size),
    className
  );

  const headingMarkup = (
    <Heading id={id} className={classNames}>
      {children}
    </Heading>
  );
  return headingMarkup;
};

export default Title;
