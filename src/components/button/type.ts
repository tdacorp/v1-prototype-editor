
export interface ButtonStatus {
  value: "published" | "draft";
  default: "published" | "draft";
  enum: ("published" | "draft")[];
}


export type ButtonVariantType = 
  | "default" 
  | "rounded-full" 
  | "outlined" 
  | "gradient"
  | "icon-left"
  | "icon-right";

export interface ButtonVariant {
  value: ButtonVariantType;  
  default: ButtonVariantType;
  variant: ButtonVariantType[];
}

export interface ButtonSize {
  value: "sm" | "md" | "lg";
  default: "sm" | "md" | "lg";
  enum: ("sm" | "md" | "lg")[];
}

export interface ButtonProps {
  label: string;
  url: string;
  variant: ButtonVariant;
  size: ButtonSize;
  alignment?: "left" | "center" | "right";
  isDisabled?: boolean;
  icon?: string;
  target?: "_blank" | "_self";
}

export interface ButtonStyle {
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  padding?: string;
  hoverColor?: string;
  shadow?:
   "none" 
   | "small" 
   | "medium" 
   | "large";
}

export interface ButtonConfig {
  layout?: "inline" | "block" | "flex";
  responsive?: boolean;
}

export interface ButtonMeta {
  createdAt?: string;
  updatedAt?: string;
  lastModified?: string;
  author?: {
    id: string;
    name?: string;
  };
}

export interface ButtonSchema {
  id: string;
  type: "Button";
  status: ButtonStatus;
  props: ButtonProps;
  style?: ButtonStyle;
  config?: ButtonConfig;
  meta?: ButtonMeta;
}

export type ButtonSizeType = "sm" | "md" | "lg";
export type ButtonStatusType = "published" | "draft";
