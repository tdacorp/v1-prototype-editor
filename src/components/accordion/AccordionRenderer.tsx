"use client";

import { useState } from "react";
import { Accordion } from "./Accordion";
import { AccordionGroupSchema } from "./types";

export function AccordionRenderer({
  schema,
}: {
  schema: AccordionGroupSchema;
}) {
  const [openIds, setOpenIds] = useState<string[]>(
    schema.accordion.filter((a) => a.defaultOpen).map((a) => a.id)
  );

  function toggle(id: string) {
    if (schema.variant === "single") {
      setOpenIds(openIds.includes(id) ? [] : [id]);
    } else {
      setOpenIds(
        openIds.includes(id)
          ? openIds.filter((i) => i !== id)
          : [...openIds, id]
      );
    }
  }

  return (
    <div>
      {schema.accordion.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
          iconPosition={schema.iconPosition}
          titleSize={schema.titleSize}
        />
      ))}
    </div>
  );
}
