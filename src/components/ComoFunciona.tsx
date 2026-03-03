"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Settings, Users, Link2, ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Configuración y Planificación",
        description: "Alta de empresas, cálculo de crédito y calendarios automáticos. Configura tu modelo de negocio una sola vez.",
        icon: Settings,
        features: [
            "Alta masiva de empresas",
            "Cálculo automático de crédito disponible",
            "Calendarios de formación personalizados",
            "Gestión de grupos y bonificaciones"
        ]
    },
    {
        id: 2,
        title: "Ejecución sin fricciones",
        description: "Matrículas, firmas digitales, encuestas, diplomas y control de documentación. Todo automatizado.",
        icon: Users,
        features: [
            "Matriculación online",
            "Firmas digitales conformes a normativa",
            "Control de asistencia automatizado",
            "Diplomas y certificados automáticos"
        ]
    },
    {
        id: 3,
        title: "Integración e Independencia",
        description: "Conexión nativa con tu LMS corporativo o modo autónomo con cargas masivas.",
        icon: Link2,
        features: [
            "Integración nativa con LMS",
            "API abierta para desarrolladores",
            "Cargas masivas de datos",
            "Exportación a tutti i formati"
        ]
    }
];

export default function ComoFunciona() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section id="como-funciona" ref={containerRef} className="relative py-24 bg-pearl">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cobalt text-sm font-semibold uppercase tracking-wider">Cómo funciona</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6">
                        Tres pasos hacia la automatización
                    </h2>
                    <p className="text-charcoal/50 text-lg max-w-2xl mx-auto">
                        Un flujo fluido que se adapta a tu organización.
                        Configúralo una vez y olvídate de los procesos manuales.
                    </p>
                </motion.div>

                {/* Stacked Cards Container */}
                <div className="relative h-[300vh]">
                    {steps.map((step, index) => {
                        const startRange = index * 0.33;
                        const endRange = startRange + 0.33;

                        const y = useTransform(scrollYProgress,
                            [startRange, startRange + 0.1, endRange - 0.1, endRange],
                            [100, 0, 0, -100]
                        );

                        const scale = useTransform(scrollYProgress,
                            [startRange, startRange + 0.1, endRange - 0.1, endRange],
                            [0.95, 1, 1, 0.95]
                        );

                        const opacity = useTransform(scrollYProgress,
                            [startRange, startRange + 0.1, endRange - 0.1, endRange],
                            [0.4, 1, 1, 0.4]
                        );

                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.id}
                                style={{ y, scale, opacity }}
                                className={`sticky top-24 left-0 right-0 max-w-4xl mx-auto`}
                            >
                                <div className="bg-white rounded-3xl shadow-xl shadow-charcoal/5 overflow-hidden border border-charcoal/5">
                                    <div className="p-8 md:p-12">
                                        {/* Card Header */}
                                        <div className="flex items-start gap-6 mb-8">
                                            <div className="w-16 h-16 bg-cobalt/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-8 h-8 text-cobalt" />
                                            </div>
                                            <div>
                                                <span className="text-cobalt text-sm font-semibold">Paso {step.id}</span>
                                                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mt-1">
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-charcoal/60 text-lg mb-8 max-w-2xl">
                                            {step.description}
                                        </p>

                                        {/* Features List */}
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {step.features.map((feature, fIndex) => (
                                                <motion.div
                                                    key={fIndex}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: fIndex * 0.1 }}
                                                    viewport={{ once: true }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-cobalt flex-shrink-0" />
                                                    <span className="text-charcoal/70">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* CTA for each step */}
                                        {index < steps.length - 1 && (
                                            <div className="flex justify-center mt-8">
                                                <ArrowRight className="w-6 h-6 text-charcoal/20" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
