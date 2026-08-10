import { useEffect, useRef, useState } from "react";
import book from "../../data/book";
import "./TopBar.css";

const BrandIcon = () => (
  <svg viewBox="0 0 12 12" className="topbar__brand-icon" aria-hidden="true">
    <path d="M6 0 L12 6 L6 12 L0 6 Z" fill="currentColor" />
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 16 16" className="topbar__grid-icon" aria-hidden="true">
    <rect x="1.5" y="1.5" width="13" height="13" rx="1.5" fill="none" stroke="currentColor" />
    <line x1="1.5" y1="14.5" x2="14.5" y2="1.5" stroke="currentColor" />
  </svg>
);

const ChevronIcon = () => (
  <svg viewBox="0 0 10 6" className="topbar__chevron" aria-hidden="true">
    <path d="M1 1 L5 5 L9 1" fill="none" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

// Fixed reader chrome mirroring the Stripe Press top bar: brand + book title
// on the left, current chapter + scroll progress + a contents shortcut on the
// right. Owns its own rAF-throttled scroll listener rather than lifting
// state into Book.jsx, matching the pattern already used by ProgressBar.
const TopBar = ({ activeChapter }) => {
  const [percent, setPercent] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      ticking.current = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setPercent(Math.min(1, Math.max(0, progress)) * 100);
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
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

  const handleChapterSelect = (event) => {
    const chapter = book.chapters[Number(event.target.value)];
    document.getElementById(chapter.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="topbar">
      <div className="topbar__left">
        <span className="topbar__brand">
          <BrandIcon />
          {book.meta.brand}
        </span>
        <span className="topbar__divider" />
        <span className="topbar__title">{book.meta.title}</span>
      </div>

      <div className="topbar__right">
        <span className="topbar__chapter">
          <select
            className="topbar__chapter-select"
            value={activeChapter}
            onChange={handleChapterSelect}
            aria-label="Jump to chapter"
          >
            {book.chapters.map((chapter, index) => (
              <option key={chapter.id} value={index}>
                {chapter.title}
              </option>
            ))}
          </select>
          <ChevronIcon />
        </span>
        <span className="topbar__divider" />
        <span className="topbar__percent">{percent.toFixed(2)}%</span>
        <span className="topbar__divider" />
        <a href="#contents" className="topbar__icon" aria-label="Contents">
          <GridIcon />
        </a>
      </div>
    </header>
  );
};

export default TopBar;
