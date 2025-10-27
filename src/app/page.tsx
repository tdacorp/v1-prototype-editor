"use client"



import Buttoncomp from "@/components/button/button"
import { defaultButton, gradientButton, iconLeftButton, iconRightButton, outlinedButton } from "@/components/button/defaults"
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

    <div className="min-h-screen p-10">

      <Buttoncomp data={defaultButton} />
      <Buttoncomp data={outlinedButton} />
      <Buttoncomp data={gradientButton} />
      <Buttoncomp data={iconLeftButton} />    
      <Buttoncomp data={iconRightButton} />   
    </div>
    </main>
  )
}
