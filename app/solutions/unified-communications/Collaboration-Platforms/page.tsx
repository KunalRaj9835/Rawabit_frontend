"use client";

import React from "react";
import {
  Users,
  Video,
  MessageSquare,
  Calendar,
  FileText,
  Share2,
  Zap,
  Globe,
  Monitor,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";

export default function CollaborationPlatformsPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[85vh] flex items-center bg-center bg-cover px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 bg-white/20 rounded">
            {t("ucCollabHeroBadge")}
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl">
            {t("ucCollabHeroTitle")}
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("ucCollabHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-sm font-semibold text-red-600">
            {t("ucCollabOverviewLabel")}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-3">
            {t("ucCollabOverviewTitle")}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pb-24">
          <div>
            <p className="text-gray-600">{t("ucCollabOverviewDesc1")}</p>
            <p className="mt-4 text-gray-600">{t("ucCollabOverviewDesc2")}</p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900"
              className="rounded-xl shadow-xl h-[420px] w-full object-cover"
              alt="Team collaboration"
            />
          </SlideIn>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucCollabUseCasesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucCollabUseCasesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <UseCaseCard
            icon={<Users />}
            title={t("ucCollabUse1Title")}
            desc={t("ucCollabUse1Desc")}
          />
          <UseCaseCard
            icon={<Globe />}
            title={t("ucCollabUse2Title")}
            desc={t("ucCollabUse2Desc")}
          />
          <UseCaseCard
            icon={<Monitor />}
            title={t("ucCollabUse3Title")}
            desc={t("ucCollabUse3Desc")}
          />
        </div>
      </section>

      {/* ================= WHAT WE PROVIDE ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucCollabProvideTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucCollabProvideSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <ProvideCard
            icon={<Video />}
            title={t("ucCollabProvide1Title")}
            desc={t("ucCollabProvide1Desc")}
          />
          <ProvideCard
            icon={<MessageSquare />}
            title={t("ucCollabProvide2Title")}
            desc={t("ucCollabProvide2Desc")}
          />
          <ProvideCard
            icon={<Share2 />}
            title={t("ucCollabProvide3Title")}
            desc={t("ucCollabProvide3Desc")}
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