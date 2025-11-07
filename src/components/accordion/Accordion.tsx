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
  const contentId = `accordion-content-${title
    .replace(/\s+/g, "-")
    .toLowerCase()}`;

  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-sm transition-all">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3 text-left"
        aria-expanded={isOpen}
        aria-controls={contentId}
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
        id={contentId}
        role="region"
        aria-hidden={!isOpen}
        className={`transition-all duration-300 ${
          isOpen ? "px-4 pb-4" : "h-0 overflow-hidden px-4"
        }`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
