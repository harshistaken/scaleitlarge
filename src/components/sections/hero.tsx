import type { CSSProperties, ReactNode } from "react";
import { Button } from "@/components/primitives/button";
import {
  ParallaxDots,
  SparkBurst,
  SparkleCluster,
} from "@/components/primitives/hero-decorations";
import { SpotsPill } from "@/components/primitives/spots-pill";
import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/rahul-scaleitlarge/30min";

type Word = { text: string; accent?: boolean; breakAfter?: boolean };

const WORDS: Word[] = [
  { text: "Your", accent: true },
  { text: "Brand", accent: true },
  { text: "Deserves", breakAfter: true },
  { text: "Videos" },
  { text: "That" },
  { text: "Stands", accent: true },
  { text: "Out.", accent: true },
];

export function Hero() {
  const lastWordIndex = WORDS.length - 1;
  const decorDelay = 0.1 + (lastWordIndex + 1) * 0.06;

  return (
    <section
      id="top"
      className="relative isolate flex flex-col items-center overflow-hidden px-6 pt-[120px] pb-[80px] sm:px-[100px] sm:pt-[200px] sm:pb-[100px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[-10%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(255,192,19,0.14),transparent_60%)] blur-2xl"
      />
      <ParallaxDots />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <div className="hero-block sm:hidden" style={{ "--i": 0 } as CSSProperties}>
          <SpotsPill />
        </div>

        <h1 className="font-display text-[28px] font-semibold leading-[1.2] sm:text-[36px] md:text-[48px]">
          {WORDS.map((w, i) => {
            const isFirst = i === 0;
            const isLast = i === lastWordIndex;
            return (
              <AnimatedWord
                key={i}
                index={i}
                word={w}
                isLast={isLast}
                decoration={
                  isFirst ? (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-0 top-0 -translate-x-[35%] -translate-y-[75%] spark-wiggle"
                      style={{ animationDelay: `${decorDelay + 1.4}s` }}
                    >
                      <SparkBurst className="h-9 w-9 sm:h-12 sm:w-12" />
                    </span>
                  ) : isLast ? (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-0 bottom-0 translate-x-[95%] translate-y-[15%] hero-decor-in"
                      style={{ animationDelay: `${decorDelay}s` }}
                    >
                      <SparkleCluster className="h-10 w-12 sm:h-16 sm:w-20" />
                    </span>
                  ) : null
                }
              />
            );
          })}
        </h1>

        <p
          className="hero-block max-w-xl font-body text-[14px] leading-normal text-muted sm:max-w-2xl sm:text-[17px]"
          style={{ "--i": WORDS.length } as CSSProperties}
        >
          At ScaleitLarge, we bring your brand to life with bold designs and engaging video edits. From visuals to videos, we do it all to make your brand stand out.
        </p>

        <div
          className="hero-block mt-1"
          style={{ "--i": WORDS.length + 1 } as CSSProperties}
        >
          <Button href={CALENDLY_URL} size="lg">
            Get started Now
          </Button>
        </div>
      </div>
    </section>
  );
}

function AnimatedWord({
  word,
  index,
  isLast,
  decoration,
}: {
  word: Word;
  index: number;
  isLast: boolean;
  decoration?: ReactNode;
}) {
  return (
    <>
      <span
        className={cn(
          "hero-word relative inline-block",
          word.accent ? "text-accent" : "text-text",
        )}
        style={{ "--i": index } as CSSProperties}
      >
        {word.text}
        {decoration}
      </span>
      {!isLast &&
        (word.breakAfter ? (
          <br aria-hidden />
        ) : (
          <span className="inline-block w-[0.28em]" aria-hidden />
        ))}
    </>
  );
}
