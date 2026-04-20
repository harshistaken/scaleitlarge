import { cn } from "@/lib/utils";

export function SpotsPill({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 items-center rounded-full border border-white/10 bg-black/30 px-4 font-body text-[14px] font-normal leading-[1.7em] backdrop-blur-sm",
        className,
      )}
    >
      <span className="shimmer">2 Spots Remaining</span>
    </span>
  );
}
