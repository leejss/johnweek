import clsx from "clsx";
import React, { useCallback } from "react";
import { ButtonVariant, ColorType, SizeType } from "../types";
import { base, pickSize } from "../utils/css";
import { Spinner } from "../SVG";
import "./Button.scss";

export interface ButtonProps {
  children?: string;
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

const Button = ({
  children,
  className,
  disabled,
  endIcon,
  fullWidth,
  loading,
  onClick,
  size = "medium",
  startIcon,
  varaint = "contained",
  color = "primary",
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

  // 이벤트 핸들러
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick();
      console.log("onClick");
    }
  }, []);

  const textMarkup =
    typeof children === "string" ? (
      <span className="btn-text">{children}</span>
    ) : null;

  const iconMarkup = (
    <span className="icon-wrapper">
      {startIcon ? startIcon : null}
      {endIcon ? endIcon : null}
    </span>
  );

  const buttonMarkup = loading ? (
    <button className={classnames} disabled>
      <Spinner className="spinner" />
    </button>
  ) : (
    <button className={classnames} onClick={handleClick}>
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );

  return buttonMarkup;
};

export default Button;
