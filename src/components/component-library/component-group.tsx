import React from "react";
import { AvailableComponent, DraggedComponentData } from "@/types";
import { useAppDispatch } from "@/redux/hooks";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import VariantItem from "./variants/variant-item";
// import { setSelectedCanvasItemId } from "@/redux/slices/left-sidebar-slice/component-slice";


interface ComponentGroupProps {
    component: AvailableComponent;
    isExpanded: boolean; //manged by parent (accordion component)
    onValueChange: (value: string | undefined) => void;
    onDragStart: (e: React.DragEvent<HTMLButtonElement | HTMLDivElement>, data: DraggedComponentData) => void;
}

// NOTE: generateDragId is a utility, often better placed in a shared util file.
// For now, keeping it here as it was in your snippet.

// const generateDragId = (type: 'COMPONENT' | 'COMPONENT_VARIANT', componentId: string, variantId?: string | null) => {
//     return JSON.stringify({ type, componentId, variantId: variantId || null } as
//         DraggedComponentData);
// };

const ComponentGroup: React.FC<ComponentGroupProps> = ({
    component,
    isExpanded,
    onValueChange,
    onDragStart,
}) => {
    const dispatch = useAppDispatch();

    // const handleAccordionToggle = (value: string | undefined) => {
    //     onValueChange(value)
    //     if (value === component.id) {
    //         dispatch(setSelectedCanvasItemId(component.id))
    //     } else {
    //         dispatch(setSelectedCanvasItemId(null))
    //     }

    // };

    return (
        <Accordion type="single" collapsible value={isExpanded ? component.id : undefined}
            // onValueChange={handleAccordionToggle}
        >
            <AccordionItem value={component.id}
                className="px-0"
            >
                <AccordionTrigger
                    className="flex items-center justify-between w-full p-2 hover:bg-gray-800 transition-colors [&[data-state=open]>svg]:rotate-180"
                    draggable
                    onDragStart={(e) => onDragStart(e, { type: 'COMPONENT', componentId: component.id, variantId: null })}
                >
                    <div className="flex items-center gap-3">
                        <span className="text-xl">{typeof component.icon === 'string' ? component.icon : <component.icon className="w-5 h-5 text-gray-400" />}</span>
                        <span className="font-medium text-white">{component.name}</span>
                    </div>
                </AccordionTrigger>
                <AccordionContent
                    className="p-2 pl-0  border-t border-gray-800"
                >
                    <div className="space-y-1">
                        {component.variants.map((variant) => (
                            <VariantItem
                                key={variant.id}
                                componentId={component.id}
                                variant={variant}
                                onDragStart={onDragStart}

                            />
                        ))}
                    </div>

                </AccordionContent >
            </AccordionItem>
        </Accordion>
    );

};

export default ComponentGroup