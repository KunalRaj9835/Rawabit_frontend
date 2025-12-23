"use client";

import React from "react";
import {
  Network,
  Layers,
  Link,
  Zap,
  Settings,
  Database,
  Workflow,
  Grid3x3,
  Box,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import UseCaseCard from "@/components/UseCaseCard";
import ProvideCard from "@/components/ProvideCard";


export default function UCIntegrationPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("ucIntegHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("ucIntegHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("ucIntegHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("ucIntegOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("ucIntegOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("ucIntegOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("ucIntegOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Unified communications integration"
            />
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucIntegUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucIntegUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Layers />}
            title={t("ucIntegUse1Title")}
            desc={t("ucIntegUse1Desc")}
          />
          <UseCaseCard
            icon={<Database />}
            title={t("ucIntegUse2Title")}
            desc={t("ucIntegUse2Desc")}
          />
          <UseCaseCard
            icon={<Grid3x3 />}
            title={t("ucIntegUse3Title")}
            desc={t("ucIntegUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucIntegProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucIntegProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Network />}
            title={t("ucIntegProvide1Title")}
            desc={t("ucIntegProvide1Desc")}
          />
          <ProvideCard
            icon={<Link />}
            title={t("ucIntegProvide2Title")}
            desc={t("ucIntegProvide2Desc")}
          />
          <ProvideCard
            icon={<Workflow />}
            title={t("ucIntegProvide3Title")}
            desc={t("ucIntegProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}
