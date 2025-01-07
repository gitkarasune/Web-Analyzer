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
                    <Link href="/"><span className="hover:text-blue-300">Tools</span></Link>
                    <Link href="/about"><span className="hover:text-blue-300">Resources</span></Link>
                    <Link href="/projects"><span className="hover:text-blue-300">About</span></Link>
                    <Link href="/contact"><span className="hover:text-blue-300">Contact</span></Link>
                </nav>

                {/* Hamburger Icon for Small Screens */}
                <div className="md:hidden">
                    <FaBars
                        size={24}
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
                        className="cursor-pointer hover:text-blue-300"
                        onClick={toggleMenu}
                    />
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col items-start pl-6 space-y-4">
                    <Link href="/">
                        <span className="hover:text-blue-300" onClick={toggleMenu}>Home</span>
                    </Link>
                    <Link href="/about">
                        <span className="hover:text-blue-300" onClick={toggleMenu}>About</span>
                    </Link>
                    <Link href="/projects">
                        <span className="hover:text-blue-300" onClick={toggleMenu}>Projects</span>
                    </Link>
                    <Link href="/blog">
                        <span className="hover:text-blue-300" onClick={toggleMenu}>Blog</span>
                    </Link>
                    <Link href="/contact">
                        <span className="hover:text-blue-300" onClick={toggleMenu}>Contact</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
