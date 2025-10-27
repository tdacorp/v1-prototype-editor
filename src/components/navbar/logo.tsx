"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

export const Logo = () => {
  return (
    <Link className={cn("text-2xl text-red-600 font-black")} href="/">
      <span className="hidden md:block">TDACorp</span>
    </Link>
  )
}
