"use client";

import React from "react";
import {
  Server,
  Package,
  CheckCircle,
  Truck,
  ClipboardCheck,
  Wrench,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import ProcessCard from "@/components/ProcessCard";
import BenefitCard from "@/components/BenefitCard";


export default function PreInstallationPreparationPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("prepHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("prepHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("prepHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("prepOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("prepOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("prepOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("prepOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092334494-1e7c1d9f31a0?w=900"
                className="w-full h-[420px] object-cover"
                alt="Pre-installation preparation"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= CORE ACTIVITIES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("prepActivitiesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("prepActivitiesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProcessCard icon={<Server />} title={t("prepAct1Title")} desc={t("prepAct1Desc")} />
          <ProcessCard icon={<Package />} title={t("prepAct2Title")} desc={t("prepAct2Desc")} />
          <ProcessCard icon={<ClipboardCheck />} title={t("prepAct3Title")} desc={t("prepAct3Desc")} />
          <ProcessCard icon={<Wrench />} title={t("prepAct4Title")} desc={t("prepAct4Desc")} />
          <ProcessCard icon={<Truck />} title={t("prepAct5Title")} desc={t("prepAct5Desc")} />
          <ProcessCard icon={<CheckCircle />} title={t("prepAct6Title")} desc={t("prepAct6Desc")} />
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("prepBenefitsTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("prepBenefitsSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard icon={<CheckCircle />} title={t("prepBenefit1Title")} desc={t("prepBenefit1Desc")} />
          <BenefitCard icon={<Truck />} title={t("prepBenefit2Title")} desc={t("prepBenefit2Desc")} />
          <BenefitCard icon={<Server />} title={t("prepBenefit3Title")} desc={t("prepBenefit3Desc")} />
        </div>
      </section>

    </main>
  );
}

