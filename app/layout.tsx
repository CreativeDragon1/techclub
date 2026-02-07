import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
    title: "Tech Club | The Future is Now",
    description: "Join the elite futuristic tech collective. Building the future, today.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className={cn(inter.variable, orbitron.variable, "font-sans antialiased bg-background text-foreground")}>
                {children}
            </body>
        </html>
    );
}
