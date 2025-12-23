"use client";

import React from "react";
import {
  Settings,
  Plug,
  Network,
  Wrench,
  Layers,
  ShieldCheck,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import ProcessCard from "@/components/ProcessCard";
import BenefitCard from "@/components/BenefitCard";


export default function DeploymentConfigurationPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("deployHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("deployHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("deployHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092918700-3c9a4f0e6c63?w=900"
                className="w-full h-[420px] object-cover"
                alt="Deployment and configuration"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("deployOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("deployOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("deployOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("deployOverviewDesc2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= CORE ACTIVITIES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("deployActivitiesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("deployActivitiesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProcessCard icon={<Plug />} title={t("deployAct1Title")} desc={t("deployAct1Desc")} />
          <ProcessCard icon={<Settings />} title={t("deployAct2Title")} desc={t("deployAct2Desc")} />
          <ProcessCard icon={<Network />} title={t("deployAct3Title")} desc={t("deployAct3Desc")} />
          <ProcessCard icon={<Layers />} title={t("deployAct4Title")} desc={t("deployAct4Desc")} />
          <ProcessCard icon={<Wrench />} title={t("deployAct5Title")} desc={t("deployAct5Desc")} />
          <ProcessCard icon={<ShieldCheck />} title={t("deployAct6Title")} desc={t("deployAct6Desc")} />
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("deployBenefitsTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("deployBenefitsSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard icon={<Plug />} title={t("deployBenefit1Title")} desc={t("deployBenefit1Desc")} />
          <BenefitCard icon={<ShieldCheck />} title={t("deployBenefit2Title")} desc={t("deployBenefit2Desc")} />
          <BenefitCard icon={<Layers />} title={t("deployBenefit3Title")} desc={t("deployBenefit3Desc")} />
        </div>
      </section>

    </main>
  );
}

