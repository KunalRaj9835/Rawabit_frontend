"use client";

import React from "react";
import {
  Wifi,
  Radio,
  Shield,
  Gauge,
  Settings,
  Activity,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import UseCaseCard from "@/components/UseCaseCard";
import ProvideCard from "@/components/ProvideCard";


export default function WirelessNetworkingPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("netWifiHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("netWifiHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("netWifiHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("netWifiOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("netWifiOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("netWifiOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("netWifiOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Wireless networking infrastructure"
            />
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("netWifiUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("netWifiUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Wifi />}
            title={t("netWifiUse1Title")}
            desc={t("netWifiUse1Desc")}
          />
          <UseCaseCard
            icon={<Radio />}
            title={t("netWifiUse2Title")}
            desc={t("netWifiUse2Desc")}
          />
          <UseCaseCard
            icon={<Activity />}
            title={t("netWifiUse3Title")}
            desc={t("netWifiUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("netWifiProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("netWifiProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Shield />}
            title={t("netWifiProvide1Title")}
            desc={t("netWifiProvide1Desc")}
          />
          <ProvideCard
            icon={<Settings />}
            title={t("netWifiProvide2Title")}
            desc={t("netWifiProvide2Desc")}
          />
          <ProvideCard
            icon={<Gauge />}
            title={t("netWifiProvide3Title")}
            desc={t("netWifiProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

