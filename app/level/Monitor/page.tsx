"use client";

import React from "react";
import {
  Activity,
  Eye,
  Server,
  Network,
  BarChart2,
  Clock,
  Radio,
  LineChart,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function MonitorPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("monitorHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("monitorHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("monitorHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("monitorOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("monitorOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("monitorOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("monitorOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900"
                className="w-full h-[420px] object-cover"
                alt="Infrastructure Monitoring"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= HEALTH CHECKS ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"
                className="w-full h-[420px] object-cover"
                alt="Health Monitoring"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("monitorHealthLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("monitorHealthTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("monitorHealthDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("monitorHealthDesc2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("monitorCapsTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("monitorCapsSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard icon={<Server />} title={t("monitorCapServerTitle")} desc={t("monitorCapServerDesc")} />
          <ServiceCard icon={<Network />} title={t("monitorCapNetworkTitle")} desc={t("monitorCapNetworkDesc")} />
          <ServiceCard icon={<Activity />} title={t("monitorCapAppTitle")} desc={t("monitorCapAppDesc")} />
          <ServiceCard icon={<BarChart2 />} title={t("monitorCapMetricsTitle")} desc={t("monitorCapMetricsDesc")} />
          <ServiceCard icon={<Radio />} title={t("monitorCapAvailabilityTitle")} desc={t("monitorCapAvailabilityDesc")} />
          <ServiceCard icon={<LineChart />} title={t("monitorCapTrendsTitle")} desc={t("monitorCapTrendsDesc")} />
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("monitorBenefitsTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("monitorBenefitsSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <WhyCard icon={<Eye />} title={t("monitorBenefitVisibilityTitle")} desc={t("monitorBenefitVisibilityDesc")} />
          <WhyCard icon={<Clock />} title={t("monitorBenefitProactiveTitle")} desc={t("monitorBenefitProactiveDesc")} />
          <WhyCard icon={<Activity />} title={t("monitorBenefitPerformanceTitle")} desc={t("monitorBenefitPerformanceDesc")} />
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
