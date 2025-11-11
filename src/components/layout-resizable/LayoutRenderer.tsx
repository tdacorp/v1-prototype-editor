"use client";

import React from "react";
import { LayoutNode } from "./types";
import LayoutContainerRenderer from "./LayoutContainerRenderer";
import LayoutComponentRenderer from "./LayoutComponentRenderer";

interface LayoutRendererProps {
  layout: LayoutNode;
}

const LayoutRenderer: React.FC<LayoutRendererProps> = ({ layout }) => {
  if (layout.type === "layout") {
    return (
      <LayoutContainerRenderer node={layout}/>
    );
  }

  if (layout.type === "component") {
    return (
      <LayoutComponentRenderer node={layout}/>
    );
  }

  return null;
};

export default LayoutRenderer;
