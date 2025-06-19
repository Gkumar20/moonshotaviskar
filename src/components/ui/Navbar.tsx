"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-white bg-opacity-60 fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-lg border-b border-gray-300">
      <nav className="w-full px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-extrabold tracking-wide">
          MoonshotAviskar
        </Link>
        <ul className="flex space-x-6">
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
      </nav>
    </header>
  );
}
