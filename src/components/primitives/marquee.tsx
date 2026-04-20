import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props<T> = {
  items: readonly T[];
  renderItem: (item: T, index: number) => ReactNode;
  direction?: "left" | "right";
  duration?: number;
  gap?: number;
  fade?: number;
  className?: string;
  itemClassName?: string;
};

export function Marquee<T>({
  items,
  renderItem,
  direction = "left",
  duration = 50,
  gap = 10,
  fade = 12.5,
  className,
  itemClassName,
}: Props<T>) {
  const trackStyle: CSSProperties = {
    gap: `${gap}px`,
    animation: `marquee ${duration}s linear infinite`,
    animationDirection: direction === "right" ? "reverse" : "normal",
  };

  const maskStyle: CSSProperties = {
    WebkitMaskImage: `linear-gradient(to right, transparent 0%, #000 ${fade}%, #000 ${100 - fade}%, transparent 100%)`,
    maskImage: `linear-gradient(to right, transparent 0%, #000 ${fade}%, #000 ${100 - fade}%, transparent 100%)`,
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={maskStyle}
    >
      <div className="flex w-max will-change-transform" style={trackStyle}>
        {items.map((item, i) => (
          <div key={`a-${i}`} className={cn("shrink-0", itemClassName)}>
            {renderItem(item, i)}
          </div>
        ))}
        {items.map((item, i) => (
          <div
            key={`b-${i}`}
            className={cn("shrink-0", itemClassName)}
            aria-hidden
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
}
