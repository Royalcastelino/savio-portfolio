import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import shuwaikhLogo from "../../assets/Shuwaikh.png";
import oishiiLogo from "../../assets/OISHII.png";
import mapleLogo from "../../assets/Maple.png";
import universalHuntLogo from "../../assets/Universal.png";
import BorderGlow from "../../effects/BorderGlow";
import oishiipic2 from "../../assets/Oishi2.png"

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    desc: string;
    images?: string[];
    location?: string;
}

const experiences: ExperienceItem[] = [
    {
        role: "Operations Manager",
        images: [oishiipic2, oishiiLogo],
        company: "Oishii Sushi Company",
        period: "January 2022 — Present",
        desc: "Oversee central kitchen operations, food production, inventory, procurement, and cost control while ensuring food safety, quality, and compliance. Lead and mentor the central kitchen team, develop SOPs, evaluate operational performance, coordinate maintenance, and collaborate on new product development.",
        location: "Kuwait",
    },
    {
        role: "Production Manager",
        images: [shuwaikhLogo],
        company: "Shuwaikh Cafeteria and Pastries Company",
        period: "October 2020 — January 2022",
        desc: "Managed daily central kitchen production, raw material availability, production costing, quality and safety standards, workforce planning, machinery, and regulatory requirements. Worked according to ISO and HACCP standards while improving production procedures and reducing operational costs.",
        location: "Kuwait",
    },
    {
        role: "Special Duties Supervisor",
        images: [shuwaikhLogo],
        company: "Shuwaikh Cafeteria and Pastries Company",
        period: "September 2017 — September 2020",
        desc: "Supported ISO and HACCP implementation, conducted monthly food safety and hygiene audits, developed SOPs, trained new employees, coordinated recruitment activities, supported HR and administration, managed vendor negotiations, and assisted with operational reporting.",
        location: "Kuwait",
    },
    {
        role: "Apple Consultant",
        images: [mapleLogo],
        company: "Maple Digital Technologies International Pvt. Ltd.",
        period: "August 2016 — April 2017",
        desc: "Worked as an Apple Consultant at an Apple Premium Reseller, providing customers with product guidance and technology-related assistance.",
        location: "India",
    },
    {
        role: "Business Consultant",
        images: [universalHuntLogo],
        company: "Universal Hunt Private Ltd — India",
        period: "December 2015 — August 2016",
        desc: "Worked as a Business Consultant, supporting business and professional recruitment-related activities.",
        location: "India",
    },
];

const ImageCarousel = ({ images, company, role }: { images?: string[], company: string, role: string }) => {
    const [currentImg, setCurrentImg] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentImg((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [images]);

    if (!images || images.length === 0) {
        return (
            <div className="w-full h-full min-h-[200px] lg:min-h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#5a7c93]/15 text-[#4a6f87] dark:text-[#789db5] flex items-center justify-center mb-3 group-hover/img:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <span className="text-xs font-semibold text-gray-400 dark:text-neutral-500 uppercase tracking-widest">
                    Image / Media Slot
                </span>
                <span className="text-xs text-gray-500 dark:text-neutral-400 mt-1 max-w-[180px] truncate">
                    {company}
                </span>
            </div>
        );
    }

    return (
        <div className="w-full h-full min-h-[200px] lg:min-h-0 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={images[currentImg]}
                    alt={`${company} - ${role} ${currentImg + 1}`}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover/img:scale-95"
                />
            </AnimatePresence>

            {images.length > 1 && (
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentImg ? 'w-4 bg-black border' : 'w-1.5 bg-white/50'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default function Experience() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        if (typeof document !== "undefined") {
            return document.documentElement.classList.contains("dark");
        }
        return false;
    });

    useEffect(() => {
        const updateDark = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };
        updateDark();

        const observer = new MutationObserver(updateDark);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const stageRef = useRef<HTMLDivElement>(null);
    const lastWheelTimeRef = useRef(0);

    const rightClickStartRef = useRef<{ x: number; y: number } | null>(null);
    const hasRightSwipedRef = useRef(false);

    const prevCard = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : experiences.length - 1));
    };

    const nextCard = () => {
        setCurrentIndex((prev) => (prev < experiences.length - 1 ? prev + 1 : 0));
    };

    // Auto-advance carousel after 5 seconds (pauses on hover)
    useEffect(() => {
        if (isHovered) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % experiences.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isHovered, currentIndex]);

    // Horizontal scroll listener (trackpad swipe left/right, horizontal wheel, Shift + wheel)
    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;

        const onWheel = (e: WheelEvent) => {
            const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;
            const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);

            if (isHorizontal && Math.abs(delta) > 15) {
                e.preventDefault();

                const now = Date.now();
                // Debounce threshold so one scroll gesture moves one card smoothly
                if (now - lastWheelTimeRef.current > 380) {
                    if (delta > 0) {
                        nextCard();
                    } else {
                        prevCard();
                    }
                    lastWheelTimeRef.current = now;
                }
            }
        };

        stage.addEventListener("wheel", onWheel, { passive: false });
        return () => stage.removeEventListener("wheel", onWheel);
    }, [currentIndex]);

    // Global listener to release right-click drag if mouse leaves the element
    useEffect(() => {
        const handleGlobalMouseUp = (e: MouseEvent) => {
            if (e.button === 2) {
                rightClickStartRef.current = null;
            }
        };
        window.addEventListener("mouseup", handleGlobalMouseUp);
        return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
    }, []);

    // Right-click swipe handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        if (e.button === 2) {
            rightClickStartRef.current = { x: e.clientX, y: e.clientY };
            hasRightSwipedRef.current = false;
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (rightClickStartRef.current && (e.buttons & 2)) {
            const diffX = e.clientX - rightClickStartRef.current.x;
            const diffY = e.clientY - rightClickStartRef.current.y;

            if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
                if (diffX < 0) {
                    nextCard();
                } else {
                    prevCard();
                }
                hasRightSwipedRef.current = true;
                rightClickStartRef.current = null;
            }
        }
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (e.button === 2) {
            rightClickStartRef.current = null;
        }
    };

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
    };

    // Keyboard navigation (Arrow keys)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prevCard();
            if (e.key === "ArrowRight") nextCard();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const renderCardContent = (exp: ExperienceItem, i: number) => (
        <>
            {/* Left Details Section */}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-transparent border border-[#5a7c93]/40 dark:border-[#789db5]/40 text-xs font-semibold text-black dark:text-white">
                            {i === 0 && (
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            )}
                            {exp.period}
                        </div>
                        {exp.location && (
                            <span className="text-xs font-medium text-gray-800 dark:text-neutral-300 flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {exp.location}
                            </span>
                        )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                        {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-[#4a6f87] dark:text-[#789db5] mt-1 mb-5">
                        {exp.company}
                    </p>
                    <p className="text-gray-800 dark:text-neutral-400 text-sm sm:text-base leading-relaxed text-justify">
                        {exp.desc}
                    </p>
                </div>
            </div>

            {/* Right Media / Image Slot */}
            <div className="w-full lg:w-72 shrink-0 rounded-2xl overflow-hidden border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-800/40 flex items-stretch justify-center h-52 sm:h-64 lg:h-auto min-h-[200px] lg:min-h-full relative group/img">
                <ImageCarousel images={exp.images} company={exp.company} role={exp.role} />
            </div>
        </>
    );

    return (
        <section
            id="company"
            className="min-h-screen px-6 lg:px-20 py-24 bg-gray-50 dark:bg-neutral-900 transition-colors duration-300 overflow-hidden"
        >
            <div className="max-w-4xl mx-auto">
                <span className="inline-block text-xs font-semibold tracking-[0.3em] text-gray-600 dark:text-neutral-400 uppercase mb-6">
                    02 — Experience
                </span>
                <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-16">
                    Where I have worked
                </h2>

                {/* 3D Peeking Carousel Stage with Right-Click Swipe & Horizontal Scroll */}
                <div
                    ref={stageRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onContextMenu={handleContextMenu}
                    style={{ perspective: 1200, transformStyle: "preserve-3d" }}
                    className="relative w-full min-h-[640px] sm:min-h-[540px] lg:min-h-[400px] flex items-center justify-center py-4 select-none"
                >
                    {experiences.map((exp, i) => {
                        const offset = i - currentIndex;
                        const isCurrent = offset === 0;

                        if (Math.abs(offset) > 2) return null;

                        let xPercent = 0;
                        let z = 0;
                        let scale = 1;
                        let opacity = 1;
                        let zIndex = 30;
                        let rotateY = 0;
                        let filter = "blur(0px) brightness(1)";

                        if (offset === 0) {
                            xPercent = 0;
                            z = 40;
                            scale = 1;
                            opacity = 1;
                            zIndex = 30;
                            rotateY = 0;
                            filter = "blur(0px) brightness(1)";
                        } else if (offset === 1) {
                            xPercent = 44;
                            z = -130;
                            scale = 0.88;
                            opacity = 0.65;
                            zIndex = 20;
                            rotateY = -14;
                            filter = "blur(2px) brightness(0.85)";
                        } else if (offset === 2) {
                            xPercent = 76;
                            z = -240;
                            scale = 0.76;
                            opacity = 0.25;
                            zIndex = 10;
                            rotateY = -22;
                            filter = "blur(4px) brightness(0.65)";
                        } else if (offset === -1) {
                            xPercent = -44;
                            z = -130;
                            scale = 0.88;
                            opacity = 0.65;
                            zIndex = 20;
                            rotateY = 14;
                            filter = "blur(2px) brightness(0.85)";
                        } else if (offset === -2) {
                            xPercent = -76;
                            z = -240;
                            scale = 0.76;
                            opacity = 0.25;
                            zIndex = 10;
                            rotateY = 22;
                            filter = "blur(4px) brightness(0.65)";
                        }

                        return (
                            <motion.div
                                key={i}
                                initial={false}
                                animate={{
                                    x: `${xPercent}%`,
                                    z,
                                    scale,
                                    opacity,
                                    zIndex,
                                    rotateY,
                                    filter,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 280,
                                    damping: 28,
                                    mass: 0.8,
                                }}
                                drag={isCurrent ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(_, info) => {
                                    if (info.offset.x < -50 || info.velocity.x < -300) nextCard();
                                    if (info.offset.x > 50 || info.velocity.x > 300) prevCard();
                                }}
                                onClick={() => {
                                    if (!isCurrent) setCurrentIndex(i);
                                }}
                                style={{ transformStyle: "preserve-3d" }}
                                className={`absolute top-0 w-full max-w-4xl select-none ${isCurrent ? "cursor-grab active:cursor-grabbing" : "cursor-pointer pointer-events-auto"
                                    }`}
                            >
                                {isCurrent ? (
                                    <BorderGlow
                                        key={`glow-${currentIndex}`}
                                        animated={true}
                                        edgeSensitivity={35}
                                        glowRadius={36}
                                        borderRadius={24}
                                        coneSpread={28}
                                        glowIntensity={isDark ? 1.3 : 1.2}
                                        glowColor={isDark ? "204 45 68" : "204 35 48"}
                                        backgroundColor={isDark ? "#171717" : "#ffffff"}
                                        colors={
                                            isDark
                                                ? ['#789db5', '#5a7c93', '#9bc0d7']
                                                : ['#4a6f87', '#5f849d', '#3b5a6f']
                                        }
                                        fillOpacity={isDark ? 0.35 : 0.2}
                                        className="w-full rounded-3xl shadow-2xl shadow-[#5a7c93]/15 dark:shadow-black/70"
                                        innerClassName="p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch w-full"
                                    >
                                        {renderCardContent(exp, i)}
                                    </BorderGlow>
                                ) : (
                                    <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200/80 dark:border-neutral-800 transition-colors duration-300 flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch shadow-lg shadow-black/20 hover:border-[#5a7c93]/40 w-full">
                                        {renderCardContent(exp, i)}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {experiences.map((exp, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            aria-label={`Jump to experience ${i + 1}: ${exp.role}`}
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i
                                ? "w-8 bg-black dark:bg-white"
                                : "w-2 bg-gray-300 dark:bg-neutral-700 hover:bg-gray-400 dark:hover:bg-neutral-600"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

