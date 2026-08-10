import { useEffect, useRef } from "react";
import "./ProgressBar.css";

// A thin fixed line at the top of the viewport showing overall scroll
// progress through the whole book. Plain scroll listener (rAF-throttled) —
// deliberately not another ScrollTrigger, to keep the horizontal-scroll
// engine's trigger count minimal and easy to reason about.
const ProgressBar = () => {
  const fillRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      const clamped = Math.min(1, Math.max(0, progress));
      if (fillRef.current) {
        fillRef.current.style.transform = `scaleX(${clamped})`;
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="progress-bar" aria-hidden="true">
      <div ref={fillRef} className="progress-bar__fill" />
    </div>
  );
};

export default ProgressBar;
