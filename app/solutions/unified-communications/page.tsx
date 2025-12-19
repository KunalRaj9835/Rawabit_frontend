"use client";

import React from "react";
import {
  Video,
  MessageSquare,
  Users,
  Smartphone,
  Headphones,
  Zap,
  Globe,
  Shield,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function UnifiedCommunicationsPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("ucHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("ucHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("ucHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("ucOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("ucOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("ucOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("ucOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900"
                className="w-full h-[420px] object-cover"
                alt="Unified Communications"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= ENTERPRISE EXPERIENCE ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900"
                className="w-full h-[420px] object-cover"
                alt="Team Collaboration"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("ucEnterpriseLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("ucEnterpriseTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("ucEnterpriseDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("ucEnterpriseDesc2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucServicesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucServicesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard icon={<Video />} title={t("ucServiceVideoTitle")} desc={t("ucServiceVideoDesc")} />
          <ServiceCard icon={<MessageSquare />} title={t("ucServiceMessageTitle")} desc={t("ucServiceMessageDesc")} />
          <ServiceCard icon={<Smartphone />} title={t("ucServiceMobileTitle")} desc={t("ucServiceMobileDesc")} />
          <ServiceCard icon={<Headphones />} title={t("ucServiceVoiceTitle")} desc={t("ucServiceVoiceDesc")} />
          <ServiceCard icon={<Globe />} title={t("ucServiceGlobalTitle")} desc={t("ucServiceGlobalDesc")} />
          <ServiceCard icon={<Shield />} title={t("ucServiceSecurityTitle")} desc={t("ucServiceSecurityDesc")} />
        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucWhyTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucWhySubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <WhyCard icon={<Zap />} title={t("ucWhyAgilityTitle")} desc={t("ucWhyAgilityDesc")} />
          <WhyCard icon={<Users />} title={t("ucWhyEngagementTitle")} desc={t("ucWhyEngagementDesc")} />
          <WhyCard icon={<Shield />} title={t("ucWhyExpertiseTitle")} desc={t("ucWhyExpertiseDesc")} />
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
