
import { Github, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="glass border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="font-orbitron font-bold text-lg text-white mb-4">
                            TECH<span className="text-neon-cyan">CLUB</span>
                        </h3>
                        <p className="text-gray-400 text-sm font-mono">
                            Building the future, one line of code at a time. Join the elite.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Links</h4>
                        <ul className="space-y-2 text-sm text-gray-400 font-mono">
                            <li><Link href="#" className="hover:text-neon-cyan">About Us</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan">Projects</Link></li>
                            <li><Link href="#" className="hover:text-neon-cyan">Events</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-neon-magenta transition-colors">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-white/10 pt-8 text-center">
                    <p className="text-xs text-gray-500 font-mono">
                        &copy; {new Date().getFullYear()} GIIS Tech Club. All rights reserved. System Operational.
                    </p>
                </div>
            </div>
        </footer>
    );
}
