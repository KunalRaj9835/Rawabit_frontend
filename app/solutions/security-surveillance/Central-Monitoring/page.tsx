"use client";

import React from "react";
import {
  Monitor,
  LayoutDashboard,
  Eye,
  Network,
  Settings,
  Activity,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function CentralMonitoringPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("secMonitorHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("secMonitorHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("secMonitorHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("secMonitorOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("secMonitorOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("secMonitorOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("secMonitorOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Security monitoring control room"
            />
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("secMonitorUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("secMonitorUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Monitor />}
            title={t("secMonitorUse1Title")}
            desc={t("secMonitorUse1Desc")}
          />
          <UseCaseCard
            icon={<LayoutDashboard />}
            title={t("secMonitorUse2Title")}
            desc={t("secMonitorUse2Desc")}
          />
          <UseCaseCard
            icon={<Eye />}
            title={t("secMonitorUse3Title")}
            desc={t("secMonitorUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("secMonitorProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("secMonitorProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Network />}
            title={t("secMonitorProvide1Title")}
            desc={t("secMonitorProvide1Desc")}
          />
          <ProvideCard
            icon={<Settings />}
            title={t("secMonitorProvide2Title")}
            desc={t("secMonitorProvide2Desc")}
          />
          <ProvideCard
            icon={<Activity />}
            title={t("secMonitorProvide3Title")}
            desc={t("secMonitorProvide3Desc")}
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
    <div className="p-8 bg-white border rounded-xl hover:shadow-xl">
      <div className="flex gap-3 text-red-600 mb-3">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function ProvideCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-gray-50 border rounded-xl hover:shadow-xl">
      <div className="flex gap-3 text-red-600 mb-3">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}