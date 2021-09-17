import clsx from "clsx";
import React from "react";
import { SizeType } from "../../components/types";
import { pickSize } from "../../components/utils/css";
import "./stack.css";

export interface StackProps {
  gutter?: SizeType;
  className?: string;
}

const Stack: React.FC<StackProps> = ({ children, gutter, className }) => {
  const classNames = clsx(
    "stack",
    gutter && pickSize("gutter", gutter),
    className
  );
  return <div className={classNames}>{children}</div>;
};

export default Stack;
