import React from "react";
import "./Link.css";
import type { SizeType, TextBasedComponent } from "../types";
import clsx from "clsx";
import { pickSize } from "../utils/css";

export interface LinkProps extends TextBasedComponent {
  onClick?: () => void;
  underline?: boolean;
  blank?: boolean;
  accessibilityLabel?: string;
  url?: string;
  size?: SizeType;
}

const Link = ({
  className,
  accessibilityLabel,
  blank,
  children,
  id,
  onClick,
  underline,
  url,
  size,
}: LinkProps) => {
  const target = blank ? "_blank" : "";
  const clasNames = clsx(
    "Link",
    underline && "underline",
    size && pickSize("size", size),
    className
  );
  return (
    <a
      onClick={onClick}
      target={target}
      className={clasNames}
      href={url}
      id={id}
      aria-label={accessibilityLabel}
    >
      {children}
    </a>
  );
};

export default Link;
