
"use client";

import GlassCard from "@/components/ui/GlassCard";
import Section from "@/components/ui/Section";
import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "CyberDeck UI",
        author: "Alex Chen",
        description: "A futuristic desktop environment built with Electron and React.",
        stack: ["Electron", "React", "TypeScript"],
        image: "/placeholder-project-1.jpg",
    },
    {
        id: 2,
        title: "AI Sentinel",
        author: "Sarah Jones",
        description: "Autonomous drone navigation system using computer vision.",
        stack: ["Python", "OpenCV", "Raspberry Pi"],
        image: "/placeholder-project-2.jpg",
    },
    {
        id: 3,
        title: "HoloMatrix",
        author: "Dev Team Alpha",
        description: "WebVR visualization of complex data structures.",
        stack: ["Three.js", "WebXR", "Vue"],
        image: "/placeholder-project-3.jpg",
    },
];

export default function ProjectShowcase() {
    return (
        <div className="relative py-20 bg-black/50 overflow-hidden" id="projects">
            {/* Background Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-neon-cyan/5 blur-[150px] pointer-events-none" />

            <Section>
                <div className="mb-16">
                    <span className="text-neon-cyan font-mono text-sm tracking-widest uppercase mb-2 block">
                        Showcase
                    </span>
                    <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                        MEMBER <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-white">PROJECTS</span>
                    </h2>
                    <p className="max-w-2xl text-gray-400 font-mono">
                        Groundbreaking work from our elite members. From AI to hardware, see what we&apos;re building.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <GlassCard key={project.id} className="group relative overflow-hidden p-0 h-96 border-none">
                            {/* Image Placeholder Background */}
                            <div className="absolute inset-0 bg-gray-900 group-hover:scale-110 transition-transform duration-700">
                                {/* In a real app, use Image component here. For now, a gradient. */}
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black opacity-80" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    <div className="flex gap-2 mb-2">
                                        {project.stack.map(tech => (
                                            <span key={tech} className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-gray-400 text-sm font-mono mb-4">by {project.author}</p>
                                <p className="text-gray-300 text-sm mb-6 line-clamp-2">{project.description}</p>

                                <div className="flex gap-4">
                                    <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-neon-cyan transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 hover:text-neon-cyan transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </Section>
        </div>
    );
}
