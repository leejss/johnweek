import React from "react";

// Types
export type SizeType = "small" | "medium" | "large";
export type IconType = "search" | "google";
export type HeadingTagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type ButtonVariant = "text" | "contained" | "outlined";
export type ColorType = "primary" | "secondary" | "error";

// Interfaces
export interface TextBasedComponent {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}
