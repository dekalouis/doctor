import Image from "next/image";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-dark text-white">
      <div className="mx-auto flex max-w-[1280px] flex-col-reverse lg:flex-row lg:items-stretch">
        <div className="relative h-[280px] w-full shrink-0 lg:h-auto lg:w-[46%]">
          <Image
            src="/JNT01422.jpg"
            alt="dr. Danu Mahandaru, Sp.BP-RE"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-r from-transparent to-dark lg:block hidden" />
        </div>

        <div className="relative flex-1 px-6 py-12 lg:px-16 lg:py-24">
          <p className="mb-4 text-[0.7rem] tracking-[0.15em] text-tan uppercase">
            Plastic Surgeon, Founder, Entrepreneur, Educator.
          </p>
          <h1 className="max-w-xl font-serif text-[2rem] leading-[1.15] font-normal sm:text-[2.6rem] lg:text-[3.2rem]">
            Shaping the Future of{" "}
            <em className="italic">Plastic Surgery,</em>{" "}
            <em className="italic">Aesthetic Medicine</em>{" "}
            &amp; Healthcare Entrepreneurship.
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#about"
              className="bg-tan px-7 py-3.5 text-[0.8rem] tracking-wide text-dark uppercase hover:opacity-80"
            >
              View Profile
            </a>
            <a
              href="#projects"
              className="border-b border-white/40 pb-1 text-[0.8rem] tracking-wide text-white uppercase hover:opacity-80"
            >
              Explore My Work &rarr;
            </a>
          </div>

          <button
            type="button"
            className="mt-10 flex items-center gap-3 text-[0.8rem] tracking-wide text-white uppercase"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50">
              <Play className="ml-0.5 h-4 w-4 fill-white" strokeWidth={0} />
            </span>
            Watch Showreel
          </button>
        </div>
      </div>
    </section>
  );
}
