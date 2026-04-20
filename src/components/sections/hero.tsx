"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { Button } from "@/components/primitives/button";
import { ParallaxDots, SparkBurst, SparkleCluster } from "@/components/primitives/hero-decorations";
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

const container: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.06, delayChildren: 0.1 },
    },
};

const wordVariant: Variants = {
    hidden: { opacity: 0.001, filter: "blur(10px)", y: 10 },
    show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
    },
};

const decorVariant: Variants = {
    hidden: { opacity: 0, scale: 0.6 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1], delay: 0.95 },
    },
};

export function Hero() {
    const reduceMotion = useReducedMotion();
    const containerV = reduceMotion ? undefined : container;
    const wordV = reduceMotion ? undefined : wordVariant;
    const blockV = reduceMotion ? undefined : fadeUp;
    const decorV = reduceMotion ? undefined : decorVariant;

    return (
        <section id="top" className="relative isolate flex flex-col items-center overflow-hidden px-6 pt-[120px] pb-[80px] sm:px-[100px] sm:pt-[200px] sm:pb-[100px]">
            <div
                aria-hidden
                className="pointer-events-none absolute right-[-8%] top-[-10%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(255,192,19,0.14),transparent_60%)] blur-2xl"
            />
            <ParallaxDots />

            <motion.div initial="hidden" animate="show" variants={containerV} className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                <motion.div variants={blockV} className="sm:hidden">
                    <SpotsPill />
                </motion.div>

                <h1 className="font-display text-[28px] font-semibold leading-[1.2] sm:text-[36px] md:text-[48px]">
                    {WORDS.map((w, i) => {
                        const isFirst = i === 0;
                        const isLast = i === WORDS.length - 1;
                        return (
                            <AnimatedWord
                                key={i}
                                word={w}
                                variants={wordV}
                                isLast={isLast}
                                decoration={
                                    isFirst ? (
                                        <motion.span
                                            aria-hidden
                                            variants={decorV}
                                            className="pointer-events-none absolute left-0 top-0 -translate-x-[35%] -translate-y-[75%]"
                                        >
                                            <motion.span
                                                className="block"
                                                animate={reduceMotion ? undefined : { rotate: [-10, 10, -10] }}
                                                transition={
                                                    reduceMotion
                                                        ? undefined
                                                        : {
                                                              repeat: Infinity,
                                                              duration: 2.4,
                                                              ease: "easeInOut",
                                                              delay: 1.5,
                                                          }
                                                }
                                                style={{ transformOrigin: "50% 70%" }}
                                            >
                                                <SparkBurst className="h-9 w-9 sm:h-12 sm:w-12" />
                                            </motion.span>
                                        </motion.span>
                                    ) : isLast ? (
                                        <motion.span
                                            aria-hidden
                                            variants={decorV}
                                            className="pointer-events-none absolute right-0 bottom-0 translate-x-[95%] translate-y-[15%]"
                                        >
                                            <SparkleCluster className="h-10 w-12 sm:h-16 sm:w-20" />
                                        </motion.span>
                                    ) : null
                                }
                            />
                        );
                    })}
                </h1>

                <motion.p variants={blockV} className="max-w-xl font-body text-[14px] leading-normal text-muted sm:max-w-2xl sm:text-[17px]">
                    At ScaleitLarge, we bring your brand to life with bold designs and engaging video edits. From visuals to videos, we do it all to make your brand stand out.
                </motion.p>

                <motion.div variants={blockV} className="mt-1">
                    <Button href={CALENDLY_URL} size="lg">
                        Get started Now
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
}

function AnimatedWord({
    word,
    variants,
    isLast,
    decoration,
}: {
    word: Word;
    variants: Variants | undefined;
    isLast: boolean;
    decoration?: ReactNode;
}) {
    return (
        <>
            <motion.span variants={variants} className={cn("relative inline-block", word.accent ? "text-accent" : "text-text")} style={{ willChange: "transform, filter, opacity" }}>
                {word.text}
                {decoration}
            </motion.span>
            {!isLast && (word.breakAfter ? <br aria-hidden /> : <span className="inline-block w-[0.28em]" aria-hidden />)}
        </>
    );
}
