"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/primitives/logo";
import { SpotsPill } from "@/components/primitives/spots-pill";
import { cn } from "@/lib/utils";

const LINKS = [
    { label: "Works", href: "#work" },
    { label: "Pricing", href: "#pricing" },
    { label: "How we work", href: "#how" },
    { label: "FAQ?", href: "#faq" },
    { label: "Services", href: "#services" },
] as const;

export function Navbar() {
    const [open, setOpen] = useState(false);
    const reduceMotion = useReducedMotion();
    const menuId = useId();

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [open]);

    return (
        <header className="pointer-events-none fixed inset-x-0 top-0 z-50 w-full px-4 pt-3 sm:top-5 sm:pt-0">
            <nav
                aria-label="Primary"
                className="pointer-events-auto mx-auto w-full max-w-[640px] overflow-hidden rounded-[26px] border border-white/10 bg-black/20 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.55)] backdrop-blur-[20px]"
            >
                <div className="flex h-[52px] items-center pl-5 pr-2 sm:pl-6">
                    <a href="#top" aria-label="ScaleitLarge home" className="flex shrink-0 items-center">
                        <Logo className="h-6 w-6" />
                    </a>

                    <ul className="hidden flex-1 items-center justify-center gap-4 sm:flex">
                        {LINKS.map((l) => (
                            <li key={l.href}>
                                <a href={l.href} className="font-body text-[16px] font-normal leading-[1.2] text-text/95 transition-colors hover:text-text">
                                    {l.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="hidden sm:block">
                        <SpotsPill />
                    </div>

                    <button
                        type="button"
                        aria-expanded={open}
                        aria-controls={menuId}
                        aria-label={open ? "Close menu" : "Open menu"}
                        onClick={() => setOpen((v) => !v)}
                        className="ml-auto grid h-10 w-10 place-items-center rounded-full text-text sm:hidden"
                    >
                        <Hamburger open={open} />
                    </button>
                </div>

                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            key="panel"
                            id={menuId}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={
                                reduceMotion
                                    ? { duration: 0 }
                                    : {
                                          height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] },
                                          opacity: { duration: 0.2 },
                                      }
                            }
                            className="sm:hidden"
                        >
                            <ul className="flex flex-col px-5 pb-5 pt-1">
                                {LINKS.map((l) => (
                                    <li key={l.href}>
                                        <a href={l.href} onClick={() => setOpen(false)} className="block py-3 font-body text-[18px] font-normal leading-tight text-text">
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
}

function Hamburger({ open }: { open: boolean }) {
    const bar = "absolute left-0 right-0 h-[1.75px] rounded-full bg-current transition-all duration-[280ms] ease-[cubic-bezier(0.25,1,0.5,1)]";
    return (
        <div className="relative h-[14px] w-[20px]">
            <span className={cn(bar, open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0")} />
            <span className={cn("absolute left-0 right-0 top-1/2 h-[1.75px] -translate-y-1/2 rounded-full bg-current transition-opacity duration-180", open ? "opacity-0" : "opacity-100")} />
            <span className={cn(bar, open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0")} />
        </div>
    );
}
