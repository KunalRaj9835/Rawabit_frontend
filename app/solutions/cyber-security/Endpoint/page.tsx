"use client";

import React from "react";
import {
  Shield,
  Laptop,
  Users,
  Settings,
  Zap,
  Activity,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import UseCaseCard from "@/components/UseCaseCard";
import ProvideCard from "@/components/ProvideCard";


export default function EndpointSecurityPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("epsecHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("epsecHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("epsecHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
  {/* HEADER */}
  <div className="max-w-7xl mx-auto text-center mb-16">
    <span className="text-sm font-semibold text-red-600">
      {t("epsecOverviewLabel")}
    </span>
    <h2 className="text-3xl lg:text-4xl font-bold mt-3">
      {t("epsecOverviewTitle")}
    </h2>
  </div>

  {/* CONTENT */}
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    {/* LEFT TEXT */}
    <div>
      <p className="text-gray-600">
        {t("epsecOverviewDesc1")}
      </p>
      <p className="mt-4 text-gray-600">
        {t("epsecOverviewDesc2")}
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <SlideIn direction={isRTL ? "left" : "right"}>
      <img
        src="https://images.unsplash.com/photo-1581092334651-ddf26d9b22f7?w=900"
        alt="Endpoint security"
        className="rounded-xl shadow-xl h-[420px] w-full object-cover"
      />
    </SlideIn>
  </div>
</section>


      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("epsecUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("epsecUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Laptop />}
            title={t("epsecUse1Title")}
            desc={t("epsecUse1Desc")}
          />
          <UseCaseCard
            icon={<Users />}
            title={t("epsecUse2Title")}
            desc={t("epsecUse2Desc")}
          />
          <UseCaseCard
            icon={<Activity />}
            title={t("epsecUse3Title")}
            desc={t("epsecUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("epsecProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("epsecProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Shield />}
            title={t("epsecProvide1Title")}
            desc={t("epsecProvide1Desc")}
          />
          <ProvideCard
            icon={<Settings />}
            title={t("epsecProvide2Title")}
            desc={t("epsecProvide2Desc")}
          />
          <ProvideCard
            icon={<Zap />}
            title={t("epsecProvide3Title")}
            desc={t("epsecProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

