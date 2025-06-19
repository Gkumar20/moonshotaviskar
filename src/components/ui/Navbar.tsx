"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white bg-opacity-60 fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-lg border-b border-gray-300">
      <nav className="w-full px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold tracking-wide">
          MoonshotAviskar
        </Link>
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className={`text-black px-4 py-2 transition-all duration-300 ${
                pathname === "/" ? "border-b-2 border-gray-800 font-bold text-opacity-90" : "hover:text-opacity-70"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/churnDNA"
              className={`text-black px-4 py-2 transition-all duration-300 ${
                pathname === "/churnDNA" ? "border-b-2 border-gray-800 font-bold text-opacity-90" : "hover:text-opacity-70"
              }`}
            >
              Churn Signal
            </Link>
          </li>
          <li>
            <Link
              href="/builder"
              className={`text-black px-4 py-2 transition-all duration-300 ${
                pathname === "/builder" ? "border-b-2 border-gray-800 font-bold text-opacity-90" : "hover:text-opacity-70"
              }`}
            >
              AI Agentic Analysis
            </Link>
          </li>
          <li>
            <Link
              href="/digitaltwins"
              className={`text-black px-4 py-2 transition-all duration-300 ${
                pathname === "/digitaltwins" ? "border-b-2 border-gray-800 font-bold text-opacity-90" : "hover:text-opacity-70"
              }`}
            >
              Digital Twins
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className={`text-black px-4 py-2 transition-all duration-300 ${
                pathname === "/dashboard" ? "border-b-2 border-gray-800 font-bold text-opacity-90" : "hover:text-opacity-70"
              }`}
            >
              Live Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/solution"
              className={`text-black px-4 py-2 transition-all duration-300 ${
                pathname === "/solution" ? "border-b-2 border-gray-800 font-bold text-opacity-90" : "hover:text-opacity-70"
              }`}
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`text-black px-4 py-2 transition-all duration-300 ${
                pathname === "/about" ? "border-b-2 border-gray-800 font-bold text-opacity-90" : "hover:text-opacity-70"
              }`}
            >
              About Us
            </Link>
          </li>
        </ul>
        {isMobileMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-300">
            <li>
              <Link
                href="/"
                className={`block text-black px-6 py-4 transition-all duration-300 ${
                  pathname === "/"
                    ? "border-l-4 border-gray-800 font-bold text-opacity-90"
                    : "hover:text-opacity-70"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/churnDNA"
                className={`block text-black px-6 py-4 transition-all duration-300 ${
                  pathname === "/churnDNA"
                    ? "border-l-4 border-gray-800 font-bold text-opacity-90"
                    : "hover:text-opacity-70"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Churn Signal
              </Link>
            </li>
            <li>
              <Link
                href="/builder"
                className={`block text-black px-6 py-4 transition-all duration-300 ${
                  pathname === "/builder"
                    ? "border-l-4 border-gray-800 font-bold text-opacity-90"
                    : "hover:text-opacity-70"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Agentic Analysis
              </Link>
            </li>
            <li>
              <Link
                href="/digitaltwins"
                className={`block text-black px-6 py-4 transition-all duration-300 ${
                  pathname === "/digitaltwins"
                    ? "border-l-4 border-gray-800 font-bold text-opacity-90"
                    : "hover:text-opacity-70"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Digital Twins
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className={`block text-black px-6 py-4 transition-all duration-300 ${
                  pathname === "/dashboard"
                    ? "border-l-4 border-gray-800 font-bold text-opacity-90"
                    : "hover:text-opacity-70"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Live Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/solution"
                className={`block text-black px-6 py-4 transition-all duration-300 ${
                  pathname === "/solution"
                    ? "border-l-4 border-gray-800 font-bold text-opacity-90"
                    : "hover:text-opacity-70"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block text-black px-6 py-4 transition-all duration-300 ${
                  pathname === "/about"
                    ? "border-l-4 border-gray-800 font-bold text-opacity-90"
                    : "hover:text-opacity-70"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
