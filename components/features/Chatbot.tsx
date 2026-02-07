
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
    id: number;
    text: string;
    sender: "user" | "bot";
};

const INITIAL_MESSAGE: Message = {
    id: 0,
    text: "System initialized. I am the Tech Club AI. Ask me about joining, projects, or events.",
    sender: "bot",
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!inputText.trim()) return;

        const userMsg: Message = {
            id: Date.now(),
            text: inputText,
            sender: "user",
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputText("");
        setIsTyping(true);

        // Simple Rule-based Logic
        setTimeout(() => {
            let botResponseText = "Access denied. Query not recognized.";
            const lowerInput = userMsg.text.toLowerCase();

            if (lowerInput.includes("join") || lowerInput.includes("signup")) {
                botResponseText = "Initiate protocol: JOIN. Visit the 'Contact' section or click the 'Join Now' button in the nav. Membership is open to all students.";
            } else if (lowerInput.includes("what is") || lowerInput.includes("about")) {
                botResponseText = "Tech Club is an elite collective of hackers, designers, and engineers building the future.";
            } else if (lowerInput.includes("project") || lowerInput.includes("build")) {
                botResponseText = "We work on AI, Cybersecurity, Web3, and IoT. Check the Project Showcase for current operations.";
            } else if (lowerInput.includes("event") || lowerInput.includes("when")) {
                botResponseText = "Next operation: CyberSec Hackathon 2077. Check the Events Hub for the countdown.";
            } else if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
                botResponseText = "Greetings, user. Systems operational.";
            }

            const botMsg: Message = {
                id: Date.now() + 1,
                text: botResponseText,
                sender: "bot",
            };

            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            {/* Trigger Button */}
            <motion.button
                className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-neon-cyan/20 border border-neon-cyan text-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:bg-neon-cyan hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-96 glass-card rounded-lg flex flex-col overflow-hidden border border-neon-cyan/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                    >
                        {/* Header */}
                        <div className="p-4 bg-neon-cyan/10 border-b border-white/10 flex items-center gap-2">
                            <Bot className="w-5 h-5 text-neon-cyan" />
                            <span className="font-orbitron text-sm font-bold text-white tracking-wider">AI ASSISTANT</span>
                            <div className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={cn(
                                        "flex flex-col max-w-[80%]",
                                        msg.sender === "user" ? "ml-auto items-end" : "items-start"
                                    )}
                                >
                                    <div
                                        className={cn(
                                            "p-3 rounded-lg text-sm font-mono",
                                            msg.sender === "user"
                                                ? "bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 rounded-br-none"
                                                : "bg-white/10 text-gray-300 border border-white/10 rounded-bl-none"
                                        )}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="flex items-center gap-1 text-neon-cyan text-xs font-mono animate-pulse">
                                    <Bot className="w-3 h-3" /> Processing...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-black/40 border-t border-white/10">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Execute command..."
                                    className="flex-1 bg-transparent border border-white/20 rounded px-3 py-2 text-sm text-white font-mono focus:outline-none focus:border-neon-cyan placeholder:text-gray-600"
                                />
                                <button
                                    onClick={handleSend}
                                    className="p-2 rounded bg-neon-cyan/10 text-neon-cyan hover:bg-neon-cyan hover:text-black transition-colors"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
