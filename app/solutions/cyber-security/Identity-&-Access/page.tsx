"use client";

import React from "react";
import {
  UserCheck,
  Key,
  Users,
  Settings,
  Zap,
  Shield,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function IdentityAccessPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* HERO */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600267165477-6d4cc741b379?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("iamHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("iamHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("iamHeroDesc")}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
  {/* HEADER */}
  <div className="max-w-7xl mx-auto text-center mb-16">
    <span className="text-sm font-semibold text-red-600">
      {t("iamOverviewLabel")}
    </span>
    <h2 className="text-3xl lg:text-4xl font-bold mt-3">
      {t("iamOverviewTitle")}
    </h2>
  </div>

  {/* CONTENT */}
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    {/* LEFT TEXT */}
    <div>
      <p className="text-gray-600">
        {t("iamOverviewDesc1")}
      </p>
      <p className="mt-4 text-gray-600">
        {t("iamOverviewDesc2")}
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <SlideIn direction={isRTL ? "left" : "right"}>
      <img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"
        alt="Identity and access management"
        className="rounded-xl shadow-xl h-[420px] w-full object-cover"
      />
    </SlideIn>
  </div>
</section>

      {/* USE CASES */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("iamUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("iamUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard icon={<Users />} title={t("iamUse1Title")} desc={t("iamUse1Desc")} />
          <UseCaseCard icon={<Key />} title={t("iamUse2Title")} desc={t("iamUse2Desc")} />
          <UseCaseCard icon={<Shield />} title={t("iamUse3Title")} desc={t("iamUse3Desc")} />
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("iamProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("iamProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard icon={<UserCheck />} title={t("iamProvide1Title")} desc={t("iamProvide1Desc")} />
          <ProvideCard icon={<Settings />} title={t("iamProvide2Title")} desc={t("iamProvide2Desc")} />
          <ProvideCard icon={<Zap />} title={t("iamProvide3Title")} desc={t("iamProvide3Desc")} />
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
