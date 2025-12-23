"use client";

import React from "react";
import {
  Network,
  Share2,
  GitBranch,
  Layers,
  Settings,
  Activity,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import UseCaseCard from "@/components/UseCaseCard";
import ProvideCard from "@/components/ProvideCard";


export default function SwitchingRoutingPage() {
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
            {t("netSwitchHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("netSwitchHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("netSwitchHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("netSwitchOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("netSwitchOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("netSwitchOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("netSwitchOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Network switching and routing"
            />
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("netSwitchUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("netSwitchUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Layers />}
            title={t("netSwitchUse1Title")}
            desc={t("netSwitchUse1Desc")}
          />
          <UseCaseCard
            icon={<Share2 />}
            title={t("netSwitchUse2Title")}
            desc={t("netSwitchUse2Desc")}
          />
          <UseCaseCard
            icon={<GitBranch />}
            title={t("netSwitchUse3Title")}
            desc={t("netSwitchUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("netSwitchProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("netSwitchProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Network />}
            title={t("netSwitchProvide1Title")}
            desc={t("netSwitchProvide1Desc")}
          />
          <ProvideCard
            icon={<Settings />}
            title={t("netSwitchProvide2Title")}
            desc={t("netSwitchProvide2Desc")}
          />
          <ProvideCard
            icon={<Activity />}
            title={t("netSwitchProvide3Title")}
            desc={t("netSwitchProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

