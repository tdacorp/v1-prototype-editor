"use client";

import { Button } from "@/components/ui/button";
import pagesData from "@/data/page.json";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import NotFoundPage from "../not-found";

export default function ClientPage({ params }: { params: { slug?: string[] } }) {
  const session = useSession();
  const slugArray = Array.isArray(params?.slug) ? params.slug : [];
  const fullPath = slugArray.join("/");

  const page = pagesData.pages.find((p) => p.slug === fullPath) || null;

  if (!page) {
    return (
      <main className="p-8">
        <div className="flex justify-end mb-4">
          {session.status === "authenticated" ? (
            <Button onClick={() => signOut()}>Sign out</Button>
          ) : (
            <Button asChild>
              <Link href="/auth">Sign in</Link>
            </Button>
          )}
        </div>
        <NotFoundPage />
      </main>
    );
  }

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
  );
}
