"use client";

import React from "react";
import {
  Wrench,
  Shield,
  FileCheck,
  Activity,
  Settings,
  CheckCircle,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import UseCaseCard from "@/components/UseCaseCard";
import ProvideCard from "@/components/ProvideCard";


export default function MaintenanceCompliancePage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("secMaintHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("secMaintHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("secMaintHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("secMaintOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("secMaintOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("secMaintOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("secMaintOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Security system maintenance"
            />
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("secMaintUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("secMaintUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Activity />}
            title={t("secMaintUse1Title")}
            desc={t("secMaintUse1Desc")}
          />
          <UseCaseCard
            icon={<FileCheck />}
            title={t("secMaintUse2Title")}
            desc={t("secMaintUse2Desc")}
          />
          <UseCaseCard
            icon={<Shield />}
            title={t("secMaintUse3Title")}
            desc={t("secMaintUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("secMaintProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("secMaintProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Wrench />}
            title={t("secMaintProvide1Title")}
            desc={t("secMaintProvide1Desc")}
          />
          <ProvideCard
            icon={<Settings />}
            title={t("secMaintProvide2Title")}
            desc={t("secMaintProvide2Desc")}
          />
          <ProvideCard
            icon={<CheckCircle />}
            title={t("secMaintProvide3Title")}
            desc={t("secMaintProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

