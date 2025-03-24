"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuOpen && !event.target.closest(".navbar")) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [menuOpen]);

    return (
        <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
            {/* Logo on the left */}
            <div className="navbar-logo">
                <Link href="/">STME NMIMS</Link>
            </div>

            {/* Centered Links */}
            <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li style={{ animationDelay: "0.2s" }}><Link href="/">Home</Link></li>
                    <li style={{ animationDelay: "0.4s" }}><Link href="/About">About</Link></li>
                    <li style={{ animationDelay: "0.6s" }}><Link href="/Structure">Structure</Link></li>
                    <li style={{ animationDelay: "0.8s" }}><Link href="/FAQ">FAQ's</Link></li>
                    <li style={{ animationDelay: "1s" }}><Link href="/Explore">Explore</Link></li>
                    <li style={{ animationDelay: "1.2s" }}><Link href="/Contact">Contact</Link></li>
                </ul>

                {/* Register button (Visible only in mobile menu) */}

                <Link href={'https://forms.gle/FsfTucQEL1jP3orC6'}><button className="navbar-button mobile-only">Register</button></Link>

            </div>

            {/* Desktop Register Button */}
            <Link href={'https://forms.gle/FsfTucQEL1jP3orC6'}><button className="navbar-button desktop-only">Register</button></Link>


            {/* Mobile Hamburger Button */}
            <button
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={(e) => {
                    e.stopPropagation(); // Prevent closing when clicking on the button itself
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    );
};

export default Navbar;
