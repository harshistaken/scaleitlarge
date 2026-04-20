import { Marquee } from "@/components/primitives/marquee";
import { VIDEO_ROW_1, VIDEO_ROW_2, type VideoThumb } from "@/content/videos";

function Thumb({ src, alt }: VideoThumb) {
  return (
    <div className="relative h-[180px] w-[320px] overflow-hidden rounded-2xl sm:h-[196px] sm:w-[348px]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block h-full w-full object-cover"
      />
    </div>
  );
}

export function VideosCarousel() {
  return (
    <section id="work" aria-label="Recent work" className="relative overflow-hidden py-6 sm:py-10">
      <div className="flex flex-col gap-[10px] sm:gap-3">
        <Marquee
          items={VIDEO_ROW_1}
          direction="left"
          duration={55}
          renderItem={(item) => <Thumb {...item} />}
        />
        <Marquee
          items={VIDEO_ROW_2}
          direction="right"
          duration={55}
          renderItem={(item) => <Thumb {...item} />}
        />
      </div>
    </section>
  );
}
