"use client"

import Link from "next/link";
import { SidebarLink } from "./Sidebar.types";

interface SidebarItemProps {
    link: SidebarLink;
    collapsed: boolean;
    onClick?: () => void;
}

export default function SidebarItems({ link, collapsed, onClick }: SidebarItemProps) {
    const Icon = link.icon;
    return (
        <li>
            <Link
                href={link.href}
                className="block px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={onClick}
            >
                <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!collapsed && <span className="whitespace-nowrap">{link.label}</span>}
                </div>
            </Link>
        </li>
    );
}