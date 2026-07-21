import Image from "next/image";

const projects = [
  {
    title: "The Clinic Beautyphosopy",
    desc: "Aesthetic excellence and holistic beauty.",
    image: "/gallery/clinic-beautyphosopy.jpg",
    alt: "Dr. Danu with an aesthetic device at The Clinic Beautyphosopy",
  },
  {
    title: "Healthcare Ventures",
    desc: "Investing in the future of healthcare.",
    image: "/gallery/healthcare-ventures.jpg",
    alt: "Dr. Danu at his office desk",
  },
  {
    title: "BESPOKE",
    desc: "Bespoke Beauty Magazine — inspiring through stories and experts.",
    image: "/gallery/bespoke-magazine.jpg",
    alt: "Editorial portrait of Dr. Danu in a lounge setting",
  },
  {
    title: "Medical Congresses",
    desc: "Bringing knowledge and experts together.",
    image: "/gallery/medical-congresses.jpg",
    alt: "Dr. Danu seated at his desk",
  },
  {
    title: "Education Programs",
    desc: "Training the next generation.",
    image: "/gallery/education-programs.jpg",
    alt: "Dr. Danu at his office desk",
  },
  {
    title: "Research & Innovation",
    desc: "Advancing science for better outcomes.",
    image: "/gallery/research-innovation.png",
    alt: "Dr. Danu with an EMFACE aesthetic device",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-dark py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-10">
          <div className="mb-8 lg:mb-0 lg:w-[200px] lg:shrink-0">
            <p className="mb-3 text-[0.7rem] tracking-[0.15em] text-tan uppercase">
              Signature Projects
            </p>
            <h2 className="font-serif text-[2rem]">
              Building Today for a{" "}
              <em className="text-tan italic font-medium">
                Better Tomorrow.
              </em>
            </h2>
            <a
              href="#projects"
              className="mt-5 inline-block border-b border-white pb-0.5 text-[0.8rem] tracking-wide uppercase"
            >
              Explore All Projects &rarr;
            </a>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {projects.map((p) => (
              <div key={p.title} className="group relative aspect-[3/5]">
                <div className="absolute inset-0 origin-bottom transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.06] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-40% via-black/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex min-h-[110px] flex-col justify-start gap-1.5 p-5">
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
      </div>
    </section>
  );
}
