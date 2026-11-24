import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  {
    school: "Cochin University of Science and Technology (CUSAT)",
    degree: "B.Voc in Business Process and Data Analytics",
    period: "Aug 2022 – Jun 2025",
  },
  {
    school: "PBMGHSS Kodungallur",
    degree: "Higher Secondary Education",
    period: "Jun 2020 – May 2022",
    grade: "88%",
  },
];

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="education-heading" eyebrow="Education" title="Academic background" />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.school} delay={i * 80} className="h-full">
              <article className="glass-card h-full rounded-2xl p-6">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{it.school}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.degree}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-primary">
                    {it.period}
                  </span>
                  {it.grade && (
                    <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-primary">
                      {it.grade}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
