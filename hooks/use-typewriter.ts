import { useEffect, useState } from "react";

export function useTypewriter(totalChars: number, durationMs: number) {
  const [visibleChars, setVisibleChars] = useState(totalChars);

  useEffect(() => {
    let frameId = 0;
    let cancelled = false;

    const start = (now: number) => {
      if (cancelled) {
        return;
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const tick = (current: number) => {
        if (cancelled) {
          return;
        }

        const progress = Math.min((current - now) / durationMs, 1);
        setVisibleChars(Math.round(progress * totalChars));

        if (progress < 1) {
          frameId = requestAnimationFrame(tick);
        }
      };

      tick(now);
    };

    frameId = requestAnimationFrame(start);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
    };
  }, [durationMs, totalChars]);

  return {
    visibleChars,
    isComplete: visibleChars >= totalChars,
  };
}
