"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { SidebarGroup } from "./SidebarData";

export default function SidebarGroup({ group, collapsed }: { group: SidebarGroup; collapsed: boolean }) {
    const [open, setOpen] = useState(false);

    const ToggleIcon = open ? ChevronDown : ChevronRight;
    const handleToggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <section aria-label="sidebar navigation" role="tree" className="mb-2">
            <ul role="group">
                <li role="treeitem" aria-expanded={open} aria-selected={false}>
                    <button
                        type="button"
                        onClick={handleToggle}
                        className="flex items-center w-full px-2 py-2 text-left cursor-pointer rounded transition "
                        aria-expanded={open}
                        aria-controls={`sidebar-group-${group.title.replace(/\s+/g, "-").toLowerCase()}`}
                        tabIndex={0}
                    >
                        {group.icon && (
                            <group.icon
                                className={`w-4 h-4 mr-2 hover:text-red-400 ${collapsed ? "mx-auto" : "mr-2"
                                    }`}
                                aria-hidden="true"
                            />
                        )}

                        {!collapsed && <span className="flex-1 text-white font-bold size ">{group.title}</span>}
                        {!collapsed && <ToggleIcon className="w-4 h-4 text-gray-400" aria-hidden="true" />}
                    </button>

                    {open && !collapsed && (
                        <ul
                            id={`sidebar-group-${group.title.replace(/\s+/g, "-").toLowerCase()}`}
                            className="pl-4 mt-1 space-y-1"
                            role="group"
                        >
                            {group.children.map((child) => (
                                <li key={child.href}>
                                    <Link
                                        href={child.href}
                                        className="flex items-center px-1 py-1 rounded hover:bg-gray-700 text-gray-300 transition group size"
                                        aria-label={child.label}
                                    >
                                        <child.icon className="w-3 h-3 mr-2 text-gray-300 group-hover:text-blue-400 transition" aria-hidden="true" />
                                        <span>{child.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    )}
                </li>
            </ul>
        </section>
    );
}
