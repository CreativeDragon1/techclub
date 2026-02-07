
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = false }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card p-6 rounded-lg border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300",
                hoverEffect && "hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] hover:-translate-y-1",
                className
            )}
        >
            {children}
        </div>
    );
}
