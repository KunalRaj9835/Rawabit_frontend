"use client";

import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import SlideUp from "@/components/SlideUp";
import ChargingButton from "./ChargingButton";
import { useLang } from "@/context/LanguageContext";
import { TranslationKey } from "@/translations";

interface SlideItem {
  id: number;
  titleKey: TranslationKey;
  textKey: TranslationKey;
  bg: string;
  href: string;
  gifPosition?: string;
}

export default function Carousel() {
  const { t, lang } = useLang();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const SLIDES: SlideItem[] = [
    {
      id: 1,
      titleKey: "carouselManagedServicesTitle",
      textKey: "carouselManagedServicesText",
      bg: "carousel/1.mp4",
      href: "/services/managed-services",
      gifPosition: "right",
    },
    {
      id: 2,
      titleKey: "carouselInstallationTitle",
      textKey: "carouselInstallationText",
      bg: "carousel/2.webp",
      href: "/services/installation",
    },
    {
      id: 3,
      titleKey: "carouselDesignTitle",
      textKey: "carouselDesignText",
      bg: "carousel/3.jpg",
      href: "/services/design-consultation",
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

  const isVideo = (url: string) =>
    url.toLowerCase().endsWith(".mp4") ||
    url.toLowerCase().endsWith(".webm") ||
    url.toLowerCase().endsWith(".ogg");

  const isRTL = lang === "sa";

  return (
    <div className={`relative overflow-hidden h-[95vh]`}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
       <div className="flex h-full" style={{ direction: "ltr" }}>

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
                    alt={t(slide.titleKey)}
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                )}

                {/* Dark gradient for readability */}
                <div className="absolute inset-0 bg-black/55 z-[2]" />

                {/* Content */}
                <div className="relative z-10 text-white max-w-3xl px-10 md:px-20">
                  <SlideUp>
                    <h2 className="text-[3rem] font-thin leading-tight mb-4">
                      {t(slide.titleKey) || slide.titleKey}
                    </h2>
                  </SlideUp>

                  <SlideUp>
                    <p className="text-xl leading-relaxed mb-8 font-light">
                      {t(slide.textKey) || slide.textKey}
                    </p>
                  </SlideUp>

                  <SlideUp>
                    <ChargingButton text={t("knowMore") || "Know More"} href={slide.href} />
                  </SlideUp>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Previous button - switches sides in RTL */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className={`absolute ${isRTL ? 'right-5' : 'left-5'} top-1/2 -translate-y-1/2 z-20 text-white text-6xl font-bold opacity-80 hover:opacity-100`}
      >
        &#8249;
      </button>

      {/* Next button - switches sides in RTL */}
      <button
        onClick={() => emblaApi?.scrollNext()}
        className={`absolute ${isRTL ? 'left-5' : 'right-5'} top-1/2 -translate-y-1/2 z-20 text-white text-6xl font-bold opacity-80 hover:opacity-100`}
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