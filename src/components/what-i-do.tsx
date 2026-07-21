import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const items = [
  {
    num: "01",
    title: "Plastic Surgeon",
    desc: "Delivering natural, refined results with precision and artistry.",
    image: "/gallery/plastic-surgeon.png",
    alt: "Dr. Danu standing beside an EMFACE aesthetic device in the clinic",
  },
  {
    num: "02",
    title: "Founder",
    desc: "Building and leading The Clinic Beautyphosopy with a vision.",
    image: "/gallery/founder.jpg",
    alt: "Dr. Danu signing documents at his office desk",
  },
  {
    num: "03",
    title: "Entrepreneur",
    desc: "Driving innovation and growth in healthcare business.",
    image: "/gallery/entrepreneur.jpg",
    alt: "Dr. Danu seated confidently in a navy suit",
  },
  {
    num: "04",
    title: "Educator & Speaker",
    desc: "Sharing knowledge, shaping the future of the industry.",
    image: "/gallery/educator-speaker.jpg",
    alt: "Dr. Danu seated in a lounge, addressing an audience",
  },
  {
    num: "05",
    title: "Event & Community Builder",
    desc: "Creating platforms that connect and empower professionals.",
    image: "/gallery/event-community-builder.jpg",
    alt: "Dr. Danu adjusting his jacket at a community event",
  },
  {
    num: "06",
    title: "Advisor",
    desc: "Supporting brands and startups to grow and make a difference.",
    image: "/gallery/advisor.jpg",
    alt: "Dr. Danu standing by a window in a thoughtful pose",
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="bg-dark py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-10">
          <div className="mb-8 lg:mb-0 lg:w-[200px] lg:shrink-0">
            <p className="mb-3 text-[0.7rem] tracking-[0.15em] text-tan uppercase">
              What I Do
            </p>
            <h2 className="font-serif text-[2rem] leading-tight">
              More Than a Title,{" "}
              <em className="text-tan italic font-medium">
                Many Ways to Make an Impact.
              </em>
            </h2>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {items.map((item) => (
              <div key={item.num} className="group relative aspect-[3/5]">
                <div className="absolute inset-0 origin-bottom transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.06] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-40% via-black/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex min-h-[140px] flex-col justify-start gap-1.5 p-5">
                    <span className="font-serif text-[1.1rem] text-tan">
                      {item.num}
                    </span>
                    <h3 className="text-[0.85rem] tracking-wide uppercase">
                      {item.title}
                    </h3>
                    <p className="text-[0.75rem] text-muted transition-opacity duration-300 group-hover:text-white/80">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 hover:bg-white/10"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
