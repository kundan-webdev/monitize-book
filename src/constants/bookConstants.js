// Layout types for StoryPage
export const LAYOUT = {
  IMAGE_LEFT: "image-left",
  IMAGE_RIGHT: "image-right",
  FULL_IMAGE: "full-image",
  QUOTE: "quote",
  TIMELINE: "timeline",
  COMPARISON: "comparison",
  CENTER: "center",
  GALLERY: "gallery",
  INFOGRAPHIC: "infographic",
};

// Animation types
export const ANIMATION = {
  FADE: "fade",
  SLIDE: "slide",
  ZOOM: "zoom",
  PARALLAX: "parallax",
  STICKY: "sticky",
  MASK_REVEAL: "mask-reveal",
  IMAGE_SCALE: "image-scale",
};

// Default animation config (fallback jab page data me animation na ho)
export const DEFAULT_ANIMATION = {
  type: ANIMATION.FADE,
  duration: 1,
  delay: 0,
};

// Image base path (public/images/...)
export const IMAGE_BASE_PATH = "/images";