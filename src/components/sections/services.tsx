import { Container } from "@/components/primitives/container";
import Image from "next/image";
import { SERVICES } from "@/content/services";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-12 sm:py-16">
      <Container className="max-w-[1340px]">
        <div className="px-4 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-14">
          <header className="mx-auto max-w-[900px] text-center">
            <h2 className="font-display text-[28px] font-semibold leading-[1.15] text-text sm:text-[32px]">
              Our Services
            </h2>
            <p className="mt-2 font-body text-[14px] leading-[1.4] tracking-[0.01em] text-white/70 sm:mt-3 sm:text-[17px]">
              Transforming Your Vision into Reality : Our Services, Your Success Story!
            </p>
          </header>

          <div className="mt-8 grid grid-cols-1 justify-items-center gap-y-12 sm:mt-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14 md:grid-cols-4 md:gap-x-8 md:gap-y-14 md:[&>article:nth-child(5)]:col-start-2 md:[&>article:nth-child(6)]:col-start-3">
            {SERVICES.map((service) => (
              <article key={service.title} className="flex w-full max-w-[335px] flex-col items-center text-center sm:max-w-[295px]">
                <div className="w-full overflow-hidden rounded-[14px]">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    width={590}
                    height={400}
                    loading="lazy"
                    sizes="(max-width: 809px) 335px, (max-width: 1199px) 295px, 295px"
                    className="block h-auto w-full"
                  />
                </div>

                <h3 className="mt-5 font-display text-[17px] font-semibold leading-[1.2] tracking-[0.02em] text-text sm:text-[20px]">
                  {service.title}
                </h3>

                <p className="mt-2 font-body text-[14px] leading-[1.28] tracking-[0.01em] text-white/70 sm:text-[15px]">
                  {service.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
