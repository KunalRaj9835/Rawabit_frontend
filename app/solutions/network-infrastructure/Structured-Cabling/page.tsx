"use client";

import React from "react";
import {
  Cable,
  Network,
  Server,
  Layers,
  CheckCircle,
  Wrench,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import UseCaseCard from "@/components/UseCaseCard";
import ProvideCard from "@/components/ProvideCard";


export default function StructuredCablingPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("netCableHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("netCableHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("netCableHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("netCableOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("netCableOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("netCableOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("netCableOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Structured cabling infrastructure"
            />
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("netCableUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("netCableUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Server />}
            title={t("netCableUse1Title")}
            desc={t("netCableUse1Desc")}
          />
          <UseCaseCard
            icon={<Network />}
            title={t("netCableUse2Title")}
            desc={t("netCableUse2Desc")}
          />
          <UseCaseCard
            icon={<Cable />}
            title={t("netCableUse3Title")}
            desc={t("netCableUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("netCableProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("netCableProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Layers />}
            title={t("netCableProvide1Title")}
            desc={t("netCableProvide1Desc")}
          />
          <ProvideCard
            icon={<Wrench />}
            title={t("netCableProvide2Title")}
            desc={t("netCableProvide2Desc")}
          />
          <ProvideCard
            icon={<CheckCircle />}
            title={t("netCableProvide3Title")}
            desc={t("netCableProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

