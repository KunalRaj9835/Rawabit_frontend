"use client";

import React from "react";
import {
  Cpu,
  Users,
  ShieldCheck,
  Headphones,
  Network,
  Lock,
  Server,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import StackCard from "@/components/StackCard";

export default function NetworkInfrastructureSecurityPage() {
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
            {t("netHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("netHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("netHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("netOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("netOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("netOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("netOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900"
                className="w-full h-[420px] object-cover"
                alt="Network Infrastructure"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= SECURITY ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900"
                className="w-full h-[420px] object-cover"
                alt="Network Security"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("netSecurityLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("netSecurityTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("netSecurityDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("netSecurityDesc2")}
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHAT WE DELIVER ================= */}
      <section className="w-full bg-[#eef3f7] py-20">
        <div className="max-w-7xl mx-auto px-6">

          <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
            {t("netDeliveryLabel")}
          </p>

          <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
            {t("netDeliveryTitle")}
          </h2>

          <p
            className="text-gray-600 text-[17px] leading-relaxed text-justify"
            style={{ textJustify: "inter-word" }}
          >
            {t("netDeliveryDesc")}
          </p>

        </div>
      </section>

      {/* ================= TECHNOLOGY PARTNERS ================= */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
            {t("netPartnersLabel")}
          </p>

          <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
            {t("netPartnersTitle")}
          </h2>

          <p className="text-gray-600 text-[17px] leading-relaxed mb-12">
            {t("netPartnersDesc")}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-16 gap-y-12 items-center">
            {[
              "/role/1r.png",
              "/role/2r.png",
              "/role/3r.png",
              "/role/4r.png",
              "/role/5r.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center w-[160px] h-[64px]"
              >
                <img
                  src={logo}
                  alt="Technology Partner"
                  className="w-full h-full object-contain grayscale opacity-80"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CORE NETWORK CAPABILITIES ================= */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="mb-12 text-center">
            <p className="uppercase text-xs tracking-[0.25em] text-gray-400 mb-3">
              {t("netCapabilitiesLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-[#0e355d]">
              {t("netCapabilitiesTitle")}
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <StackCard
              image="/network/monitoring.jpg"
              title={t("netCardMonitoring")}
              href="/solutions/network-infrastructure/Monitoring-&-Optimization"
            />

            <StackCard
              image="/network/security.jpg"
              title={t("netCardSecurity")}
              href="/solutions/network-infrastructure/Network-Security-Integration"
            />

            <StackCard
              image="/network/cabling.jpg"
              title={t("netCardCabling")}
              href="/solutions/network-infrastructure/Structured-Cabling"
            />

            <StackCard
              image="/network/switching.jpg"
              title={t("netCardSwitching")}
              href="/solutions/network-infrastructure/Switching-&-Routing"
            />

            <StackCard
              image="/network/wan.jpg"
              title={t("netCardWAN")}
              href="/solutions/network-infrastructure/WAN-&-Connectivity"
            />

            <StackCard
              image="/network/wifi.jpg"
              title={t("netCardWiFi")}
              href="/solutions/network-infrastructure/Wi-Fi"
            />

          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("netServicesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("netServicesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard icon={<Network />} title={t("netServiceDesignTitle")} desc={t("netServiceDesignDesc")} />
          <ServiceCard icon={<Server />} title={t("netServiceRoutingTitle")} desc={t("netServiceRoutingDesc")} />
          <ServiceCard icon={<ShieldCheck />} title={t("netServiceFirewallTitle")} desc={t("netServiceFirewallDesc")} />
          <ServiceCard icon={<Lock />} title={t("netServiceZeroTrustTitle")} desc={t("netServiceZeroTrustDesc")} />
          <ServiceCard icon={<Cpu />} title={t("netServiceMonitoringTitle")} desc={t("netServiceMonitoringDesc")} />
          <ServiceCard icon={<Headphones />} title={t("netServiceManagedTitle")} desc={t("netServiceManagedDesc")} />
        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("netWhyTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("netWhySubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <WhyCard icon={<Users />} title={t("netWhyTeamTitle")} desc={t("netWhyTeamDesc")} />
          <WhyCard icon={<ShieldCheck />} title={t("netWhySecurityTitle")} desc={t("netWhySecurityDesc")} />
          <WhyCard icon={<Cpu />} title={t("netWhyFutureTitle")} desc={t("netWhyFutureDesc")} />
        </div>
      </section>

    </main>
  );
}

/* ================= CARDS ================= */

function ServiceCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-3 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

function WhyCard({ icon, title, desc }: any) {
  return (
    <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-4 text-red-600">
        {icon}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}