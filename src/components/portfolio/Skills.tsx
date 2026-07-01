import { motion } from "framer-motion";
import { Code2, Database, Globe, BarChart3, Wrench, type LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Category = { icon: LucideIcon; title: string; items: string[] };

const categories: Category[] = [
  {
    icon: Code2,
    title: "Programming",
    items: ["Python", "JavaScript", "SQL", "XML"],
  },
  {
    icon: Database,
    title: "Odoo Development",
    items: ["Odoo Framework", "ORM", "PostgreSQL", "Module Development", "API Integration"],
  },
  {
    icon: Globe,
    title: "Web",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    items: [
      "Python",
      "SQL",
      "Power BI",
      "Excel",
      "ETL",
      "Machine Learning",
      "Statistical Analysis",
      "Regression",
      "Clustering",
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      "Git",
      "VS Code",
      "GA4",
      "Google Tag Manager",
      "Semrush",
      "Meta Ads",
      "AI-assisted Development",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="Tools I build with"
          description="A pragmatic mix of ERP, backend, and analytics tooling."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <div className="glass-card group h-full rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{c.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-border bg-background/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {it}
                  </li>
                ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
