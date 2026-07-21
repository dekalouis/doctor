import { PlaceholderDark } from "./placeholder";
import { ArrowLeft, ArrowRight } from "lucide-react";

const items = [
  {
    num: "01",
    title: "Plastic Surgeon",
    desc: "Delivering natural, refined results with precision and artistry.",
  },
  {
    num: "02",
    title: "Founder",
    desc: "Building and leading The Clinic Beautyphosopy with a vision.",
  },
  {
    num: "03",
    title: "Entrepreneur",
    desc: "Driving innovation and growth in healthcare business.",
  },
  {
    num: "04",
    title: "Educator & Speaker",
    desc: "Sharing knowledge, shaping the future of the industry.",
  },
  {
    num: "05",
    title: "Event & Community Builder",
    desc: "Creating platforms that connect and empower professionals.",
  },
  {
    num: "06",
    title: "Advisor",
    desc: "Supporting brands and startups to grow and make a difference.",
  },
];

export function WhatIDo() {
  return (
    <section id="what-i-do" className="bg-dark py-20 text-white lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[0.7rem] tracking-[0.15em] text-tan uppercase">
              What I Do
            </p>
            <h2 className="font-serif text-[2rem] leading-tight">
              More Than a Title,
              <br />
              <em className="text-tan italic font-medium">
                Many Ways to Make an Impact.
              </em>
            </h2>
          </div>
          <div className="flex gap-2">
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

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <div key={item.num} className="relative aspect-[3/4]">
              <PlaceholderDark className="absolute inset-0" />
              <div className="absolute inset-0 flex flex-col justify-end gap-1.5 p-5">
                <span className="font-serif text-[1.1rem] text-tan">
                  {item.num}
                </span>
                <h3 className="text-[0.85rem] tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-[0.75rem] text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
