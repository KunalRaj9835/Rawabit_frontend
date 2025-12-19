"use client";

import React from "react";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  ShieldCheck,
  Activity,
  FileSearch,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function CyberSecurityPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("secHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("secHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("secHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("secOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("secOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("secOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("secOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900"
                className="w-full h-[420px] object-cover"
                alt="Cyber Security"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900"
                className="w-full h-[420px] object-cover"
                alt="Security Architecture"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("secExpertiseLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("secExpertiseTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("secExpertiseDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("secExpertiseDesc2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("secServicesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("secServicesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard icon={<Shield />} title={t("secServiceThreatTitle")} desc={t("secServiceThreatDesc")} />
          <ServiceCard icon={<Eye />} title={t("secServiceMonitorTitle")} desc={t("secServiceMonitorDesc")} />
          <ServiceCard icon={<Lock />} title={t("secServiceEndpointTitle")} desc={t("secServiceEndpointDesc")} />
          <ServiceCard icon={<AlertTriangle />} title={t("secServiceIncidentTitle")} desc={t("secServiceIncidentDesc")} />
          <ServiceCard icon={<FileSearch />} title={t("secServiceRiskTitle")} desc={t("secServiceRiskDesc")} />
          <ServiceCard icon={<ShieldCheck />} title={t("secServiceComplianceTitle")} desc={t("secServiceComplianceDesc")} />
        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("secWhyTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("secWhySubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <WhyCard icon={<Shield />} title={t("secWhyTeamTitle")} desc={t("secWhyTeamDesc")} />
          <WhyCard icon={<Activity />} title={t("secWhyProactiveTitle")} desc={t("secWhyProactiveDesc")} />
          <WhyCard icon={<ShieldCheck />} title={t("secWhyPartnersTitle")} desc={t("secWhyPartnersDesc")} />
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
