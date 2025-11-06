export type LayoutDirection = "horizontal" | "vertical";

export interface LayoutNodeBase {
  id: string;
  type: "layout" | "component";
}

export interface LayoutComponent<TProps = Record<string, unknown>>
  extends LayoutNodeBase {
  type: "component";
  props: TProps & {
    label: string;
  };
}

export interface LayoutContainer extends LayoutNodeBase {
  type: "layout";
  direction: LayoutDirection;
  resizable?: boolean;
  sizes?: number[]; // e.g. [30, 70] => percentage widths
  children: LayoutNode[];
}

export type LayoutNode = LayoutComponent | LayoutContainer;
