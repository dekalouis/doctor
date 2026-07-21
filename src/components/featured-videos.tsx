import { Placeholder } from "./placeholder";
import { Play } from "lucide-react";

const videos = [
  {
    title: "My Journey",
    desc: "The path that shaped who I am today.",
  },
  {
    title: "Surgical Philosophy",
    desc: "Precision. Safety. Natural Results.",
  },
  {
    title: "International Lecture",
    desc: "Shaping the Future of Aesthetic Medicine.",
  },
  {
    title: "Interview",
    desc: "In conversation about leadership and vision.",
  },
  {
    title: "Behind The Scenes",
    desc: "A glimpse into my daily work and life.",
  },
  {
    title: "Congress Highlight",
    desc: "Key moments from global stages.",
  },
];

export function FeaturedVideos() {
  return (
    <section id="insights" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-[0.7rem] tracking-[0.15em] text-tan-dark uppercase">
              Featured Videos
            </p>
            <h2 className="font-serif text-[2rem]">
              Ideas, Insights &amp;{" "}
              <em className="text-tan-dark italic font-medium">
                Inspiration.
              </em>
            </h2>
          </div>
          <a
            href="#insights"
            className="border-b border-ink pb-0.5 text-[0.8rem] tracking-wide uppercase"
          >
            See All Videos &rarr;
          </a>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {videos.map((v) => (
            <div key={v.title}>
              <div className="relative mb-3 aspect-[4/5]">
                <Placeholder className="absolute inset-0" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70">
                    <Play className="ml-0.5 h-3.5 w-3.5 fill-white text-white" strokeWidth={0} />
                  </span>
                </span>
              </div>
              <h4 className="mb-1 text-[0.9rem] font-normal">{v.title}</h4>
              <p className="text-[0.75rem] text-muted">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
