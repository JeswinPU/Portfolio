import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  /** Omitted for the current role so it never goes out of date. */
  duration?: string;
  current?: boolean;
  bullets: string[];
  tags?: string[];
};

const roles: Role[] = [
  {
    title: "Junior AI Developer",
    company: "Analytix",
    location: "Kochi, Kerala",
    period: "Jul 2026 – Present",
    current: true,
    bullets: [
      "Develop Python backend services and REST APIs using FastAPI and SQLAlchemy.",
      "Integrate AI/LLM capabilities into application workflows and business processes.",
      "Build React and TypeScript interfaces and connect them with backend services.",
      "Work with PostgreSQL schemas, queries, and data validation.",
    ],
    tags: ["Python", "FastAPI", "SQLAlchemy", "AI/LLM", "React", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Python Odoo Developer Trainee",
    company: "Analytix",
    location: "Kochi, Kerala",
    period: "Feb 2026 – Jul 2026",
    duration: "6 mos",
    bullets: [
      "Customized Odoo modules with Python and XML to support business workflows.",
      "Used the Odoo ORM and PostgreSQL for data modeling and backend logic.",
      "Improved interfaces with HTML, CSS, and JavaScript; integrated third-party APIs.",
    ],
    tags: ["Odoo", "Python", "XML", "PostgreSQL", "JavaScript", "REST APIs"],
  },
  {
    title: "Junior Data Analyst",
    company: "Analytix",
    location: "Kochi, Kerala",
    period: "Dec 2025 – Feb 2026",
    duration: "3 mos",
    bullets: [
      "Analyzed business datasets with SQL and Python to identify actionable insights.",
      "Built ETL workflows and used statistical analysis and A/B testing to assess campaigns.",
      "Applied regression and machine-learning techniques for predictive analysis.",
      "Queried Odoo CRM data and reported trends, patterns, and performance metrics.",
    ],
    tags: ["SQL", "Python", "ETL", "A/B Testing", "Machine Learning", "Odoo CRM"],
  },
  {
    title: "Data Analyst Intern",
    company: "BZ Analytics",
    location: "Thiruvananthapuram, Kerala",
    period: "Jan 2025 – May 2025",
    duration: "5 mos",
    bullets: [
      "Built a real-estate analytics web application using Python and web scraping.",
      "Developed an XGBoost property-price prediction model and interactive dashboards.",
    ],
    tags: ["Python", "Web Scraping", "XGBoost", "Dashboards"],
  },
  {
    title: "Student Intern",
    company: "KSE Limited",
    location: "Irinjalakkuda, Kerala",
    period: "May 2024",
    duration: "1 mo",
    bullets: ["Mapped business processes to identify operational inefficiencies and improvements."],
    tags: ["Process Mapping", "Workflow Analysis"],
  },
];

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Where I've worked"
          description="A timeline of roles across AI development, ERP, and data analytics."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border sm:left-6" aria-hidden />

          <ul className="space-y-8">
            {roles.map((role) => (
              <Reveal
                as="li"
                key={`${role.title}-${role.company}`}
                className="relative pl-12 sm:pl-16"
              >
                <div
                  className={cn(
                    "absolute left-0 top-1 grid h-8 w-8 place-items-center rounded-full border border-primary/30 shadow-elegant sm:left-2 sm:h-9 sm:w-9",
                    role.current
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-primary",
                  )}
                >
                  <Briefcase className="h-4 w-4" />
                </div>

                <div className="glass-card rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-foreground sm:text-lg">
                        {role.title}
                      </h3>
                      <p className="text-sm text-primary">
                        {role.company}
                        <span className="text-muted-foreground"> · {role.location}</span>
                      </p>
                    </div>
                    <span className="self-start whitespace-nowrap rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {role.period}
                      {role.duration && ` · ${role.duration}`}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5">
                        <span
                          aria-hidden
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {role.tags && (
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                      {role.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full bg-accent/60 px-3 py-1 text-xs font-medium text-accent-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
