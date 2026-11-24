import { Github, Linkedin, Mail } from "lucide-react";

const iconLinkClass =
  "grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/50 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Jeswin P U. Built with
          passion using modern web technologies.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://linkedin.com/in/jeswinpu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={iconLinkClass}
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:jeswinpu2005@gmail.com" aria-label="Email" className={iconLinkClass}>
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/JeswinPU"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={iconLinkClass}
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
