
export interface ButtonStatus {
  value: "published" | "draft";
  default: "published" | "draft";
  enum: ("published" | "draft")[];
}


export type ButtonVariantType = 
  | "default" 
  | "primary"
  | "outlined" 
  | "secondary"
  | "ghost"
  | "danger";

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

export type ButtonTargetType = "_blank" | "_self" ;


export interface ButtonProps {
  label: string;
  href: string;
  variant: ButtonVariant;
  size: ButtonSize;
  alignment?: "left" | "center" | "right";
  isDisabled?: boolean;
  icon?: string;
  target?: ButtonTargetType;
}

export interface ButtonStyle {
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  padding?: string;
  hoverColor?: string;
  border?:string;
  shadow?:
   "none" 
   | "small" 
   | "medium" 
   | "large";
}

export interface ButtonConfig {
  layout?: "inline" | "block" | "flex";
  responsive?: boolean;
  fullWidth?:boolean;
  showIcon: boolean;
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
