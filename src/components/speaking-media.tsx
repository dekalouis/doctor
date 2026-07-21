import { Placeholder, PlaceholderDark } from "./placeholder";

const speakingStats = [
  { value: "200+", label: "Events" },
  { value: "30+", label: "Countries" },
  { value: "100.000+", label: "Audience Reached" },
];

const media = [
  { brand: "Forbes", title: "The Visionary Surgeon" },
  { brand: "Bazaar", title: "Beauty, Reimagined" },
  { brand: "Podcast", title: "The Future of Aesthetic Medicine" },
];

export function SpeakingMedia() {
  return (
    <section id="speaking" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-3 text-[0.7rem] tracking-[0.15em] text-tan-dark uppercase">
            Speaking
          </p>
          <h2 className="font-serif text-[2rem]">
            Sharing Knowledge.
            <br />
            <span className="text-tan-dark font-medium">
              Inspiring Change.
            </span>
          </h2>

          <div className="mt-6 flex flex-wrap gap-10">
            {speakingStats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <span className="font-serif text-[1.6rem]">{s.value}</span>
                <span className="text-[0.65rem] tracking-wide text-muted uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <Placeholder className="my-6 aspect-[16/10] w-full" />

          <a
            href="#speaking"
            className="inline-block border-b border-ink pb-0.5 text-[0.8rem] tracking-wide uppercase"
          >
            View Speaking Page &rarr;
          </a>
        </div>

        <div id="media">
          <p className="mb-3 text-[0.7rem] tracking-[0.15em] text-tan-dark uppercase">
            Media
          </p>
          <h3 className="mb-6 font-serif text-[1.3rem]">
            In The Media.
            <br />
            <em className="italic font-medium">In The Conversation.</em>
          </h3>

          <div className="mb-6 grid grid-cols-3 gap-3">
            {media.map((m) => (
              <div key={m.brand} className="relative aspect-[3/4]">
                <PlaceholderDark className="absolute inset-0" />
                <div className="absolute inset-0 flex flex-col justify-between p-3 text-white">
                  <span className="font-serif text-[0.9rem] leading-none">
                    {m.brand}
                  </span>
                  <span className="text-[0.65rem] text-muted">{m.title}</span>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#media"
            className="inline-block border-b border-ink pb-0.5 text-[0.8rem] tracking-wide uppercase"
          >
            View All Media &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
