import { Camera } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <Camera className="h-6 w-6" />
            <span className="font-bold text-xl">SmartCam AI</span>
          </Link>
          <nav className="ml-auto flex space-x-4 sm:space-x-6">
            <Link href="#features" className="text-sm hover:text-gray-600">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm hover:text-gray-600">
              How It Works
            </Link>
            <Link href="#use-cases" className="text-sm hover:text-gray-600">
              Use Cases
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
