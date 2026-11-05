import { useState } from "react";
import savioCorrea from "../../assets/S.png";
import savioCorreaWhite from "../../assets/S_black.png";

export default function Footer() {
    const [copied, setCopied] = useState(false);
    const email = "saviocorrea@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const navigationLinks = [
        { label: "01 — Intro", href: "#platform" },
        { label: "02 — Experience", href: "#company" },
        { label: "03 — Education", href: "#education" },
        { label: "04 — Achievements", href: "#achievements" },
    ];

    const socialLinks = [
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/savio-correa-a1a397113/?isSelfProfile=false",
            label: "Professional Profile",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.67-.75 1.67-1.67 0-.92-.75-1.67-1.67-1.67s-1.67.75-1.67 1.67c0 .92.75 1.67 1.67 1.67m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
            ),
        },
        // {
        //     name: "WhatsApp",
        //     href: "https://wa.me/96500000000",
        //     label: "Direct Chat",
        //     icon: (
        //         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        //             <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.6-.1 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3z" />
        //         </svg>
        //     ),
        // },
        // {
        //     name: "GitHub",
        //     href: "https://github.com",
        //     label: "Code & Projects",
        //     icon: (
        //         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        //             <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        //         </svg>
        //     ),
        // },
        {
            name: "X (Twitter)",
            href: "https://x.com",
            label: "Updates & Thoughts",
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
    ];

    const resources = [
        {
            title: "Download Resume",
            desc: "Updated Operations & Management CV",
            href: "#",
            action: "PDF Download",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
        // {
        //     title: "Schedule Discussion",
        //     desc: "Reserve a 20-min introductory video call",
        //     href: "https://calendly.com",
        //     action: "Open Calendar",
        //     icon: (
        //         <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        //             <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        //         </svg>
        //     ),
        // },
        {
            title: "Request References",
            desc: "Letters of recommendation & credentials",
            href: `mailto:${email}?subject=Reference%20Request%20-%20Savio%20Correa`,
            action: "Send Request",
            icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
        },
    ];

    return (
        <footer
            id="contact"
            className="relative bg-white dark:bg-neutral-950 text-gray-900 dark:text-neutral-100 transition-colors duration-500 border-t border-gray-200 dark:border-neutral-800/80 overflow-hidden"
        >
            {/* Subtle decorative background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-48 bg-gradient-to-b from-[#5a7c93]/10 dark:from-[#789db5]/10 to-transparent blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-15 pb-4 relative z-10">

                {/* ── Top Call To Action Banner ── */}


                {/* ── Main Footer Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-gray-200 dark:border-neutral-800/80">

                    {/* Column 1: Identity & Bio (5 cols) */}
                    <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <a href="#" onClick={scrollToTop} className="inline-block group" aria-label="Savio Correa home">
                                    <img src={savioCorrea} className="h-10 w-10 dark:hidden" alt="Savio Correa Logo" />
                                    <img src={savioCorreaWhite} className="h-10 w-10 hidden dark:block" alt="Savio Correa Logo" />
                                </a>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Savio Correa</h3>
                                    <p className="text-xs font-semibold text-[#4a6f87] dark:text-[#789db5] uppercase tracking-wider">
                                        Operations Manager
                                    </p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed text-justify max-w-sm">
                                9+ years delivering leadership, quality assurance, cost control, and strategic growth across central kitchen manufacturing and enterprise F&B operations.
                            </p>
                        </div>

                        {/* Location & Status Pin */}
                        <div className="flex flex-col gap-2 pt-2 text-xs text-gray-500 dark:text-neutral-400">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-rose-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Based in Kuwait (Open to Global Relocation)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>ISO 22000 & HACCP Standards Champion</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Navigation Links (2 cols) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-neutral-500">
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm font-medium text-gray-700 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                                    >
                                        <span className="text-gray-400 dark:text-neutral-600 text-xs">›</span>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Social & Professional Connect (3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-neutral-500">
                            Connect
                        </h4>
                        <div className="space-y-2.5">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between p-2.5 -mx-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-900 border border-transparent hover:border-gray-200 dark:hover:border-neutral-800 transition-all duration-200"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-600 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                                            {item.icon}
                                        </span>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900 dark:text-neutral-200 group-hover:text-black dark:group-hover:text-white">
                                                {item.name}
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-neutral-500">
                                                {item.label}
                                            </div>
                                        </div>
                                    </div>
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Key Resources (3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-neutral-500">
                            Resources
                        </h4>
                        <div className="space-y-3">
                            {resources.map((res) => (
                                <a
                                    key={res.title}
                                    href={res.href}
                                    className="block p-3 rounded-2xl bg-gray-50 dark:bg-neutral-900/60 border border-gray-200/70 dark:border-neutral-800/80 hover:border-[#5a7c93]/50 dark:hover:border-[#789db5]/50 hover:shadow-md transition-all duration-200 group"
                                >
                                    <div className="flex items-center justify-between text-xs font-semibold text-[#4a6f87] dark:text-[#789db5] mb-1">
                                        <span className="flex items-center gap-1.5 whitespace-nowrap">
                                            {res.icon}
                                            {res.title}
                                        </span>
                                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gray-200/80 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 whitespace-nowrap">
                                            {res.action}
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-neutral-400 line-clamp-1">
                                        {res.desc}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* ── Bottom Bar: Copyright & Back-to-Top ── */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-neutral-500">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
                        <span>
                            © {new Date().getFullYear()} Royal Castelino. All rights reserved.
                        </span>
                        <span className="hidden sm:inline text-gray-300 dark:text-neutral-800">•</span>
                        <span>
                            Built with React & Tailwind CSS
                        </span>
                    </div>

                    <button
                        onClick={scrollToTop}
                        aria-label="Back to top"
                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-gray-700 dark:text-neutral-300 transition-colors duration-200 font-semibold"
                    >
                        <span>Back to top</span>
                        <svg
                            className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </button>
                </div>

            </div>
        </footer >
    );
}
