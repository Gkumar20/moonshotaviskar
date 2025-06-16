import React from "react";
import Link from "next/link";

export function Navbar() {
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
              className="text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/churnDNA"
              className="text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              ChurnDNA
            </Link>
          </li>
          <li>
            <Link
              href="/builder"
              className="text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              AI Analysis
            </Link>
          </li>
          <li>
            <Link
              href="/digitaltwins"
              className="text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              Digital Twins
            </Link>
          </li>
          <li>
            <Link
              href="/solution"
              className="text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              Solutions
            </Link>
          </li>
          <li>
            <Link
              href="/mermaid-map"
              className="text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
            >
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
