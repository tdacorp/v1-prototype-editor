import { AvailableComponent } from "@/types";
import { useMemo, useState } from "react";


export const useComponentSearch = (components: AvailableComponent[]) =>{
    const [searchTerm, setSearchTerm] = useState('');

    const filteredComponent = useMemo(() =>{
        if(!searchTerm){
           return components;
        }
       const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return components.filter(component =>
            component.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            component.variants.some(variant =>
                variant.name.toLowerCase().includes(lowerCaseSearchTerm)
            )
        );
    },[components,searchTerm ])
    
    return {searchTerm, setSearchTerm, filteredComponent}
}
