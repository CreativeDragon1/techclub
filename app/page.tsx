
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/features/Hero";
import BlogFeed from "@/components/features/BlogFeed";
import ProjectShowcase from "@/components/features/ProjectShowcase";
import EventsHub from "@/components/features/EventsHub";
import ContactForm from "@/components/features/ContactForm";
import Chatbot from "@/components/features/Chatbot";

export default function Home() {
    return (
        <main className="min-h-screen bg-background selection:bg-neon-cyan/30 selection:text-white">
            <Navbar />
            <Hero />
            <BlogFeed />
            <ProjectShowcase />
            <EventsHub />
            <ContactForm />
            <Chatbot />

            <Footer />
        </main>
    );
}
