import { LAYOUT, ANIMATION, DEFAULT_ANIMATION } from "../constants/bookConstants";

// Normalizes a page's `animation` field, falling back to DEFAULT_ANIMATION
// whenever the field, its type, or individual props are missing/unknown.
export const getPageAnimation = (animation) => {
  const type = Object.values(ANIMATION).includes(animation?.type)
    ? animation.type
    : DEFAULT_ANIMATION.type;

  return {
    type,
    duration:
      typeof animation?.duration === "number"
        ? animation.duration
        : DEFAULT_ANIMATION.duration,
    delay:
      typeof animation?.delay === "number"
        ? animation.delay
        : DEFAULT_ANIMATION.delay,
  };
};

// GSAP "from" vars per animation type — kept deliberately small. Motion here
// should be felt, not watched: a premium book turns its pages, it doesn't
// perform tricks.
const TEXT_FROM_VARS = {
  [ANIMATION.FADE]: { autoAlpha: 0, y: 10 },
  [ANIMATION.SLIDE]: { autoAlpha: 0, x: 16 },
  [ANIMATION.ZOOM]: { autoAlpha: 0, scale: 0.985 },
};

// Images always get the same minimal treatment regardless of the page's
// declared animation type — a slide/zoom on a photo reads as jittery, a
// tiny scale-settle reads as intentional.
const IMAGE_FROM_VARS = { autoAlpha: 0, scale: 1.025 };

export const getTextFromVars = (type) =>
  TEXT_FROM_VARS[type] || TEXT_FROM_VARS[ANIMATION.FADE];

export const getImageFromVars = () => IMAGE_FROM_VARS;

// Normalizes a page's `layout` field, falling back to CENTER when missing/unknown.
export const getPageLayout = (layout) => {
  const known = Object.values(LAYOUT);
  if (layout && !known.includes(layout)) {
    console.warn(`[Book] Unknown layout: ${layout}`);
  }
  return known.includes(layout) ? layout : LAYOUT.CENTER;
};

// Splits page body text into paragraphs on blank lines for editorial typesetting.
export const splitParagraphs = (text) =>
  (text || "")
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

export const padNumber = (n, width = 2) => String(n).padStart(width, "0");
