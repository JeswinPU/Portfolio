import { useEffect, useRef, useState } from "react";

const SIZE = 600;
// Only on devices with a real mouse, and not for visitors who prefer reduced motion.
const QUERY = "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)";

/**
 * Soft glow that follows the mouse. Moves with a GPU transform and only runs its
 * animation loop while the glow is catching up with the pointer.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!enabled || !el) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let frame = 0;
    let last = 0;
    let started = false;

    const render = () => {
      el.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`;
    };

    const tick = (now: number) => {
      // Frame-rate independent easing (same feel on 60Hz and 120Hz screens). ~0.24s lag,
      // matching the spring the glow used before.
      const dt = last ? Math.min(now - last, 64) : 16;
      last = now;
      const k = 1 - Math.pow(0.93, dt / 16.67);
      x += (targetX - x) * k;
      y += (targetY - y) * k;
      render();
      if (Math.abs(targetX - x) > 0.5 || Math.abs(targetY - y) > 0.5) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
        last = 0;
      }
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!started) {
        started = true;
        x = targetX;
        y = targetY;
        render();
        el.style.opacity = "0.6";
      }
      if (!frame) frame = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] rounded-full will-change-transform"
      style={{
        width: SIZE,
        height: SIZE,
        opacity: 0,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary) 20%, transparent) 0%, transparent 60%)",
      }}
    />
  );
}
