

/* -----------------------------------
   COMMON UTILITIES
----------------------------------- */

export interface componentStatus {
  value: "published" | "draft";
  default: "published" | "draft";
  enum: ("published" | "draft")[];
}

export type ComponentType =
  | "Hero"
  | "Carousel"
  | "Link"
  | "Paragraph"
  | "Heading"
  | "Card"
  | "Button"
  | "accordion"
  | "accordion-group"
  | "ResizableLayout";

/* -----------------------------------
   BUTTON SCHEMA
----------------------------------- */

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

export type ButtonTargetType = "_blank" | "_self";

export interface ButtonProps {
  label: string;
  href: string;
  size: ButtonSize;
  variant: ButtonVariant;
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
  border?: string;
  shadow?:
  "none"
  | "small"
  | "medium"
  | "large";
}

export interface ButtonConfig {
  layout?: "inline" | "block" | "flex";
  responsive?: boolean;
  fullWidth?: boolean;
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
  variant: ButtonVariant;
  style?: ButtonStyle;
  config?: ButtonConfig;
  meta?: ButtonMeta
}
export type ButtonSizeType = "sm" | "md" | "lg";
export type ButtonStatusType = "published" | "draft";

/* -----------------------------------
   HEADING SCHEMA
----------------------------------- */

export interface HeadingProps {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  align?: "left" | "center" | "right";
}

export interface HeadingSchema {
  id: string;
  type: "Heading";
  props: HeadingProps;
  config?: Record<string, unknown>;
  style?: Record<string, unknown>;
}

/* -----------------------------------
   CARD SCHEMA
----------------------------------- */

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

/* -----------------------------------
   LINK SCHEMA
----------------------------------- */

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


/* -----------------------------------
   HERO SCHEMA
----------------------------------- */

export interface HeroBackground {
  type?: "image" | "color" | "video" | "gradient" | "pattern";
  value?: string | string[];
  overlay?: boolean;
  overlayOpacity?: number;
  position?: string;
  gradientDirection?: "to right" | "to bottom" | "to bottom right";
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

  width?: string | number;
  height?: string | number;

  mediaPosition?: "left" | "right";
  formPlaceholder?: string;

  image?: string | string[];
  videoUrl?: string;
  stats?: { label: string; value: string }[];
  illustration?: string;
  shapeDivider?: "curve" | "diagonal" | "wave";

  textColor?: string;
  shapeColor?: string;

  background?: HeroBackground;
  contentStyling?: HeroContentStyling;
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


/* -----------------------------------
   PARAGRAPH SCHEMA
----------------------------------- */

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
  fontsize?:string;
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

/* -----------------------------------
   ACCORDION SCHEMAS
----------------------------------- */

export type AccordionItemSchema = {
  id: string;
  type: "accordion";
  title: string;
  content: string;
  defaultOpen?: boolean;

};

export type AccordionVariant = "single" | "multiple";

export type AccordionGroupSchema = {
  id: string;
  type: "accordion-group";
  variant: AccordionVariant;
  collapsible?: boolean;
  iconPosition?: "left" | "right";
  titleSize?: "sm" | "md" | "lg";
  accordion: AccordionItemSchema[];
};

/* -----------------------------------
   CAROUSEL SCHEMA
----------------------------------- */

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

/* -----------------------------------
   RESIZABLE LAYOUT SCHEMA
----------------------------------- */

export interface ResizablePanel {
  id: string;
  size: number;
  min?: number;
  max?: number;
  children?: PageComponent[];
}

export interface ResizableLayoutProps {
  direction: "horizontal" | "vertical";
  panels: ResizablePanel[];
}

export interface ResizableLayoutSchema {
  id: string;
  type: "ResizableLayout";
  props: ResizableLayoutProps;
  config?: Record<string, unknown>;
  style?: Record<string, unknown>;
}

/* -----------------------------------
   MASTER COMPONENT UNION
----------------------------------- */

export type PageComponent =
  | HeroSchema
  | CarouselSchema
  | LinkSchema
  | ParagraphSchema
  | HeadingSchema
  | CardSchema
  | ButtonSchema
  | AccordionItemSchema
  | AccordionGroupSchema
  | ResizableLayoutSchema;

/* -----------------------------------
   PAGE SCHEMA
----------------------------------- */

export interface SEO {
  title: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}

export interface PageConfig {
  layout: string;
}

export interface Page {
  id: string;
  slug: string;
  status: "published";
  components: PageComponent[];
  seo: SEO;
  config: PageConfig;
  createdAt: string;
  updatedAt: string;
}
