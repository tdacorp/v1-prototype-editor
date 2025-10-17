export interface HeroBackground {
  type?: "image" | "color" | "video" | "gradient" | "pattern";
  value?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  position?: string;
  gradientDirection?: "to right" | "to bottom" | "diagonal";
}

export interface HeroCTA {
  label: string;
  link: string;
  style?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  icon?: string; 
  target?: "_blank" | "_self";
  customColor?: string; 
}

export interface HeroContentStyling {
  verticalAlignment?: "top" | "center" | "bottom"; 
  contentPadding?: string;
  maxWidth?: string; 
}

export type HeroVariant =
  | "center"
  | "left"
  | "right"
  | "split"
  | "video"
  | "minimal"
  | "form"
  | "carousel"
  | "stats"
  | "illustration"
  | "shapeDivider";

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  altText?: string; 
  ariaLabel?: string; 

  cta?: HeroCTA;
  secondaryCta?: HeroCTA; 

  alignment?: "left" | "center" | "right";
  padding?: string; 
  isFullScreen?: boolean; 
  mediaPosition?: "left" | "right"; 
  formPlaceholder?: string;

  image?: string | string[];
  videoUrl?: string;
  stats?: { label: string; value: string }[];
  illustration?: string;
  shapeDivider?: "curve" | "diagonal" | "wave";
  textColor?: string;

  background?: HeroBackground;
  height?: string;

  contentStyling?: HeroContentStyling
}

export interface HeroMetadata {
  id: string;                 
  version?: number;           
  createdAt?: string;         
  updatedAt?: string;         
  createdBy?: string;         
  updatedBy?: string;         
  isPublished?: boolean;      
}

export interface HeroSchema extends HeroMetadata {
  type: "Hero";
  variant: HeroVariant;
  props: HeroProps;
}
