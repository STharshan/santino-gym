"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Icons

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    // { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "TRAINERS", href: "#trainers" },
    { name: "GALLERY", href: "#gallery" },
    { name: "APPARELS", href: "#apparels" },
    { name: "PARTNERS", href: "#partners" },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="w-full px-6 py-4 lg:px-12 bg-black">
      <nav className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/image.png"
            alt="Logo"
            width={38}
            height={38}
            className="object-contain"
          />
          <h1 className="ml-2 text-xl font-bold text-white">
            SANTINO&rsquo;S{" "}
            <span className="text-sm font-normal text-gray-400">
              GYM & STUDIO
            </span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white hover:text-red-500 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button (desktop) */}
        <div className="hidden lg:block">
          <a href="#services">
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 text-sm font-medium">
              BOOK A SESSION
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <div className="absolute top-full left-0 w-full bg-black flex flex-col items-start p-6 z-50 space-y-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white hover:text-red-500 transition-colors"
                onClick={() => setIsSidebarOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#services" className="w-full">
              <Button
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium w-full"
              >
                BOOK A SESSION
              </Button>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
