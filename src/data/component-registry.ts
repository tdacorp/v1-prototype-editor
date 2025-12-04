// import { AvailableComponent } from "@/types";

// Button defaults
import {
  defaultButton,
  outlinedButton,
  secondaryButton,
  primaryButton,
  ghostButton,
  dangerbutton,
} from "@/components/button/defaults";

// Card defaults
import {
  imagetop,
  bgimgage,
  userprofile,
  iconinfo,
  socialProfile,
  articlecard,
} from "@/components/card/default";
import { heroMap } from "@/components/hero/defaults";
import { SidebarComponent } from "@/redux/slices/left-sidebar-slice/types/sidebar";

export const COMPONENT_REGISTRY: SidebarComponent[] = [
  {
    id: "button",
    name: "Button",
    icon: "🔘",
    category: "Controls",
    variants: [
      {
        id: "button-default",
        name: defaultButton.props.label,
        previewImage: "/images/previews/button-default.png",
        defaultProps: { ...defaultButton },
      },
      {
        id: "button-outlined",
        name: outlinedButton.props.label,
        previewImage: "/images/previews/button-outlined.png",
        defaultProps: { ...outlinedButton },
      },
      {
        id: "button-secondary",
        name: secondaryButton.props.label,
        previewImage: "/images/previews/button-secondary.png",
        defaultProps: { ...secondaryButton },
      },
      {
        id: "button-primary",
        name: primaryButton.props.label,
        previewImage: "/images/previews/button-primary.png",
        defaultProps: { ...primaryButton },
      },
      {
        id: "button-ghost",
        name: ghostButton.props.label,
        previewImage: "/images/previews/button-ghost.png",
        defaultProps: { ...ghostButton },
      },
      {
        id: "button-danger",
        name: dangerbutton.props.label,
        previewImage: "/images/previews/button-danger.png",
        defaultProps: { ...dangerbutton },
      },
    ],
  },

  {
    id: "card",
    name: "Card",
    icon: "📦",
    category: "Layout",
    variants: [
      {
        id: "card-imagetop",
        name: `Card: ${imagetop.variant.value}`,
        previewImage: "/images/previews/card-imagetop.png",
        defaultProps: { ...imagetop },
      },
      {
        id: "card-bgimage",
        name: `Card: ${bgimgage.variant.value}`,
        previewImage: "/images/previews/card-bgimage.png",
        defaultProps: { ...bgimgage },
      },
      {
        id: "card-userprofile",
        name: `Card: ${userprofile.variant.value}`,
        previewImage: "/images/previews/card-userprofile.png",
        defaultProps: { ...userprofile },
      },
      {
        id: "card-iconinfo",
        name: `Card: ${iconinfo.variant.value}`,
        previewImage: "/images/previews/card-iconinfo.png",
        defaultProps: { ...iconinfo },
      },
      {
        id: "card-socialprofile",
        name: `Card: ${socialProfile.variant.value}`,
        previewImage: "/images/previews/card-socialprofile.png",
        defaultProps: { ...socialProfile },
      },
      {
        id: "card-article",
        name: `Card: ${articlecard.variant.value}`,
        previewImage: "/images/previews/card-articlecard.png",
        defaultProps: { ...articlecard },
      },
    ],
  },

  {
    id: "hero",
    name: "Hero Section",
    icon: "🎯",
    category: "Sections",

    variants: Object.entries(heroMap).map(([key, schema]) => ({
      id: `hero-${schema.variant}`,
      name: `Hero: ${schema.variant}`,
      previewImage: "/images/previews/hero-placeholder.png",
      defaultProps: schema,
    })),
  },
];
