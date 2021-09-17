import React from "react";
import { SizeType } from "../types";
import clsx from "clsx";
import "./Button.css";
import { pickSize } from "../utils/css";

export interface ButtonProps {
  children?: string;
  size?: SizeType;
  primary?: boolean;
  outline?: boolean;
  danger?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  danger,
  disabled,
  fullWidth,
  outline,
  primary,
  size = "medium",
}: ButtonProps) => {
  // Styling
  const classNames = clsx(
    "button",
    primary && "primary",
    danger && "danger",
    outline && "outline",
    disabled && "disabled",
    fullWidth && "fullWidth",
    size && pickSize("size", size)
  );

  const textMarkup = children ? <span>{children}</span> : null;
  const buttonMarkup = <button className={classNames}>{textMarkup}</button>;
  return buttonMarkup;
};

export default Button;
