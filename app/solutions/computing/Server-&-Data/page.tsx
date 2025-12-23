"use client";

import React from "react";
import {
  Server,
  Database,
  Layers,
  Settings,
  Zap,
  Shield,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import UseCaseCard from "@/components/UseCaseCard";
import ProvideCard from "@/components/ProvideCard";


export default function ServerDataCenterPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091012184-5c8e8fbbf3c1?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("dcHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("dcHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("dcHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
     <section className="bg-white pt-24 px-4">
  {/* HEADER */}
  <div className="max-w-7xl mx-auto text-center mb-16">
    <span className="text-sm font-semibold text-red-600">
      {t("netMonOverviewLabel")}
    </span>
    <h2 className="text-3xl lg:text-4xl font-bold mt-3">
      {t("netMonOverviewTitle")}
    </h2>
  </div>

  {/* CONTENT */}
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
    {/* LEFT TEXT */}
    <div>
      <p className="text-gray-600">
        {t("netMonOverviewDesc1")}
      </p>
      <p className="mt-4 text-gray-600">
        {t("netMonOverviewDesc2")}
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <SlideIn direction={isRTL ? "left" : "right"}>
      <img
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900"
        alt="Network monitoring dashboard"
        className="rounded-xl shadow-xl h-[420px] w-full object-cover"
      />
    </SlideIn>
  </div>
</section>


      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("dcUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("dcUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Server />}
            title={t("dcUse1Title")}
            desc={t("dcUse1Desc")}
          />
          <UseCaseCard
            icon={<Layers />}
            title={t("dcUse2Title")}
            desc={t("dcUse2Desc")}
          />
          <UseCaseCard
            icon={<Database />}
            title={t("dcUse3Title")}
            desc={t("dcUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("dcProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("dcProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Shield />}
            title={t("dcProvide1Title")}
            desc={t("dcProvide1Desc")}
          />
          <ProvideCard
            icon={<Settings />}
            title={t("dcProvide2Title")}
            desc={t("dcProvide2Desc")}
          />
          <ProvideCard
            icon={<Zap />}
            title={t("dcProvide3Title")}
            desc={t("dcProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

