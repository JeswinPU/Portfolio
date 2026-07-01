import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    school: "Cochin University of Science and Technology (CUSAT)",
    degree: "B.Voc in Business Process and Data Analytics",
    detail: "2022 – 2025",
  },
  {
    school: "PBMGHSS Kodungallur",
    degree: "Higher Secondary",
    detail: "88%",
  },
];

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="education-heading"
          eyebrow="Education"
          title="Academic background"
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <article className="glass-card h-full rounded-2xl p-6">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{it.school}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.degree}</p>
              <p className="mt-3 inline-block rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-primary">
                {it.detail}
              </p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
