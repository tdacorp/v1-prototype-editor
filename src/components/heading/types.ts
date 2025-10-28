export interface HeadingSchema {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
  color?: string;
  align?: "left" | "center" | "right";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  margin?: string;
  italic?: boolean;
  underline?: boolean;
  letterSpacing?: "tight" | "normal" | "wide";
  lineHeight?: string;
  transform?: "none" | "uppercase" | "lowercase" | "capitalize";
  className?: string;
}