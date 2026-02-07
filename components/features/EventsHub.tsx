
"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import GlassCard from "@/components/ui/GlassCard";
import NeonButton from "@/components/ui/NeonButton";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const events = [
    {
        id: 1,
        title: "CyberSec Hackathon 2077",
        date: "2024-11-15",
        time: "10:00 AM",
        location: "Main Hall / Virtual",
        description: "48-hour CTF and vulnerability research marathon.",
        type: "Competition",
    },
    {
        id: 2,
        title: "AI Ethics Workshop",
        date: "2024-11-20",
        time: "02:00 PM",
        location: "Lab 3",
        description: "Debating the alignment problem in AGI systems.",
        type: "Workshop",
    },
    {
        id: 3,
        title: "Quantum Computing Talk",
        date: "2024-12-05",
        time: "04:00 PM",
        location: "Auditorium",
        description: "Guest lecture by Dr. A. Vance.",
        type: "Guest Talk",
    }
];

export default function EventsHub() {
    const [timeLeft, setTimeLeft] = useState("");

    useEffect(() => {
        // Set target date to the first event
        const targetDate = new Date(events[0].date).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                setTimeLeft("EVENT IN PROGRESS");
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Section id="events" className="relative z-10 py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
                    UPCOMING <span className="text-neon-magenta">OPERATIONS</span>
                </h2>
                <div className="inline-block p-4 border border-neon-magenta/30 bg-neon-magenta/5 rounded-lg backdrop-blur-sm">
                    <p className="font-mono text-neon-magenta text-sm mb-1">NEXT EVENT INITIATION:</p>
                    <p className="font-orbitron text-3xl md:text-5xl font-bold tracking-widest text-white animate-pulse">
                        {timeLeft}
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <GlassCard className="flex flex-col md:flex-row gap-6 p-8 border-l-4 border-l-neon-magenta hover:bg-white/5 transition-colors">
                            <div className="flex flex-col justify-center items-center md:items-start min-w-[150px] border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-6">
                                <span className="text-4xl font-bold text-white font-orbitron">
                                    {new Date(event.date).getDate()}
                                </span>
                                <span className="text-lg text-neon-magenta uppercase font-mono">
                                    {new Date(event.date).toLocaleString('default', { month: 'short' })}
                                </span>
                                <span className="text-sm text-gray-400 font-mono mt-2">{event.type}</span>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                                <p className="text-gray-300 mb-4">{event.description}</p>

                                <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-neon-cyan" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-neon-purple" />
                                        {event.location}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center md:justify-end mt-4 md:mt-0">
                                <NeonButton variant="secondary" className="w-full md:w-auto text-sm">
                                    Register <Calendar className="w-4 h-4 ml-2 inline-block" />
                                </NeonButton>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
