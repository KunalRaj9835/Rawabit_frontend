"use client";

import React from "react";
import {
  Lightbulb,
  Settings,
  Monitor,
  Wifi,
  Zap,
  Layers,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function SmartIntegrationPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("avSmartHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("avSmartHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("avSmartHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
  {/* HEADER */}
  <div className="max-w-7xl mx-auto text-center mb-16">
    <span className="inline-block mb-4 text-sm font-semibold text-red-600">
      {t("avSmartOverviewLabel")}
    </span>

    <h2 className="text-3xl lg:text-4xl font-bold">
      {t("avSmartOverviewTitle")}
    </h2>
  </div>

  {/* CONTENT */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    {/* LEFT TEXT */}
    <div>
      <p className="text-gray-600 leading-relaxed">
        {t("avSmartOverviewDesc1")}
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        {t("avSmartOverviewDesc2")}
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <SlideIn direction={isRTL ? "left" : "right"}>
      <div className="rounded-xl overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=900"
          alt="Smart AV integration"
          className="w-full h-[420px] object-cover"
        />
      </div>
    </SlideIn>
  </div>
</section>


      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("avSmartUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("avSmartUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Monitor />}
            title={t("avSmartUseCase1Title")}
            desc={t("avSmartUseCase1Desc")}
          />
          <UseCaseCard
            icon={<Wifi />}
            title={t("avSmartUseCase2Title")}
            desc={t("avSmartUseCase2Desc")}
          />
          <UseCaseCard
            icon={<Layers />}
            title={t("avSmartUseCase3Title")}
            desc={t("avSmartUseCase3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("avSmartProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("avSmartProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Settings />}
            title={t("avSmartProvide1Title")}
            desc={t("avSmartProvide1Desc")}
          />
          <ProvideCard
            icon={<Zap />}
            title={t("avSmartProvide2Title")}
            desc={t("avSmartProvide2Desc")}
          />
          <ProvideCard
            icon={<Lightbulb />}
            title={t("avSmartProvide3Title")}
            desc={t("avSmartProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function UseCaseCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-red-600">
      <div className="flex items-center gap-3 mb-3 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function ProvideCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-red-600">
      <div className="flex items-center gap-3 mb-4 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
