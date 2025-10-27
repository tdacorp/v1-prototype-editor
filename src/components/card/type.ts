
export interface CardStatus {
  value: "published" | "draft";
  default: "published" | "draft";
  enum: ("published" | "draft")[];
}

export type CardVariantType =
  | "image-top"
  | "bg-image"
  | "user-profile"
  | "icon-info"
  | "social-profile"
  | "article-card";


export interface CardVariant {
  value: CardVariantType;
  default: CardVariantType;
  variant: CardVariantType[];
}


export interface CardImage {
  src: string;
  alt: string;
  position?: PositionObject | string;
  aspectRatio?: string;
}

export interface PositionObject {
  vertical: {
    value: string;
    default: string;
    enum: string[];
  };
  horizontal: {
    value: string;
    default: string;
    enum: string[];
  };
}


export interface CardCTA {
  label: string;
  action: "navigate" | "click" | "open" | string;
  to?: string;
  style?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  icon?: string;
}


export interface CardIcon {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
}
export interface UserProfileProps {
  avatar: string;
  name: string;
  position: string;
  followers: string;
  following: string;
}
interface SocialProfileProps {
  avatar: string;
  name: string;
  username: string;
  title: string;
  description: string;
}
interface AuthorProps {
  avatar: string;
  name: string;
  date: string;
}
export interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string[];
  image?: CardImage;
  backgroundImage?: CardImage;
  tags?: string[];
  button?: CardCTA;
  secondaryButton?: CardCTA;
  user?: UserProfileProps;
  socialProfile?: SocialProfileProps;
  author?: AuthorProps;
  bookmark?: boolean;
  icon?: CardIcon;
}


export interface CardStyle {
  variant?: "outlined" | "filled" | "gradient" | string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  shadow?: "none" | "small" | "medium" | "large";
  padding?: string;
  hoverEffect?: "lift" | "shadow" | "scale" | string;
}

export interface CardConfig {
  layout?: "standard" | "flex" | "grid";
  orientation?: "vertical" | "horizontal";
  responsive?: boolean;
  clickable?: boolean;
}

export interface CardMeta {
  createdAt?: string;
  updatedAt?: string;
  lastModified?: string;
  author?: {
    id: string;
    name?: string;
  };
}

export interface CardSchema {
  id: string;
  type: "Card";
  status: CardStatus;
  variant: CardVariant;
  props: CardProps;
  style?: CardStyle;
  config?: CardConfig;
  meta?: CardMeta;
}
