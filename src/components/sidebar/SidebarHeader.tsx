"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface SidebarHeaderProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}
export default function SidebarHeader({ collapsed, toggleCollapse }: SidebarHeaderProps) {
  return (
    <header className={`flex items-center justify-between border-b border-gray-900 dark:border-gray-700 bg-gray-2200
       ${collapsed ? "justify-center" : "justify-between"}
       p-4`}
      aria-label="Sidebar header"
    >
      {!collapsed && (
        <section className="flex items-center gap-2 overflow-hidden" aria-label="sideber branding">
          <Image
            src="/head.ico"
            alt="App logo"
            width={35}
            height={35}
            className="rounded"
          />
          <span className="font-bold text-2xl text-gray-800 dark:text-gray-100 transition-all duration-300">
           -crop
          </span>

        </section>
      )}
      <span className={`realtive group ${collapsed ? "w-full flex justify-center" : ""}`}>

        <button
          onClick={toggleCollapse}
          className={`p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 transition flex items-center justify-center`}
          title={collapsed ? "Expand" : "Collapse"}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </span>
    </header>
  )
}