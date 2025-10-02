"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface SidebarHeaderProps {
  collapsed: boolean;
  toggleCollapse: () => void;
}
export default function SidebarHeader({ collapsed, toggleCollapse }: SidebarHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 overflow-hidden">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={32}
          height={32}
          className="rounded"
        />
        <span
          className={`
            font-bold text-lg text-gray-800 dark:text-gray-100 transition-all duration-300
            ${collapsed ? "hidden" : "block"}
          `}
        >
          <span className="hidden sm:inline lg:hidden">TDA</span> 
          <span className="hidden lg:inline">TheDarkArtist</span> 
        </span>

      </div>
      <button
        onClick={toggleCollapse} // add this
        className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        title={collapsed ? "Expand" : "Collapse"}
      >
        {collapsed ? (
          <ChevronRight className="w-5 h-5" />
        ) : (
          <ChevronLeft className="w-5 h-5" />
        )}
      </button>

    </div>
  )
}