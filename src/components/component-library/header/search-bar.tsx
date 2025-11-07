import React from "react";
import { Input } from "@/components/ui/input"

interface SearchBarProps {
    searchTerm: string;
    onSearchChange: (term: string )=> void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange}) =>{
    return (
    <div className="bg-black text-white">

      <div className="px-4 pt-12 pb-3 border-b border-gray-700">
        <h2 className="text-xl font-semibold">Component Library</h2>
      </div>

      <div className="px-4 py-3">
        <Input
          type="text"
          placeholder="Search component..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-md focus-visible:ring-2 focus-visible:ring-gray-800"
        />
      </div>
    </div>
  );
};

export default SearchBar