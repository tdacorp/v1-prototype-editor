export type ComponentType = "hero" | "layoutresizable";

export interface ComponentInstance {
  id: string;
  type: ComponentType;
  variant: string;
  props: any;
}
