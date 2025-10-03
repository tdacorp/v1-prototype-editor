import { Home, User, Calendar, LayoutDashboard, Folder, FileText } from "lucide-react";
// Add other icons as needed

export interface SidebarChildLink {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface SidebarGroup {
  title: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; 
  children: SidebarChildLink[];
}

export const sidebarGroups: SidebarGroup[] = [
  {
    title: "Tools",
    icon: Calendar, 
    children: [
      { label: "Calendar", href: "/calendar", icon: Calendar },
      { label: "My dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "Projects dashboard", href: "/projects", icon: Folder },
    ],
  },
  {
    title: "Projects and folders",
    icon: Folder,
    children: [
      { label: "Ad Campaign", href: "/ad-campaign", icon: FileText },
    ],
  },
  {
    title: "Datahub",
    icon: User,
    children: [
      { label: "Profile", href: "/profile", icon: User },
    ],
  },
];
