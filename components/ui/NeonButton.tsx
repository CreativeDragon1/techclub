
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeonButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger";
}

export default function NeonButton({
    children,
    className,
    onClick,
    variant = "primary",
}: NeonButtonProps) {
    const colors = {
        primary: "border-neon-primary text-neon-primary hover:bg-neon-primary/10",
        secondary: "border-neon-teal text-neon-teal hover:bg-neon-teal/10",
        danger: "border-neon-secondary text-neon-secondary hover:bg-neon-secondary/10",
    };



    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={cn(
                "relative px-6 py-3 font-orbitron font-bold uppercase tracking-wider border-2 transition-all duration-300 rounded-sm",
                colors[variant],
                "hover:shadow-[0_0_20px_currentColor] focus:outline-none",
                className
            )}
        >
            {children}
            <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
    );
}
