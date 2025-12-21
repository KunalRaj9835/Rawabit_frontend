"use client";

import React from "react";
import {
  Monitor,
  Layout,
  Users,
  Settings,
  Zap,
  Layers,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function DigitalSignagePage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* HERO */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("ddSignHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("ddSignHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("ddSignHeroDesc")}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-red-600">
              {t("ddSignOverviewLabel")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">
              {t("ddSignOverviewTitle")}
            </h2>
            <p className="mt-6 text-gray-600">{t("ddSignOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("ddSignOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Digital signage"
            />
          </SlideIn>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ddSignOverviewLabel")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ddSignOverviewTitle")}
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard icon={<Users />} title={t("ddSignUse1Title")} desc={t("ddSignUse1Desc")} />
          <UseCaseCard icon={<Layout />} title={t("ddSignUse2Title")} desc={t("ddSignUse2Desc")} />
          <UseCaseCard icon={<Monitor />} title={t("ddSignUse3Title")} desc={t("ddSignUse3Desc")} />
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ddSignProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ddSignProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard icon={<Layers />} title={t("ddSignProvide1Title")} desc={t("ddSignProvide1Desc")} />
          <ProvideCard icon={<Settings />} title={t("ddSignProvide2Title")} desc={t("ddSignProvide2Desc")} />
          <ProvideCard icon={<Zap />} title={t("ddSignProvide3Title")} desc={t("ddSignProvide3Desc")} />
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
