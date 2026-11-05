import { useState, useEffect } from "react";
import savioCorrea from "../../assets/S.png";
import savioCorreaWhite from "../../assets/S_black.png";

const navLinks = [
    { label: "INTRO", href: "#platform" },
    { label: "EXPERIENCE", href: "#company" },
    { label: "EDUCATION", href: "#education" },
    { label: "ACHIEVEMENTS", href: "#achievements" },
];

function SunIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dark, setDark] = useState(() => {
        // Persist preference across reloads
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark" ||
                (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
        return false;
    });

    // Apply / remove .dark on <html>
    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-5 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-transparent dark:bg-transparent "
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2.5 group" aria-label="Home">
                        <span className="bg-transparent px-1 py-1 rounded-lg">
                            <img src={savioCorrea} className="h-12 w-12 dark:hidden" alt="savio logo" />
                            <img src={savioCorreaWhite} className="h-12 w-12 hidden dark:block" alt="savio logo" />
                        </span>
                    </a>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-1 bg-gray-50/60 dark:bg-black/30 rounded-xl px-2 p-2 transition-colors duration-300">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="relative px-4 py-2 text-xs font-semibold tracking-widest text-black dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 group"
                            >
                                {link.label}
                                <span className="absolute bottom-1 left-4 right-4 h-px bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="group relative inline-block overflow-hidden ml-3 px-5 py-2 text-xs font-semibold tracking-widest text-black dark:text-white bg-white dark:bg-neutral-700 rounded-lg transition-colors duration-300"
                        >
                            <span className="absolute inset-x-0 bottom-0 h-full bg-black dark:bg-white origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">GET IN TOUCH</span>
                        </a>

                        <button
                            id="theme-toggle"
                            onClick={() => setDark((v) => !v)}
                            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                            className="cursor-pointer ml-2 flex items-center justify-center w-8 h-8 rounded-lg text-black dark:text-white bg-white dark:bg-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-600 transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                            {dark ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </div>

                    {/* Mobile: toggle + hamburger */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            id="theme-toggle-mobile"
                            onClick={() => setDark((v) => !v)}
                            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                            className="flex items-center justify-center w-8 h-8 rounded-lg text-black dark:text-white bg-gray-200 dark:bg-neutral-700 transition-all duration-300"
                        >
                            {dark ? <SunIcon /> : <MoonIcon />}
                        </button>

                        <button
                            id="mobile-menu-toggle"
                            onClick={() => setMenuOpen((v) => !v)}
                            aria-label="Toggle menu"
                            aria-expanded={menuOpen}
                            className="flex flex-col justify-center items-center w-8 h-8 gap-1.5"
                        >
                            <span className={`block w-5 h-px bg-black dark:bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                            <span className={`block w-5 h-px bg-black dark:bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
                            <span className={`block w-5 h-px bg-black dark:bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    } bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-t border-gray-200 dark:border-white/10`}
            >
                <div className="flex flex-col px-6 py-4 gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="py-3 text-xs font-semibold tracking-widest text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white border-b border-gray-200 dark:border-white/10 transition-colors duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-3 py-3 text-center text-xs font-semibold tracking-widest text-white bg-neutral-900 dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-gray-100 border border-transparent rounded-sm transition-colors duration-200"
                    >
                        GET IN TOUCH
                    </a>
                </div>
            </div>
        </nav>
    );
}
