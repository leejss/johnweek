import clsx from "clsx";
import React from "react";
import { IconType } from "../types";
import { pickIcon } from "../utils/css";
import "./Input.css";

export interface InputProps  {
  icon?: IconType;
  fullWidth?: boolean;
  error?: boolean;
  ok?: boolean;
  className?: string;
  placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, error, fullWidth, ok, className, placeholder }, ref) => {
    const classNames = clsx(
      "input",
      fullWidth && "fullWidth",
      error && "error",
      ok && "ok",
      className
    );
    const iconMarkup = icon && pickIcon(icon);
    const inputMarkup = (
      <input ref={ref} className={classNames} placeholder={placeholder} />
    );
    return icon ? (
      <div className="iconWrapper">
        {inputMarkup}
        {iconMarkup}
      </div>
    ) : (
      inputMarkup
    );
  }
);

Input.displayName = "Input";

export default Input;
