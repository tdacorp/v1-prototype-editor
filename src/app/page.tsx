"use client";

import { Sidebar } from "@/components/Sliderbar";
import { links } from "@/components/Sliderbar/SidebarData";

export default function Home() {
  return (
    <div className="flex">

      <Sidebar links={links} />


      <main className="flex-1 p-6 ml-0 lg:ml-64">
        <h1 className="text-3xl font-bold">Welcome to CMS</h1>
        <p className="mt-4">This is the main content area.</p>
      </main>
    </div>
  );
}
