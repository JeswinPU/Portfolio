/**
 * Intro shown on the first visit of a browser session: three soft orbs drift out and
 * back while the "J" grows and shrinks away, and the page is revealed at 1.5s.
 *
 * It is pure CSS (see `.intro-overlay` in styles.css): it fades itself out without
 * waiting for JavaScript, never blocks taps, and is skipped on repeat visits (the
 * inline script in __root.tsx adds `.intro-skip` to <html>) and for visitors who
 * prefer reduced motion.
 */
export function LoadingScreen() {
  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="intro-orb intro-orb-1" />
      <div className="intro-orb intro-orb-2" />
      <div className="intro-orb intro-orb-3" />
      <span className="intro-mark">J</span>
    </div>
  );
}
