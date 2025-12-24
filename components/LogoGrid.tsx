import React from "react";

interface LogoGridProps {
  logos: string[];
  itemWidth?: string;
  itemHeight?: string;
}

export default function LogoGrid({
  logos,
  itemWidth = "w-[160px]",
  itemHeight = "h-[64px]",
}: LogoGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-16 gap-y-12 items-center">
      {logos.map((logo, i) => (
        <div
          key={i}
          className={`flex items-center justify-center ${itemWidth} ${itemHeight}`}
        >
          <img
            src={logo}
            alt="Technology Partner"
            className="w-full h-full object-contain grayscale opacity-80"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}
