import { HeroSchema } from "./types";

export const defaultHero: HeroSchema = {
  id: "hero-default",
  type: "Hero",
  variant: "center",
  isPublished: false,
  props: {
    title: "Welcome to TDACorp",
    subtitle: "Innovate. Build. Inspire.",
    description: "Your partner in digital transformation.",
    alignment: "center",
    textColor: "#fff",
    padding: "80px 20px",
    isFullScreen: true,
    cta: {
      label: "Get Started",
      link: "/get-started",
      style: "secondary",
      size: "medium"
    },
    secondaryCta: {
      label: "Learn More",
      link: "/about",
      style: "outline"
    },
    background: {
      type: "gradient",
      value: "linear-gradient(to right, #4f46e5, #3b82f6)",
      overlay: true,
      overlayOpacity: 0.3
    },
    contentStyling: {
      verticalAlignment: "center",
      maxWidth: "800px"
    }
  }
};
