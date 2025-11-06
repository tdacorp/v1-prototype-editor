"use client";

import { ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
  iconPosition?: "left" | "right";
  titleSize?: "sm" | "md" | "lg";
};

const titleSizeMap = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export function Accordion({
  title,
  content,
  isOpen,
  onToggle,
  iconPosition = "right",
  titleSize = "md",
}: Props) {
  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-sm transition-all">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3 text-left"
      >
        {iconPosition === "left" && (
          <span className="text-gray-500 mr-2">
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        )}

        <span
          className={`${titleSizeMap[titleSize]} font-medium text-gray-900`}
        >
          {title}
        </span>

        {iconPosition === "right" && (
          <span className="text-gray-500">
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 px-4 pb-4" : "max-h-0 px-4 pb-0"
        }`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
