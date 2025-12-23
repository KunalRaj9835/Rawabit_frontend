"use client";

import React from "react";
import {
  Search,
  Target,
  Users,
  ClipboardList,
  Activity,
  Lightbulb,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import ProcessCard from "@/components/ProcessCard";
import BenefitCard from "@/components/BenefitCard";


export default function DiscoveryPage() {
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
            {t("discoveryHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("discoveryHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("discoveryHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("discoveryOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("discoveryOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("discoveryOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("discoveryOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
                className="w-full h-[420px] object-cover"
                alt="Discovery phase"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= CORE ACTIVITIES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("discoveryActivitiesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("discoveryActivitiesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProcessCard icon={<Search />} title={t("discoveryAct1Title")} desc={t("discoveryAct1Desc")} />
          <ProcessCard icon={<Users />} title={t("discoveryAct2Title")} desc={t("discoveryAct2Desc")} />
          <ProcessCard icon={<ClipboardList />} title={t("discoveryAct3Title")} desc={t("discoveryAct3Desc")} />
          <ProcessCard icon={<Target />} title={t("discoveryAct4Title")} desc={t("discoveryAct4Desc")} />
          <ProcessCard icon={<Activity />} title={t("discoveryAct5Title")} desc={t("discoveryAct5Desc")} />
          <ProcessCard icon={<Lightbulb />} title={t("discoveryAct6Title")} desc={t("discoveryAct6Desc")} />
        </div>
      </section>

      {/* ================= KEY BENEFITS ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("discoveryBenefitsTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("discoveryBenefitsSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard
            icon={<Target />}
            title={t("discoveryBenefit1Title")}
            desc={t("discoveryBenefit1Desc")}
          />
          <BenefitCard
            icon={<Users />}
            title={t("discoveryBenefit2Title")}
            desc={t("discoveryBenefit2Desc")}
          />
          <BenefitCard
            icon={<Lightbulb />}
            title={t("discoveryBenefit3Title")}
            desc={t("discoveryBenefit3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

