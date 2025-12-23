"use client";

import React from "react";
import {
  Cog,
  Monitor,
  Users,
  Settings,
  Zap,
  Sliders,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import UseCaseCard from "@/components/UseCaseCard";
import ProvideCard from "@/components/ProvideCard";


export default function ControlSystemsPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* HERO */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092919531-6c69b1b5f13b?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("avControlHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold">
            {t("avControlHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("avControlHeroDesc")}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
  {/* HEADER */}
  <div className="max-w-7xl mx-auto text-center mb-16">
    <span className="text-sm font-semibold text-red-600">
      {t("avControlOverviewLabel")}
    </span>
    <h2 className="text-3xl lg:text-4xl font-bold mt-3">
      {t("avControlOverviewTitle")}
    </h2>
  </div>

  {/* CONTENT */}
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    {/* LEFT TEXT */}
    <div>
      <p className="text-gray-600">
        {t("avControlOverviewDesc1")}
      </p>
      <p className="mt-4 text-gray-600">
        {t("avControlOverviewDesc2")}
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <SlideIn direction={isRTL ? "left" : "right"}>
      <img
        src="https://images.unsplash.com/photo-1603570419984-39f6cc5c5b4d?w=900"
        alt="Control system"
        className="rounded-xl shadow-xl h-[420px] w-full object-cover"
      />
    </SlideIn>
  </div>
</section>


    
<section className="bg-gray-50 py-24 px-4">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-3xl lg:text-4xl font-bold">
      {t("avControlUseCasesTitle")}
    </h2>
    <p className="mt-4 max-w-3xl mx-auto text-gray-600">
      {t("avControlUseCasesSubtitle")}
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
    <UseCaseCard icon={<Monitor />} title={t("avControlUse1Title")} desc={t("avControlUse1Desc")} />
    <UseCaseCard icon={<Users />} title={t("avControlUse2Title")} desc={t("avControlUse2Desc")} />
    <UseCaseCard icon={<Sliders />} title={t("avControlUse3Title")} desc={t("avControlUse3Desc")} />
  </div>
</section>


      {/* WHAT WE PROVIDE */}
      {/* WHAT WE PROVIDE */}
<section className="bg-white py-24 px-4">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-3xl lg:text-4xl font-bold">
      {t("avControlProvideTitle")}
    </h2>
    <p className="mt-4 max-w-3xl mx-auto text-gray-600">
      {t("avControlProvideSubtitle")}
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
    <ProvideCard icon={<Settings />} title={t("avControlProvide1Title")} desc={t("avControlProvide1Desc")} />
    <ProvideCard icon={<Zap />} title={t("avControlProvide2Title")} desc={t("avControlProvide2Desc")} />
    <ProvideCard icon={<Cog />} title={t("avControlProvide3Title")} desc={t("avControlProvide3Desc")} />
  </div>
</section>

    </main>
  );
}

