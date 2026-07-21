import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { WhatIDo } from "@/components/what-i-do";
import { FeaturedVideos } from "@/components/featured-videos";
import { Projects } from "@/components/projects";
import { SpeakingMedia } from "@/components/speaking-media";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatIDo />
        <FeaturedVideos />
        <Projects />
        <SpeakingMedia />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
