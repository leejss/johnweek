import clsx from "clsx";
import React from "react";
import "./center.css";

export interface CenterProps {
  className?: string;
}

const Center: React.FC<CenterProps> = ({ children, className }) => {
  const classNames = clsx("center", className);
  return <div className={classNames}>{children}</div>;
};

export default Center;
