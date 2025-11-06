
export interface ComponentVariant {
  id: string;
  name: string;
  defaultProps?: Record<string, any>;
  previewImage?: string;
}

export interface AvailableComponent {
  id: string;
  name: string;
  icon: string | React.FC<React.SVGProps<SVGSVGElement>>;
  variants: ComponentVariant[];
  category?: string;
}

// Redux State Interfaces
export interface ComponentsState {
  availableComponents: AvailableComponent[];
  selectedComponentId: string | null;
}

// Data for drag-and-drop
export interface DraggedComponentData {
  type: 'COMPONENT' | 'COMPONENT_VARIANT';
  componentId: string;
  variantId: string | null;
}