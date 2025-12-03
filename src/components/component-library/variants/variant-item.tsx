import React from "react";
import { ComponentVariant, DraggedComponentData } from "@/types";

interface VariantItemProps {
    componentId: string;
    variant: ComponentVariant;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, data: DraggedComponentData) =>void;
}

// const generatedDragId = (type: 'COMPONENT'| 'COMPONENT_VARIANT', componentId: string, variantId: string | null)=>{
//     return JSON.stringify({type, componentId, variantId: variantId || null} as DraggedComponentData);
  
// };

const VariantItem: React.FC<VariantItemProps> = ({ componentId, variant , onDragStart})=>{
    return (
        <div 
        className="group flex items-center gap-2 p-2 pl-8 text-sm text-gray-300 hover:bg-gray-800 cursor-grab active:cursor-grabbing rounded-md transition-colors"
        draggable
        onDragStart={(e) => onDragStart(e, { type: 'COMPONENT_VARIANT', componentId: componentId, variantId: variant.id})}
        >
            <span className="text-gray-500 group-hover:text-gray-300"></span>
            <span>{variant.name}</span>

        </div>
    )

};

export default VariantItem;

