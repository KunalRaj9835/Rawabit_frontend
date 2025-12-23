"use client";

import React from "react";
import {
  Siren,
  Clock,
  Shield,
  HeartPulse,
  Users,
  Wrench,
  CheckCircle,
  Phone,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import ProcessCard from "@/components/ProcessCard";
import BenefitCard from "@/components/BenefitCard";
import ResponseCard from "@/components/ResponseCard";


export default function RespondPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("resHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("resHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("resHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("resOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("resOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("resOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("resOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900"
                className="w-full h-[420px] object-cover"
                alt="Incident Response"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= EXPERT INTERVENTION ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900"
                className="w-full h-[420px] object-cover"
                alt="Expert Team"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("resExpertLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("resExpertTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("resExpertDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("resExpertDesc2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= RESPONSE CAPABILITIES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("resCapsTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("resCapsSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProcessCard icon={<Siren />} title={t("resCapTriageTitle")} desc={t("resCapTriageDesc")} />
          <ProcessCard icon={<Clock />} title={t("resCap247Title")} desc={t("resCap247Desc")} />
          <ProcessCard icon={<Shield />} title={t("resCapSecurityTitle")} desc={t("resCapSecurityDesc")} />
          <ProcessCard icon={<HeartPulse />} title={t("resCapRecoveryTitle")} desc={t("resCapRecoveryDesc")} />
          <ProcessCard icon={<Wrench />} title={t("resCapRootTitle")} desc={t("resCapRootDesc")} />
          <ProcessCard icon={<CheckCircle />} title={t("resCapReviewTitle")} desc={t("resCapReviewDesc")} />
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("resProcessTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("resProcessSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <ResponseCard step="01" title={t("resStep1Title")} desc={t("resStep1Desc")} />
<ResponseCard step="02" title={t("resStep2Title")} desc={t("resStep2Desc")} />
<ResponseCard step="03" title={t("resStep3Title")} desc={t("resStep3Desc")} />
<ResponseCard step="04" title={t("resStep4Title")} desc={t("resStep4Desc")} />

        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("resAdvTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("resAdvSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard icon={<Clock />} title={t("resAdvDownTitle")} desc={t("resAdvDownDesc")} />
          <BenefitCard icon={<Users />} title={t("resAdvExpertTitle")} desc={t("resAdvExpertDesc")} />
          <BenefitCard icon={<Phone />} title={t("resAdvAvailTitle")} desc={t("resAdvAvailDesc")} />
        </div>
      </section>

    </main>
  );
}

