import Image from "next/image";
import { Play } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-dark text-white">
      <div className="mx-auto flex flex-col lg:max-w-[1280px] lg:flex-row lg:items-stretch">
        <div className="relative aspect-[3/4] w-full shrink-0 sm:aspect-[16/10] lg:aspect-auto lg:h-auto lg:w-[46%]">
          <Image
            src="/JNT01422.jpg"
            alt="dr. Danu Mahandaru, Sp.BP-RE"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-r from-transparent to-dark lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dark to-transparent sm:hidden" />
        </div>

        <div className="relative flex-1 px-5 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-24">
          <p className="mb-4 text-[0.65rem] tracking-[0.1em] text-tan uppercase sm:text-[0.7rem] sm:tracking-[0.15em]">
            Plastic Surgeon, Founder, Entrepreneur, Educator.
          </p>
          <h1 className="max-w-xl font-serif text-[1.75rem] leading-[1.15] font-normal sm:text-[2.6rem] lg:text-[3.2rem]">
            Shaping the Future of{" "}
            <em className="italic">Plastic Surgery,</em>{" "}
            <em className="italic">Aesthetic Medicine</em>{" "}
            &amp; Healthcare Entrepreneurship.
          </h1>

          <div className="mt-7 flex flex-wrap items-center gap-5 sm:mt-8 sm:gap-6">
            <a
              href="#about"
              className="bg-tan px-6 py-3 text-[0.75rem] tracking-wide text-dark uppercase hover:opacity-80 sm:px-7 sm:py-3.5 sm:text-[0.8rem]"
            >
              View Profile
            </a>
            <a
              href="#projects"
              className="border-b border-white/40 pb-1 text-[0.75rem] tracking-wide text-white uppercase hover:opacity-80 sm:text-[0.8rem]"
            >
              Explore My Work &rarr;
            </a>
          </div>

          <button
            type="button"
            className="mt-8 flex items-center gap-3 text-[0.75rem] tracking-wide text-white uppercase sm:mt-10 sm:text-[0.8rem]"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 sm:h-11 sm:w-11">
              <Play className="ml-0.5 h-3.5 w-3.5 fill-white sm:h-4 sm:w-4" strokeWidth={0} />
            </span>
            Watch Showreel
          </button>
        </div>
      </div>
    </section>
  );
}
