import React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import Link from "next/link"
import { LuSettings, LuLogIn, LuLogOut, LuCommand } from "react-icons/lu"
import { GiWolfHead } from "react-icons/gi"
import { Button } from "../ui/button"
import { auth, signOut } from "../../../auth"

export const Menu = async () => {
  const session = await auth()

  if (!session?.user) {
    return (
      <Link
        className="hidden sm:block text-base p-2 dark:text-cyan-600 text-blue-600 font-semibold"
        href="/auth"
      >
        Login
      </Link>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hidden sm:flex" asChild>
        <Button
          variant="ghost"
          className="flex p-1 dark:hover:bg-red-900 items-center gap-1.5 rounded-full"
        >
          {session.user.image ? (
            <Image
              src={session.user.image || ""}
              className="border dark:border-zinc-900 border-gray-200 rounded-full size-7"
              alt="user image"
              height={28}
              width={28}
            />
          ) : (
            <GiWolfHead className="h-5 w-5" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 w-40" align="end">
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href={`/${session.user.username}`}>
            <LuSettings className="mr-2" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" asChild>
          <Link href={`/settings`}>
            <LuSettings className="mr-2" />
            Settings
          </Link>
        </DropdownMenuItem>
        {session.user.access === "ROOT" && (
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href={`/tda/c2c`}>
              <LuCommand className="mr-2" />
              C2C
            </Link>
          </DropdownMenuItem>
        )}
        <div className="border-b dark:border-zinc-900 mt-1" />
        {!session?.user ? (
          <DropdownMenuItem>
            <LuLogIn className="mr-2" />
            <Link href="/auth">Login</Link>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <form
              className="w-full"
              action={async () => {
                "use server"
                await signOut()
              }}
            >
              <button className="flex items-center w-full" type="submit">
                <LuLogOut className="mr-2" />
                Log Out
              </button>
            </form>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
