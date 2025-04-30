import "../styles/Navbar.css";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.jsx";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Consulting", href: "#" },
    { name: "AI Coach", href: "#" },
  ];

  return (
    <nav className=" fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-7xl container mx-auto lg:py-2  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-[74px]">
            <div>
              <Logo />
            </div>
            <div className="hidden md:flex space-x-[33px]">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#020407] font-jakarta font-medium hover:underline transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <a
              href="#home"
              className=" text-[#010205] font-manrope font-medium px-6 py-2 rounded-full border-solid border border-[#010205] transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#020407] transition"
            >
              {isOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-4 space-y-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-[#020407] text-center font-jakarta font-medium rounded"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#home"
              className="block mt-2 text-center text-[#010205] font-manrope font-medium px-6 py-2 rounded-full border-solid border border-[#010205] transition"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
