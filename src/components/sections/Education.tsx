import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mumbaiUniLogo from "../../assets/mumbai_uni.png";
import nitteLogo from "../../assets/nitte.png";
import alvasLogo from "../../assets/alvas.png";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const education = [
    {
        degree: "Master's Degree, M.Com",
        school: "University of Mumbai, India",
        period: "2013 — 2015",
        desc: "Completed a Master of Commerce degree at the University of Mumbai.",
        logo: mumbaiUniLogo,
    },
    {
        degree: "Bachelor's Degree, Human Resources Management",
        school: "Dr. N.S.A.M. First Grade College, Nitte, Karkala, India",
        period: "2010 — 2013",
        desc: "Completed a bachelor's degree in Human Resources Management, building a foundation in business and people management.",
        logo: nitteLogo,
    },
    {
        degree: "Associate's Degree, Business/Commerce, General",
        school: "Alva's College, Moodabidri, Karnataka, India",
        period: "2008 — 2010",
        desc: "Completed an associate's degree focused on Business and Commerce.",
        logo: alvasLogo,
    },
];

export default function Education() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            // Header items popup reveal (tag + title)
            gsap.fromTo(
                ".edu-header-item",
                {
                    opacity: 0,
                    y: 40,
                    scale: 0.9,
                    filter: "blur(6px)",
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "back.out(1.5)",
                    scrollTrigger: {
                        trigger: headerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                }
            );

            // Education cards popup reveal
            const cards = gsap.utils.toArray<HTMLElement>(".edu-card");
            cards.forEach((card) => {
                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        y: 60,
                        scale: 0.88,
                        filter: "blur(8px)",
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: 0.85,
                        ease: "back.out(1.4)",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="education"
            className="min-h-screen px-6 lg:px-20 py-24 bg-white dark:bg-neutral-950 transition-colors duration-300 overflow-hidden"
        >
            <div className="max-w-4xl mx-auto">
                <div ref={headerRef} className="mb-16">
                    <span className="edu-header-item inline-block text-xs font-semibold tracking-[0.3em] text-gray-600 dark:text-neutral-500 uppercase mb-6">
                        03 — Education
                    </span>
                    <h2 className="edu-header-item text-4xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                        My background
                    </h2>
                </div>
                <div className="grid gap-8">
                    {education.map((edu, i) => (
                        <div
                            key={i}
                            className="edu-card group p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 hover:border-[#5a7c93]/40 transition-all duration-300 will-change-transform"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                <div className="flex items-center sm:items-start gap-4 sm:gap-5">
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white p-2 shadow-sm border border-gray-200/60 dark:border-neutral-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                                        <img
                                            src={edu.logo}
                                            alt={`${edu.school} logo`}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-snug">
                                            {edu.degree}
                                        </h3>
                                        <p className="text-sm font-semibold text-[#4a6f87] dark:text-[#789db5] mt-1">
                                            {edu.school}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-xs font-semibold tracking-widest text-gray-500 dark:text-neutral-300 uppercase whitespace-nowrap sm:mt-1 self-start">
                                    {edu.period}
                                </span>
                            </div>
                            <p className="text-gray-500 dark:text-neutral-400 leading-relaxed">
                                {edu.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
