import clsx from "clsx";
import React from "react";
import { ButtonVariant, ColorType, SizeType } from "../types";
import { pickSize } from "../utils/css";
import Spinner from "./spinner.svg";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  varaint?: ButtonVariant;
  color?: ColorType;
  size?: SizeType;
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?(): void;
}

console.log(Spinner);

const Button = ({
  children,
  className,
  disabled,
  endIcon,
  fullWidth,
  loading,
  onClick,
  size,
  startIcon,
  varaint,
  color,
}: ButtonProps) => {
  const classnames = clsx(
    "Button",
    varaint && varaint,
    color && color,
    disabled && "disabled",
    fullWidth && "fullWidth",
    loading && "loading",
    size && pickSize(size),
    className
  );
  const textMarkup =
    typeof children === "string" ? (
      <span className="btn-text">{children}</span>
    ) : null;
  const buttonMarkup = loading ? (
    <button className={classnames}></button>
  ) : (
    <button className={classnames}>
      {startIcon ? startIcon : null}
      {textMarkup}
      {endIcon ? endIcon : null}
    </button>
  );

  return buttonMarkup;
};

export default Button;
