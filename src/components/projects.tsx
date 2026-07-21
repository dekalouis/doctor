import { PlaceholderDark } from "./placeholder";

const projects = [
  {
    title: "The Clinic Beautyphosopy",
    desc: "Aesthetic excellence and holistic beauty.",
  },
  {
    title: "Healthcare Ventures",
    desc: "Investing in the future of healthcare.",
  },
  {
    title: "BOSUCKE",
    desc: "Bespoke Beauty Magazine — inspiring through stories and experts.",
  },
  {
    title: "Medical Congresses",
    desc: "Bringing knowledge and experts together.",
  },
  {
    title: "Education Programs",
    desc: "Training the next generation.",
  },
  {
    title: "Research & Innovation",
    desc: "Advancing science for better outcomes.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-dark py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[0.7rem] tracking-[0.15em] text-tan uppercase">
              Signature Projects
            </p>
            <h2 className="font-serif text-[2rem]">
              Building Today for a{" "}
              <em className="text-tan italic font-medium">
                Better Tomorrow.
              </em>
            </h2>
          </div>
          <a
            href="#projects"
            className="border-b border-white pb-0.5 text-[0.8rem] tracking-wide uppercase"
          >
            Explore All Projects &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {projects.map((p) => (
            <div key={p.title} className="group relative aspect-[3/4]">
              <div className="absolute inset-0 origin-bottom transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.06] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                <PlaceholderDark className="absolute inset-0" />
                <div className="absolute inset-0 flex flex-col justify-end gap-1.5 p-5">
                  <h4 className="text-[0.85rem] font-medium">{p.title}</h4>
                  <p className="text-[0.75rem] text-muted transition-opacity duration-300 group-hover:text-white/80">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
