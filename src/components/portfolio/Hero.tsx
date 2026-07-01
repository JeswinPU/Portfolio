import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Thrissur, Kerala, India
          </div>
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Jeswin P U
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              className="ml-1 inline-block font-light text-primary"
            >
              |
            </motion.span>
          </h1>
          <p className="mt-3 text-lg font-semibold text-primary sm:text-xl">
            Python Odoo Developer
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Python Odoo Developer with experience in ERP development, business process
            automation, and data analytics. Passionate about building efficient business
            solutions using Python, Odoo, PostgreSQL, JavaScript, and AI-assisted development.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="shadow-elegant">
              <a
                href="https://linkedin.com/in/jeswinpu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <a href="mailto:jeswinpu2005@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-3xl transition-transform duration-500 group-hover:scale-110" />
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass-card group relative flex h-56 w-56 items-center justify-center rounded-full sm:h-64 sm:w-64 md:h-72 md:w-72 border-4 border-primary/20 p-1 hover:border-primary/50"
          >
            <div className="h-full w-full overflow-hidden rounded-full">
              <motion.img 
                src="/profile.jpg" 
                alt="Jeswin P U" 
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
