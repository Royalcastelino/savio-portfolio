import { useRef, useEffect, useState } from "react";

const bioText =
    "I'm a dynamic Operations Manager with 9+ years of experience in the food and beverage manufacturing and distribution industry, with a strong background in Kuwait's F&B sector. My expertise spans central kitchen operations, production, procurement, logistics, retail distribution, supply chain management, quality assurance, fleet management, process optimisation, and team leadership. Throughout my career, I have led end-to-end operations, supported ISO 22000 and HACCP certification initiatives, launched new products, and implemented innovative solutions focused on improving efficiency, quality, and overall business performance.";

const words = bioText.split(" ");

export default function Intro() {
    const sectionRef = useRef<HTMLElement>(null);
    const [litCount, setLitCount] = useState(0);
    const [isDesktop, setIsDesktop] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
    );

    useEffect(() => {
        const mql = window.matchMedia('(min-width: 1024px)');
        const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
        mql.addEventListener('change', onChange);
        return () => mql.removeEventListener('change', onChange);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const sectionH = sectionRef.current.offsetHeight;
            const winH = window.innerHeight;

            // How far we have scrolled INTO the section past the first screen
            const scrolled = -rect.top;
            // Total scrollable distance inside the section (minus one viewport)
            const total = sectionH - winH;

            const progress = Math.min(Math.max(scrolled / total, 0), 1);
            setLitCount(Math.round(progress * words.length));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // run once on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        /* Extra height gives the scroll room for the word-reveal effect */
        <section
            ref={sectionRef}
            id="platform"
            className="min-h-[220vh] bg-white dark:bg-neutral-950 transition-colors duration-300"
        >

            {/* Sticky container — stays in viewport while user scrolls through the section */}
            <div className="sticky top-0 min-h-screen flex flex-col justify-center px-6 lg:px-20 py-24">
                <div className="max-w-4xl w-full mx-auto">
                    <span className="inline-block text-xs font-semibold tracking-[0.3em] text-gray-600 dark:text-neutral-500 uppercase mb-6">
                        01 — Intro
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-10">
                        Hi, I am <br />
                        <span className="bg-gradient-to-r from-violet-500 via-pink-300 to-red-400 dark:from-violet-500 dark:to-red-200  bg-clip-text text-transparent">
                            Savio Correa
                        </span>
                        {/* <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true" focusable="false">
                            <defs>
                                <linearGradient
                                    id="savioGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop offset="0%" stopColor="#8B5CF6" />
                                    <stop offset="100%" stopColor="#6366F1" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <StrokeText
                            text="Savio Correa"
                            strokeColor="url(#savioGradient)"
                            fillColor="url(#savioGradient)"
                            strokeWidth={isDesktop ? 1.8 : 1.4}
                            drawDuration={1.6}
                            fillDelay={0.2}
                            stagger={0.05}
                            ease="power2.out"
                            trigger="mount"
                            fillMode="wipe"
                            fontSize={isDesktop ? 72 : 48}
                            fontWeight={700}
                            letterSpacing={isDesktop ? -1.8 : -1.2}
                            reverse={false}
                        /> */}
                    </h1>

                    {/* Scroll-driven word reveal */}
                    <p className="font-roboto text-lg lg:text-3xl font-semibold leading-relaxed mb-10 text-justify">
                        {words.map((word, i) => (
                            <span
                                key={i}
                                style={{
                                    transition: `color ${Math.min(0.15 + i * 0.005, 0.4)}s ease`,
                                }}
                                className={
                                    i < litCount
                                        ? "text-gray-900 dark:text-white"
                                        : "text-gray-300 dark:text-neutral-700"
                                }
                            >
                                {word}{" "}
                            </span>
                        ))}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#company"
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-black text-sm font-semibold rounded-xl hover:opacity-80 transition-all duration-300 hover:scale-105"
                        >
                            See my work
                            <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-neutral-300 text-sm font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all duration-300"
                        >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
