"use client";

import { useState } from "react";
import { SiderbarProps } from "./Sidebar.types";
import SidebarItems from "./SidebarItem";
import SidebarHeader from "./SidebarHeader";

export default function Sidebar({ links }: SiderbarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <aside
      className={`
        fixed top-0 left-0 h-full bg-white dark:bg-gray-900 shadow-lg
        transform transition-all duration-300 z-40
        ${collapsed ? "w-16" : "w-64"}
      `}
    >
      <SidebarHeader collapsed={collapsed} toggleCollapse={toggleCollapse} />
      <nav className="mt-4">
        <ul className="space-y-2">
          {links.map((link) => (
            <SidebarItems
              key={link.href}
              link={link}
              collapsed={collapsed}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
