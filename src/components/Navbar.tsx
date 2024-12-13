import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-gray-800 px-8 py-4 shadow-lg relative">
      <div className="invisible flex gap-4">
        <div className="w-[116px]" /> 
        <div className="w-[116px]" /> 
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="inline-block text-white text-3xl hover:text-4xl tracking-wider hover:text-yellow-400 transition-all duration-300 border-transparent hover:border-yellow-400">
          JaeGweon Portfolio
        </Link>
      </div>
      
      <div className="flex gap-4">
        <Link
          href="/study"
          className="text-yellow-400 border-2 border-yellow-400 
                     px-6 py-2.5 rounded-full font-medium
                     hover:bg-yellow-400 hover:text-gray-800
                     transform hover:scale-105 transition-all duration-300
                     shadow-md"
        >
          Study Log
        </Link>

        <Link
          href="/comments"
          className="text-yellow-400 border-2 border-yellow-400 
                     px-6 py-2.5 rounded-full font-medium
                     hover:bg-yellow-400 hover:text-gray-800
                     transform hover:scale-105 transition-all duration-300
                     shadow-md"
        >
          Comments
        </Link>
      </div>
    </nav>
  );
}
