"use client";

import React from "react";
import {
  TrendingUp,
  Gauge,
  Zap,
  BarChart3,
  Settings,
  Target,
  Cpu,
  Database,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function OptimizePage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("optHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("optHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("optHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("optOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("optOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("optOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("optOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"
                className="w-full h-[420px] object-cover"
                alt="Performance Optimization"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= ANALYTICS ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900"
                className="w-full h-[420px] object-cover"
                alt="Analytics Dashboard"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("optAnalyticsLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("optAnalyticsTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("optAnalyticsDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("optAnalyticsDesc2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= OPTIMIZATION AREAS ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("optAreasTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("optAreasSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard icon={<Gauge />} title={t("optAreaPerfTitle")} desc={t("optAreaPerfDesc")} />
          <ServiceCard icon={<Database />} title={t("optAreaCapacityTitle")} desc={t("optAreaCapacityDesc")} />
          <ServiceCard icon={<TrendingUp />} title={t("optAreaCostTitle")} desc={t("optAreaCostDesc")} />
          <ServiceCard icon={<Cpu />} title={t("optAreaResourceTitle")} desc={t("optAreaResourceDesc")} />
          <ServiceCard icon={<Settings />} title={t("optAreaConfigTitle")} desc={t("optAreaConfigDesc")} />
          <ServiceCard icon={<BarChart3 />} title={t("optAreaTrendTitle")} desc={t("optAreaTrendDesc")} />
        </div>
      </section>

      {/* ================= OUTCOMES ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("optOutcomeTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("optOutcomeSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <WhyCard icon={<Zap />} title={t("optOutcomePerfTitle")} desc={t("optOutcomePerfDesc")} />
          <WhyCard icon={<Target />} title={t("optOutcomePlanTitle")} desc={t("optOutcomePlanDesc")} />
          <WhyCard icon={<TrendingUp />} title={t("optOutcomeImproveTitle")} desc={t("optOutcomeImproveDesc")} />
        </div>
      </section>

    </main>
  );
}

/* ================= CARDS ================= */

function ServiceCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-3 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function WhyCard({ icon, title, desc }: any) {
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
