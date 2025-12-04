"use client";

import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addComponent, removeComponent } from "@/redux/slices/canvas/slice";
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import CanvasComponentRenderer from "@/components/canvas/CanvasComponentRenderer";

type DragItem = {
  componentId: string;
  variantId: string;
  variantName: string;
  schema: Record<string, unknown>;
};

export default function CanvasEditor() {
  const dispatch = useDispatch();
  const components = useSelector((s: RootState) => s.canvas.components);

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [{ isOver }, drop] = useDrop<DragItem, unknown, { isOver: boolean }>({
    accept: "VARIANT",
    drop: (item) => {
      dispatch(
        addComponent({
          id: uuid(),
          type: "hero",
          variant: item.variantId,
          props: item.schema || {},
        })
      );
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  function removeSelected() {
    if (selectedId) dispatch(removeComponent(selectedId));
    setSelectedId(null);
  }

  const dropRef = useRef<HTMLDivElement | null>(null);
  drop(dropRef);

  return (
    <div className="flex-1 relative bg-[#ffffff] overflow-auto">
      <div
        ref={dropRef}
        className={`min-h-screen p-10 transition ${
          isOver ? "bg-gray-800/50" : ""
        }`}
      >
        {components.map((cmp) => (
          <div
            key={cmp.id}
            className={`border rounded-md p-2 mb-4 cursor-pointer ${
              selectedId === cmp.id ? "border-blue-400" : "border-gray-700"
            }`}
            onClick={() => setSelectedId(cmp.id)}
          >
            <CanvasComponentRenderer component={cmp} />
          </div>
        ))}

        {components.length === 0 && (
          <p className="text-gray-500 text-center mt-20">
            Drag & drop components here
          </p>
        )}
      </div>

      {selectedId && (
        <button
          className="absolute top-5 right-5 bg-red-500 text-white px-3 py-2 rounded"
          onClick={removeSelected}
        >
          Delete
        </button>
      )}
    </div>
  );
}
