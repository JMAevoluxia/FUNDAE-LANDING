"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl transition-all duration-500 ${isScrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 rounded-full"
                    : "bg-transparent"
                }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-cobalt rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">FM</span>
                    </div>
                    <span
                        className={`font-semibold text-lg tracking-tight ${isScrolled ? "text-charcoal" : "text-white"
                            }`}
                    >
                        FUNDAE<span className="text-cobalt">Manager</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#features"
                        className={`text-sm font-medium transition-colors hover:text-cobalt ${isScrolled ? "text-charcoal/70" : "text-white/70"
                            }`}
                    >
                        Funcionalidades
                    </a>
                    <a
                        href="#como-funciona"
                        className={`text-sm font-medium transition-colors hover:text-cobalt ${isScrolled ? "text-charcoal/70" : "text-white/70"
                            }`}
                    >
                        Cómo funciona
                    </a>
                    <a
                        href="#para-quien"
                        className={`text-sm font-medium transition-colors hover:text-cobalt ${isScrolled ? "text-charcoal/70" : "text-white/70"
                            }`}
                    >
                        Para quién es
                    </a>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <motion.button
                        className="bg-cobalt hover:bg-cobalt/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Solicitar demo
                        <ChevronRight className="w-4 h-4" />
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-charcoal" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-charcoal" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className="md:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-6 mx-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                >
                    <div className="flex flex-col gap-4">
                        <a
                            href="#features"
                            className="text-charcoal font-medium py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Funcionalidades
                        </a>
                        <a
                            href="#como-funciona"
                            className="text-charcoal font-medium py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Cómo funciona
                        </a>
                        <a
                            href="#para-quien"
                            className="text-charcoal font-medium py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Para quién es
                        </a>
                        <button className="bg-cobalt text-white px-5 py-3 rounded-full font-semibold flex items-center justify-center gap-2 mt-2">
                            Solicitar demo
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
