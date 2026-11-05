import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import isoLogo from "../../assets/Achievements/ISO22000.png";
import kitchenLogo from "../../assets/Achievements/kitchen.png";
import kitchen2Logo from "../../assets/Achievements/kitchen2.png";
import machineLogo from "../../assets/Achievements/modern_machine.png";
import barcodeLogo from "../../assets/Achievements/barcode.png";
import menuLogo from "../../assets/Achievements/menu_engineering.png";
import ecommerceLogo from "../../assets/Achievements/ecommerce.png";
import haccpLogo from "../../assets/Achievements/HACCP.png";

export interface AchievementItem {
    index: string;
    title: string;
    desc: string;
    image: string;
    accent: string;
    tag: string;
}

const achievements: AchievementItem[] = [
    {
        index: "01",
        title: "ISO 22000 Certification",
        desc: "Successfully acquired and implemented ISO 22000 standards, strengthening food safety management, quality assurance, compliance, and consistency across processing operations.",
        image: isoLogo,
        accent: "#d4af37",
        tag: "Certification",
    },
    {
        index: "02",
        title: "HACCP Food Safety Standards",
        desc: "Implemented comprehensive Hazard Analysis Critical Control Point protocols, establishing strict control points and international quality benchmarks.",
        image: haccpLogo,
        accent: "#0ea5e9",
        tag: "Food Safety",
    },
    {
        index: "03",
        title: "Central Kitchen Development",
        desc: "Coordinated and supervised the design and launch of modern central kitchens, ensuring full operational readiness and compliance with health and production standards.",
        image: kitchenLogo,
        accent: "#ef4444",
        tag: "Infrastructure",
    },
    {
        index: "04",
        title: "Production Facility Expansion",
        desc: "Managed the end-to-end commissioning of secondary kitchen facilities, scaling production capacity to meet growing multi-outlet catering demands.",
        image: kitchen2Logo,
        accent: "#8b5cf6",
        tag: "Operations",
    },
    {
        index: "05",
        title: "Modern Production Machinery",
        desc: "Recommended and integrated specialized industrial machinery, boosting overall production velocity, precision, and staff operational efficiency.",
        image: machineLogo,
        accent: "#10b981",
        tag: "Technology",
    },
    {
        index: "06",
        title: "Barcode Inventory Tracking",
        desc: "Introduced end-to-end barcode scanning systems to automate inventory workflows, reduce discrepancies, and ensure traceable stock handling.",
        image: barcodeLogo,
        accent: "#f59e0b",
        tag: "Systems",
    },
    {
        index: "07",
        title: "Product Development & Menu Engineering",
        desc: "Contributed to market research, recipe scaling, and menu engineering to introduce highly profitable, customer-loved food products.",
        image: menuLogo,
        accent: "#ec4899",
        tag: "Innovation",
    },
    {
        index: "08",
        title: "E-Commerce & Digital Ordering",
        desc: "Collaborated closely with development teams to launch the enterprise digital ordering web app, establishing seamless online sales and distribution.",
        image: ecommerceLogo,
        accent: "#3b82f6",
        tag: "Digital",
    },
];

function AchievementSlide({
    achieve,
    index,
    total,
    scrollYProgress,
}: {
    achieve: AchievementItem;
    index: number;
    total: number;
    scrollYProgress: MotionValue<number>;
}) {
    // Each panel occupies an exact slice of scroll progress
    const segment = 1 / total;
    const start = index * segment;
    const end = (index + 1) * segment;

    const isFirst = index === 0;
    const isLast = index === total - 1;
    const fadeInEnd = start + segment * 0.25;
    const fadeOutStart = end - segment * 0.2;

    // Card 01 starts at 100% opacity immediately when #achievements is entered
    let opacityInput: number[];
    let opacityOutput: number[];

    if (isFirst) {
        opacityInput = [start, fadeOutStart, end];
        opacityOutput = [1, 1, 0];
    } else if (isLast) {
        opacityInput = [start, fadeInEnd, end];
        opacityOutput = [0, 1, 1];
    } else {
        opacityInput = [start, fadeInEnd, fadeOutStart, end];
        opacityOutput = [0, 1, 1, 0];
    }

    const rawOpacity = useTransform(scrollYProgress, opacityInput, opacityOutput);
    const opacity = useSpring(rawOpacity, { stiffness: 120, damping: 24 });

    // Cinematic zoom & scale pop
    const rawScale = useTransform(
        scrollYProgress,
        isFirst ? [start, end] : [start, fadeInEnd, end],
        isFirst ? [1.0, 0.95] : [1.12, 1.0, 0.95]
    );
    const scale = useSpring(rawScale, { stiffness: 90, damping: 22 });

    // Upward float for text content
    const rawY = useTransform(
        scrollYProgress,
        isFirst ? [start, end] : [start, fadeInEnd, end],
        isFirst ? [0, -25] : [30, 0, -25]
    );
    const y = useSpring(rawY, { stiffness: 100, damping: 22 });

    return (
        <motion.div
            style={{ opacity, zIndex: index + 1 }}
            className="absolute inset-0 w-full h-full pointer-events-none"
        >
            {/* Full-Screen Cinema Stage: Fully responsive to Light and Dark modes */}
            <div className="relative w-full h-full bg-[#f8fafc] dark:bg-[#0c0d11] transition-colors duration-500 pointer-events-auto flex flex-col justify-between overflow-hidden">

                {/* ── Background Media with Gradient Mask ── */}
                <motion.div
                    style={{ scale }}
                    className="absolute inset-0 w-full h-full"
                >
                    {/* Theme underlay */}
                    <div className="absolute inset-0 bg-[#f8fafc] dark:bg-[#0c0d11] transition-colors duration-500" />

                    {/* Image properly contained on the right */}
                    <div className="absolute inset-0 flex items-center justify-end pr-4 md:pr-16 lg:pr-24 opacity-100 dark:opacity-85 transition-opacity duration-500">
                        <img
                            src={achieve.image}
                            alt={achieve.title}
                            className="max-h-[65vh] py-2 w-auto max-w-[85vw] md:max-w-[50vw] object-contain drop-shadow-xl dark:drop-shadow-2xl"
                            draggable={false}
                        />
                    </div>

                    {/* Left-to-right gradient: strictly covers left text area, right side is 100% transparent in light mode */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent dark:from-[#0c0d11] dark:via-[#0c0d11]/85 dark:to-transparent/20 transition-colors duration-500 w-full lg:w-3/5" />
                    {/* Top & bottom gentle edge vignettes */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#f8fafc]/40 via-transparent to-[#f8fafc]/40 dark:from-[#0c0d11] dark:via-transparent dark:to-[#0c0d11]/70 transition-colors duration-500" />
                </motion.div>

                {/* ── Top Bar (Padded to clear fixed navbar comfortably) ── */}
                <div className="relative z-10 flex items-center justify-between px-6 sm:px-12 md:px-20 lg:px-28 pt-24 sm:pt-28">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <span className="text-gray-500 dark:text-white/40 text-xs font-semibold tracking-[0.3em] uppercase transition-colors duration-300">
                            04 — Achievements
                        </span>
                        <span
                            className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border backdrop-blur-md w-fit transition-colors duration-300"
                            style={{
                                color: achieve.accent,
                                backgroundColor: `${achieve.accent}15`,
                                borderColor: `${achieve.accent}35`,
                            }}
                        >
                            {achieve.tag}
                        </span>
                    </div>

                    <span className="font-mono text-xs sm:text-sm tracking-widest text-gray-500 dark:text-white/50 font-semibold transition-colors duration-300">
                        {achieve.index} <span className="text-gray-400 dark:text-white/20">/</span> 0{total}
                    </span>
                </div>

                {/* ── Center / Left Content Overlay with Netflix Big Outline Number ── */}
                <motion.div
                    style={{ y }}
                    className="relative z-10 px-6 sm:px-12 md:px-20 lg:px-28 pb-16 sm:pb-20 max-w-2xl lg:max-w-3xl"
                >
                    {/* Big Netflix-style outlined number (adaptive outline for light/dark) */}
                    <div
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none select-none tracking-tighter"
                        style={{
                            color: "transparent",
                            WebkitTextStroke: `1.5px ${achieve.accent}`,
                            opacity: 0.75,
                        }}
                    >
                        {achieve.index}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mt-1 mb-3 leading-tight transition-colors duration-300 drop-shadow-sm dark:drop-shadow-md">
                        {achieve.title}
                    </h3>

                    {/* Accent glowing indicator line */}
                    <div
                        className="w-16 h-1 rounded-full mb-4"
                        style={{
                            backgroundColor: achieve.accent,
                            boxShadow: `0 0 12px ${achieve.accent}`,
                        }}
                    />

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-neutral-300 leading-relaxed font-normal max-w-xl text-justify transition-colors duration-300">
                        {achieve.desc}
                    </p>
                </motion.div>
                {index !== total - 1 &&
                    <div className="relative z-10 w-full h-1 bg-black/5 dark:bg-white/10 transition-colors duration-300">
                        <div
                            className="h-full transition-all duration-300"
                            style={{
                                width: `${((index + 1) / total) * 100}%`,
                                backgroundColor: achieve.accent,
                                boxShadow: `0 0 10px ${achieve.accent}`,
                            }}
                        />
                    </div>
                }
            </div>
        </motion.div>
    );
}

export default function Achievements() {
    const containerRef = useRef<HTMLDivElement>(null);
    const total = achievements.length;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            id="achievements"
            ref={containerRef}
            style={{ height: `${total * 100}vh` }}
            className="relative bg-gray-50 dark:bg-[#0c0d11] transition-colors duration-500"
        >
            {/* Sticky full-screen viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Dot Navigator on the right */}
                <div className="hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 flex-col gap-3 z-30 pointer-events-none">
                    {achievements.map((achieve, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-black/20 dark:bg-white/20 transition-all duration-300"
                        />
                    ))}
                </div>

                {/* Full-screen pop-in slides */}
                {achievements.map((achieve, i) => (
                    <AchievementSlide
                        key={i}
                        achieve={achieve}
                        index={i}
                        total={total}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
}
