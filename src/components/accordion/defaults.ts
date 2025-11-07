import { AccordionGroupSchema } from "./types";

export const faqAccordion: AccordionGroupSchema = {
  id: "faq-section",
  type: "accordion-group",
  variant: "single",
  collapsible: true,
  iconPosition: "right",
  titleSize: "md",
  accordion: [
    {
      id: "acc1",
      type: "accordion",
      defaultOpen: true,
      title: "What is TDACorp?",
      content: "TDACorp is a tech company building AI powered learning apps.",
    },
    {
      id: "acc2",
      type: "accordion",
      title: "How does the platform work?",
      content:
        "Users sign up, explore courses and learn through guided interactive AI lessons.",
    },
    {
      id: "acc3",
      type: "accordion",
      title: "Is this platform free?",
      content: "Yes, basic content is free, premium requires subscription.",
    },
  ],
};

export const featuresAccordion: AccordionGroupSchema = {
  id: "features-section",
  type: "accordion-group",
  variant: "multiple",
  collapsible: true,
  iconPosition: "left",
  titleSize: "lg",
  accordion: [
    {
      id: "f1",
      type: "accordion",
      title: "AI Personalized Learning",
      content:
        "Each lesson is automatically customized to user learning patterns.",
    },
    {
      id: "f2",
      type: "accordion",
      title: "Progress Analytics",
      content: "Track your learning curve with live performance analytics.",
    },
    {
      id: "f3",
      type: "accordion",
      title: "Gamified Challenges",
      content: "Earn badges and rewards as you progress.",
    },
  ],
};

export const policyAccordion: AccordionGroupSchema = {
  id: "policy-section",
  type: "accordion-group",
  variant: "single",
  collapsible: false,
  iconPosition: "right",
  titleSize: "sm",
  accordion: [
    {
      id: "p1",
      type: "accordion",
      defaultOpen: true,
      title: "Refund Policy",
      content: "Refunds are available within 14 days of purchase.",
    },
    {
      id: "p2",
      type: "accordion",
      title: "Data Privacy",
      content: "Your personal data is encrypted and protected.",
    },
    {
      id: "p3",
      type: "accordion",
      title: "Usage Terms",
      content: "Users must follow community guidelines.",
    },
  ],
};

export const countryDropdownAccordion: AccordionGroupSchema = {
  id: "country-dropdown",
  type: "accordion-group",
  variant: "single",
  collapsible: true,
  iconPosition: "right",
  titleSize: "md",
  accordion: [
    {
      id: "c-india",
      type: "accordion",
      title: "India",
      content: "Selected Country: India",
      defaultOpen: true,
    },
    {
      id: "c-usa",
      type: "accordion",
      title: "USA",
      content: "Selected Country: USA",
    },
    {
      id: "c-uk",
      type: "accordion",
      title: "United Kingdom",
      content: "Selected Country: UK",
    },
  ],
};

export const accordionMap: Record<string, AccordionGroupSchema> = {
  faq: faqAccordion,
  features: featuresAccordion,
  policies: policyAccordion,
  country: countryDropdownAccordion,
};
