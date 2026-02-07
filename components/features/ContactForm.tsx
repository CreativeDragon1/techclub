
"use client";

import Section from "@/components/ui/Section";
import NeonButton from "@/components/ui/NeonButton";
import { Send, MapPin, Mail, Globe } from "lucide-react";

export default function ContactForm() {
    return (
        <div className="relative py-20 overflow-hidden" id="contact">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />

            <Section className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                            ESTABLISH <span className="text-neon-primary">UPLINK</span>
                        </h2>
                        <p className="text-gray-400 font-mono mb-8 leading-relaxed">
                            Ready to deploy? Send us a transmission. Whether you have a project idea,
                            want to join the collective, or just want to crack some code.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-gray-300 font-mono group">
                                <div className="p-3 rounded bg-white/5 border border-white/10 group-hover:border-neon-primary/50 transition-colors">
                                    <Mail className="w-5 h-5 text-neon-primary" />
                                </div>
                                <span>contact@techclub.future</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300 font-mono group">
                                <div className="p-3 rounded bg-white/5 border border-white/10 group-hover:border-neon-teal/50 transition-colors">
                                    <Globe className="w-5 h-5 text-neon-teal" />
                                </div>
                                <span>discord.gg/techclub</span>
                            </div>
                            <div className="flex items-center gap-4 text-gray-300 font-mono group">
                                <div className="p-3 rounded bg-white/5 border border-white/10 group-hover:border-neon-secondary/50 transition-colors">
                                    <MapPin className="w-5 h-5 text-neon-secondary" />
                                </div>
                                <span>Sector 7, Innovation Hub</span>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="group">
                            <label className="block text-xs font-mono text-neon-primary mb-2 uppercase tracking-widest">Identity</label>
                            <input
                                type="text"
                                placeholder="ENTER NAME"
                                className="w-full bg-black/40 border border-white/10 rounded p-4 text-white font-mono focus:border-neon-primary focus:shadow-[0_0_10px_rgba(0,223,192,0.2)] focus:outline-none transition-all placeholder:text-gray-700"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-xs font-mono text-neon-teal mb-2 uppercase tracking-widest">Return Address</label>
                            <input
                                type="email"
                                placeholder="ENTER EMAIL"
                                className="w-full bg-black/40 border border-white/10 rounded p-4 text-white font-mono focus:border-neon-teal focus:shadow-[0_0_10px_rgba(20,184,166,0.2)] focus:outline-none transition-all placeholder:text-gray-700"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-xs font-mono text-neon-secondary mb-2 uppercase tracking-widest">Transmission</label>
                            <textarea
                                rows={4}
                                placeholder="ENTER MESSAGE DATA..."
                                className="w-full bg-black/40 border border-white/10 rounded p-4 text-white font-mono focus:border-neon-secondary focus:shadow-[0_0_10px_rgba(0,77,77,0.2)] focus:outline-none transition-all placeholder:text-gray-700 resize-none"
                            />
                        </div>
                        <NeonButton variant="primary" className="w-full">
                            <span className="flex items-center justify-center gap-2">
                                Send Transmission <Send className="w-4 h-4" />
                            </span>
                        </NeonButton>
                    </form>
                </div>
            </Section>
        </div>
    );
}
