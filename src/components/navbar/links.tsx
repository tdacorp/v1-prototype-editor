"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const Links = () => {
  const pathname = usePathname()

  const links = [
    {
      name: "Link   0",
      href: "https://thedarkartist.in",
      isActive: pathname.includes("TheDarkArtist") ? true : false,
    },
    {
      name: "Link 1",
      href: "https://thedarkartist.in",
      isActive: pathname.includes("TheDarkArtist") ? true : false,
    },
    {
      name: "Link 2",
      href: "https://thedarkartist.in",
      isActive: pathname.includes("TheDarkArtist") ? true : false,
    },
  ]

  return (
    <section className="hidden sm:flex">
      {links.map(({ name, href, isActive }) => (
        <Link
          className={cn(
            "text-[1rem] px-2 py-1",
            "text-zinc-800 hover:text-red-300 dark:text-zinc-300 dark:hover:text-red-300",
            isActive && "dark:text-red-600 text-red-600 font-bold"
          )}
          key={name}
          href={href}
        >
          {name}
        </Link>
      ))}
    </section>
  )
}
