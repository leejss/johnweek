import clsx from "clsx";
import React from "react";
import { SizeType } from "../../components/types";
import { pickSize } from "../../components/utils/css";
import "./stack.css";

export interface StackProps {
  gutter?: SizeType;
}

const Stack: React.FC<StackProps> = ({ children, gutter }) => {
  const classNames = clsx("stack", gutter && pickSize("gutter", gutter));
  return <div className={classNames}>{children}</div>;
};

export default Stack;
