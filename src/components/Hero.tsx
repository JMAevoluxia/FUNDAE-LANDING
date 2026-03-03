"use client";

import { motion } from "framer-motion";
import { ChevronRight, Shield, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-night">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* Radial gradient glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cobalt/10 rounded-full blur-[120px]" />

                {/* Grid pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <Shield className="w-4 h-4 text-cobalt" />
                        <span className="text-sm text-white/80">Certificación ISO 27001:2022</span>
                    </motion.div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                >
                    Domina FUNDAE con{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cobalt to-blue-400">
                        la mitad de esfuerzo
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    Automatiza la formación bonificada, elimina los Excels y exprime tu crédito en una sola plataforma.
                    Integrado con tu LMS y certificado ISO 27001.
                </motion.p>

                {/* CTA */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                >
                    <motion.button
                        className="bg-cobalt hover:bg-cobalt/90 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 transition-colors w-full sm:w-auto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Solicitar demo + diagnóstico
                        <ChevronRight className="w-5 h-5" />
                    </motion.button>

                    <button className="text-white/70 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-colors w-full sm:w-auto">
                        Ver funcionalidades
                    </button>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    {[
                        "Soporte experto FUNDAE",
                        "Integración nativa Cornerstone",
                        "ISO 27001:2022"
                    ].map((badge, index) => (
                        <div key={index} className="flex items-center gap-2 text-white/40">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="text-sm font-medium">{badge}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <motion.div
                    className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <motion.div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
