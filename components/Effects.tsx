"use client";

import { useEffect } from "react";

/**
 * Port of the original page script: parallax on [data-parallax] elements and
 * reveal-on-scroll for .rv elements. Respects prefers-reduced-motion, and a
 * safety net reveals everything after 1.4s so nothing can stay hidden.
 */
export default function Effects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const pEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    let ticking = false;
    const applyParallax = () => {
      const y = window.scrollY || window.pageYOffset;
      void y;
      pEls.forEach((el) => {
        const f = parseFloat(el.getAttribute("data-parallax") || "0");
        const parent = el.parentElement;
        if (!parent) return;
        const rect = parent.getBoundingClientRect();
        const rel =
          (rect.top + rect.height / 2 - window.innerHeight / 2) * f;
        el.style.transform = `translate3d(0,${rel.toFixed(1)}px,0)`;
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(applyParallax);
      }
    };
    if (!reduceMotion && pEls.length) {
      window.addEventListener("scroll", onScroll, { passive: true });
      applyParallax();
    }

    const rvEls = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if ("IntersectionObserver" in window && !reduceMotion) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      rvEls.forEach((el) => io.observe(el));
    } else {
      rvEls.forEach((el) => el.classList.add("in"));
    }
    // Animated counters: [data-count] elements count 0 -> target when visible.
    const countEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count]")
    );
    const animateCount = (el: HTMLElement) => {
      const target = parseFloat(el.getAttribute("data-count") || "0");
      const prefix = el.getAttribute("data-prefix") || "";
      const suffix = el.getAttribute("data-suffix") || "";
      const dur = 1200;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = `${prefix}${Math.round(target * eased)}${suffix}`;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if ("IntersectionObserver" in window && !reduceMotion && countEls.length) {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              animateCount(e.target as HTMLElement);
              cio.unobserve(e.target);
            }
          });
        },
        { threshold: 0.4 }
      );
      countEls.forEach((el) => cio.observe(el));
    }

    const safety = window.setTimeout(() => {
      rvEls.forEach((el) => el.classList.add("in"));
    }, 1400);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(safety);
    };
  }, []);

  return null;
}
