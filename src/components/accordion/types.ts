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
