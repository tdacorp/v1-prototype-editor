import { db } from "@/lib/db"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { users } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { getUserById } from "@/lib/actions/user"

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (!user.id || !account || !profile) return false

      return true
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (session.user) {
        session.user.name = token.name
        session.user.username = token.username as string
        session.user.email = token.email as string
        session.user.image = token.picture
        session.user.access = token.access
      }

      return session
    },

    async jwt({ token, account, profile }) {
      if (!token.sub) return token

      const existingUser = await getUserById(token.sub)

      if (!existingUser) return token

      let username: string | undefined

      if (account && profile) {
        if (account.provider === "github" && profile.login) {
          username = profile.login as string
        } else if (account.provider === "google" && profile.email) {
          username = profile.email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "")
        }

        if (username && !existingUser.username) {
          try {
            await db
              .update(users)
              .set({ username })
              .where(eq(users.id, token.sub))

            console.log("[+] Created username", username)
          } catch (e) {
            console.error("[-] Failed to update username:\n", e)
          }
        }
      }

      token.username = existingUser.username
      token.name = existingUser.name
      token.access = existingUser.role
      token.email = existingUser.email
      token.picture = existingUser.image
      token.role = existingUser.role

      return token
    },
  },
})
