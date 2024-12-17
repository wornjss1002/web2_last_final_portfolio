import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="inline-block text-yellow-200 text-5xl tracking-wider hover:text-yellow-500 transition-all duration-300 border-transparent hover:border-yellow-400">
          💻 JaeGweon Portfolio 📁
        </Link>
      </div>
    </nav>
  );
}
