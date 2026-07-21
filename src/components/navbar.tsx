"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
        solid
          ? "bg-cream border-b border-black/10"
          : "bg-black/20 border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className={`min-w-0 truncate font-serif text-[0.9rem] sm:text-[1.05rem] ${solid ? "text-ink" : "text-white"}`}
        >
          dr. Danu Mahandaru,{" "}
          <span className="font-normal">Sp.BP-RE</span>
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

        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <a
            href="#contact"
            className={`hidden border px-6 py-2.5 text-[0.75rem] tracking-wide uppercase hover:opacity-70 md:inline-block ${
              solid ? "border-ink text-ink" : "border-white text-white"
            }`}
          >
            Book Consultation
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`-mr-2 flex h-10 w-10 items-center justify-center rounded-full lg:hidden ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col gap-6 overflow-y-auto bg-dark p-8 sm:top-20">
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
