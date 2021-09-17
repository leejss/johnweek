import { SizeType } from "../types";

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
