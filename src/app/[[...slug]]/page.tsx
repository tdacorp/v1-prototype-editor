// app/[[...slug]]/page.tsx

import React from "react";
import Link from "next/link";

import Hero from "@/components/hero/Hero";
import { componentMap } from "@/data/componentsMap";
import type { HeroSchema } from "@/components/hero/types";

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
    // future: card: CardSchema;
  };

  // Helper function: render component dynamically by type
  const renderComponent = <T extends keyof ComponentSchema>(
    type: T,
    schema: ComponentSchema[T]
  ) => {
    switch (type) {
      case "hero":
        return <Hero schema={schema} />;
      // TODO: Add other components here as they’re created
      // case "card":
      //   return <Card schema={schema} />;
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
      <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Component Library
        </h1>
        <p className="text-gray-600 mb-12 text-center max-w-2xl">
          Browse and preview all available component types and their variants.
        </p>

        {/* 🔹 Render list of all component types */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {Object.entries(componentMap).map(([typeName]) => (
            <div
              key={typeName}
              className="border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
                {typeName}
              </h2>

              <Link
                href={`/dev/${typeName}`}
                className="mt-4 text-blue-600 font-medium hover:underline"
              >
                View All {typeName} Variants →
              </Link>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // ==============================
  // CASE 2: /dev/{type} → Variants Overview
  // ==============================
  if (prefix === "dev" && type && !variant) {
    const componentGroup = componentMap[type as keyof typeof componentMap];

    // Handle invalid component type gracefully
    if (!componentGroup) {
      return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-600">
          <h1 className="text-2xl font-semibold mb-2">
            Unknown Component Type
          </h1>
          <p>
            ❌ No components found for: <strong>{type}</strong>
          </p>
          <Link
            href="/dev"
            className="mt-4 text-blue-600 hover:underline font-medium"
          >
            ← Back to Library
          </Link>
        </main>
      );
    }

    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-10 capitalize">
          {type} Variants
        </h1>

        <Link
          href="/dev"
          className="mt-1 pb-5 text-blue-600 font-medium hover:underline"
        >
          ← Back to Component Library
        </Link>

        {/* 🔹 Render all variants for a component */}
        <div className="flex flex-col gap-12 w-full items-center">
          {Object.entries(componentGroup).map(([variantName, schema]) => (
            <div
              key={variantName}
              className="w-full max-w-5xl flex flex-col items-center border border-gray-200 rounded-xl shadow-sm bg-white"
            >
              <div className="w-full py-3 border-b text-center font-medium bg-gray-100 capitalize">
                Variant: {variantName}
              </div>
              {renderComponent(
                type as keyof ComponentSchema,
                schema as ComponentSchema[keyof ComponentSchema]
              )}
            </div>
          ))}
        </div>
      </main>
    );
  }

  // ==============================
  // CASE 3: /dev/{type}/{variant} → Specific Variant Preview
  // ==============================
  if (prefix === "dev" && type && variant) {
    const componentGroup = componentMap[type as keyof typeof componentMap];
    const schema = componentGroup?.[variant.toLowerCase()];

    // Handle invalid variant gracefully
    if (!schema) {
      return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-red-500">
          <h1 className="text-2xl font-semibold mb-2">Unknown Variant</h1>
          <p>
            ❌ <strong>{variant}</strong> is not a valid variant for{" "}
            <strong>{type}</strong>.
          </p>
          <Link
            href={`/dev/${type}`}
            className="mt-4 text-blue-600 hover:underline font-medium"
          >
            ← View All {type} Variants
          </Link>
        </main>
      );
    }

    // Handle rendering by type
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        {renderComponent(
          type as keyof ComponentSchema,
          schema as ComponentSchema[keyof ComponentSchema]
        )}
      </main>
    );
  }

  // ========================
  // CASE 4: 404 Fallback
  // ========================
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-gray-600 bg-gray-50">
      <h1 className="text-xl font-semibold">404 — Not Found</h1>
      <p className="text-sm text-gray-500 mt-2">
        This page does not match any known route.
      </p>
      <Link href="/" className="mt-4 text-blue-600 hover:underline font-medium">
        ← Go Home
      </Link>
    </main>
  );
}
