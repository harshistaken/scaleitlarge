"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function SparkBurst({ className }: { className?: string }) {
  const center = { x: 40, y: 56 };
  const rays: Array<{ angle: number; len: number }> = [
    { angle: 172, len: 14 },
    { angle: 156, len: 20 },
    { angle: 138, len: 16 },
    { angle: 118, len: 22 },
    { angle: 98, len: 24 },
    { angle: 78, len: 22 },
    { angle: 58, len: 16 },
    { angle: 40, len: 20 },
    { angle: 22, len: 14 },
  ];

  return (
    <svg
      viewBox="0 0 80 80"
      className={cn("pointer-events-none", className)}
      aria-hidden
    >
      <g stroke="#FFC013" strokeWidth="2" strokeLinecap="round">
        {rays.map((r, i) => {
          const rad = (r.angle * Math.PI) / 180;
          const innerR = 10;
          const x1 = center.x + Math.cos(rad) * innerR;
          const y1 = center.y - Math.sin(rad) * innerR;
          const x2 = center.x + Math.cos(rad) * (innerR + r.len);
          const y2 = center.y - Math.sin(rad) * (innerR + r.len);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
        })}
      </g>
    </svg>
  );
}

const STAR =
  "M50 0 C50 28 72 50 100 50 C72 50 50 72 50 100 C50 72 28 50 0 50 C28 50 50 28 50 0 Z";

export function SparkleCluster({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 120"
      className={cn("pointer-events-none", className)}
      aria-hidden
    >
      <g fill="none" stroke="#FFC013" strokeWidth="5" strokeLinejoin="round">
        <g transform="translate(20 0) scale(0.42)">
          <path d={STAR} />
        </g>
        <g transform="translate(78 36) scale(0.3)">
          <path d={STAR} />
        </g>
        <g transform="translate(8 72) scale(0.22)">
          <path d={STAR} />
        </g>
      </g>
    </svg>
  );
}

type Dot = {
  top: string;
  left: string;
  size: number;
  opacity: number;
  k: number;
};

const DOTS: Dot[] = [
  { top: "8%", left: "6%", size: 3, opacity: 0.85, k: 0.9 },
  { top: "14%", left: "88%", size: 3, opacity: 0.9, k: 0.7 },
  { top: "32%", left: "22%", size: 2, opacity: 0.7, k: 0.5 },
  { top: "44%", left: "78%", size: 2, opacity: 0.75, k: 0.55 },
  { top: "60%", left: "12%", size: 3, opacity: 0.85, k: 1.0 },
  { top: "68%", left: "92%", size: 2, opacity: 0.6, k: 0.3 },
  { top: "80%", left: "40%", size: 2, opacity: 0.7, k: 0.65 },
  { top: "86%", left: "70%", size: 3, opacity: 0.8, k: 0.85 },
  { top: "24%", left: "50%", size: 2, opacity: 0.5, k: 0.4 },
  { top: "92%", left: "18%", size: 2, opacity: 0.6, k: 0.5 },
  { top: "50%", left: "4%", size: 2, opacity: 0.65, k: 0.75 },
  { top: "38%", left: "96%", size: 2, opacity: 0.6, k: 0.6 },
];

export function ParallaxDots({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 22, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 22, mass: 0.6 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    const onMove = (e: MouseEvent) => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      mx.set((e.clientX / vw - 0.5) * 2);
      my.set((e.clientY / vh - 0.5) * 2);
    };

    const unsubX = sx.on("change", (v) => {
      rootRef.current?.style.setProperty("--mx", String(v));
    });
    const unsubY = sy.on("change", (v) => {
      rootRef.current?.style.setProperty("--my", String(v));
    });

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      unsubX();
      unsubY();
    };
  }, [mx, my, sx, sy]);

  return (
    <div
      ref={rootRef}
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden
      style={
        {
          // Defaults in case JS hasn't run yet / SSR
          "--mx": "0",
          "--my": "0",
        } as React.CSSProperties
      }
    >
      {DOTS.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-accent"
          style={{
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            transform: `translate3d(calc(var(--mx) * ${d.k * 14}px), calc(var(--my) * ${d.k * 14}px), 0)`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
