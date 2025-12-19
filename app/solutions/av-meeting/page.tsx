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
          <ServiceCard
            icon={<Camera />}
            title={t("avServiceVideoTitle")}
            desc={t("avServiceVideoDesc")}
          />
          <ServiceCard
            icon={<Mic />}
            title={t("avServiceAudioTitle")}
            desc={t("avServiceAudioDesc")}
          />
          <ServiceCard
            icon={<Monitor />}
            title={t("avServiceDisplayTitle")}
            desc={t("avServiceDisplayDesc")}
          />
          <ServiceCard
            icon={<Cog />}
            title={t("avServiceControlTitle")}
            desc={t("avServiceControlDesc")}
          />
          <ServiceCard
            icon={<Lightbulb />}
            title={t("avServiceIntegrationTitle")}
            desc={t("avServiceIntegrationDesc")}
          />
          <ServiceCard
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
          <WhyCard
            icon={<Presentation />}
            title={t("avWhyDesignTitle")}
            desc={t("avWhyDesignDesc")}
          />
          <WhyCard
            icon={<Zap />}
            title={t("avWhyIntegrationTitle")}
            desc={t("avWhyIntegrationDesc")}
          />
          <WhyCard
            icon={<Cog />}
            title={t("avWhySupportTitle")}
            desc={t("avWhySupportDesc")}
          />
        </div>
      </section>
    </main>
  );
}

/* ================= SMALL COMPONENTS ================= */

function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
      <div className="flex items-center gap-3 mb-3 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function WhyCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-4 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
