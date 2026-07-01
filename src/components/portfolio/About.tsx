import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { icon: Briefcase, label: "Role", value: "Python Odoo Developer" },
  { icon: MapPin, label: "Based in", value: "Thrissur, Kerala" },
  { icon: GraduationCap, label: "Education", value: "B.Voc, CUSAT" },
  { icon: Sparkles, label: "Focus", value: "ERP · Automation · Analytics" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title="Building efficient business solutions"
          description="A quick look at who I am and what I do."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-3"
          >
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a Python Odoo Developer at{" "}
                <span className="font-medium text-foreground">Analytix, Kochi</span>, where I
                design and ship ERP modules that streamline how businesses run — from
                workflow automation to API integrations across finance, sales, and operations.
              </p>
              <p>
                I began my career as a Junior Data Analyst, turning raw data into decisions
                with SQL, Python, and dashboards. That foundation shapes how I approach
                Odoo today: clean data models, thoughtful ORM design, and reporting that
                stakeholders actually use.
              </p>
              <p>
                I hold a{" "}
                <span className="font-medium text-foreground">
                  B.Voc in Business Process and Data Analytics from CUSAT
                </span>{" "}
                and lean into AI-assisted development to move faster without cutting corners
                on quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2"
          >
            <div className="glass-card grid grid-cols-1 gap-4 rounded-2xl p-6 sm:grid-cols-2 md:grid-cols-1">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {label}
                    </div>
                    <div className="truncate text-sm font-semibold text-foreground">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
