import React from "react";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="relative z-10 mt-24 px-6 py-12 bg-white/30 backdrop-blur-md border-t border-white/20 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-2xl font-bold text-blue-700 mb-2">ChurnDNA</h3>
          <p className="text-sm text-gray-700">
            Building the future with AI, Digital Twins, and Generative Intelligence.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><Link href="/churn" className="hover:text-blue-600 transition">ChurnDNA Engine</Link></li>
            <li><Link href="/builder" className="hover:text-blue-600 transition">Roadmap</Link></li>
            <li><Link href="/dashboard" className="hover:text-blue-600 transition">Digital Twins</Link></li>
            <li><Link href="/solution" className="hover:text-blue-600 transition">Generative AI Rules</Link></li>
            <li><Link href="/mermaid-map" className="hover:text-blue-600 transition">Mermaid Map</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-sm">Email: <a href="mailto:info@churndna.com" className="text-blue-600 hover:underline">info@churndna.com</a></p>
          <p className="text-sm mt-2">Follow us on:</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-600">Twitter</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">GitHub</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-gray-600 border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()} ChurnDNA. All rights reserved.
      </div>
    </footer>
  );
}
