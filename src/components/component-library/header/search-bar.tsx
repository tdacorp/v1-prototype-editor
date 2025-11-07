import React from "react";
import { Input } from "@/components/ui/input"

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string )=> void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange}) =>{
    return(
        <div>
            <Input
                type="text"
                placeholder="Search component.."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-gray-700 text-white placeholder-gray-400 border-none focus-visible:ring-blue-500"
            
            />
        </div>
    )
};

export default SearchBar