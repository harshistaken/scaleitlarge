import { Container } from "@/components/primitives/container";
import { Marquee } from "@/components/primitives/marquee";
import { TESTIMONIALS, type Testimonial } from "@/content/testimonials";
import Image from "next/image";

function TestimonialCard({ name, quote, avatarSrc, avatarAlt }: Testimonial) {
  return (
    <article
      className="relative h-[140px] w-[220px] overflow-hidden rounded-[6px] bg-[url('/assets/testimonials/card-bg.png')] bg-cover bg-center sm:h-[153px] sm:w-[240px]"
    >
      <div className="relative z-10 p-[8px] text-black">
        <div className="flex items-center gap-2">
          <div className="relative h-[20px] w-[20px] overflow-hidden rounded-[4px]">
            <Image
              src={avatarSrc}
              alt={avatarAlt}
              fill
              sizes="20px"
              className="object-cover"
            />
          </div>
          <p className="font-hand text-[12px] leading-none">{name}</p>
        </div>

        <p className="mt-[8px] line-clamp-5 font-hand text-[12px] leading-[1.15]">
          {quote}
        </p>
      </div>
    </article>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-14 sm:py-20">
      <Container className="max-w-[1440px]">
        <header className="mx-auto max-w-[720px] px-4 text-center">
          <h2 className="font-display text-[28px] font-semibold leading-[1.15] text-text sm:text-[32px]">
            What Our Clients Are Saying!
          </h2>
          <p className="mt-3 font-body text-[14px] leading-[1.4] tracking-[0.01em] text-white/70 sm:text-[17px]">
            Don&apos;t just take our word for it-see how we&apos;ve helped our clients elevate their brands!
          </p>
        </header>

        <div className="mt-9">
          <Marquee
            items={TESTIMONIALS}
            direction="left"
            duration={45}
            gap={32}
            fade={12.5}
            className="py-[10px]"
            renderItem={(item) => <TestimonialCard {...item} />}
          />
        </div>
      </Container>
    </section>
  );
}
