import type { Metadata } from "next"
import "@/styles/globals.css"
import { geistMono, geistSans } from "@/lib/fonts"
import { SessionProvider } from "next-auth/react"
import { Navbar } from "@/components/navbar"

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
