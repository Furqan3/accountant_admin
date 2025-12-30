"use client";

import { useState } from "react";
import { Menu, ChevronDown, LogOut, User } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/signin");
  };

  return (
    <header className="w-full bg-white p-4 flex items-center justify-between shadow-sm  ">
      <Menu
        onClick={onMenuClick}
        className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900 transition-colors"
      />

      {/* Profile Section */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {/* Profile Picture */}
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
            JD
          </div>

          {/* Profile Name */}
          <div className="text-left hidden md:block">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>

          <ChevronDown
            className={`w-4 h-4 text-gray-600 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <button
              onClick={() => {
                setIsDropdownOpen(false);
                router.push("/settings");
              }}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <User className="w-4 h-4" />
              Profile
            </button>

            <hr className="my-2 border-gray-200" />

            <button
              onClick={handleSignOut}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
