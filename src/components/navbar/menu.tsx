"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";


export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/home", isActive: pathname.includes("/home") },
    { name: "Services", href: "/services", isActive: pathname.includes("/services") },
    { name: "About", href: "/about", isActive: pathname.includes("/about") },
    { name: "Contact", href: "/contact", isActive: pathname.includes("/contact") },
  ];

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded hover:bg-gray-200 transition-colors"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <nav className="flex flex-col mt-2 gap-2 bg-gray-100 p-2 rounded shadow-md">
          {links.map(({ name, href, isActive }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-3 py-2 rounded transition-colors",
                isActive ? "bg-blue-100 font-bold text-blue-600" : "text-black hover:bg-blue-200"
              )}
            >
              {name}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
