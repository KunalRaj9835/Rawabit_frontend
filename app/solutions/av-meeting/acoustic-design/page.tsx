"use client";

import React from "react";
import {
  Volume2,
  Waves,
  Users,
  Settings,
  Zap,
  Layers,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function AcousticDesignPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* HERO */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm bg-white/20 rounded">
            {t("avAcousticHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("avAcousticHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("avAcousticHeroDesc")}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-red-600">
              {t("avAcousticOverviewLabel")}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">
              {t("avAcousticOverviewTitle")}
            </h2>
            <p className="mt-6 text-gray-600">{t("avAcousticOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("avAcousticOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1558002038-1055907df827?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Acoustic treatment"
            />
          </SlideIn>
        </div>
      </section>

      {/* USE CASES */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard icon={<Users />} title={t("avAcousticUse1Title")} desc={t("avAcousticUse1Desc")} />
          <UseCaseCard icon={<Volume2 />} title={t("avAcousticUse2Title")} desc={t("avAcousticUse2Desc")} />
          <UseCaseCard icon={<Layers />} title={t("avAcousticUse3Title")} desc={t("avAcousticUse3Desc")} />
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard icon={<Waves />} title={t("avAcousticProvide1Title")} desc={t("avAcousticProvide1Desc")} />
          <ProvideCard icon={<Settings />} title={t("avAcousticProvide2Title")} desc={t("avAcousticProvide2Desc")} />
          <ProvideCard icon={<Zap />} title={t("avAcousticProvide3Title")} desc={t("avAcousticProvide3Desc")} />
        </div>
      </section>
    </main>
  );
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function UseCaseCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-white border rounded-xl hover:shadow-xl">
      <div className="flex gap-3 text-red-600 mb-3">{icon}<h3 className="font-semibold">{title}</h3></div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function ProvideCard({ icon, title, desc }: CardProps) {
  return (
    <div className="p-8 bg-gray-50 border rounded-xl hover:shadow-xl">
      <div className="flex gap-3 text-red-600 mb-3">{icon}<h3 className="font-semibold">{title}</h3></div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
