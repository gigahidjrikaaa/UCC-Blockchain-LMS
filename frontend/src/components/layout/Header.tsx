"use client";

import { useState } from "react";
import { FiBell, FiSearch, FiMenu } from "react-icons/fi";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 h-16 flex items-center px-4 md:px-6 sticky top-0 z-10">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-2 md:hidden">
          <button className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
            <FiMenu className="h-5 w-5" />
          </button>
        </div>

        <div className={`flex-1 ${searchOpen ? "block" : "hidden md:block"}`}>
          <div className="relative max-w-md">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search courses, lessons..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <FiSearch className="h-5 w-5" />
          </button>
          
          <button className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 relative">
            <FiBell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}