
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export default function GlitchText({ text, className }: GlitchTextProps) {
    return (
        <div className={cn("relative inline-block group", className)}>
            <motion.span
                className="relative z-10 block"
                initial={{ skewX: 0 }}
                animate={{
                    skewX: [0, -2, 2, -1, 0],
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 2.5,
                    ease: "easeInOut",
                    repeatDelay: 5
                }}
            >
                {text}
            </motion.span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-neon-primary opacity-70 animate-glitch"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)", transform: "translate(-2px)" }}
            >
                {text}
            </span>
            <span
                className="absolute top-0 left-0 -z-10 w-full h-full text-neon-teal opacity-70 animate-glitch"
                style={{
                    clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)",
                    transform: "translate(2px)",
                    animationDirection: "reverse",
                }}
            >
                {text}
            </span>
        </div>
    );
}
