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
    <section id="collaborations" className="bg-dark py-28 text-center text-white">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <h2 className="mb-12 font-serif text-[2rem] sm:text-[2.5rem] lg:text-[3rem]">
          Let&apos;s Create{" "}
          <em className="text-tan italic font-medium">Impact Together.</em>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 text-[0.75rem] tracking-wide text-muted uppercase">
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
