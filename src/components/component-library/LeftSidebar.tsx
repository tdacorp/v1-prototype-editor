"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRef, useState } from "react";
import { useDrag } from "react-dnd";

interface VariantData {
  componentId: string;
  variantId: string;
  variantName: string;
}

interface LeftSidebarProps {
  onDrop: (data: VariantData) => void;
}

export default function LeftSidebar({}: LeftSidebarProps) {
  const { categories } = useSelector((state: RootState) => state.sidebar);
  const [search, setSearch] = useState("");
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const filteredCategories = categories.map((cat) => ({
    ...cat,
    components: cat.components.filter(
      (comp) =>
        comp.name.toLowerCase().includes(search.toLowerCase()) ||
        comp.variants.some((v) =>
          v.name.toLowerCase().includes(search.toLowerCase())
        )
    ),
  }));

  return (
    <aside className="w-72 bg-black text-white p-4 border-r border-gray-800 overflow-y-auto">
      <input
        type="text"
        placeholder="Search components..."
        className="w-full px-3 py-2 rounded-md mb-4 text-sm
               bg-gray-900 text-white border border-gray-700
               placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="space-y-3">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-md border border-gray-700 bg-gray-900"
          >
            <button
              className="w-full text-left px-3 py-2 font-medium bg-gray-900 hover:bg-gray-800"
              onClick={() =>
                setOpenCategory((prev) =>
                  prev === category.id ? null : category.id
                )
              }
            >
              {category.name}
            </button>

            {openCategory === category.id && (
              <div className="p-3 space-y-3 bg-black border-t border-gray-800">
                {category.components.length === 0 && (
                  <p className="text-xs text-gray-500 px-2">
                    No components found
                  </p>
                )}

                {category.components.map((component) => (
                  <div key={component.id}>
                    <p className="font-semibold text-sm text-gray-300 px-1">
                      {component.name}
                    </p>

                    <div className="mt-2 space-y-1">
                      {component.variants.map((variant) => (
                        <DraggableVariant
                          key={variant.id}
                          componentId={component.id}
                          variant={variant}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );

  function DraggableVariant({ componentId, variant }: any) {
    const dragRef = useRef<HTMLDivElement | null>(null);
    const [{ isDragging }, drag] = useDrag({
      type: "VARIANT",
      item: {
        componentId,
        variantId: variant.id,
        variantName: variant.name,
        schema: variant.defaultProps,
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });
    drag(dragRef);

    return (
      <div
        ref={dragRef}
        className={`p-2 rounded-md cursor-grab active:cursor-grabbing 
              bg-gray-900 border border-gray-700 text-gray-200 text-xs
              hover:bg-gray-800 transition ${isDragging ? "opacity-40" : ""}`}
      >
        {variant.name}
      </div>
    );
  }
}
