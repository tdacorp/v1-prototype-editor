"use client"
import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import { sidebarGroups } from "./SidebarData";
import SidebarGroup from "./SidebarGroup";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <aside className={`fixed top-0 left-0 h-full bg-black shadow-lg border transition-all duration-300 z-40
     ${collapsed ? "w-14" : "w-45"}`}
      aria-label="Sidebar navigarion"
    >
      <SidebarHeader collapsed={collapsed} toggleCollapse={toggleCollapse} />
      <nav className="mt-3 px-1"
        aria-label="Main sidebar menu"
      >
        {sidebarGroups.map((group) => (
          <SidebarGroup key={group.title} group={group} collapsed={collapsed} />
        ))}
      </nav>
    </aside>
  );
}
