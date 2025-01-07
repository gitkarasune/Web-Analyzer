import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-black text-white">
            <div className="container mx-auto flex justify-between items-center px-6 py-6">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">
                        <Logo />
                    </Link>
                </div>

                {/* Navigation for Medium and Large Screens */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/">
                        <span className="hover:text-blue-300 mb-1 text-sm relative group">
                            Tools
                            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 "></span>
                        </span>
                    </Link>
                    <Link href="/about">
                        <span className="hover:text-blue-300 mb-1 text-sm relative group">
                            Resources
                            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 "></span>
                        </span>
                    </Link>
                    <Link href="/projects">
                        <span className="hover:text-blue-300 mb-1 text-sm relative group">
                            About
                            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 "></span>
                        </span>
                    </Link>
                </nav>

                {/* Hamburger Icon for Small Screens */}
                <div className="md:hidden">
                    <FaBars
                        size={20}
                        className="cursor-pointer hover:text-blue-300"
                        onClick={toggleMenu}
                    />
                </div>
            </div>

            {/* Mobile Menu from left */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-black z-50 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                {/* Close Icon */}
                <div className="flex justify-end p-4">
                    <FaTimes
                        size={24}
                        className="cursor-pointer text-sm text-white"
                        onClick={toggleMenu}
                    />
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col items-start pl-6 space-y-4">
                    <Link href="/">
                        <span className="hover:text-blue-300" onClick={toggleMenu}>Tools</span>
                    </Link>
                    <Link href="/about">
                        <span className="hover:text-blue-300" onClick={toggleMenu}>Resources</span>
                    </Link>
                    <Link href="/projects">
                        <span className="hover:text-blue-300" onClick={toggleMenu}>About</span>
                    </Link>

                    <div className="absolute bottom-0 w-full">
                        <Link href="/signup">
                            <span className="rounded-full bg-white text-black px-20" onClick={toggleMenu}>Sign Up</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
