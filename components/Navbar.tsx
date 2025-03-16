"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleScroll = (e: any) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    const targetId = e.target.getAttribute("href").substring(1); // Extract the ID from href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Calculate the position of the target element relative to the page
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;

      // Navbar height (10vh of the viewport height)
      const navbarHeight = window.innerHeight * 0.1;

      // Scroll to the position minus the navbar height to make sure the section isn't hidden
      window.scrollTo({
        top: targetPosition - navbarHeight,
        behavior: "smooth", // Smooth scrolling
      });
    }
    setIsMenuOpen(false)
  };

  return (
    <nav className="sticky top-0 z-50 flex h-[8vh] items-center justify-between bg-white/70 px-6 text-secondary shadow-md backdrop-blur-[6px] sm:h-[10vh]">
      {/* Logo */}
      <div className="z-50 select-none text-xl font-bold">
        <a href="#home" onClick={handleScroll}>
          Demo 1
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden items-center justify-center gap-6 sm:flex">
        <ul className="flex justify-center gap-6">
          <li className="underline-offset-4 hover:text-secondary hover:underline">
            <a href="#home" onClick={handleScroll}>
              Home
            </a>
          </li>
          <li className="underline-offset-4 hover:text-secondary hover:underline">
            <a href="#services" onClick={handleScroll}>
              Services
            </a>
          </li>
          <li className="underline-offset-4 hover:text-secondary hover:underline">
            <a href="#testimonials" onClick={handleScroll}>
              Testimonials
            </a>
          </li>
          <li className="underline-offset-4 hover:text-secondary hover:underline">
            <a href="#contact" onClick={handleScroll}>
              Contact
            </a>
          </li>
        </ul>
        <a href="#" className="cta">
          Get Start
        </a>
      </div>

      {/* Mobile Menu Button (Always Clickable) */}
      <div className="z-50 sm:hidden">
        <button
          className="fixed right-4 top-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XMarkIcon className="size-10 text-secondary" />
          ) : (
            <Bars3Icon className="size-10 text-secondary" />
          )}
        </button>
      </div>

      {/* Mobile Full-Screen Side Menu */}
      <div
        className={`fixed right-0 top-0 z-30 w-full bg-white py-14 shadow-lg transition-all duration-300 ${
          isMenuOpen
            ? "block translate-x-0" // Visible when open
            : "hidden translate-x-full" // Hidden when closed
        }`}
      >
        {/* Menu Items */}
        <ul className="space-y-6 px-6">
          <li>
            <a href="#home" className="mobilemenu-link" onClick={handleScroll}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="mobilemenu-link"
              onClick={handleScroll}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="mobilemenu-link"
              onClick={handleScroll}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="mobilemenu-link"
              onClick={handleScroll}
            >
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="cta">
              Get Start
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
