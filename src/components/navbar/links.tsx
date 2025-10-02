"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Links = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/home", isActive: pathname.includes("/home") },
    {
      name: "Services",
      href: "/services",
      isActive: pathname.includes("/services"),
    },
    { name: "About", href: "/about", isActive: pathname.includes("/about") },
    {
      name: "Contact",
      href: "/contact",
      isActive: pathname.includes("/contact"),
    },
  ];

  return (
    <section className="hidden sm:flex gap-4">
      {links.map(({ name, href, isActive }) => (
        <Link
          key={name}
          href={href}
          className={cn(
            "px-3 py-1 text-[1rem] rounded transition-colors",
            "text-black hover:bg-blue-200",
            isActive && "font-bold text-blue-600 bg-blue-100"
          )}
        >
          {name}
        </Link>
      ))}
    </section>
  );
};

export default Links;
