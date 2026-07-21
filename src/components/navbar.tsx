"use client";

import { useEffect, useState } from "react";
import { navLinks } from "./nav-links";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-cream border-b border-black/10"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-8">
        <a
          href="#hero"
          className={`font-serif text-[1.05rem] ${solid ? "text-ink" : "text-white"}`}
        >
          dr. Danu Mahandaru, <span className="font-normal">Sp.BP-RE</span>
        </a>

        <nav
          className={`hidden items-center gap-7 text-[0.8rem] lg:flex ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-tan-dark">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="#contact"
            className={`hidden border px-6 py-2.5 text-[0.75rem] tracking-wide uppercase hover:opacity-70 md:inline-block ${
              solid ? "border-ink text-ink" : "border-white text-white"
            }`}
          >
            Book Consultation
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col justify-center gap-[5px] lg:hidden"
          >
            <span className={`block h-[1.5px] w-full ${solid ? "bg-ink" : "bg-white"}`} />
            <span className={`block h-[1.5px] w-full ${solid ? "bg-ink" : "bg-white"}`} />
            <span className={`block h-[1.5px] w-full ${solid ? "bg-ink" : "bg-white"}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col gap-6 bg-dark p-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-serif text-2xl text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-block w-fit border border-cream px-6 py-3 text-xs tracking-wide text-cream uppercase"
          >
            Book Consultation
          </a>
        </nav>
      )}
    </header>
  );
}
