import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 px-6 py-3 shadow-lgrelative ">
      <div>
        {/* 왼쪽 빈 공간을 위한 div */}
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="inline-block text-white text-3xl hover:text-4xl tracking-wider hover:text-yellow-400 transition-all duration-300 border-transparent hover:border-yellow-400">
          JaeGweon Portfolio
        </Link>
      </div>
      <div className="flex gap-4">
        <Link
          href="/study"
          className="bg-yellow-400 text-gray-800 text-lg font-medium px-5 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Study Log
        </Link>
        <Link
          href="/topic"
          className="bg-yellow-400 text-gray-800 text-lg font-medium px-5 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Comment
        </Link>
        
      </div>
    </nav>
  );
}
