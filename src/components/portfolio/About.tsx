import { Briefcase, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const facts = [
  { icon: Briefcase, label: "Role", value: "Junior AI Developer" },
  { icon: MapPin, label: "Based in", value: "Thrissur, Kerala" },
  { icon: GraduationCap, label: "Education", value: "B.Voc, CUSAT" },
  { icon: Sparkles, label: "Focus", value: "AI · Backend · Full-Stack" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title="Building intelligent, data-driven software"
          description="A quick look at who I am and what I do."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I'm a Junior AI Developer at{" "}
                <span className="font-medium text-foreground">Analytix, Kochi</span>, where I build
                Python backend services and REST APIs with FastAPI and SQLAlchemy, integrate AI/LLM
                capabilities into application workflows and business processes, and build the React
                and TypeScript interfaces on top of them.
              </p>
              <p>
                I came to software through data. I started as a data analyst, building an XGBoost
                property-price model and dashboards at BZ Analytics, then ETL workflows, A/B tests
                and predictive analysis at Analytix. After that I customized Odoo modules with
                Python, XML and PostgreSQL as a Python Odoo Developer Trainee. That path shapes how
                I build today: clean data models, careful validation, and software that solves real
                business problems.
              </p>
              <p>
                I hold a{" "}
                <span className="font-medium text-foreground">
                  B.Voc in Business Process and Data Analytics from CUSAT
                </span>
                . I'm most interested in AI software engineering, full-stack development,
                intelligent systems, and business intelligence.
              </p>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={100}>
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
                    <div className="text-sm font-semibold text-foreground">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
