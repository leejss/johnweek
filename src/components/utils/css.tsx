import { IconType, SizeType } from "../types";
import React from "react";
import { Icon } from "../Icon";

export function pickSize(name: string, size: SizeType) {
  const DEFAULT = "medium";
  switch (size) {
    case "small":
      return `${name}-small`;
    case "large":
      return `${name}-large`;
    default:
      return `${name}-${DEFAULT}`;
  }
}

export function pickIcon(icon: IconType) {
  switch (icon) {
    case "search":
      return <Icon type="search" />;
    case "google":
      return <Icon type="google" />;
  }
}
