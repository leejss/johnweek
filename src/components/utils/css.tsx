import { SizeType } from "../types";
import React from "react";

export function pickSize(size: SizeType) {
  const DEFAULT = "medium";
  const PREFIX = "size";
  switch (size) {
    case "small":
      return `${PREFIX}-small`;
    case "large":
      return `${PREFIX}-large`;
    default:
      return `${PREFIX}-${DEFAULT}`;
  }
}
