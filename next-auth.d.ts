import { DefaultSession } from "next-auth"
import { userRoleEnum } from "@/lib/db/schema"

export type ExtendedUser = DefaultSession["user"] & {
  access: userRoleEnum
  username: string
  isTwoFactorEnabled: boolean
  isOAuth: boolean
}

declare module "next-auth" {
  interface Session {
    user: ExtendedUser
  }
}
