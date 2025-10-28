import React from "react";
import { Heading } from "./Heading";
import { HeadingSchema } from "./types";

interface HeadingGroupProps {
  items: HeadingSchema[];
}

export const HeadingGroup: React.FC<HeadingGroupProps> = ({ items }) => {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-50 pt-28 px-6 flex flex-col gap-4">
      {items.map((heading, idx) => (
        <Heading key={idx} {...heading} />
      ))}
    </section>
  );
};
