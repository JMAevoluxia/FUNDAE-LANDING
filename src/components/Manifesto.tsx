"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Manifesto() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-night"
        >
            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 max-w-4xl mx-auto px-6 text-center"
            >
                {/* Problem - Faded */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 0.3, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white/40 leading-tight">
                        El estándar es perder horas en Excels,{" "}
                        <br />
                        <span className="italic">duplicar tareas</span> y{" "}
                        <span className="italic">temer a las auditorías.</span>
                    </h2>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="w-32 h-px bg-gradient-to-r from-transparent via-cobalt to-transparent mx-auto mb-12"
                />

                {/* Solution - Highlighted */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                        Nosotros proponemos{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-blue-400">
                            automatización, 0 errores
                        </span>{" "}
                        <br />
                        y control total de tu <span className="italic text-cobalt">ROI.</span>
                    </h2>
                </motion.div>
            </motion.div>

            {/* Background accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt/20 to-transparent" />
        </section>
    );
}
