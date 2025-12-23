"use client";

import React from "react";
import {
  Presentation,
  Monitor,
  Mic,
  Camera,
  Volume2,
  Lightbulb,
  Cog,
  Zap,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import StackCard from "@/components/StackCard";
import BenefitCard from "@/components/BenefitCard";
import OffWhiteCard from "@/components/OffWhiteCard";

export default function AVMeetingRoomPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="inset-x-0  text-gray-900" dir={isRTL ? "rtl" : "ltr"}>
      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("avHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("avHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("avHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("avOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("avOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("avOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("avOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900"
                className="w-full h-[420px] object-cover"
                alt="Meeting Room"
              />
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ================= INTELLIGENT CONTROL ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900"
                className="w-full h-[420px] object-cover"
                alt="Control Systems"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("avControlLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("avControlTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("avControlDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("avControlDesc2")}
            </p>
          </div>
        </div>
      </section>
      {/* ================= WHAT WE DELIVER ================= */}
<section className="w-full bg-[#eef3f7] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
      {t("avDeliveryLabel")}
    </p>

    <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
      {t("avDeliveryTitle")}
    </h2>

    <p
      className="text-gray-600 text-[17px] leading-relaxed text-justify"
      style={{ textJustify: "inter-word" }}
    >
      {t("avDeliveryDesc")}
    </p>

  </div>
</section>

{/* ================= TECHNOLOGY PARTNERS ================= */}
<section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
      {t("avPartnersLabel")}
    </p>

    <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
      {t("avPartnersTitle")}
    </h2>

    <p className="text-gray-600 text-[17px] leading-relaxed mb-16">
      {t("avPartnersDesc")}
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-16 gap-y-12 items-center">
      {[
        "/role/20r.png", // Poly
        "/role/21r.png", // Logitech
        "/role/22r.png", // Yealink
        "/role/23r.png", // Jabra
        "/role/27r.png", // Biamp
        "/role/28r.png", // Shure
        "/role/29r.png", // Bose
        "/role/30r.png", // Nureva
        "/role/31r.png", // Crestron
        "/role/33r.png", // ATEN
        "/role/34r.png", // Q-SYS
        "/role/52r.png", // Ateis
      ].map((logo, i) => (
        <div
          key={i}
          className="flex items-center justify-center w-[160px] h-[64px]"
        >
          <img
            src={logo}
            alt="Technology Partner"
            className="w-full h-full object-contain grayscale opacity-80"
          />
        </div>
      ))}
    </div>

  </div>
</section>

{/* ================= CORE AV CAPABILITIES ================= */}
<section className="w-full bg-gray-50 py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="mb-12 text-center">
      <p className="uppercase text-xs tracking-[0.25em] text-gray-400 mb-3">
        {t("avCapabilitiesLabel")}
      </p>
      <h2 className="text-3xl md:text-4xl font-light text-[#0e355d]">
        {t("avCapabilitiesTitle")}
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <StackCard
        image="/av/video.jpg"
        title={t("avCardVideo")}
        href="/solutions/av-meeting/video-systems"
      />

      <StackCard
        image="/av/audio.jpg"
        title={t("avCardAudio")}
        href="/solutions/av-meeting/audio-solutions"
      />

      <StackCard
        image="/av/display.jpg"
        title={t("avCardDisplay")}
        href="/solutions/av-meeting/display-technology"
      />

      <StackCard
        image="/av/control.jpg"
        title={t("avCardControl")}
        href="/solutions/av-meeting/control-systems"
      />

      <StackCard
        image="/av/integration.jpg"
        title={t("avCardIntegration")}
        href="/solutions/av-meeting/smart-integration"
      />

      <StackCard
        image="/av/acoustic.jpg"
        title={t("avCardAcoustic")}
        href="/solutions/av-meeting/acoustic-design"
      />

    </div>
  </div>
</section>


      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("avServicesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("avServicesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <OffWhiteCard 
            icon={<Camera />}
            title={t("avServiceVideoTitle")}
            desc={t("avServiceVideoDesc")}
          />
          <OffWhiteCard 
            icon={<Mic />}
            title={t("avServiceAudioTitle")}
            desc={t("avServiceAudioDesc")}
          />
          <OffWhiteCard 
            icon={<Monitor />}
            title={t("avServiceDisplayTitle")}
            desc={t("avServiceDisplayDesc")}
          />
          <OffWhiteCard 
            icon={<Cog />}
            title={t("avServiceControlTitle")}
            desc={t("avServiceControlDesc")}
          />
          <OffWhiteCard 
            icon={<Lightbulb />}
            title={t("avServiceIntegrationTitle")}
            desc={t("avServiceIntegrationDesc")}
          />
          <OffWhiteCard 
            icon={<Volume2 />}
            title={t("avServiceAcousticTitle")}
            desc={t("avServiceAcousticDesc")}
          />
        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("avWhyTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("avWhySubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard
            icon={<Presentation />}
            title={t("avWhyDesignTitle")}
            desc={t("avWhyDesignDesc")}
          />
          <BenefitCard
            icon={<Zap />}
            title={t("avWhyIntegrationTitle")}
            desc={t("avWhyIntegrationDesc")}
          />
          <BenefitCard
            icon={<Cog />}
            title={t("avWhySupportTitle")}
            desc={t("avWhySupportDesc")}
          />
        </div>
      </section>
    </main>
  );
}

