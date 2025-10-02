  "use client"
import { Home, User } from "lucide-react";
import { SidebarLink } from "./Sidebar.types";

export const links: SidebarLink[] = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/profile", label: "Profile", icon: User },
];