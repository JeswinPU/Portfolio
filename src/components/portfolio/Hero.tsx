import { Download, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile320 from "@/assets/images/profile-320.webp";
import profile480 from "@/assets/images/profile-480.webp";
import profile640 from "@/assets/images/profile-640.webp";
import profile800 from "@/assets/images/profile-800.webp";
import profileFallback from "@/assets/images/profile-640.jpg";

const profileSrcSet = `${profile320} 320w, ${profile480} 480w, ${profile640} 640w, ${profile800} 800w`;

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="hero-enter min-w-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Thrissur, Kerala, India
          </div>
          <h1
            id="hero-heading"
            className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl"
          >
            Jeswin P U
            <span
              aria-hidden="true"
              className="caret-blink ml-1 inline-block font-light text-primary"
            >
              |
            </span>
          </h1>
          <p className="mt-3 text-lg font-semibold text-primary sm:text-xl">
            AI Software Engineer &amp; Developer
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Experienced in Python backend development, full-stack applications, AI model
            integration, data analytics, and database-driven systems — working with FastAPI,
            SQLAlchemy, React, TypeScript, and PostgreSQL.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Narrower padding on phones so LinkedIn + Résumé fit on one row. */}
            <Button asChild size="lg" className="px-4 shadow-elegant sm:px-8">
              <a href="https://linkedin.com/in/jeswinpu" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-4 sm:px-8">
              <a href="/Jeswin_P_U_Resume.pdf" download="Jeswin_P_U_Resume.pdf">
                <Download className="mr-2 h-4 w-4" /> Download Résumé
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="px-4 sm:px-8">
              <a href="mailto:jeswinpu2005@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </div>
        </div>

        <div className="hero-enter-photo relative mx-auto">
          <div className="group relative isolate">
            <div
              aria-hidden="true"
              className="hero-glow pointer-events-none absolute -inset-20 -z-10 rounded-full transition-transform duration-500 group-hover:scale-110"
            />
            <div className="transition-transform duration-300 ease-out group-hover:scale-105">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-primary/20 bg-card/70 p-1 shadow-[var(--shadow-card)] transition-[border-color,box-shadow] duration-300 group-hover:border-primary/50 group-hover:shadow-elegant sm:h-64 sm:w-64 md:h-72 md:w-72">
                <div className="h-full w-full overflow-hidden rounded-full">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={profileSrcSet}
                      sizes="(min-width: 768px) 272px, (min-width: 640px) 240px, 208px"
                    />
                    <img
                      src={profileFallback}
                      alt="Jeswin P U"
                      width={640}
                      height={640}
                      fetchPriority="high"
                      decoding="async"
                      className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
