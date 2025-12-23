"use client";

import React from "react";
import {
  Sliders,
  Monitor,
  Settings,
  Zap,
  Link,
  Shield,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import UseCaseCard from "@/components/UseCaseCard";
import ProvideCard from "@/components/ProvideCard";


export default function DisplayControlIntegrationPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* HERO */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("ddCtrlHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("ddCtrlHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("ddCtrlHeroDesc")}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
  {/* HEADER */}
  <div className="max-w-7xl mx-auto text-center mb-16">
    <span className="text-sm font-semibold text-red-600">
      {t("ddCtrlOverviewLabel")}
    </span>
    <h2 className="text-3xl lg:text-4xl font-bold mt-3">
      {t("ddCtrlOverviewTitle")}
    </h2>
  </div>

  {/* CONTENT */}
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    {/* LEFT TEXT */}
    <div>
      <p className="text-gray-600">
        {t("ddCtrlOverviewDesc1")}
      </p>
      <p className="mt-4 text-gray-600">
        {t("ddCtrlOverviewDesc2")}
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <SlideIn direction={isRTL ? "left" : "right"}>
      <img
        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900"
        alt="Display control integration"
        className="rounded-xl shadow-xl h-[420px] w-full object-cover"
      />
    </SlideIn>
  </div>
</section>


      {/* USE CASES */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ddCtrlUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ddCtrlUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard icon={<Sliders />} title={t("ddCtrlUse1Title")} desc={t("ddCtrlUse1Desc")} />
          <UseCaseCard icon={<Link />} title={t("ddCtrlUse2Title")} desc={t("ddCtrlUse2Desc")} />
          <UseCaseCard icon={<Shield />} title={t("ddCtrlUse3Title")} desc={t("ddCtrlUse3Desc")} />
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ddCtrlProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ddCtrlProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard icon={<Monitor />} title={t("ddCtrlProvide1Title")} desc={t("ddCtrlProvide1Desc")} />
          <ProvideCard icon={<Settings />} title={t("ddCtrlProvide2Title")} desc={t("ddCtrlProvide2Desc")} />
          <ProvideCard icon={<Zap />} title={t("ddCtrlProvide3Title")} desc={t("ddCtrlProvide3Desc")} />
        </div>
      </section>

    </main>
  );
}
