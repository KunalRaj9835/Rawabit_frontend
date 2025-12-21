"use client";

import React from "react";
import {
  Activity,
  BarChart3,
  TrendingUp,
  AlertCircle,
  Shield,
  Clock,
  LineChart,
  CheckCircle,
  Gauge,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function MonitoringQualityPage() {
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
            {t("ucMonitorHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("ucMonitorHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("ucMonitorHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("ucMonitorOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("ucMonitorOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("ucMonitorOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("ucMonitorOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Communication monitoring dashboard"
            />
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucMonitorUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucMonitorUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Activity />}
            title={t("ucMonitorUse1Title")}
            desc={t("ucMonitorUse1Desc")}
          />
          <UseCaseCard
            icon={<TrendingUp />}
            title={t("ucMonitorUse2Title")}
            desc={t("ucMonitorUse2Desc")}
          />
          <UseCaseCard
            icon={<AlertCircle />}
            title={t("ucMonitorUse3Title")}
            desc={t("ucMonitorUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucMonitorProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucMonitorProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<BarChart3 />}
            title={t("ucMonitorProvide1Title")}
            desc={t("ucMonitorProvide1Desc")}
          />
          <ProvideCard
            icon={<Shield />}
            title={t("ucMonitorProvide2Title")}
            desc={t("ucMonitorProvide2Desc")}
          />
          <ProvideCard
            icon={<LineChart />}
            title={t("ucMonitorProvide3Title")}
            desc={t("ucMonitorProvide3Desc")}
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