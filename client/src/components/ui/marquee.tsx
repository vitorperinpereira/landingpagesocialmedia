import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  reverse?: boolean;
}

export function Marquee({ items, className, reverse = false }: MarqueeProps) {
  return (
    <div className={cn("relative overflow-hidden whitespace-nowrap bg-white py-3 border-y border-gray-100", className)}>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className={cn("inline-flex animate-marquee", reverse && "animation-direction-reverse")}>
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-sm font-semibold tracking-[0.2em] uppercase text-black/80 flex items-center">
             {item}
             <span className="ml-8 text-[#D4AF37]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
