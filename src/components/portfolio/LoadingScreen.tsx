import { motion } from "framer-motion";

export function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-background overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Rotating Orbs */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          rotate: [0, 360, 1080],
          scale: [0, 1, 0],
          x: [0, 80, 0],
          y: [0, -80, 0],
        }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="absolute h-40 w-40 rounded-full bg-primary/40 blur-2xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          rotate: [0, -360, -1080],
          scale: [0, 1, 0],
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="absolute h-40 w-40 rounded-full bg-primary-glow/40 blur-2xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{
          rotate: [0, 180, 540],
          scale: [0, 1, 0],
          x: [0, 0, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        className="absolute h-40 w-40 rounded-full bg-primary/30 blur-2xl"
      />

      {/* The Central Monogram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.8, 1.2, 1.5, 0.5],
        }}
        transition={{ duration: 1.8, times: [0, 0.3, 0.8, 1], ease: "easeInOut" }}
        className="absolute text-7xl font-black text-foreground drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
      >
        J
      </motion.div>

      {/* The Supernova Flash Explosion */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 0, 0.2, 80],
          opacity: [0, 0, 1, 0],
        }}
        transition={{ duration: 2.2, times: [0, 0.8, 0.85, 1], ease: "easeIn" }}
        className="absolute h-10 w-10 rounded-full bg-primary"
      />
    </motion.div>
  );
}
