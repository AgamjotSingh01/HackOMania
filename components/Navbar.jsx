"use client"
import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";
import Image from "next/image";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
            {/* Logo on the left */}
            <div className="navbar-logo">
                <Link href="/"><Image src="/logo.png" width={200} height={200} alt="logo" />  </Link>
            </div>

            {/* Centered Links */}
            <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li style={{ animationDelay: "0.2s" }}><Link href="/">Home</Link></li>
                    <li style={{ animationDelay: "0.4s" }}><Link href="/About">About</Link></li>
                    <li style={{ animationDelay: "0.6s" }}><Link href="/Domains">Domains</Link></li>
                    <li style={{ animationDelay: "0.8s" }}><Link href="/FAQ">FAQ's</Link></li>
                    <li style={{ animationDelay: "1s" }}><Link href="/contact">Contact</Link></li>
                </ul>

                {/* Register button (Visible only in mobile menu) */}
                <button className="navbar-button mobile-only">Register</button>
            </div>

            {/* Desktop Register Button */}
            <button className="navbar-button desktop-only">Register</button>

            {/* Mobile Hamburger Button */}
            <button 
                className={`hamburger ${menuOpen ? "active" : ""}`} 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
};

export default Navbar;
