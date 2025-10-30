import React from "react";
import Link from "next/link";
import Hero from "@/components/hero/Hero";
import { componentMap } from "@/data/componentsMap";

export default async function ClientPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const resolvedParams = await params;
  const slugArray = Array.isArray(resolvedParams?.slug)
    ? resolvedParams.slug.map((s) => decodeURIComponent(s))
    : [];

  const [prefix, type, variant] = slugArray;

  if (prefix === "dev" && !type) {
    return (
      <main className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Component Library
        </h1>
        <p className="text-gray-600 mb-12 text-center max-w-2xl">
          Browse and preview all available component types and their variants.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
          {Object.entries(componentMap).map(([typeName]) => {
            // const firstVariant = Object.values(variants)[0];
            return (
              <div
                key={typeName}
                className="border border-gray-200 rounded-2xl shadow-sm bg-white hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
                  {typeName}
                </h2>

                {/* {firstVariant && <Hero schema={firstVariant as any} />} */}

                <Link
                  href={`/dev/${typeName}`}
                  className="mt-4 text-blue-600 font-medium hover:underline"
                >
                  View All {typeName} Variants →
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    );
  }

  if (prefix === "dev" && type && !variant) {
    const componentGroup = componentMap[type as keyof typeof componentMap];

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

        <div className="flex flex-col gap-12 w-full items-center">
          {Object.entries(componentGroup).map(([variantName, schema]) => (
            <div
              key={variantName}
              className="w-full max-w-5xl flex flex-col items-center border border-gray-200 rounded-xl shadow-sm bg-white"
            >
              <div className="w-full py-3 border-b text-center font-medium bg-gray-100 capitalize">
                Variant: {variantName}
              </div>
              <Hero schema={schema} />
            </div>
          ))}
        </div>

        
      </main>
    );
  }

  if (prefix === "dev" && type && variant) {
    const componentGroup = componentMap[type as keyof typeof componentMap];
    const schema = componentGroup?.[variant.toLowerCase()];

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

    switch (type) {
      case "hero":
        return (
          <main className="min-h-screen flex items-center justify-center bg-gray-50">
            <Hero schema={schema} />
          </main>
        );

      default:
        return (
          <main className="min-h-screen flex flex-col items-center justify-center text-gray-600 bg-gray-50">
            <h1 className="text-xl font-semibold mb-1">Renderer Missing</h1>
            <p>No renderer available for component type: {type}</p>
            <Link
              href="/dev"
              className="mt-4 text-blue-600 hover:underline font-medium"
            >
              ← Back to Library
            </Link>
          </main>
        );
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-gray-600 bg-gray-50">
      <h1 className="text-xl font-semibold">404 — Not Found</h1>
      <p className="text-sm text-gray-500 mt-2">
        This page does not match any known route.
      </p>
      <Link
        href="/"
        className="mt-4 text-blue-600 hover:underline font-medium"
      >
        ← Go Home
      </Link>
    </main>
  );
}
