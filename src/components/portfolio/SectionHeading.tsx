import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      {eyebrow && (
        <div className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary">
          {eyebrow}
        </div>
      )}
      <h2 id={id} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
