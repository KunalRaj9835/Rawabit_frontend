"use client";

import React from "react";
import {
  Camera,
  Monitor,
  Users,
  Wifi,
  Settings,
  Zap,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function VideoSystemsPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("avVideoHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("avVideoHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("avVideoHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("avVideoOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("avVideoOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("avVideoOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("avVideoOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1603202662747-00e33d4b4e5b?w=900"
                alt="Video conferencing system"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("avVideoUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("avVideoUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <UseCaseCard icon={<Users />} title={t("avVideoUseCase1Title")} desc={t("avVideoUseCase1Desc")} />
          <UseCaseCard icon={<Camera />} title={t("avVideoUseCase2Title")} desc={t("avVideoUseCase2Desc")} />
          <UseCaseCard icon={<Monitor />} title={t("avVideoUseCase3Title")} desc={t("avVideoUseCase3Desc")} />
        </div>
      </section>

      
<section className="bg-white py-24 px-4">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h2 className="text-3xl lg:text-4xl font-bold">
      {t("avVideoProvideTitle")}
    </h2>
    <p className="mt-4 max-w-3xl mx-auto text-gray-600">
      {t("avVideoProvideSubtitle")}
    </p>
  </div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    <ProvideCard
      icon={<Camera />}
      title={t("avVideoProvide1Title")}
      desc={t("avVideoProvide1Desc")}
    />
    <ProvideCard
      icon={<Settings />}
      title={t("avVideoProvide2Title")}
      desc={t("avVideoProvide2Desc")}
    />
    <ProvideCard
      icon={<Zap />}
      title={t("avVideoProvide3Title")}
      desc={t("avVideoProvide3Desc")}
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
    <div className="p-8 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-red-600">
      <div className="flex items-center gap-3 mb-3 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

interface ProvideCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function ProvideCard({ icon, title, desc }: ProvideCardProps) {
  return (
    <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-red-600">
      <div className="flex items-center gap-3 mb-4 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
