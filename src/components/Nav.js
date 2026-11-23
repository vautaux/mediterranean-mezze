"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pages = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/nutritional-benefit", label: "Nutritional Benefit" },
  { href: "/our-product", label: "Our Product" },
  { href: "/salad-recipe", label: "Salad Recipe" },
];

const links = [
  ...pages,
  { href: "/#table", label: "On the Table" },
  { href: "/#contact", label: "Contact" },
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
        <a className="skip" href="#main">
          Skip to the story
        </a>
        <Link
          className="nav-mark"
          href="/"
          aria-label="Mediterranean Mezze, back to top"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/photos/bia-delish-emblem.png"
            alt=""
            width={274}
            height={240}
            className="nav-emblem"
            priority
          />
        </Link>
        <nav className="nav-links" aria-label="Pages">
          {pages.map((page) => (
            <Link key={page.href} href={page.href}>
              {page.label}
            </Link>
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
        <Link className="pill nav-pill" href="/#contact" onClick={() => setOpen(false)}>
          Get in touch
        </Link>
      </header>
      <div id="site-menu" className={`menu${open ? " is-open" : ""}`} hidden={!open}>
        <nav aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
