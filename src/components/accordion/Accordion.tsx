"use client";

import { useEffect, useRef } from "react";
import { useId } from "react";
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
  const sectionId = useId();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    if (isOpen) {
      contentRef.current.style.maxHeight =
        contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.maxHeight = "0px";
    }
  }, [isOpen]);

  return (
    <div className="rounded-xl border border-white/10 bg-[#101010] transition-colors">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={sectionId}
        className="
          group flex w-full items-center justify-between
          px-4 py-3 rounded-xl text-left
          hover:bg-white/5
          focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
          focus-visible:ring-offset-black
          transition-colors
        "
      >
        {iconPosition === "left" && (
          <span className="text-gray-400 mr-2 group-hover:text-white transition-colors">
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        )}

        <span className={`${titleSizeMap[titleSize]} font-medium text-white`}>
          {title}
        </span>

        {iconPosition === "right" && (
          <span className="text-gray-400 ml-2 group-hover:text-white transition-colors">
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </span>
        )}
      </button>

      <div
        id={sectionId}
        ref={contentRef}
        style={{ maxHeight: "0px" }}
        className="
          overflow-hidden
          transition-[max-height] duration-300 ease-in-out
        "
      >
        <div className="px-4 pb-4 pt-1">
          <p className="text-sm text-gray-300 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}
