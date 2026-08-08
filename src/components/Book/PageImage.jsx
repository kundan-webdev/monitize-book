import { useState } from "react";
import "./PageImage.css";

// When a local image is missing/broken, borrow a themed placeholder from
// Picsum instead of leaving a blank box. Seeded by the image's own path so
// the same broken page always gets the same placeholder photo.
const getFallbackSrc = (seed) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed || "book-page")}/900/1125`;

const PageImage = ({ src, alt = "", className = "", priority = false, ...rest }) => {
  const [state, setState] = useState({
    forSrc: src,
    currentSrc: src,
    usedFallback: false,
    exhausted: false,
  });

  // Reset fallback state when the src prop itself changes, without an
  // effect: compare-during-render is React's documented pattern for this.
  if (state.forSrc !== src) {
    setState({ forSrc: src, currentSrc: src, usedFallback: false, exhausted: false });
  }

  const handleError = () => {
    setState((prev) => {
      if (!prev.usedFallback) {
        return { ...prev, currentSrc: getFallbackSrc(src || alt), usedFallback: true };
      }
      return { ...prev, exhausted: true };
    });
  };

  if (!src || state.exhausted) {
    return (
      <div className={`page-image page-image--fallback ${className}`} {...rest}>
        <span>{alt || "Image unavailable"}</span>
      </div>
    );
  }

  return (
    <img
      src={state.currentSrc}
      alt={alt}
      className={`page-image ${state.usedFallback ? "page-image--placeholder" : ""} ${className}`}
      loading={priority ? "eager" : "lazy"}
      onError={handleError}
      {...rest}
    />
  );
};

export default PageImage;
