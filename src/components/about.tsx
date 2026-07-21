import Image from "next/image";
import { Clock, Users, GraduationCap, Settings } from "lucide-react";

const stats = [
  { Icon: Clock, value: "15+", label: "Years Experience" },
  { Icon: Users, value: "20.000+", label: "Procedures Performed" },
  { Icon: GraduationCap, value: "50+", label: "International Trainings" },
  { Icon: Settings, value: "100+", label: "Scientific Lectures" },
];

const timeline = [
  { year: "2009", desc: "Medical Doctor, Universitas Indonesia" },
  { year: "2014", desc: "Plastic Surgery Resident, Universitas Indonesia" },
  { year: "2017", desc: "Fellowship in Aesthetic Surgery, Seoul, South Korea" },
  { year: "2018", desc: "Founder, The Clinic Beautyphosopy" },
  { year: "2024", desc: "Expanding Impact Globally" },
];

export function About() {
  return (
    <section id="about" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[1fr_280px_1fr] lg:px-8">
        <div>
          <p className="mb-3 text-[0.7rem] tracking-[0.15em] text-tan-dark uppercase">
            About Dr. Danu
          </p>
          <h2 className="font-serif text-[2rem] leading-tight">
            Beyond the Surgeon.
            <br />
            <span className="text-tan-dark font-medium">
              A Visionary in Healthcare.
            </span>
          </h2>
          <p className="mt-5 max-w-[38ch] text-[0.9rem] text-muted">
            With a deep passion for aesthetic excellence and healthcare
            innovation, dr. Danu Mahandaru, Sp.BP-RE is dedicated to
            elevating the standard of plastic surgery and building
            meaningful impact in the industry.
          </p>
          <a
            href="#about"
            className="mt-6 inline-block border-b border-ink pb-0.5 text-[0.8rem] tracking-wide uppercase"
          >
            Read My Story &rarr;
          </a>
        </div>

        <div className="relative aspect-[3/4] w-full max-w-[280px] justify-self-center">
          <Image
            src="/JNT01422.jpg"
            alt="dr. Danu Mahandaru, Sp.BP-RE"
            fill
            sizes="280px"
            className="object-cover object-top"
          />
        </div>

        <div>
          <div className="grid grid-cols-2 gap-6 border-b border-black/10 pb-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2.5">
                <s.Icon className="h-5 w-5 text-tan-dark" strokeWidth={1.5} />
                <span className="font-serif text-[1.6rem]">{s.value}</span>
                <span className="text-[0.65rem] tracking-wide text-muted uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 mb-5 text-[0.7rem] tracking-[0.15em] text-tan-dark uppercase">
            Career Journey
          </p>
          <div className="grid grid-cols-5 gap-3">
            {timeline.map((t) => (
              <div key={t.year} className="flex flex-col gap-2">
                <span className="font-serif text-[1rem]">{t.year}</span>
                <span className="text-[0.68rem] leading-snug text-muted">{t.desc}</span>
              </div>
            ))}
          </div>
          <a
            href="#about"
            className="mt-6 inline-block border-b border-ink pb-0.5 text-[0.8rem] tracking-wide uppercase"
          >
            View Timeline &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
