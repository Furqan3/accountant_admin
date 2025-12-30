"use client";

import { Search } from "lucide-react";

type DashboardHeaderProps = {
  title: string;
  subtitle?: string;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
};

export default function SearchHeader({
  title,
  searchPlaceholder = "Search...",
   onSearch,
}: DashboardHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row bg-white p-5 md:items-center md:justify-between rounded-2xl shadow-sm">
      
      
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          {title}
        </h1>
        
      </div>

      {/* Right: Search + Sort */}
      <div className="flex items-center text-black gap-3">
        
        {/* Search */}
        <div className="relative ">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            placeholder={searchPlaceholder}
            onChange={(e) => onSearch?.(e.target.value)}
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

       
      </div>
    </div>
  );
}
