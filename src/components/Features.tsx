"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Terminal, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";

// Feature 1: Dashboard ROI
function FeatureDashboard() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setProgress(78), 300);
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    return (
        <div ref={ref} className="bg-charcoal/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-cobalt/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cobalt" />
                </div>
                <div>
                    <h3 className="text-white font-semibold">Control de Crédito y ROI</h3>
                    <p className="text-white/40 text-sm">Simulación de escenarios en tiempo real</p>
                </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-4 mb-6">
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/60">Crédito disponible</span>
                        <span className="text-cobalt font-mono">€1,245,000</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-cobalt to-blue-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </div>
                </div>
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/60">Crédito ejecutado</span>
                        <span className="text-green-400 font-mono">€971,100</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress * 0.78}%` }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                        />
                    </div>
                </div>
            </div>

            {/* Floating tags */}
            <div className="flex flex-wrap gap-2">
                {["Simulación de escenarios", "Justificación del ROI", "Alertas automáticas"].map((tag, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 bg-white/5 text-white/50 text-xs rounded-full border border-white/5"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

// Feature 2: Terminal
function FeatureTerminal() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [lines, setLines] = useState<string[]>([]);

    const terminalLines = [
        { text: "> Validando XML...", delay: 0, status: "running" },
        { text: "> Cruzando listados de asistencia...", delay: 800, status: "running" },
        { text: "> Verificando requisitos de bonificación...", delay: 1600, status: "running" },
        { text: "> Alerta de plazo generada...", delay: 2400, status: "warning" },
        { text: "> Notificación enviada al responsable...", delay: 3200, status: "success" },
    ];

    useEffect(() => {
        if (isInView) {
            terminalLines.forEach((line, index) => {
                setTimeout(() => {
                    setLines(prev => [...prev, line.text]);
                }, line.delay);
            });
        }
    }, [isInView]);

    return (
        <div ref={ref} className="bg-[#0D0D0D] rounded-2xl p-6 border border-white/10 overflow-hidden font-mono">
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-white/60" />
                </div>
                <div>
                    <h3 className="text-white font-semibold">Automatización y Auditoría</h3>
                    <p className="text-white/40 text-sm">Procesos desatendidos 24/7</p>
                </div>
            </div>

            <div className="bg-black/50 rounded-lg p-4 min-h-[200px]">
                {lines.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 py-1"
                    >
                        <span className="text-green-400">●</span>
                        <span className="text-white/80 text-sm">{line}</span>
                        {index === lines.length - 1 && (
                            <motion.span
                                className="w-2 h-4 bg-cobalt"
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// Feature 3: AI Chat
function FeatureChat() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className="bg-charcoal/50 rounded-2xl p-6 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-cobalt/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-cobalt" />
                </div>
                <div>
                    <h3 className="text-white font-semibold">IA Copiloto Contextual</h3>
                    <p className="text-white/40 text-sm">Asistente especializado en normativa FUNDAE</p>
                </div>
            </div>

            {/* Chat interface */}
            <div className="space-y-4">
                {/* User message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="flex justify-end"
                >
                    <div className="bg-cobalt/20 border border-cobalt/30 rounded-2xl rounded-br-md px-4 py-3 max-w-[90%]">
                        <p className="text-white text-sm">
                            ¿Cómo bonifico este grupo mixto de 20 alumnos de dos empresas distintas?
                        </p>
                    </div>
                </motion.div>

                {/* AI Response */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="flex justify-start"
                >
                    <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-md px-4 py-3 max-w-[95%]">
                        <p className="text-white/80 text-sm mb-3">
                            Para grupos mixtos con empleados de diferentes empresas, debes aplicar:
                        </p>
                        <ul className="space-y-2 text-white/60 text-sm">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-cobalt mt-0.5 flex-shrink-0" />
                                <span>Cálculo individual de cofinanciación empresarial</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-cobalt mt-0.5 flex-shrink-0" />
                                <span>Distincta aplicación de costes por empresa</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-cobalt mt-0.5 flex-shrink-0" />
                                <span>Coef. de bonificación: 5% (Empresa grande)</span>
                            </li>
                        </ul>
                        <div className="mt-3 pt-3 border-t border-white/10">
                            <p className="text-cobalt text-xs font-medium">Ahorro estimado: €3,240 en formación</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default function Features() {
    return (
        <section id="features" className="relative py-24 bg-night">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cobalt text-sm font-semibold uppercase tracking-wider">Funcionalidades</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Instrumentos de alta precisión
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        Cada feature diseñada como un artefacto funcional. No tarjetas estáticas,
                        sino herramientas que transmiten seguridad y control.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <FeatureDashboard />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <FeatureTerminal />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <FeatureChat />
                    </motion.div>
                </div>

                {/* View more link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a href="#" className="inline-flex items-center gap-2 text-cobalt hover:text-cobalt/80 font-medium transition-colors">
                        Ver todas las funcionalidades <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
