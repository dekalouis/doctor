import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0f0d0a] py-8 text-[0.75rem] text-muted">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 lg:px-8">
        <span className="font-serif text-white">
          dr. Danu Mahandaru, Sp.BP-RE
        </span>
        <span>&copy; 2024 dr. Danu Mahandaru, Sp.BP-RE. All Rights Reserved.</span>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">YouTube</a>
          <a
            href="#hero"
            aria-label="Back to top"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white"
          >
            <ArrowUp className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
