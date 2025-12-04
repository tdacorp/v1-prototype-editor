// types/sidebar.ts
export interface SidebarVariant {
  id: string;
  name: string;
  previewImage?: string;
  defaultProps: unknown; // canvas me add karne ke liye
}

export interface SidebarComponent {
  id: string;
  name: string;
  icon: string | React.FC<React.SVGProps<SVGSVGElement>>;
  category: string;
  variants: SidebarVariant[];
}

export interface SidebarCategory {
  id: string; // eg: "controls"
  name: string; // eg: "Controls"
  components: SidebarComponent[];
}

export interface SidebarState {
  categories: SidebarCategory[];
  isOpen: boolean;
}
