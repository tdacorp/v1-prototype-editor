import React, { JSX } from "react";
import { tokens } from "./tokens";
import { HeadingSchema } from "./types";

export const Heading: React.FC<HeadingSchema> = ({
  level,
  content,
  color,
  align = "left",
  weight = "bold",
  margin = "0.5rem 0",
  italic = false,
  underline = false,
  letterSpacing = "normal",
  lineHeight,
  transform = "none",
  className = "",
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const styles = {
    color: color || tokens.colors.textPrimary,
    fontSize: tokens.fontSizes[`h${level}`],
    fontWeight: tokens.fontWeights[weight],
    lineHeight: lineHeight || tokens.lineHeights[`h${level}`],
    letterSpacing: tokens.letterSpacing[letterSpacing],
    textAlign: align,
    margin,
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
    textTransform: transform,
    transition: tokens.transitions.default,
  };

  return <Tag style={styles} className={className} >{content}</Tag>;
};
