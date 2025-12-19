"use client";

import React, { ReactNode } from "react";
import {
  Network,
  ShieldCheck,
  Users,
  Award,
  Zap,
  Headphones,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function WhyUs(): React.ReactNode {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9fafb] to-white -z-10" />

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-[2.5rem] font-light text-[#0e355d]">
          {t("whyUsTitle")}
        </h2>
        <div className="h-1 w-20 bg-red-500 mx-auto mt-3 rounded-full" />
      </div>

      {/* Mission + Vision */}
      <div
        className={`grid md:grid-cols-2 gap-12 mb-20 text-[#0e355d] ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <Card title={t("ourMissionTitle")}>
          {t("ourMissionText")}
        </Card>

        <Card title={t("ourVisionTitle")}>
          {t("ourVisionText")}
        </Card>
      </div>

      {/* Core Values */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-light text-[#0e355d]">
          {t("whyUsReasonsTitle")}
        </h3>
        <div className="h-1 w-16 bg-red-500 mx-auto mt-3 rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        <ValueCard
          icon={<ShieldCheck size={40} className="text-red-500 mx-auto" />}
          title={t("whyUsQualityTitle")}
          desc={t("whyUsQualityDesc")}
        />
        <ValueCard
          icon={<Users size={40} className="text-red-500 mx-auto" />}
          title={t("whyUsExpertsTitle")}
          desc={t("whyUsExpertsDesc")}
        />
        <ValueCard
          icon={<Award size={40} className="text-red-500 mx-auto" />}
          title={t("whyUsProfessionalsTitle")}
          desc={t("whyUsProfessionalsDesc")}
        />
        <ValueCard
          icon={<Zap size={40} className="text-red-500 mx-auto" />}
          title={t("whyUsDeliveryTitle")}
          desc={t("whyUsDeliveryDesc")}
        />
        <ValueCard
          icon={<Headphones size={40} className="text-red-500 mx-auto" />}
          title={t("whyUsSupportTitle")}
          desc={t("whyUsSupportDesc")}
        />
        <ValueCard
          icon={<Network size={40} className="text-red-500 mx-auto" />}
          title={t("whyUsInfrastructureTitle")}
          desc={t("whyUsInfrastructureDesc")}
        />
      </div>

      {/* Stands Out */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-light text-[#0e355d]">
          {t("whyUsStandOutTitle")}
        </h3>
        <div className="h-1 w-16 bg-red-500 mx-auto mt-3 rounded-full" />
      </div>

      <div
        className={`grid md:grid-cols-2 gap-8 text-[#0e355d] ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <AdvantageCard title={t("whyUsAdv1Title")}>
          {t("whyUsAdv1Text")}
        </AdvantageCard>

        <AdvantageCard title={t("whyUsAdv2Title")}>
          {t("whyUsAdv2Text")}
        </AdvantageCard>

        <AdvantageCard title={t("whyUsAdv3Title")}>
          {t("whyUsAdv3Text")}
        </AdvantageCard>

        <AdvantageCard title={t("whyUsAdv4Title")}>
          {t("whyUsAdv4Text")}
        </AdvantageCard>
      </div>
    </section>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="bg-white shadow-xl p-6 md:p-10 rounded-xl border hover:shadow-2xl transition-all">
      <h3 className="text-3xl font-light text-red-500 mb-4">{title}</h3>
      <p className="leading-relaxed font-light">{children}</p>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white shadow-md p-8 rounded-xl border text-center hover:shadow-xl transition-all">
      {icon}
      <h4 className="text-xl font-light text-[#0e355d] mt-4 mb-2">
        {title}
      </h4>
      <p className="text-sm font-light leading-relaxed">{desc}</p>
    </div>
  );
}

function AdvantageCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-white p-8 rounded-xl border shadow-md hover:shadow-xl transition-all">
      <h4 className="text-xl font-light text-red-500 mb-3">{title}</h4>
      <p className="leading-relaxed font-light">{children}</p>
    </div>
  );
}
