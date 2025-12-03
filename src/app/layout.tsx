import type { Metadata } from "next"
import "@/styles/globals.css"
import { geistMono, geistSans } from "@/lib/fonts"
import { SessionProvider } from "next-auth/react"
import { Navbar } from "@/components/navbar"
import { Providers } from "@/redux/provider" // Import your Redux Providers
import ComponentLibray from "@/components/component-library/component-library" // Import your sidebar component

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark flex flex-col h-screen`} // Added flex-col h-screen for full height layout
      >
        <SessionProvider>
          {/* Your Redux Providers wrap the entire app content that needs Redux */}
          <Providers> 
            <Navbar /> {/* This will be your top navigation bar */}
            
            {/* Main content area below the Navbar, horizontally split between sidebar and actual page content */}
            <div className="flex flex-1 overflow-hidden"> {/* flex-1 makes it take remaining vertical space */}
              {/* Left Sidebar */}
              <ComponentLibray /> 
              
              {/* Main Page Content (your canvas and other pages) */}
              <main className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                {children}
              </main>
            </div>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  )
}