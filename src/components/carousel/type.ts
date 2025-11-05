
export type CarouselVariantType =
  | "hero-slider"
  | "image-gallery"
  | "feature-card"
  | "user-profile"
  | "article-card"
  | "brand-logo"
  | "testimonial"
  | "property-card"
  | "simple-text";

export interface CarouselStatus {
  value: "published" | "draft";
  default: "published" | "draft";
  enum: Array<"published" | "draft">;
}

export interface CarouselVariant {
  value: CarouselVariantType;
  default: CarouselVariantType;
  enum: CarouselVariantType[];
}

export interface OverlayPosition {
  value: string;
  default: string;
  enum: string[];
}

export interface Alignment {
  value: "left" | "center" | "right";
  enum: Array<"left" | "center" | "right">;
}

export interface SlideButton {
  label: string;
  action: "navigate" | "open" | "click" | string;
  to?: string;
}
export interface UserProfileProps {
  avatar: string;
  name: string;
  position: string;
  followers: string;
  following: string;
}
export interface CardIcon {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
}
export interface AuthorProps {
  name: string;
  avatar?: string;
  date?: string;
}

export interface ArticleCardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle?: string;
  badge?: string[];
  author?: AuthorProps;
  bookmark?: boolean;
}

export interface SlideProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    aspectRatio?: string;
    
  };
  overlayPosition?: OverlayPosition;
  alignment?: Alignment;
  badges?: string[];
  tags?: string[];
  rating?: number;
  button?: SlideButton;
  secondaryButton?: SlideButton;
  user?: UserProfileProps;
  icon?: CardIcon;
  articleCard?: ArticleCardProps;
}

export interface CarouselProps {
  slides: SlideProps[];
}

export interface ResponsiveConfig {
  breakpoint: number;
  slidesToShow: number;
}

export interface CarouselConfig {
  loop?: boolean;
  autoplay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  slidesToShow?: number;
  slidesToScroll?: number;
  pauseOnHover?: boolean;
  responsive?: ResponsiveConfig[];
}

export interface CarouselStyle {
  height?: string;
  width?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  boxShadow?: string;
}

export interface CarouselMeta {
  createdAt?: string;
  updatedAt?: string;
  lastModified?: string;
  author?: {
    id: string;
  };
}

export interface CarouselSchema {
  id: string;
  type: "Carousel";
  status: CarouselStatus;
  variant: CarouselVariant;
  props: CarouselProps;
  config: CarouselConfig;
  style?: CarouselStyle;
  meta?: CarouselMeta;
}
