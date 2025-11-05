"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, MapPin, Heart, Moon } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-green-900 via-emerald-800 to-green-900 shadow-lg text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-3">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <div className="bg-green-600 text-white font-bold text-xl rounded-md p-2">
            SC
          </div>
          <div className="ml-2 text-white-800 text-lg font-semibold">
            Social Cemetery
            <div className="text-sm text-white-600">Management System</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6" >
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
          <Link href="/find" className="hover:text-amber-400 transition-colors">Find a Loved One</Link>
          <Link href="/map" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            Cemetery Map <MapPin size={16} />
          </Link>
          <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-3">
          <form onSubmit={(e) => e.preventDefault()} className="mt-3 relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-full px-3 py-2 text-black-900 b-10 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
            />
            <button className="absolute right-3 top-2 text-black-900">
              <Search size={18} />
            </button>
          </form>

          <Link href="/donate">
            <button className="bg-amber-400 text-green-900 px-4 py-1.5 rounded-md font-semibold hover:bg-amber-300 flex items-center gap-1">
              <Heart size={16} /> Donate
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md bg-green-800 hover:bg-green-700"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Drawer Menu (Slide from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-950 text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-green-800">
          <h2 className="text-lg font-semibold">
            <Link href="/" className="flex items-center">
            <div className="bg-green-600 text-white font-bold text-xl rounded-md p-2">
              SC
            </div>
            <div className="ml-2 text-white-800 text-lg font-semibold">
              Social Cemetery
              <div className="text-sm text-white-600">Management System</div>
            </div>
          </Link>
          
          </h2>
          <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-green-800">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col px-5 py-4 space-y-3   ">
          <Link href="/" className="hover:text-amber-400 p-2 rounded-md bg-green-800 hover:bg-green-700"  onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="hover:text-amber-400 p-2 rounded-md bg-green-800 hover:bg-green-700" onClick={toggleMenu}>About Us</Link>
          <Link href="/find" className="hover:text-amber-400 p-2 rounded-md bg-green-800 hover:bg-green-700" onClick={toggleMenu}>Find a Loved One</Link>
          <Link href="/map" className="hover:text-amber-400 flex items-center gap-1 p-2 rounded-md bg-green-800 hover:bg-green-700" onClick={toggleMenu}>
            Cemetery Map <MapPin size={16} />
          </Link>
          <Link href="/contact" className="hover:text-amber-400 p-2 rounded-md bg-green-800 hover:bg-green-700 " onClick={toggleMenu}>Contact</Link>

          <form onSubmit={(e) => e.preventDefault()} className="mt-3 relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-full px-3 py-2 text-black-900 b-10 focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-inner"
            />
            <button className="absolute right-3 top-2 text-black-900">
              <Search size={18} />
            </button>
          </form>

          <Link href="/donate">
            <button className="w-full bg-amber-400 text-green-900 px-4 py-2 rounded-md font-semibold hover:bg-amber-300 flex items-center justify-center gap-1 mt-4">
              <Heart size={16} /> Donate
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay for closing */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
