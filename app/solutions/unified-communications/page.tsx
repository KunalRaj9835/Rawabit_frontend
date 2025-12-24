"use client";

import React from "react";
import {
  Video,
  MessageSquare,
  Users,
  Smartphone,
  Headphones,
  Zap,
  Globe,
  Shield,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import StackCard from "@/components/StackCard";
import BenefitCard from "@/components/BenefitCard";
import OffWhiteCard from "@/components/OffWhiteCard";
import LogoGrid from "@/components/LogoGrid";

export default function UnifiedCommunicationsPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("ucHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("ucHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("ucHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("ucOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("ucOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("ucOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("ucOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900"
                className="w-full h-[420px] object-cover"
                alt="Unified Communications"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= ENTERPRISE EXPERIENCE ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900"
                className="w-full h-[420px] object-cover"
                alt="Team Collaboration"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("ucEnterpriseLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("ucEnterpriseTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("ucEnterpriseDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("ucEnterpriseDesc2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHAT WE DELIVER ================= */}
      <section className="w-full bg-[#eef3f7] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
            {t("ucDeliveryLabel")}
          </p>

          <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
            {t("ucDeliveryTitle")}
          </h2>

          <p
            className="text-gray-600 text-[17px] leading-relaxed text-justify"
            style={{ textJustify: "inter-word" }}
          >
            {t("ucDeliveryDesc")}
          </p>

        </div>
      </section>

      {/* ================= TECHNOLOGY PARTNERS ================= */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
            {t("ucPartnersLabel")}
          </p>

          <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
            {t("ucPartnersTitle")}
          </h2>

          <p className="text-gray-600 text-[17px] leading-relaxed mb-16">
            {t("ucPartnersDesc")}
          </p>
          <LogoGrid
  logos={[
    "/role/6r.png",
    "/role/7r.png",
    "/role/8r.png",
  ]}
/>


          
        </div>
      </section>

      {/* ================= CORE UC CAPABILITIES ================= */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="mb-12 text-center">
            <p className="uppercase text-xs tracking-[0.25em] text-gray-400 mb-3">
              {t("ucCapabilitiesLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[#0e355d]">
              {t("ucCapabilitiesTitle")}
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <StackCard
              image="/uc/collaboration.jpg"
              title={t("ucCardCollaboration")}
              href="/solutions/unified-communications/Collaboration-Platforms"
            />

            <StackCard
              image="/uc/contact-center.jpg"
              title={t("ucCardContactCenter")}
              href="/solutions/unified-communications/Contact-Center"
            />

            <StackCard
              image="/uc/ip-telephony.jpg"
              title={t("ucCardIP")}
              href="/solutions/unified-communications/IP"
            />

            <StackCard
              image="/uc/mobility.jpg"
              title={t("ucCardMobility")}
              href="/solutions/unified-communications/Mobility"
            />

            <StackCard
              image="/uc/monitoring.jpg"
              title={t("ucCardMonitoring")}
              href="/solutions/unified-communications/Monitoring-&-Quality"
            />

            <StackCard
              image="/uc/uc-integration.jpg"
              title={t("ucCardUC")}
              href="/solutions/unified-communications/UC"
            />

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucServicesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucServicesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <OffWhiteCard  icon={<Video />} title={t("ucServiceVideoTitle")} desc={t("ucServiceVideoDesc")} />
          <OffWhiteCard  icon={<MessageSquare />} title={t("ucServiceMessageTitle")} desc={t("ucServiceMessageDesc")} />
          <OffWhiteCard  icon={<Smartphone />} title={t("ucServiceMobileTitle")} desc={t("ucServiceMobileDesc")} />
          <OffWhiteCard  icon={<Headphones />} title={t("ucServiceVoiceTitle")} desc={t("ucServiceVoiceDesc")} />
          <OffWhiteCard  icon={<Globe />} title={t("ucServiceGlobalTitle")} desc={t("ucServiceGlobalDesc")} />
          <OffWhiteCard  icon={<Shield />} title={t("ucServiceSecurityTitle")} desc={t("ucServiceSecurityDesc")} />
        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ucWhyTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ucWhySubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard icon={<Zap />} title={t("ucWhyAgilityTitle")} desc={t("ucWhyAgilityDesc")} />
          <BenefitCard icon={<Users />} title={t("ucWhyEngagementTitle")} desc={t("ucWhyEngagementDesc")} />
          <BenefitCard icon={<Shield />} title={t("ucWhyExpertiseTitle")} desc={t("ucWhyExpertiseDesc")} />
        </div>
      </section>

    </main>
  );
}


