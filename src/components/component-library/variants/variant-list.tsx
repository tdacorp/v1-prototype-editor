// src/components/component-library/variants/variant-list.tsx
import React from 'react';
import { ComponentVariant, DraggedComponentData } from '@/types';
import VariantItem from './variant-item'; // Import the individual variant item

interface VariantListProps {
    componentId: string;
    variants: ComponentVariant[];
    onDragStart: (e: React.DragEvent<HTMLDivElement>, data: DraggedComponentData) => void;
}

const VariantList: React.FC<VariantListProps> = ({ componentId, variants, onDragStart }) => {
    if (!variants || variants.length === 0) {
        return <p className="p-2 pl-8 text-sm text-gray-500">No variants available.</p>;
    }

    return (
        <div className="space-y-1">
            {variants.map((variant) => (
                <VariantItem
                    key={variant.id}
                    componentId={componentId}
                    variant={variant}
                    onDragStart={onDragStart}
                />
            ))}
        </div>
    );
};

export default VariantList;