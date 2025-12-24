"use client";

import React from "react";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  ShieldCheck,
  Activity,
  FileSearch,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import StackCard from "@/components/StackCard";
import BenefitCard from "@/components/BenefitCard";
import OffWhiteCard from "@/components/OffWhiteCard";
import LogoGrid from "@/components/LogoGrid";

export default function CyberSecurityPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("secHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("secHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("secHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("secOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("secOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("secOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("secOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900"
                className="w-full h-[420px] object-cover"
                alt="Cyber Security"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900"
                className="w-full h-[420px] object-cover"
                alt="Security Architecture"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("secExpertiseLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("secExpertiseTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("secExpertiseDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("secExpertiseDesc2")}
            </p>
          </div>

        </div>
      </section>
        {/* ================= WHAT WE DELIVER ================= */}
<section className="w-full bg-[#eef3f7] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
      {t("secDeliveryLabel")}
    </p>

    <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
      {t("secDeliveryTitle")}
    </h2>

    <p
      className="text-gray-600 text-[17px] leading-relaxed text-justify"
      style={{ textJustify: "inter-word" }}
    >
      {t("secDeliveryDesc")}
    </p>

  </div>
</section>

{/* ================= TECHNOLOGY PARTNERS ================= */}
<section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
      {t("secPartnersLabel")}
    </p>

    <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
      {t("secPartnersTitle")}
    </h2>

    <p className="text-gray-600 text-[17px] leading-relaxed mb-16">
      {t("secPartnersDesc")}
    </p>

    <LogoGrid
  logos={[
    "/role/6r.png",  // Fortinet
    "/role/7r.png",  // Sophos
    "/role/8r.png",  // Palo Alto Networks
  ]}
/>


  </div>
</section>

{/* ================= CORE CYBER SECURITY CAPABILITIES ================= */}
<section className="w-full bg-gray-50 py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="mb-12 text-center">
      <p className="uppercase text-xs tracking-[0.25em] text-gray-400 mb-3">
        {t("secCapabilitiesLabel")}
      </p>
      <h2 className="text-3xl md:text-4xl font-light text-[#0e355d]">
        {t("secCapabilitiesTitle")}
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <StackCard
        image="/cyber/threat.jpg"
        title={t("secCardThreat")}
        href="/solutions/cyber-security/Identity-&-Access"
      />

      <StackCard
        image="/cyber/monitoring.jpg"
        title={t("secCardMonitoring")}
        href="/solutions/cyber-security/Monitoring-&-SOC"
      />

      <StackCard
        image="/cyber/endpoint.jpg"
        title={t("secCardEndpoint")}
        href="/solutions/cyber-security/Endpoint"
      />

      <StackCard
        image="/cyber/incident.jpg"
        title={t("secCardIncident")}
        href="/solutions/cyber-security/Email-&-Web"
      />

      <StackCard
        image="/cyber/risk.jpg"
        title={t("secCardRisk")}
        href="/solutions/cyber-security/Network"
      />

      <StackCard
        image="/cyber/compliance.jpg"
        title={t("secCardCompliance")}
        href="/solutions/cyber-security/Compliance-&-Risk"
      />

    </div>
  </div>
</section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("secServicesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("secServicesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <OffWhiteCard  icon={<Shield />} title={t("secServiceThreatTitle")} desc={t("secServiceThreatDesc")} />
          <OffWhiteCard  icon={<Eye />} title={t("secServiceMonitorTitle")} desc={t("secServiceMonitorDesc")} />
          <OffWhiteCard  icon={<Lock />} title={t("secServiceEndpointTitle")} desc={t("secServiceEndpointDesc")} />
          <OffWhiteCard  icon={<AlertTriangle />} title={t("secServiceIncidentTitle")} desc={t("secServiceIncidentDesc")} />
          <OffWhiteCard  icon={<FileSearch />} title={t("secServiceRiskTitle")} desc={t("secServiceRiskDesc")} />
          <OffWhiteCard  icon={<ShieldCheck />} title={t("secServiceComplianceTitle")} desc={t("secServiceComplianceDesc")} />
        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("secWhyTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("secWhySubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard icon={<Shield />} title={t("secWhyTeamTitle")} desc={t("secWhyTeamDesc")} />
          <BenefitCard icon={<Activity />} title={t("secWhyProactiveTitle")} desc={t("secWhyProactiveDesc")} />
          <BenefitCard icon={<ShieldCheck />} title={t("secWhyPartnersTitle")} desc={t("secWhyPartnersDesc")} />
        </div>
      </section>

    </main>
  );
}

