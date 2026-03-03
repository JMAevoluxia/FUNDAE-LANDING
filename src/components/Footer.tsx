"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin, ChevronRight, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative bg-night pt-24 pb-8">
            {/* CTA Section */}
            <section className="max-w-5xl mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative bg-charcoal/50 rounded-3xl p-8 md:p-12 border border-white/5 overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-cobalt/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Da el siguiente paso en tu gestión FUNDAE
                        </h2>
                        <p className="text-white/50 text-lg mb-10 max-w-2xl mx-auto">
                            Solicita un diagnóstico de tu modelo actual de gestión y descubre el impacto de automatizar
                            toda tu formación bonificada.
                        </p>

                        {/* Mini Form */}
                        <form className="max-w-md mx-auto">
                            <div className="grid gap-4">
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cobalt/50 transition-colors"
                                />
                                <input
                                    type="email"
                                    placeholder="Email corporativo"
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-cobalt/50 transition-colors"
                                />
                                <motion.button
                                    type="submit"
                                    className="w-full bg-cobalt hover:bg-cobalt/90 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                >
                                    Agendar Demo
                                    <ChevronRight className="w-5 h-5" />
                                </motion.button>
                            </div>
                        </form>

                        <p className="text-white/30 text-sm mt-6">
                            Sin compromiso. Nos adaptamos a tu horario.
                        </p>
                    </div>
                </motion.div>
            </section>

            {/* Footer Links */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="md:col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-cobalt rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">FM</span>
                                </div>
                                <span className="font-semibold text-lg text-white">
                                    FUNDAE<span className="text-cobalt">Manager</span>
                                </span>
                            </div>
                            <p className="text-white/40 text-sm mb-6">
                                La plataforma SaaS que centraliza y automatiza toda la gestión de la formación bonificada.
                            </p>

                            {/* ISO Badge */}
                            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                                <Shield className="w-8 h-8 text-cobalt" />
                                <div>
                                    <p className="text-white font-medium text-sm">ISO 27001:2022</p>
                                    <p className="text-white/40 text-xs">Certificación de seguridad</p>
                                </div>
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Producto</h4>
                            <ul className="space-y-3">
                                {["Funcionalidades", "Cómo funciona", "Precios", "Integraciones", "Seguridad"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-white/40 hover:text-cobalt transition-colors text-sm">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Empresa</h4>
                            <ul className="space-y-3">
                                {["Sobre nosotros", "Careers", "Blog", "Contacto", "Partners"].map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-white/40 hover:text-cobalt transition-colors text-sm">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="text-white font-semibold mb-4">Contacto</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-white/40 text-sm">
                                    <Mail className="w-4 h-4" />
                                    hola@fundaemanager.com
                                </li>
                                <li className="flex items-center gap-3 text-white/40 text-sm">
                                    <Phone className="w-4 h-4" />
                                    +34 900 XXX XXX
                                </li>
                                <li className="flex items-center gap-3 text-white/40 text-sm">
                                    <MapPin className="w-4 h-4" />
                                    Madrid, España
                                </li>
                            </ul>

                            {/* Social */}
                            <div className="flex gap-4 mt-6">
                                <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-cobalt transition-colors">
                                    <Linkedin className="w-5 h-5 text-white/60" />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-cobalt transition-colors">
                                    <Twitter className="w-5 h-5 text-white/60" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-sm">
                        © 2024 FUNDAE Manager. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Política de privacidad</a>
                        <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Términos de servicio</a>
                        <a href="#" className="text-white/30 hover:text-white text-sm transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
