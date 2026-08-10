import { useEffect, useRef } from "react";
import { resolveAssetPath } from "../utils/helpers";

const preloadedSrcs = new Set();

const preloadImage = (src) => {
  const resolved = resolveAssetPath(src);
  if (!resolved || preloadedSrcs.has(resolved)) return;
  preloadedSrcs.add(resolved);
  const img = new Image();
  img.src = resolved;
};

const preloadChapterImages = (chapter) => {
  if (!chapter) return;
  chapter.pages.forEach((page) => {
    if (page.image) preloadImage(page.image);
  });
};

// Chapters are pinned and scrubbed horizontally as one unit (see
// useHorizontalScroll), so native `loading="lazy"` can't always fetch fast
// enough during a quick scrub — the image is still mid-download when it
// scrolls into view, so it pops in blank. We warm the browser's HTTP cache
// ahead of time instead: the whole active chapter plus the next one, keyed
// off the same activeChapter tracking Book.jsx already computes via
// IntersectionObserver. Actual <img> tags still render lazily; they just
// resolve instantly from cache once warmed.
const useImagePreloader = (book, activeChapter) => {
  const warmedChapters = useRef(new Set());

  useEffect(() => {
    if (book.meta?.coverImage) preloadImage(book.meta.coverImage);
    preloadChapterImages(book.chapters[0]);
  }, [book]);

  useEffect(() => {
    if (warmedChapters.current.has(activeChapter)) return;
    warmedChapters.current.add(activeChapter);
    preloadChapterImages(book.chapters[activeChapter]);
    preloadChapterImages(book.chapters[activeChapter + 1]);
  }, [activeChapter, book]);
};

export default useImagePreloader;
