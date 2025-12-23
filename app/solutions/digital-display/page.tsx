"use client";

import React from "react";
import {
  Monitor,
  Tv,
  Smartphone,
  Cloud,
  Eye,
  Radio,
  TrendingUp,
  Zap,
  Cog,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import StackCard from "@/components/StackCard";
import BenefitCard from "@/components/BenefitCard";
import OffWhiteCard from "@/components/OffWhiteCard";

export default function DigitalDisplayPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("ddHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("ddHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("ddHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("ddOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("ddOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("ddOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("ddOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=900"
                className="w-full h-[420px] object-cover"
                alt="Digital Displays"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= INTELLIGENT CONTENT ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=900"
                className="w-full h-[420px] object-cover"
                alt="Content Management"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("ddSmartLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("ddSmartTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("ddSmartDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("ddSmartDesc2")}
            </p>
          </div>

        </div>
      </section>
      {/* ================= WHAT WE DELIVER ================= */}
<section className="w-full bg-[#eef3f7] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
      {t("ddDeliveryLabel")}
    </p>

    <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
      {t("ddDeliveryTitle")}
    </h2>

    <p
      className="text-gray-600 text-[17px] leading-relaxed text-justify"
      style={{ textJustify: "inter-word" }}
    >
      {t("ddDeliveryDesc")}
    </p>

  </div>
</section>

{/* ================= TECHNOLOGY PARTNERS ================= */}
<section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
      {t("ddPartnersLabel")}
    </p>

    <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
      {t("ddPartnersTitle")}
    </h2>

    <p className="text-gray-600 text-[17px] leading-relaxed mb-16">
      {t("ddPartnersDesc")}
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-16 gap-y-12 items-center">
      {[
        "/role/24r.png", // Nest
        "/role/25r.png", // Clevertouch
        "/role/26r.png", // Commbox
        "/role/37r.png", // Maxhub
        "/role/38r.png", // Sony
        "/role/39r.png", // Philips
        "/role/40r.png", // Samsung
        "/role/41r.png", // LG
        "/role/42r.png", // Absen
        "/role/43r.png", // QSTECH
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

{/* ================= CORE DIGITAL DISPLAY CAPABILITIES ================= */}
<section className="w-full bg-gray-50 py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="mb-12 text-center">
      <p className="uppercase text-xs tracking-[0.25em] text-gray-400 mb-3">
        {t("ddCapabilitiesLabel")}
      </p>
      <h2 className="text-3xl md:text-4xl font-light text-[#0e355d]">
        {t("ddCapabilitiesTitle")}
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <StackCard
        image="/digital-display/video-walls.jpg"
        title={t("ddCardVideoWalls")}
        href="/solutions/digital-display/Video-Walls"
      />

      <StackCard
        image="/digital-display/interactive.jpg"
        title={t("ddCardInteractive")}
        href="/solutions/digital-display/Interactive-Touch"
      />

      <StackCard
        image="/digital-display/signage.jpg"
        title={t("ddCardSignage")}
        href="/solutions/digital-display/Digital-Signage"
      />

      <StackCard
        image="/digital-display/cms.jpg"
        title={t("ddCardCms")}
        href="/solutions/digital-display/Content-Management"
      />

      <StackCard
        image="/digital-display/led.jpg"
        title={t("ddCardLed")}
        href="/solutions/digital-display/Control-&-Integration"
      />

      <StackCard
        image="/digital-display/integration.jpg"
        title={t("ddCardIntegration")}
        href="/solutions/digital-display/Installation-&-Calibration"
      />

    </div>
  </div>
</section>


      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ddServicesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ddServicesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <OffWhiteCard  icon={<Tv />} title={t("ddServiceVideoTitle")} desc={t("ddServiceVideoDesc")} />
          <OffWhiteCard  icon={<Monitor />} title={t("ddServiceInteractiveTitle")} desc={t("ddServiceInteractiveDesc")} />
          <OffWhiteCard  icon={<Radio />} title={t("ddServiceSignageTitle")} desc={t("ddServiceSignageDesc")} />
          <OffWhiteCard  icon={<Cloud />} title={t("ddServiceCmsTitle")} desc={t("ddServiceCmsDesc")} />
          <OffWhiteCard  icon={<Eye />} title={t("ddServiceVisualTitle")} desc={t("ddServiceVisualDesc")} />
          <OffWhiteCard  icon={<Smartphone />} title={t("ddServiceMobileTitle")} desc={t("ddServiceMobileDesc")} />
        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ddWhyTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ddWhySubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard icon={<TrendingUp />} title={t("ddWhyEngageTitle")} desc={t("ddWhyEngageDesc")} />
          <BenefitCard icon={<Zap />} title={t("ddWhyIntegrateTitle")} desc={t("ddWhyIntegrateDesc")} />
          <BenefitCard icon={<Cog />} title={t("ddWhySupportTitle")} desc={t("ddWhySupportDesc")} />
        </div>
      </section>

    </main>
  );
}

