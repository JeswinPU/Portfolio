import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in ms, to stagger items that scroll into view together (e.g. a grid row). */
  delay?: number;
  as?: "div" | "li";
};

/**
 * Fades its content in the first time it scrolls into view, then stops observing.
 *
 * The server-rendered HTML is always visible: the hidden state is only added after
 * mount, and only to elements that are still below the fold, so nothing on screen
 * flashes and the content stays readable if JavaScript is slow or fails. The animation
 * itself is a CSS transition on opacity/transform (see `.reveal` in styles.css).
 */
export function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        el.classList.add("reveal-visible");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
