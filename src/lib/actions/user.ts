"use server"

import { and, eq, ne, InferInsertModel } from "drizzle-orm"
import { db } from "../db"
import { users } from "../db/schema"

export type User = InferInsertModel<typeof users>

// -------------------- GET BY ID --------------------

export const getUserById = async (userId: string): Promise<User | null> => {
  if (!userId) return null

  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, userId))
      .limit(1)

    return user ?? null
  } catch (err) {
    console.error("[-] getUserById error:", err)
    return null
  }
}

// -------------------- GET BY USERNAME --------------------

export const getUserByUsername = async (
  username: string
): Promise<User | null> => {
  if (!username) return null

  try {
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1)

    return user ?? null
  } catch (err) {
    console.error("[-] getUserByUsername error:", err)
    return null
  }
}

// -------------------- UPDATE USER --------------------

export const updateUser = async (input: Partial<User>): Promise<void> => {
  const { id, username, email, ...rest } = input
  if (!id) throw new Error("User ID is required.")

  const updates = Object.fromEntries(
    Object.entries({ username, email, ...rest }).filter(
      ([_, v]) => v !== undefined
    )
  )

  if (Object.keys(updates).length === 0) {
    throw new Error("No valid fields to update.")
  }

  // Uniqueness checks
  if (username) {
    const existing = await db.query.users.findFirst({
      where: and(eq(users.username, username), ne(users.id, id)),
    })
    if (existing) throw new Error("Username is already taken.")
  }

  if (email) {
    const existing = await db.query.users.findFirst({
      where: and(eq(users.email, email), ne(users.id, id)),
    })
    if (existing) throw new Error("Email is already in use.")
  }

  try {
    await db
      .update(users)
      .set({
        ...updates,
        updatedAt: new Date(),
      })
      .where(eq(users.id, id))
  } catch (err) {
    console.error("[-] updateUser DB error:", err)
    throw new Error("Failed to update user.")
  }
}
