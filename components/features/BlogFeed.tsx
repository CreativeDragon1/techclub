
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import Section from "@/components/ui/Section";
import NeonButton from "@/components/ui/NeonButton";
import { Tag, Code, Cpu, Shield, Brain } from "lucide-react";

type Category = "All" | "AI" | "Web" | "Hardware" | "Security";

const categories: Category[] = ["All", "AI", "Web", "Hardware", "Security"];

const posts = [
    {
        id: 1,
        title: "Project: Neural Net Visualizer",
        category: "AI",
        type: "Opportunity",
        description: "Looking for frontend devs to visualize real-time neural network weights.",
        tags: ["Python", "Three.js", "TensorFlow"],
        icon: Brain,
        color: "text-neon-cyan",
    },
    {
        id: 2,
        title: "CTF Challenge: Buffer Overflow",
        category: "Security",
        type: "Task",
        description: "Can you exploit the vulnerable server? 500 points for the winner.",
        tags: ["C", "Assembly", "Linux"],
        icon: Shield,
        color: "text-neon-magenta",
    },
    {
        id: 3,
        title: "Workshop: React Server Components",
        category: "Web",
        type: "Event",
        description: "Deep dive into Next.js 14 and the future of React rendering.",
        tags: ["React", "Next.js", "Edge"],
        icon: Code,
        color: "text-neon-purple",
    },
    {
        id: 4,
        title: "Hardware Hack: Raspberry Pi Cluster",
        category: "Hardware",
        type: "Open Project",
        description: "Building a 16-node cluster for distributed computing experiments.",
        tags: ["IoT", "Networking", "Kubernetes"],
        icon: Cpu,
        color: "text-green-400",
    },
];

export default function BlogFeed() {
    const [filter, setFilter] = useState<Category>("All");

    const filteredPosts = posts.filter(
        (post) => filter === "All" || post.category === filter
    );

    return (
        <Section id="blog" className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
                        TRANSMISSIONS <span className="text-neon-purple">& OT CARDS</span>
                    </h2>
                    <p className="text-gray-400 font-mono">
                        Latest updates, tasks, and opportunities from the network.
                    </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-4 py-2 rounded-full text-xs font-mono border transition-all duration-300 ${filter === cat
                                    ? "bg-neon-purple/20 border-neon-purple text-neon-purple shadow-[0_0_10px_rgba(189,0,255,0.3)]"
                                    : "border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <AnimatePresence>
                    {filteredPosts.map((post) => (
                        <motion.div
                            layout
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <GlassCard hoverEffect className="h-full flex flex-col justify-between group">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <span className={`text-xs font-mono px-2 py-1 rounded bg-white/5 ${post.color} border border-white/10`}>
                                            {post.type}
                                        </span>
                                        <post.icon className={`w-6 h-6 ${post.color} group-hover:animate-pulse`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 font-mono leading-relaxed">
                                        {post.description}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="text-xs text-gray-500 font-mono flex items-center gap-1">
                                            <Tag className="w-3 h-3" /> {tag}
                                        </span>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <div className="mt-12 text-center">
                <NeonButton variant="secondary">View All Transmissions</NeonButton>
            </div>
        </Section>
    );
}
