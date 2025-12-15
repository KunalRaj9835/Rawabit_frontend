"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SlideUp from "@/components/SlideUp";
import ChargingButton from "./ChargingButton";

interface SlideItem {
  id: number;
  title: string;
  text: string;
  bg: string;
  href: string;
  gifPosition?: string;
}

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const SLIDES: SlideItem[] = [
  {
    id: 1,
    title: "Managed Services",
    text: "Monitor, manage, and maintain your IT infrastructure with our 24/7 managed services. We ensure maximum uptime, faster issue resolution, and continuous network optimization so your business runs without disruption.",
    bg: "carousel/1.mp4",
    href: "#",
    gifPosition: "right",
  },
  {
    id: 2,
    title: "Installation and Integration",
    text: "Seamless setup and reliable support — from hardware installation to software integration. Our experts ensure smooth deployment, system compatibility, and long-term performance through proactive maintenance.",
    bg: "carousel/2.webp",
    href: "#",
  },
  {
    id: 3,
    title: "Design & Consultation",
    text: "Crafting customized IT and networking strategies aligned with your business goals. We analyze, plan, and design scalable, secure solutions that improve performance and support future growth.",
    bg: "carousel/3.jpg",
    href: "#",
  },
];


  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const nextIndex = emblaApi.selectedScrollSnap() + 1;
    emblaApi.scrollTo(nextIndex);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setProgress(0);

    const autoInterval = setInterval(autoplay, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => {
      clearInterval(autoInterval);
      clearInterval(progressInterval);
    };
  }, [emblaApi, autoplay, selectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const isGif = (url: string): boolean =>
    url.toLowerCase().endsWith(".gif");

  const isVideo = (url: string) =>
  url.toLowerCase().endsWith(".mp4") ||
  url.toLowerCase().endsWith(".webm") ||
  url.toLowerCase().endsWith(".ogg");




  return (
    <div className={`relative overflow-hidden h-[95vh]`}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide) => {
  const video = isVideo(slide.bg);

  return (
    <div
      key={slide.id}
      className="min-w-full h-full relative flex items-center"
    >
      {/* Background media */}
      {video ? (
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={`/${slide.bg}`}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={`/${slide.bg}`}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Matte / overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: "url(/matte.png)",
          backgroundSize: "cover",
          opacity: 0.22,
          mixBlendMode: "overlay",
        }}
      />

      {/* Dark gradient for readability */}
      <div className="absolute inset-0 bg-black/55 z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-white max-w-3xl px-10 md:px-20">
        <SlideUp>
          <h2 className="text-[3rem] font-thin leading-tight mb-4">
            {slide.title}
          </h2>
        </SlideUp>

        <SlideUp>
          <p className="text-xl leading-relaxed mb-8 font-light">
            {slide.text}
          </p>
        </SlideUp>

        <SlideUp>
          <ChargingButton text="Know More" href={slide.href} />
        </SlideUp>
      </div>
    </div>
  );
})}

        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-white text-6xl font-bold opacity-80 hover:opacity-100"
      >
        &#8249;
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white text-6xl font-bold opacity-80 hover:opacity-100"
      >
        &#8250;
      </button>

      <div className="absolute bottom-6 w-full flex justify-start gap-1.5 z-20 px-10 pl-22">
        {SLIDES.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              emblaApi?.scrollTo(index);
              setProgress(0);
            }}
            className="cursor-pointer flex-1 max-w-[120px] h-3 bg-white/30 overflow-hidden"
          >
            <div
              className="h-full bg-[#0e355d] transition-all duration-100"
              style={{
                width:
                  selectedIndex === index
                    ? `${progress}%`
                    : selectedIndex > index
                    ? "100%"
                    : "0%",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
