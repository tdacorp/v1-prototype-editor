"use client";

import { HeaderProps } from "./header_types";




export default function Header({
  logo,
  links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
    userName = "User",
}: HeaderProps) {
  return (
   <>
   
   </>
  );
}
