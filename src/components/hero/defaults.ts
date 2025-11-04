import { HeroSchema } from "./types";

export const centerHero: HeroSchema = {
  id: "hero-1",
  type: "Hero",
  variant: "center",
  isPublished: true,
  props: {
    title: "Welcome to TDACorp",
    subtitle: "Innovate. Build. Inspire.",
    description: "Your partner in digital transformation.",
    alignment: "center",
    textColor: "#3341c2ff",
    padding: "80px 20px",
    width: "100%",
    height: "80vh",
    cta: {
      label: "Get Started",
      link: "/get-started",
      style: "secondary",
      size: "medium",
    },
    secondaryCta: {
      label: "Learn More",
      link: "/about",
      style: "outline",
      size: "medium",
    },
    background: {
      type: "gradient",
      value: ["#e94c0eff", "#ffffffff", "#27cc27ff"],
      gradientDirection: "to bottom right",
      overlay: true,
      overlayOpacity: 0.3,
    },
    contentStyling: {
      verticalAlignment: "center",
      maxWidth: "800px",
    },
  },
};

export const splitHero: HeroSchema = {
  id: "hero-2",
  type: "Hero",
  variant: "split",
  isPublished: true,
  props: {
    title: "Build premium websites with effortless drag & drop",
    subtitle: "✨ New • No-Code Website Builder",
    description:
      "A sleek, modern builder with glassmorphism UI, fluid motion, and parallax. Design like a pro with electric blue and violet accents—no code required.",
    alignment: "center",
    textColor: "#fff",
    padding: "80px 20px",
    width: "100%",
    height: "80vh",
    cta: {
      label: "Start for free",
      link: "/get-started",
      style: "secondary",
      size: "medium",
    },
    secondaryCta: {
      label: "View templates",
      link: "/templates",
      style: "outline",
      size: "medium",
    },
    mediaPosition: "right",
    image:
      "https://images.pexels.com/photos/16347225/pexels-photo-16347225.jpeg",
    background: {
      type: "gradient",
      value: ["#1ec0f1", "#ffffff"],
      gradientDirection: "to right",
      overlay: true,
      overlayOpacity: 0.3,
    },
    contentStyling: {
      verticalAlignment: "center",
      maxWidth: "600px",
    },
  },
};

export const videoHero: HeroSchema = {
  id: "hero-video-demo",
  type: "Hero",
  variant: "video",
  isPublished: true,
  props: {
    title: "Experience Innovation",
    subtitle: "Power your ideas with next-gen solutions",
    description:
      "TDACorp drives digital transformation with scalable design systems and robust development.",
    alignment: "center",
    textColor: "#fff",
    padding: "100px 20px",
    videoUrl: "https://www.pexels.com/download/video/1321208/",
    cta: {
      label: "Get Started",
      link: "/get-started",
      style: "primary",
      size: "medium",
    },
    secondaryCta: {
      label: "Learn More",
      link: "/about",
      style: "outline",
      size: "medium",
    },
    background: {
      type: "video",
      overlay: true,
      overlayOpacity: 0.2,
    },
    contentStyling: {
      verticalAlignment: "center",
      maxWidth: "800px",
    },
  },
};

export const minimalHero: HeroSchema = {
  id: "hero-minimal",
  type: "Hero",
  variant: "minimal",
  isPublished: true,
  props: {
    title: "Less design, more impact.",
    subtitle: "Clean typography and whitespace done right.",
    alignment: "center",
    textColor: "#111",
    width: "100%",
    height: "60vh",
    background: {
      type: "color",
      value: "#f9fafb",
    },
    cta: {
      label: "Explore",
      link: "/explore",
      style: "primary",
      size: "medium",
    },
  },
};

export const formHero: HeroSchema = {
  id: "hero-form",
  type: "Hero",
  variant: "form",
  isPublished: true,
  props: {
    title: "Join our Beta Program",
    subtitle: "Be among the first to experience innovation",
    alignment: "center",
    textColor: "#ffffff",
    padding: "80px 20px",
    width: "100%",
    height: "75vh",
    formPlaceholder: "Enter your email address",
    background: {
      type: "gradient",
      value: ["#2563eb", "#7c3aed"],
      gradientDirection: "to right",
      overlay: true,
      overlayOpacity: 0.25,
    },
  },
};

export const carouselHero: HeroSchema = {
  id: "hero-carousel",
  type: "Hero",
  variant: "carousel",
  isPublished: true,
  props: {
    title: "Discover amazing experiences",
    subtitle: "Swipe through our latest projects",
    alignment: "center",
    textColor: "#ffffff",
    width: "100%",
    height: "85vh",
    image: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    ],
    background: {
      type: "color",
      value: "#0f172a",
    },
  },
};

export const statsHero: HeroSchema = {
  id: "hero-stats",
  type: "Hero",
  variant: "stats",
  isPublished: true,
  props: {
    title: "Our Impact in Numbers",
    subtitle: "We deliver measurable success",
    alignment: "center",
    textColor: "#fff",
    padding: "100px 20px",
    width: "100%",
    height: "70vh",
    stats: [
      { label: "Projects Completed", value: "120+" },
      { label: "Global Clients", value: "50+" },
      { label: "Team Members", value: "30+" },
    ],
    background: {
      type: "gradient",
      value: ["#0ea5e9", "#2563eb"],
      gradientDirection: "to right",
      overlay: true,
      overlayOpacity: 0.3,
    },
  },
};

export const illustrationHero: HeroSchema = {
  id: "hero-illustration",
  type: "Hero",
  variant: "illustration",
  isPublished: true,
  props: {
    title: "Bring your ideas to life",
    subtitle: "Custom illustrations that tell your story",
    alignment: "center",
    textColor: "#111827",
    padding: "80px 20px",
    width: "100%",
    height: "80vh",
    illustration: "https://illustrations.popsy.co/blue/opened-umbrella.svg",
    background: {
      type: "color",
      value: "#f3f4f6",
    },
  },
};

export const shapeDividerHero: HeroSchema = {
  id: "hero-shapeDivider",
  type: "Hero",
  variant: "shapeDivider",
  isPublished: true,
  props: {
    title: "Smooth transitions, beautiful designs",
    subtitle: "Shape dividers that elevate your layout",
    alignment: "center",
    textColor: "#ffffff",
    padding: "100px 20px",
    width: "100%",
    height: "85vh",
    shapeDivider: "wave",
    background: {
      type: "gradient",
      value: ["#6366f1", "#a855f7"],
      gradientDirection: "to right",
      overlay: true,
      overlayOpacity: 0.25,
    },
  },
};

export const heroMap: Record<string, HeroSchema> = {
  centerhero: centerHero,
  splithero: splitHero,
  videohero: videoHero,
  minimalhero: minimalHero,
  formhero: formHero,
  carouselhero: carouselHero,
  statshero: statsHero,
  illustrationhero: illustrationHero,
  shapedividerhero: shapeDividerHero,
};
