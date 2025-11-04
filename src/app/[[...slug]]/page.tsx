import pagesData from "@/data/page.json";
import NotFoundPage from "../not-found";

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const slugArray = Array.isArray(params?.slug) ? params.slug : [];
  const fullPath = slugArray.join("/");

  const page = pagesData.pages.find((p) => p.slug === fullPath) || null;

  if (!page) {
    return (
      <main className="p-8">
        <NotFoundPage />
      </main>
    );
  }
  return (
    <main className="p-6 mt-9">
     <h1>Welcome to the Editor</h1>
    </main>
  );
}
