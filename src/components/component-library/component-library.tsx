"use client"

import React, { useState } from "react"; 
import { useAppSelector } from "@/redux/hooks"
import { useComponentSearch } from "./hooks/use-component-search";
import { DraggedComponentData } from "@/types";
import SearchBar from "./header/search-bar";
import ComponentGroup from "./component-group";

const ComponentLibray: React.FC = () =>{

    const availableComponents = useAppSelector((state)=> state.components.availableComponents);

    const selectedComponentIdInRedux = useAppSelector((state)=> state.components.selectedComponentId);

    const { searchTerm, setSearchTerm, filteredComponent}= useComponentSearch(availableComponents);

    const [accordionOpenItem, setAccordionOpenItem] = useState<string | undefined>(undefined);


    React.useEffect(() => {
        if(selectedComponentIdInRedux){
            setAccordionOpenItem(selectedComponentIdInRedux);
        } else {
            setAccordionOpenItem(undefined)
        }
    }, [selectedComponentIdInRedux]);

    const handleDragStart = (e: React.DragEvent<HTMLElement>, data: DraggedComponentData) =>{
        e.dataTransfer.setData('application/json', JSON.stringify(data));
        e.dataTransfer.effectAllowed = 'move'

    };

    const handleAccordionValueChange  = (value: string | undefined) =>{
             // This function is passed to ComponentGroup to control the Accordion's open state

            setAccordionOpenItem(value);
    };
    return (
        <aside className="w-60 mt-3 bg-black text-white flex flex-col h-screen">
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <nav className="flex-grow overflow-y-auto custom-scrollbar">
                <div className="px-3 py-2 space-y-1">
                    {filteredComponent.length  === 0 && (
                        <p className="text-gray-400 text-sm text-center py-4"> No Components found</p>
                    )}
                    {filteredComponent.map((component)=>(
                        <ComponentGroup 
                          key={component.id}
                          component={component}
                          isExpanded= {accordionOpenItem === component.id}
                          onDragStart={handleDragStart}
                          onValueChange={handleAccordionValueChange}
                        />
                    ))}

                </div>
            </nav>
        </aside>
    );
};

export default ComponentLibray