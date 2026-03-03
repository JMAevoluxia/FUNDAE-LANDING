"use client";

import { motion } from "framer-motion";
import { Building2, Users, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";

const audiences = [
    {
        id: 1,
        type: "Departamentos de Formación/RRHH",
        icon: Building2,
        description: "Evitar errores costosos en las auditorías y maximizar el crédito disponible sin sobresfuerzos.",
        benefits: [
            "Control total del crédito disponible",
            "Auditorías zero-stress",
            "Automatización de informes",
            "ROI demostrable"
        ],
        highlight: false
    },
    {
        id: 2,
        type: "Consultoras y Academias",
        icon: Users,
        description: "Reducir el tiempo administrativo para gestionar múltiples clientes sin perder el control.",
        benefits: [
            "Gestión multi-empresa",
            "Escalabilidad sin límites",
            "Facturación automatizada",
            "Alta rentabilidad por cliente"
        ],
        highlight: true
    },
    {
        id: 3,
        type: "Gestorías y Despachos",
        icon: Briefcase,
        description: "Ofrecer servicio integral FUNDAE sin necesidad de ser experto en la normativa.",
        benefits: [
            "Asistente IA que hace el trabajo",
            "Sin curva de aprendizaje",
            "Servicio premium para clientes",
            "Nuevas fuentes de ingreso"
        ],
        highlight: false
    }
];

export default function ParaQuien() {
    return (
        <section id="para-quien" className="relative py-24 bg-night">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-cobalt text-sm font-semibold uppercase tracking-wider">Para quién es</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                        Resolvemos la vida de...
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        Tres perfiles que encontrarán en FUNDAE Manager su aliado perfecto
                        para la gestión de la formación bonificada.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {audiences.map((audience, index) => {
                        const Icon = audience.icon;

                        return (
                            <motion.div
                                key={audience.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                viewport={{ once: true }}
                                className={`relative rounded-3xl p-8 ${audience.highlight
                                        ? "bg-cobalt/10 border-2 border-cobalt/50"
                                        : "bg-white/5 border border-white/10"
                                    }`}
                            >
                                {/* Featured Badge */}
                                {audience.highlight && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <span className="bg-cobalt text-white text-xs font-semibold px-4 py-1 rounded-full">
                                            Más popular
                                        </span>
                                    </div>
                                )}

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${audience.highlight ? "bg-cobalt" : "bg-white/10"
                                    }`}>
                                    <Icon className={`w-7 h-7 ${audience.highlight ? "text-white" : "text-white/60"}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {audience.type}
                                </h3>

                                {/* Description */}
                                <p className="text-white/50 mb-6 leading-relaxed">
                                    {audience.description}
                                </p>

                                {/* Benefits */}
                                <ul className="space-y-3 mb-8">
                                    {audience.benefits.map((benefit, bIndex) => (
                                        <li key={bIndex} className="flex items-start gap-3">
                                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${audience.highlight ? "text-cobalt" : "text-white/30"}`} />
                                            <span className="text-white/70 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <button className={`w-full py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors ${audience.highlight
                                        ? "bg-cobalt hover:bg-cobalt/90 text-white"
                                        : "bg-white/10 hover:bg-white/20 text-white"
                                    }`}>
                                    Saber más <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
