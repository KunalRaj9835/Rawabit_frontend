"use client";

import React from "react";
import {
  Shield,
  Lock,
  ShieldCheck,
  Network,
  Settings,
  Eye,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function NetworkSecurityPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("netSecHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("netSecHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("netSecHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("netSecOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("netSecOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("netSecOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("netSecOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Network security infrastructure"
            />
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("netSecUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("netSecUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Shield />}
            title={t("netSecUse1Title")}
            desc={t("netSecUse1Desc")}
          />
          <UseCaseCard
            icon={<Lock />}
            title={t("netSecUse2Title")}
            desc={t("netSecUse2Desc")}
          />
          <UseCaseCard
            icon={<ShieldCheck />}
            title={t("netSecUse3Title")}
            desc={t("netSecUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("netSecProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("netSecProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Network />}
            title={t("netSecProvide1Title")}
            desc={t("netSecProvide1Desc")}
          />
          <ProvideCard
            icon={<Settings />}
            title={t("netSecProvide2Title")}
            desc={t("netSecProvide2Desc")}
          />
          <ProvideCard
            icon={<Eye />}
            title={t("netSecProvide3Title")}
            desc={t("netSecProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function UseCaseCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-white border rounded-xl hover:shadow-xl">
      <div className="flex gap-3 text-red-600 mb-3">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function ProvideCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-gray-50 border rounded-xl hover:shadow-xl">
      <div className="flex gap-3 text-red-600 mb-3">
        {icon}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}