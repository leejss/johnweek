import React from "react";
import "./Heading.css";
import type { HeadingTagName, TextBasedComponent } from "../types";
import clsx from "clsx";

export interface HeadingProps extends TextBasedComponent {
  element?: HeadingTagName;
}

const Heading = ({
  element: Element = "h2",
  children,
  id,
  className,
}: HeadingProps) => {
  const classNames = clsx("heading", className);
  return (
    <Element className={classNames} id={id}>
      {children}
    </Element>
  );
};

export default Heading;
