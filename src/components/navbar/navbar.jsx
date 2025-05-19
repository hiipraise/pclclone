import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faChevronDown,
  faChevronRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import NarrowDropdown from "../dropdowncontent/narrowdropdown";
import WideDropdown from "../dropdowncontent/widedropdown";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const dropdownItems = {
    Sectors: ["Technology", "Healthcare", "Finance", "Education"],
    Services: ["Consulting", "Development", "Design", "Support"],
    "Who We Are": ["Our Team", "Our Mission", "Our Values"],
    Career: ["Open Positions", "Benefits", "Culture"],
  };

  const renderNavItem = (text, hasDropdown) => {
    const isWideDropdown = ["Sectors", "Services"].includes(text);
    const isNarrowDropdown = ["Career", "Who We Are"].includes(text);

    return (
      <li className="relative">
        <a
          href="#"
          className={`hover:text-green-900 focus:text-green-900 flex items-center ${
            hasDropdown ? "cursor-pointer" : ""
          }`}
          onClick={(e) => {
            if (hasDropdown) {
              e.preventDefault();
              toggleDropdown(text);
            }
          }}
        >
          {text}
          {hasDropdown && (
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`ml-1 transition-transform duration-300 ${
                openDropdown === text ? "rotate-180" : ""
              }`}
            />
          )}
        </a>

        {hasDropdown && openDropdown === text && (
          <>
            {isWideDropdown && <WideDropdown items={dropdownItems[text]} />}
            {isNarrowDropdown && <NarrowDropdown items={dropdownItems[text]} />}
          </>
        )}
      </li>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-8 z-50 transition-colors duration-300 ease-in-out ${
        isScrolled
          ? "bg-white text-black hover:bg-white hover:text-black border-b-2 border-[rgba(0,0,0,50%)]"
          : "bg-transparent text-white hover:bg-white hover:text-black"
      }`}
    >
      <div className="logo">
        <h1 className="font-bold">PCL Clone</h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center">
        <ul className="flex space-x-6 font-bold relative">
          {renderNavItem("Sectors", true)}
          {renderNavItem("Services", true)}
          {renderNavItem("Our Works", false)}
          {renderNavItem("Location", false)}
          {renderNavItem("Who We Are", true)}
          {renderNavItem("Insights", false)}
          {renderNavItem("Newsroom", false)}
          {renderNavItem("Career", true)}
        </ul>
      </div>

      <div className="flex items-center gap-8">
        {/* Language selector */}
        <div className="hidden md:flex">
          <select className="border-none p-2 cursor-pointer bg-transparent ">
            <option>Canada (en)</option>
            <option>Canada (fr)</option>
            <option>U.S (en)</option>
            <option>Aus (en)</option>
          </select>
        </div>

        {/* Search icon */}
        <div className="cursor-pointer text-xl" onClick={toggleSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </div>

        {/* Search input */}
        {isSearchOpen && (
          <div className="absolute top-full right-0 bg-white p-4 border border-gray-300 shadow-md mt-2">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Search..."
            />
          </div>
        )}

        {/* Mobile menu toggle */}
        <div
          className="lg:hidden text-xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faClose : faBars} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full md:w-3/5 bg-white z-40 p-2 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute top-4 right-4 text-xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={faClose} />
        </div>

        <ul className="mt-10 flex flex-col gap-4">
          {[
            "Sectors",
            "Services",
            "Our Works",
            "Location",
            "Who We Are",
            "Insights",
            "Newsroom",
            "Career",
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                className={`text-gray-800 hover:text-green-900 focus:text-green-900 flex items-center justify-between hover:bg-[#d9d9d9] hover:rounded-xl px-4 py-2 ${
                  ["Sectors", "Services", "Who We Are", "Career"].includes(item)
                    ? ""
                    : "w-full block"
                }`}
              >
                {item}
                {["Sectors", "Services", "Who We Are", "Career"].includes(
                  item
                ) && <FontAwesomeIcon icon={faChevronRight} className="ml-1" />}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile language select */}
        <div className="mt-8">
          <select className="w-full border border-gray-300 p-2 cursor-pointer rounded">
            <option>Canada (en)</option>
            <option>Canada (fr)</option>
            <option>U.S (en)</option>
            <option>Aus (en)</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
