export interface SidebarLink {
    label: string;
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface SiderbarProps {
    links: SidebarLink[];
}