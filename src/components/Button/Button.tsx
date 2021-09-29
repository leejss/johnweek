import clsx from "clsx";
import React, { useCallback } from "react";
import { ButtonVariant, ColorType, SizeType } from "../types";
import { base, pickSize } from "../utils/css";
import { Spinner } from "../SVG";
import "./Button.css";

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

  const buttonMarkup = loading ? (
    <button className={classnames} disabled>
      <Spinner className="spinner" />
    </button>
  ) : (
    <button className={classnames} onClick={handleClick}>
      <span className="Button-inner">
        {startIcon ? startIcon : null}
        {textMarkup}
        {endIcon ? endIcon : null}
      </span>
    </button>
  );

  return buttonMarkup;
};

export default Button;
