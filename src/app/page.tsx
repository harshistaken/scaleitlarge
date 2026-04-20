import { Hero } from "@/components/sections/hero";
import { Navbar } from "@/components/sections/navbar";
import { Services } from "@/components/sections/services";
import { VideosCarousel } from "@/components/sections/videos-carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideosCarousel />
        <Services />
      </main>
    </>
  );
}
