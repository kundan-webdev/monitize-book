import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { ANIMATION, DEFAULT_ANIMATION } from "../constants/bookConstants";
import { getImageFromVars, getTextFromVars } from "../utils/helpers";

const DESKTOP_QUERY = "(min-width: 769px)";
const MOBILE_QUERY = "(max-width: 768px)";

// Plays each page's entrance animation. On desktop it's tied to the shared
// horizontal tween via containerAnimation; on mobile (no tween, no pin) it's
// a plain vertical-scroll reveal. Image and text animate as two separate,
// minimal moves (a small scale-settle, a small fade) with a light stagger,
// instead of one bigger combined move — reads as considered, not showy.
const animatePages = (track, mainTween) => {
  const pages = gsap.utils.toArray(".story-page, .book-end", track);

  pages.forEach((page) => {
    const type = Object.values(ANIMATION).includes(page.dataset.animType)
      ? page.dataset.animType
      : DEFAULT_ANIMATION.type;
    const baseDuration = Number(page.dataset.animDuration) || DEFAULT_ANIMATION.duration;
    const baseDelay = Number(page.dataset.animDelay) || DEFAULT_ANIMATION.delay;
    // Minimal motion reads best snappy — trim book.js's authored durations
    // down rather than using them at full length.
    const duration = Math.min(baseDuration, 1) * 0.6;

    const buildScrollTrigger = () =>
      mainTween
        ? {
            trigger: page,
            containerAnimation: mainTween,
            start: "left 82%",
            toggleActions: "play none none reverse",
          }
        : {
            trigger: page,
            start: "top 85%",
            toggleActions: "play none none reverse",
          };

    const imageTarget = page.querySelector("[data-anim-image]");
    if (imageTarget) {
      gsap.from(imageTarget, {
        ...getImageFromVars(),
        duration,
        delay: baseDelay,
        ease: "power1.out",
        scrollTrigger: buildScrollTrigger(),
      });
    }

    const textTarget = page.querySelector("[data-anim-text]");
    if (textTarget) {
      gsap.from(textTarget, {
        ...getTextFromVars(type),
        duration,
        delay: baseDelay + (imageTarget ? 0.08 : 0),
        ease: "power1.out",
        scrollTrigger: buildScrollTrigger(),
      });
    }
  });
};

// Drives one horizontal "chapter track". Desktop: pins the wrapper and
// scrubs the track left as the user scrolls vertically. Mobile: no pin, no
// scrub — pages stack vertically via CSS and just fade/slide in on scroll.
// gsap.matchMedia() owns the breakpoint switch so resizing across it never
// leaves duplicate or orphaned ScrollTriggers behind; gsap.context() owns
// full cleanup on unmount.
const useHorizontalScroll = () => {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;

    if (!wrapper || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(DESKTOP_QUERY, () => {
        const mainTween = gsap.to(track, {
          x: () => -(track.scrollWidth - wrapper.clientWidth),
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: () => `+=${track.scrollWidth - wrapper.clientWidth}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        animatePages(track, mainTween);
      });

      mm.add(MOBILE_QUERY, () => {
        animatePages(track, null);
      });

      // Images can change track.scrollWidth after the pin's end distance was
      // first calculated. Refresh once every image has settled so the
      // horizontal travel distance stays accurate (fixes the Windows Chrome
      // snap/reset bug caused by a stale scrollWidth).
      const images = Array.from(track.querySelectorAll("img"));
      let pending = images.filter((img) => !img.complete).length;

      if (pending > 0) {
        const onSettle = () => {
          pending -= 1;
          if (pending <= 0) ScrollTrigger.refresh();
        };
        images.forEach((img) => {
          if (!img.complete) {
            img.addEventListener("load", onSettle, { once: true });
            img.addEventListener("error", onSettle, { once: true });
          }
        });
      }
    }, wrapper);

    return () => ctx.revert();
  }, []);

  return { wrapperRef, trackRef };
};

export default useHorizontalScroll;
