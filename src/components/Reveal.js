"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer;

    const watch = () => {
      if (media.matches) return;
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        },
        { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
      );
      observer.observe(node);
    };

    const onChange = () => {
      observer?.disconnect();
      watch();
    };

    watch();
    media.addEventListener("change", onChange);
    return () => {
      observer?.disconnect();
      media.removeEventListener("change", onChange);
    };
  }, []);

  const classes = `reveal${shown ? " is-in" : ""}${className ? ` ${className}` : ""}`;

  return (
    <div
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
