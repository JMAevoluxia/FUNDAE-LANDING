"use client";

import { motion } from "framer-motion";
import { Settings, Users, Link2, CheckCircle2 } from "lucide-react";

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
    return (
        <section id="como-funciona" className="relative py-24 bg-pearl">
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

                {/* Steps Container - Each step takes full viewport height */}
                <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative"
                            >
                                {/* Step Card */}
                                <div className="bg-white rounded-3xl shadow-xl shadow-charcoal/5 overflow-hidden border border-charcoal/5 h-full">
                                    <div className="p-8 md:p-10">
                                        {/* Step Number Badge */}
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="w-12 h-12 bg-cobalt rounded-full flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">{step.id}</span>
                                            </div>
                                            <div className="w-16 h-px bg-charcoal/10"></div>
                                        </div>

                                        {/* Icon */}
                                        <div className="w-14 h-14 bg-cobalt/10 rounded-2xl flex items-center justify-center mb-6">
                                            <Icon className="w-7 h-7 text-cobalt" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl font-bold text-charcoal mb-4">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-charcoal/60 mb-6">
                                            {step.description}
                                        </p>

                                        {/* Features List */}
                                        <div className="space-y-3">
                                            {step.features.map((feature, fIndex) => (
                                                <motion.div
                                                    key={fIndex}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: (index * 0.2) + (fIndex * 0.05) }}
                                                    viewport={{ once: true }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 text-cobalt flex-shrink-0 mt-0.5" />
                                                    <span className="text-charcoal/70 text-sm">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Connector Line (except for last item on mobile) */}
                                        {index < steps.length - 1 && (
                                            <div className="md:hidden flex items-center justify-center mt-6">
                                                <div className="w-0.5 h-8 bg-charcoal/20"></div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Arrow Connector for Desktop */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:flex absolute top-1/2 -right-4 z-10 transform -translate-y-1/2">
                                        <div className="w-8 h-8 bg-cobalt rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
