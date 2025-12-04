
// import { heroMap } from "@/components/hero/defaults";
// import { layoutResizableMap } from "@/components/layout-resizable/default";

// export const componentMap = {
//   hero: heroMap,
//   layoutresizable: layoutResizableMap,
// };


import Hero from "@/components/hero/Hero";
import LayoutResizable from "@/components/layout-resizable/LayoutRenderer";
import { HeroSchema } from "@/types/type";

export const componentMap: Record<
  "hero" | "layoutresizable",
  React.FC<any>
> = {
  hero: Hero,
  layoutresizable: LayoutResizable,
};

