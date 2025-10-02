"use client"

import { Button } from "@/components/ui/button"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function Home() {
  const session = useSession()
  return (
    <main className="p-6">
      <div className="flex justify-end">
        {session.status === "authenticated" ? (
          <Button onClick={() => signOut()}>Sign out</Button>
        ) : (
          <Button asChild>
            <Link href="/auth">Sign in</Link>
          </Button>
        )}
      </div>
      <h1>Editor - TDACorp</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  )
}
