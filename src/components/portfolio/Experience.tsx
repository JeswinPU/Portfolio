import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Role = {
  title: string;
  company: string;
  period?: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    title: "Python Odoo Developer",
    company: "Analytix",
    period: "Feb 2026 – Present",
    bullets: [
      "Odoo module development",
      "Python development",
      "XML customization",
      "PostgreSQL",
      "API integration",
      "HTML / CSS / JavaScript",
      "Business workflow automation",
    ],
  },
  {
    title: "Junior Data Analyst",
    company: "Analytix",
    period: "Dec 2025 – Feb 2026",
    bullets: [
      "SQL",
      "Python",
      "ETL pipelines",
      "Dashboard development",
      "Machine Learning",
      "Statistical analysis",
      "Reporting",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "BZ Analytics",
    bullets: [
      "Real estate analytics",
      "XGBoost prediction model",
      "Web scraping",
      "Python",
      "Interactive dashboards",
    ],
  },
  {
    title: "Student Intern",
    company: "KSE Limited",
    bullets: ["Business process mapping", "Workflow analysis"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Where I've worked"
          description="A timeline of roles across ERP development and data analytics."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6" aria-hidden />

          <ul className="space-y-8">
            {roles.map((role, i) => (
              <motion.li
                key={`${role.title}-${role.company}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 sm:pl-16"
              >
                <div className="absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-primary/30 bg-background text-primary shadow-elegant sm:left-2 sm:h-9 sm:w-9">
                  <Briefcase className="h-4 w-4" />
                </div>

                <div className="glass-card rounded-2xl p-5 sm:p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold text-foreground sm:text-lg">
                        {role.title}
                      </h3>
                      <p className="text-sm text-primary">{role.company}</p>
                    </div>
                    {role.period && (
                      <span className="shrink-0 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                        {role.period}
                      </span>
                    )}
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {role.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-full bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
