import type { Metadata } from "next"
import "@/styles/globals.css"
import { geistMono, geistSans } from "@/lib/fonts"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: {
    template: "%s - TDACorp",
    default: "Dashboard - TDACorp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navbar */}
        <Navbar
          logo="TDA"
          brand="TDACorp "
          links={[
            { name: "Dashboard", href: "/" },
            { name: "Content", href: "/content" },
            { name: "Users", href: "/users" },
            { name: "Settings", href: "/settings" },
          ]}
        
        />
        {children}
      </body>
    </html>
  )
}
