// app/[[...slug]]/page.tsx

import React from "react";
import Link from "next/link";

import Hero from "@/components/hero/Hero";
import { componentMap } from "@/data/componentsMap";
import type { HeroSchema } from "@/components/hero/types";
import { LayoutNode } from "@/components/layout-resizable/types";
import LayoutRenderer from "@/components/layout-resizable/LayoutRenderer";

/**
 * Page: ClientPage
 *
 * Renders a dynamic developer preview interface for all components
 * and their variants (Hero, Card, etc.) based on the route structure:
 *   /dev               → Component library overview
 *   /dev/{type}        → All variants for a given component type
 *   /dev/{type}/{var}  → Specific variant preview
 *
 * NOTE:
 * This page is meant for internal documentation and visual testing.
 * Not intended for production user-facing routes.
 */
export default async function ClientPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  // Resolve params safely — Next.js passes them as a promise in async routes
  const resolvedParams = await params;

  // Decode slugs to support human-readable URLs (e.g., spaces or encoded chars)
  const slugArray = Array.isArray(resolvedParams?.slug)
    ? resolvedParams.slug.map((s) => decodeURIComponent(s.toLowerCase()))
    : [];

  const [prefix, type, variant] = slugArray;

  // Define components-to-schema mapping
  type ComponentSchema = {
    hero: HeroSchema;
    layoutresizable: LayoutNode;
    // future: card: CardSchema;
  };

  // Helper function: render component dynamically by type
  const renderComponent = <T extends keyof ComponentSchema>(
    type: T,
    schema: ComponentSchema[T]
  ) => {
    switch (type) {
      case "hero":
        return <Hero schema={schema as HeroSchema} />;
      // TODO: Add other components here as they’re created
      // case "card":
      //   return <Card schema={schema} />;
      case "layoutresizable":
        return (
          <div className="h-[90vh] w-full p-2">
            <LayoutRenderer layout={schema as LayoutNode} />
          </div>
        );
      default:
        return (
          <div className="p-8 text-gray-500 text-center">
            No renderer available for type: <strong>{type}</strong>
          </div>
        );
    }
  };

  // ========================
  // CASE 1: /dev → Library Overview
  // ========================
  if (prefix === "dev" && !type) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white px-8 py-20 flex flex-col gap-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            Component Library
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Browse and preview UI components and their variants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto w-full">
          {Object.keys(componentMap).map((typeName) => (
            <Link
              key={typeName}
              href={`/dev/${typeName}`}
              className="group p-8 border border-zinc-800 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/60 transition-all shadow-sm hover:shadow-lg flex flex-col items-center"
            >
              <h2 className="text-2xl font-medium capitalize group-hover:text-white text-zinc-300 transition">
                {typeName}
              </h2>

              <span className="mt-4 text-blue-400 text-sm group-hover:underline">
                View Variants →
              </span>
            </Link>
          ))}
        </div>
      </main>
    );
  }

  // ==============================
  // CASE 2: /dev/{type} → Variants Overview
  // ==============================
  if (prefix === "dev" && type && !variant) {
    const group = componentMap[type as keyof typeof componentMap];

    // Handle invalid component type gracefully
    if (!group) {
      return (
        <main className="min-h-screen flex items-center justify-center bg-black text-zinc-400">
          Unknown component type: {type}
        </main>
      );
    }

    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-3xl font-semibold capitalize">
              {type} Variants
            </h1>
            <Link href="/dev" className="text-blue-400 hover:underline text-sm">
              ← Back to Library
            </Link>
          </div>

          <div className="flex flex-col gap-16">
            {Object.entries(group).map(([variantName, schema]) => (
              <div
                key={variantName}
                className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="text-lg font-medium capitalize text-zinc-300">
                  {variantName}
                </div>

                <div className="border border-zinc-800 rounded-lg overflow-hidden">
                  {renderComponent(type as keyof ComponentSchema, schema)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  // ==============================
  // CASE 3: /dev/{type}/{variant} → Specific Variant Preview
  // ==============================
  if (prefix === "dev" && type && variant) {
    const group = componentMap[type as keyof typeof componentMap];
    const schema = group?.[variant.toLowerCase()];

    // Handle invalid variant gracefully
    if (!schema) {
      return (
        <main className="min-h-screen flex items-center justify-center bg-black text-red-400">
          Variant not found.
        </main>
      );
    }

    // Handle rendering by type
    return (
      <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-8 py-24">
        <div className="absolute top-8 left-8 py-6">
          <Link
            href={`/dev/${type}`}
            className="text-blue-400 hover:underline text-sm"
          >
            ← Back
          </Link>
        </div>

        <div className="w-full max-w-6xl">
          {renderComponent(type as keyof ComponentSchema, schema)}
        </div>
      </main>
    );
  }

  // ========================
  // CASE 4: 404 Fallback
  // ========================
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-semibold tracking-tight text-zinc-200">
          404
        </h1>

        <p className="text-zinc-400 max-w-md leading-relaxed">
          The page you are looking for doesn’t exist or is unavailable.
        </p>

        <div className="flex items-center gap-3 pt-4">
          <Link
            href="/"
            className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition text-sm font-medium"
          >
            Go Home
          </Link>

          <Link
            href="/dev"
            className="px-5 py-2 rounded-lg border border-zinc-700 hover:border-zinc-500 transition text-sm font-medium text-zinc-300"
          >
            Component Library
          </Link>
        </div>
      </div>
    </main>
  );
}
