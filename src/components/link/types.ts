
export interface LinkStatus {
  value: "published" | "draft";
  default: "draft";
  enum: ("published" | "draft")[];
}

export interface LinkStyle {
  color?: string;
  underline?: boolean;
  align?: "left" | "center" | "right";
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold";
  fontSize?: string;
  margin?: string;
}

export interface LinkConfig {
  layout?: "inline" | "block";
  responsive?: boolean;
}

export interface AuthorMeta {
  id: string;
  name: string;
}

export interface LinkMeta {
  createdAt: string;
  updatedAt: string;
  lastModified: string;
  author: AuthorMeta;
}

export interface LinkSchema {
  id: string;
  type: "link";
  status: LinkStatus;
  label: string;
  href: string;
  target?: "_self" | "_blank";
  style?: LinkStyle;
  config?: LinkConfig;
  meta?: LinkMeta;
}
