import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // The loading animation sequence takes about 2.2 seconds.
    // We unmount it just slightly after to let the exit animation complete naturally.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {/* Background layer */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-hero-gradient" />
        <motion.div
          aria-hidden
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -left-24 -top-24 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-24 -right-24 h-[600px] w-[600px] rounded-full bg-primary-glow/20 blur-3xl"
        />
      </div>
      
      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      </div>
    </div>
  );
}
