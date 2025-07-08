"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { assets } from "../assets/assets";
import Image from "next/image";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null); // 👈 track hover

  const navItems = [
    { label: "#", section: "home" },
    { label: "About", section: "about" },
    { label: "Tech Stack", section: "tech" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <nav className="bg-[#334155] text-white pt-2 fixed top-0 w-full z-50">
      <div className="max-w-[83rem] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image src={assets.logo3} alt="logo" width={90} height={90} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:mr-[3rem] lg:mr-0 items-center space-x-[3rem] text-[1.2rem] ps-10">
          {navItems.map((item) => {
            const isHovered = hovered === item.label;
            const textColor =
              isHovered
                ? "text-[#38BDF8]"
                : hovered
                ? "text-white"
                : item.label === "Home"
                ? "text-[#38BDF8]"
                : "text-white";

            return (
              <li
                key={item.section}
                onMouseEnter={() => setHovered(item.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  href={`#${item.section}`}
                  className={`transition-all ${textColor}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden mr-[2rem]">
          {menuOpen ? (
            <X onClick={() => setMenuOpen(false)} className="w-6 h-6 cursor-pointer" />
          ) : (
            <Menu onClick={() => setMenuOpen(true)} className="w-6 h-6 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 flex flex-col space-y-4 px-4 text-[1.2rem]">
          {navItems.map((item) => (
            <li key={item.section}>
              <a
                href={`#${item.section}`}
                onClick={() => setMenuOpen(false)}
                className={`transition-all ${
                  item.label === "Home"
                    ? "text-[#38BDF8]"
                    : "hover:text-[#38BDF8]"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
