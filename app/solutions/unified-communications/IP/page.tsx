"use client";

import React from "react";
import {
  Phone,
  Headphones,
  Users,
  Settings,
  Zap,
  Shield,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function IPTelephonyPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* HERO */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("ucIpHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("ucIpHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("ucIpHeroDesc")}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("ucIpOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("ucIpOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("ucIpOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("ucIpOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="IP telephony systems"
            />
          </SlideIn>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Phone />}
            title={t("ucIpUse1Title")}
            desc={t("ucIpUse1Desc")}
          />
          <UseCaseCard
            icon={<Users />}
            title={t("ucIpUse2Title")}
            desc={t("ucIpUse2Desc")}
          />
          <UseCaseCard
            icon={<Headphones />}
            title={t("ucIpUse3Title")}
            desc={t("ucIpUse3Desc")}
          />
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucIpProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucIpProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Settings />}
            title={t("ucIpProvide1Title")}
            desc={t("ucIpProvide1Desc")}
          />
          <ProvideCard
            icon={<Zap />}
            title={t("ucIpProvide2Title")}
            desc={t("ucIpProvide2Desc")}
          />
          <ProvideCard
            icon={<Shield />}
            title={t("ucIpProvide3Title")}
            desc={t("ucIpProvide3Desc")}
          />
        </div>
      </section>

    </main>
  );
}

/* COMPONENTS */

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function UseCaseCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-white border rounded-xl hover:shadow-xl">
      <div className="flex gap-3 text-red-600 mb-3">
        {icon}<h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function ProvideCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-gray-50 border rounded-xl hover:shadow-xl">
      <div className="flex gap-3 text-red-600 mb-3">
        {icon}<h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
