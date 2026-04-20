import Image from "next/image";
import { Marquee } from "@/components/primitives/marquee";
import { VIDEO_ROW_1, VIDEO_ROW_2, type VideoThumb } from "@/content/videos";

type ThumbProps = VideoThumb & { eager?: boolean };

function Thumb({ src, alt, eager }: ThumbProps) {
  return (
    <div className="relative h-[180px] w-[320px] overflow-hidden rounded-2xl sm:h-[196px] sm:w-[348px]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 809px) 320px, 348px"
        loading={eager ? "eager" : "lazy"}
        className="object-cover"
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
          renderItem={(item, i) => <Thumb {...item} eager={i < 2} />}
        />
        <Marquee
          items={VIDEO_ROW_2}
          direction="right"
          duration={55}
          renderItem={(item, i) => <Thumb {...item} eager={i < 2} />}
        />
      </div>
    </section>
  );
}
