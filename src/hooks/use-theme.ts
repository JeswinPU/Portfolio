import { useCallback, useEffect, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";

type Theme = "light" | "dark";

// Mobile browser bar colour for each theme (matches --background in styles.css).
export const THEME_COLORS: Record<Theme, string> = { light: "#fcfeff", dark: "#080d16" };

function currentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    setThemeState(currentTheme());
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((meta) => meta.setAttribute("content", THEME_COLORS[next]));
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* noop */
    }
  }, []);

  const toggle = useCallback(
    (event?: MouseEvent) => {
      const nextTheme: Theme = currentTheme() === "dark" ? "light" : "dark";

      if (
        typeof document.startViewTransition !== "function" ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setTheme(nextTheme);
        return;
      }

      const x = event?.clientX ?? window.innerWidth / 2;
      const y = event?.clientY ?? window.innerHeight / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme);
        });
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ];
        const isDark = nextTheme === "dark";

        document.documentElement.animate(
          {
            clipPath: isDark ? [...clipPath].reverse() : clipPath,
          },
          {
            duration: 500,
            easing: "ease-in-out",
            fill: "both",
            pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)",
          },
        );
      });
    },
    [setTheme],
  );

  return { theme, setTheme, toggle };
}
