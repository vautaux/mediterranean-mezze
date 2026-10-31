"use client";

import { useEffect, useState } from "react";
import Emblem from "@/components/Emblem";

const links = [
  { href: "#story", label: "Story" },
  { href: "#table", label: "On the Table" },
  { href: "#discover", label: "The Bottle" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      document.documentElement.classList.toggle("js-motion", !media.matches);
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav${solid || open ? " is-solid" : ""}`}>
        <a className="skip" href="#story">
          Skip to the story
        </a>
        <a
          className="nav-mark"
          href="#top"
          aria-label="Mediterranean Mezze, back to top"
          onClick={() => setOpen(false)}
        >
          <Emblem />
        </a>
        <nav className="nav-links" aria-label="Sections">
          {links.slice(0, 3).map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <a className="pill nav-pill" href="#contact" onClick={() => setOpen(false)}>
          Get in touch
        </a>
      </header>
      <div id="site-menu" className={`menu${open ? " is-open" : ""}`} hidden={!open}>
        <nav aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
