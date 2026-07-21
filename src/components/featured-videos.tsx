import Image from "next/image";
import { Play } from "lucide-react";

const videos = [
  {
    title: "My Journey",
    desc: "The path that shaped who I am today.",
    image: "/gallery/my-journey.jpg",
    alt: "Dr. Danu seated at his office desk",
  },
  {
    title: "Surgical Philosophy",
    desc: "Precision. Safety. Natural Results.",
    image: "/gallery/surgical-philosophy.jpg",
    alt: "Dr. Danu with an aesthetic device in the clinic",
  },
  {
    title: "International Lecture",
    desc: "Shaping the Future of Aesthetic Medicine.",
    image: "/gallery/international-lecture.jpg",
    alt: "Dr. Danu at his desk during an interview",
  },
  {
    title: "Interview",
    desc: "In conversation about leadership and vision.",
    image: "/gallery/interview.jpg",
    alt: "Dr. Danu standing in a lounge setting",
  },
  {
    title: "Behind The Scenes",
    desc: "A glimpse into my daily work and life.",
    image: "/gallery/behind-the-scenes.jpg",
    alt: "Dr. Danu seated on a bench in the clinic",
  },
  {
    title: "Congress Highlight",
    desc: "Key moments from global stages.",
    image: "/gallery/congress-highlight.jpg",
    alt: "Dr. Danu posing in a lounge setting",
  },
];

export function FeaturedVideos() {
  return (
    <section id="insights" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-10">
          <div className="mb-8 lg:mb-0 lg:w-[200px] lg:shrink-0">
            <p className="mb-3 text-[0.7rem] tracking-[0.15em] text-tan-dark uppercase">
              Featured Videos
            </p>
            <h2 className="font-serif text-[2rem]">
              Ideas, Insights &amp;{" "}
              <em className="text-tan-dark italic font-medium">
                Inspiration.
              </em>
            </h2>
            <a
              href="#insights"
              className="mt-5 inline-block border-b border-ink pb-0.5 text-[0.8rem] tracking-wide uppercase"
            >
              See All Videos &rarr;
            </a>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {videos.map((v) => (
              <div key={v.title} className="group">
                <div className="relative mb-3 aspect-[4/5] overflow-visible">
                  <div className="absolute inset-0 origin-bottom transition-all duration-300 ease-out group-hover:-translate-y-2 group-hover:scale-[1.06] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                    <Image
                      src={v.image}
                      alt={v.alt}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70">
                        <Play className="ml-0.5 h-3.5 w-3.5 fill-white text-white" strokeWidth={0} />
                      </span>
                    </span>
                  </div>
                </div>
                <h4 className="mb-1 text-[0.9rem] font-normal">{v.title}</h4>
                <p className="text-[0.75rem] text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
