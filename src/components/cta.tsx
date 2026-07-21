const links = [
  { label: "Consultation", href: "#contact" },
  { label: "Speaking Invitation", href: "#speaking" },
  { label: "Business Collaboration", href: "#collaborations" },
  { label: "Media Interview", href: "#media" },
  { label: "Investment", href: "#collaborations" },
  { label: "General Inquiry", href: "#contact" },
];

export function Cta() {
  return (
    <section id="collaborations" className="bg-dark py-20 text-center text-white sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <h2 className="mb-10 font-serif text-[1.75rem] sm:mb-12 sm:text-[2.5rem] lg:text-[3rem]">
          Let&apos;s Create{" "}
          <em className="text-tan italic font-medium">Impact Together.</em>
        </h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[0.7rem] tracking-wide text-muted uppercase sm:gap-x-8 sm:text-[0.75rem]">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
