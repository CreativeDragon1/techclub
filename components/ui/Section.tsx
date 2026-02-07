
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
    return (
        <section id={id} className={cn("py-20 px-4 md:px-8 max-w-7xl mx-auto", className)}>
            {children}
        </section>
    );
}
