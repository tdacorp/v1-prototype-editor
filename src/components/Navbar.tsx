"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavLink = { name: string; href: string };

type NavbarProps = {
  logo?: string;
  brand?: string;
  links?: NavLink[];
  userName?: string;
};

export default function Navbar({
  logo = "",
  brand = "TDACorp",
  links = [],
  userName = "User",
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black border-b shadow-sm flex items-center justify-between px-4 md:px-6 py-3 text-white relative">
      {/* Left: Logo + Hamburger */}
      <div className="flex items-center gap-3">
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Logo / Brand */}
             <Link href="/" className="flex items-center gap-2">
          {brand && (
             <span className="font-bold text-lg text-red-600">{brand}</span>
            
          )}
        
        </Link>
      </div>
    {/*   <span className="font-bold text-lg text-red-600">{brand}</span>
      </div> */}

      {/* Center: Navigation links (desktop) */}
      <nav className="hidden md:flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium hover:text-blue-400"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Right: User avatar / name */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-9 h-9 rounded-full bg-gray-300"></div>
        <span className="hidden md:block font-medium">{userName}</span>
      </div>

      {/* Mobile Menu (slide-down) */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-black flex flex-col md:hidden border-t">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-sm font-medium hover:bg-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
