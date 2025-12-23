"use client";

import React from "react";
import {
  Lock,
  Fingerprint,
  Smartphone,
  Shield,
  Settings,
  Users,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import UseCaseCard from "@/components/UseCaseCard";
import ProvideCard from "@/components/ProvideCard";


export default function AccessControlPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("secAccessHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("secAccessHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("secAccessHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("secAccessOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("secAccessOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("secAccessOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("secAccessOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1633265486064-086b219458ec?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Access control system"
            />
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("secAccessUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("secAccessUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Lock />}
            title={t("secAccessUse1Title")}
            desc={t("secAccessUse1Desc")}
          />
          <UseCaseCard
            icon={<Fingerprint />}
            title={t("secAccessUse2Title")}
            desc={t("secAccessUse2Desc")}
          />
          <UseCaseCard
            icon={<Smartphone />}
            title={t("secAccessUse3Title")}
            desc={t("secAccessUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("secAccessProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("secAccessProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Shield />}
            title={t("secAccessProvide1Title")}
            desc={t("secAccessProvide1Desc")}
          />
          <ProvideCard
            icon={<Settings />}
            title={t("secAccessProvide2Title")}
            desc={t("secAccessProvide2Desc")}
          />
          <ProvideCard
            icon={<Users />}
            title={t("secAccessProvide3Title")}
            desc={t("secAccessProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

