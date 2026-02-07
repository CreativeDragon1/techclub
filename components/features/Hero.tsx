
"use client";

import { motion } from "framer-motion";
import NeonButton from "@/components/ui/NeonButton";
import GlitchText from "@/components/ui/GlitchText";
import Section from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-secondary/40 via-background to-background opacity-60" />
                <div className="absolute w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <Section className="relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-4 inline-block px-4 py-1.5 rounded-full border border-neon-primary/30 bg-neon-primary/10 backdrop-blur-sm">
                        <span className="text-neon-primary font-mono text-xs tracking-wider uppercase">
                            System Interface v2.0 Online
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-extrabold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">
                        BUILD THE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-primary to-neon-teal relative">
                            <GlitchText text="FUTURE" />
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 font-mono leading-relaxed">
                        The elite collective for hackers, designers, and visionaries.
                        We don&apos;t just write code; we architect tomorrow.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <NeonButton variant="primary" onClick={() => { }}>
                            Join The Future
                        </NeonButton>
                        <NeonButton variant="secondary" onClick={() => { }}>
                            <span className="flex items-center gap-2">
                                Explore Projects <ArrowRight className="w-4 h-4" />
                            </span>
                        </NeonButton>
                    </div>
                </motion.div>
            </Section>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
                    <div className="w-1 h-2 bg-neon-primary rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}
