"use client";

import React from "react";
import {
  ClipboardCheck,
  Shield,
  AlertTriangle,
  Settings,
  Zap,
  Activity,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function ComplianceRiskPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* HERO */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("complianceHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("complianceHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("complianceHeroDesc")}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
     <section className="bg-white py-24 px-4">
  {/* HEADER */}
  <div className="max-w-7xl mx-auto text-center mb-16">
    <span className="text-sm font-semibold text-red-600">
      {t("complianceOverviewLabel")}
    </span>
    <h2 className="text-3xl lg:text-4xl font-bold mt-3">
      {t("complianceOverviewTitle")}
    </h2>
  </div>

  {/* CONTENT */}
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    {/* LEFT TEXT */}
    <div>
      <p className="text-gray-600">
        {t("complianceOverviewDesc1")}
      </p>
      <p className="mt-4 text-gray-600">
        {t("complianceOverviewDesc2")}
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <SlideIn direction={isRTL ? "left" : "right"}>
      <img
        src="https://images.unsplash.com/photo-1581092334651-ddf26d9b22f7?w=900"
        alt="Compliance and risk"
        className="rounded-xl shadow-xl h-[420px] w-full object-cover"
      />
    </SlideIn>
  </div>
</section>


      {/* USE CASES */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("complianceUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("complianceUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard icon={<ClipboardCheck />} title={t("complianceUse1Title")} desc={t("complianceUse1Desc")} />
          <UseCaseCard icon={<AlertTriangle />} title={t("complianceUse2Title")} desc={t("complianceUse2Desc")} />
          <UseCaseCard icon={<Activity />} title={t("complianceUse3Title")} desc={t("complianceUse3Desc")} />
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("complianceProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("complianceProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard icon={<Shield />} title={t("complianceProvide1Title")} desc={t("complianceProvide1Desc")} />
          <ProvideCard icon={<Settings />} title={t("complianceProvide2Title")} desc={t("complianceProvide2Desc")} />
          <ProvideCard icon={<Zap />} title={t("complianceProvide3Title")} desc={t("complianceProvide3Desc")} />
        </div>
      </section>

    </main>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function UseCaseCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-white border rounded-xl hover:shadow-xl">
      <div className="flex gap-3 text-red-600 mb-3">
        {icon}<h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function ProvideCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-gray-50 border rounded-xl hover:shadow-xl">
      <div className="flex gap-3 text-red-600 mb-3">
        {icon}<h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
