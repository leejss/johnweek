import { SizeType } from "../types";

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

export function base(css: string) {
  return `${css}-base`;
}
