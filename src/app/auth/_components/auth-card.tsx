"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { Loader, Github } from "lucide-react"

const AuthCard = () => {
  const params = useSearchParams()
  const callbackUrl = params.get("callbackUrl") || "/"

  const [loading, setLoading] = useState(false)

  return (
    <Card className="w-full max-w-md shadow-lg rounded-2xl border border-red-600">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight">
          Welcome to TDACorp
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Sign in to continue to the Universal Editor
        </p>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <Button
          onClick={() => {
            setLoading(true)
            signIn("github", { redirectTo: callbackUrl })
          }}
          className="w-full gap-2"
          size="lg"
          disabled={loading}
        >
          {loading ? (
            <Loader className="size-4 animate-spin" />
          ) : (
            <Github className="size-4" />
          )}
          Continue with GitHub
        </Button>
      </CardContent>
      <CardFooter className="justify-center text-xs text-muted-foreground">
        TDACorp © {new Date().getFullYear()}
      </CardFooter>
    </Card>
  )
}

export default AuthCard
