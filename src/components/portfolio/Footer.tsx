import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/50 backdrop-blur-md py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © 2026 Jeswin P U. Built with passion using modern web technologies.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://linkedin.com/in/jeswinpu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:jeswinpu2005@gmail.com"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
