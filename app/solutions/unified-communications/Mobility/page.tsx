"use client";

import React from "react";
import {
  Smartphone,
  Wifi,
  Globe,
  Users,
  Zap,
  Shield,
  Laptop,
  PhoneCall,
  Cloud,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import UseCaseCard from "@/components/UseCaseCard";
import ProvideCard from "@/components/ProvideCard";


export default function MobilitySoftphonesPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("ucMobileHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("ucMobileHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("ucMobileHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("ucMobileOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("ucMobileOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("ucMobileOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("ucMobileOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Mobile workforce communication"
            />
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucMobileUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucMobileUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Globe />}
            title={t("ucMobileUse1Title")}
            desc={t("ucMobileUse1Desc")}
          />
          <UseCaseCard
            icon={<Users />}
            title={t("ucMobileUse2Title")}
            desc={t("ucMobileUse2Desc")}
          />
          <UseCaseCard
            icon={<Laptop />}
            title={t("ucMobileUse3Title")}
            desc={t("ucMobileUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucMobileProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucMobileProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Smartphone />}
            title={t("ucMobileProvide1Title")}
            desc={t("ucMobileProvide1Desc")}
          />
          <ProvideCard
            icon={<Cloud />}
            title={t("ucMobileProvide2Title")}
            desc={t("ucMobileProvide2Desc")}
          />
          <ProvideCard
            icon={<Shield />}
            title={t("ucMobileProvide3Title")}
            desc={t("ucMobileProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

