import { ComponentInstance } from "@/redux/slices/canvas/types";
import { componentMap } from "@/data/componentsMap";

export default function CanvasComponentRenderer({ component }: { component: ComponentInstance }) {
  const Component = componentMap[component.type]; // Now TS is happy.

  return <Component schema={component.props} />;

}
