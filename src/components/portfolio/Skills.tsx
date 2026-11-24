import {
  BrainCircuit,
  Code2,
  Database,
  Languages,
  Layers,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Category = { icon: LucideIcon; title: string; items: string[] };

const categories: Category[] = [
  {
    icon: Code2,
    title: "Programming Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "XML"],
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    items: ["FastAPI", "React", "SQLAlchemy", "RESTful APIs", "Pydantic"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    items: [
      "AI/LLM Integration",
      "Model Evaluation",
      "ETL Pipelines",
      "Machine Learning",
      "Statistical Analysis",
    ],
  },
  {
    icon: Database,
    title: "Databases & Tools",
    items: ["PostgreSQL", "Odoo ORM", "Git", "Power BI", "Excel", "GA4", "Google Tag Manager"],
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    items: ["HTML5", "CSS3", "TSX", "JSX", "Responsive UI"],
  },
  {
    icon: Languages,
    title: "Languages",
    items: ["English", "Malayalam", "Hindi"],
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
          description="A pragmatic mix of AI, backend, frontend, and data tooling."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 80} className="h-full">
              <div className="h-full transition-transform duration-300 hover:-translate-y-1">
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
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
