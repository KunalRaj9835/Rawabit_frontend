"use client";

import React from "react";
import {
  Database,
  HardDrive,
  Cloud,
  Shield,
  Activity,
  Zap,
  Server,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import StackCard from "@/components/StackCard";
import BenefitCard from "@/components/BenefitCard";
import OffWhiteCard from "@/components/OffWhiteCard";
import LogoGrid from "@/components/LogoGrid";

export default function ComputingSolutionsPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("csHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("csHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("csHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("csOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("csOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("csOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("csOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900"
                className="w-full h-[420px] object-cover"
                alt="Computing Infrastructure"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= STRATEGY ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900"
                className="w-full h-[420px] object-cover"
                alt="Strategic Computing"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("csStrategyLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("csStrategyTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("csStrategyDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("csStrategyDesc2")}
            </p>
          </div>

        </div>
      </section>
      {/* ================= WHAT WE DELIVER ================= */}
<section className="w-full bg-[#eef3f7] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
      {t("csDeliveryLabel")}
    </p>

    <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
      {t("csDeliveryTitle")}
    </h2>

    <p
      className="text-gray-600 text-[17px] leading-relaxed text-justify"
      style={{ textJustify: "inter-word" }}
    >
      {t("csDeliveryDesc")}
    </p>

  </div>
</section>

{/* ================= TECHNOLOGY PARTNERS ================= */}
<section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
      {t("csPartnersLabel")}
    </p>

    <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
      {t("csPartnersTitle")}
    </h2>

    <p className="text-gray-600 text-[17px] leading-relaxed mb-16">
      {t("csPartnersDesc")}
    </p>

    <LogoGrid
  logos={[
    "/role/9r.png",   // HPE
    "/role/10r.png",  // Dell
    "/role/11r.png",  // Lenovo
    "/role/12r.png",  // HP
    "/role/35r.png",  // APC
    "/role/36r.png",  // Schneider Electric
  ]}
/>


  </div>
</section>

{/* ================= CORE COMPUTING CAPABILITIES ================= */}
<section className="w-full bg-gray-50 py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="mb-12 text-center">
      <p className="uppercase text-xs tracking-[0.25em] text-gray-400 mb-3">
        {t("csCapabilitiesLabel")}
      </p>
      <h2 className="text-3xl md:text-4xl font-light text-[#0e355d]">
        {t("csCapabilitiesTitle")}
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <StackCard
        image="/computing/servers.jpg"
        title={t("csCardServers")}
        href="/solutions/computing/Server-&-Data"
      />

      <StackCard
        image="/computing/storage.jpg"
        title={t("csCardStorage")}
        href="/solutions/computing/Storage-Solutions"
      />

      <StackCard
        image="/computing/backup.jpg"
        title={t("csCardBackup")}
        href="/solutions/computing/End-User"
      />

      <StackCard
        image="/computing/cloud.jpg"
        title={t("csCardCloud")}
        href="/solutions/computing/Virtualization-&-Cloud"
      />

      <StackCard
        image="/computing/datacenter.jpg"
        title={t("csCardDatacenter")}
        href="/solutions/computing/Power-&-Data"
      />

      <StackCard
        image="/computing/integration.jpg"
        title={t("csCardIntegration")}
        href="/solutions/computing/Lifecycle-&-Managed"
      />

    </div>
  </div>
</section>


      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("csServicesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("csServicesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <OffWhiteCard  icon={<Database />} title={t("csServiceStorageTitle")} desc={t("csServiceStorageDesc")} />
          <OffWhiteCard  icon={<Shield />} title={t("csServiceBackupTitle")} desc={t("csServiceBackupDesc")} />
          <OffWhiteCard  icon={<Activity />} title={t("csServiceAvailabilityTitle")} desc={t("csServiceAvailabilityDesc")} />
          <OffWhiteCard  icon={<Zap />} title={t("csServiceRecoveryTitle")} desc={t("csServiceRecoveryDesc")} />
          <OffWhiteCard  icon={<Cloud />} title={t("csServiceCloudTitle")} desc={t("csServiceCloudDesc")} />
          <OffWhiteCard  icon={<HardDrive />} title={t("csServiceOptimizeTitle")} desc={t("csServiceOptimizeDesc")} />
        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("csWhyTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("csWhySubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BenefitCard icon={<Server />} title={t("csWhyInfraTitle")} desc={t("csWhyInfraDesc")} />
          <BenefitCard icon={<Shield />} title={t("csWhyExpertiseTitle")} desc={t("csWhyExpertiseDesc")} />
          <BenefitCard icon={<Zap />} title={t("csWhyInnovationTitle")} desc={t("csWhyInnovationDesc")} />
        </div>
      </section>

    </main>
  );
}

