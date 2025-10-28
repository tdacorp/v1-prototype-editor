export interface ParagraphStatus {
  value: "published" | "draft";
  default: "published" | "draft";
  enum: ("published" | "draft")[];
}

export interface ParagraphType {
  value: "heading" | "subheading" | "paragraph" | "caption";
  default: "paragraph";
  enum: ("heading" | "subheading" | "paragraph" | "caption")[];
}
export interface ParagraphAlignment {
  value: "left" | "center" | "right" | "justify";
  default: "left";
  enum: ("left" | "center" | "right" | "justify")[];
}

export interface ParagraphSize {
  value: "sm" | "md" | "lg" | "xl";
  default: "md";
  enum: ("sm" | "md" | "lg" | "xl")[];
}

export interface ParagraphWeight {
  value: "light" | "normal" | "medium" | "semibold" | "bold";
  default: "normal";
  enum: ("light" | "normal" | "medium" | "semibold" | "bold")[];
}

export interface ParagraphProps {
  content: string;
  type: ParagraphType;
  alignment: ParagraphAlignment;
  size: ParagraphSize;
  weight: ParagraphWeight;
  isTruncated?: boolean;
  maxLines?: number;
}

export interface ParagraphStyle {
  backgroundColor?: string;
  textColor?: string;
  fontFamily?: string;
  fontStyle?: string;
  lineHeight?: string;
  letterSpacing?: string;
  margin?: string;
  padding?: string;
}

export interface ParagraphConfig {
  layout?: "inline" | "block" | "flex";
  responsive?: boolean;
  allowRichText?: boolean;
}

export interface MetaAuthor {
  id: string;
  name?: string;
}

export interface ParagraphMeta {
  createdAt?: string;
  updatedAt?: string;
  lastModified?: string;
  author?: MetaAuthor;
}

export interface ParagraphSchema {
  id: string;
  name: string;
  displayName: string;
  type: "text";
  status: ParagraphStatus;
  props: ParagraphProps;
  style?: ParagraphStyle;
  config?: ParagraphConfig;
  meta?: ParagraphMeta;
}

export type ParagraphTypeType = "heading" | "subheading" | "paragraph" | "caption";
export type ParagraphStatusType = "published" | "draft";
