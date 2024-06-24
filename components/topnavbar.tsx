import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IconSettings, IconBell, IconSearch, IconLogout, IconMenu2 } from "@tabler/icons-react";
import { signOut } from "@/lib/services/userAuth"; // Adjust the import path as necessary

export default function TopNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    try {
      const response = await signOut();
      if (response.status === 200) {
        console.log("Logout successful");
        window.location.href = "/signin"; // Adjust the path as needed
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="h-11 rounded-tr-2xl flex items-center justify-between text-white text-[13px] bg-[#2C2F48] px-4 sm:px-6 z-50 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">Yeasti</div>
      {!isSmallScreen && (
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6 text-[#EBEBF5A0] ml-auto">
          <Link href="/search">
            <IconSearch size={20} />
          </Link>
          <IconBell size={20} />
          <Link href="/settings">
            <IconSettings size={20} />
          </Link>
          <button onClick={handleLogout} className="flex items-center">
            <IconLogout size={20} className="text-[#EBEBF5A0]" />
            <span className="ml-2 hidden sm:inline">Logout</span>
          </button>
        </div>
      )}
      {isSmallScreen && (
        <div className="flex items-center relative ml-auto" ref={dropdownRef}>
          <button onClick={toggleDropdown}>
            <IconMenu2 size={24} />
          </button>
          {isDropdownOpen && (
            <div className="absolute top-12 right-0 w-48 bg-[#2C2F48] rounded-lg shadow-lg text-white">
              <Link href="/search" className="block px-4 py-2 hover:bg-[#3b3e5b]">
                <IconSearch size={20} className="inline-block mr-2" /> Search
              </Link>
              <Link href="/settings" className="block px-4 py-2 hover:bg-[#3b3e5b]">
                <IconSettings size={20} className="inline-block mr-2" /> Settings
              </Link>
              <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-[#3b3e5b]">
                <IconLogout size={20} className="inline-block mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
