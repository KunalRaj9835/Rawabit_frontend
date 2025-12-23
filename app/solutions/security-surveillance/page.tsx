"use client";

import React from "react";
import {
  Camera,
  Lock,
  Bell,
  Radio,
  Eye,
  Shield,
  AlertTriangle,
  Activity,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
import { useLang } from "@/context/LanguageContext";
import StackCard from "@/components/StackCard";

export default function SecuritySurveillancePage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("ssHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("ssHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("ssHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("ssOverviewLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("ssOverviewTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("ssOverviewDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("ssOverviewDesc2")}
            </p>
          </div>

          <SlideIn direction={isRTL ? "left" : "right"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?w=900"
                className="w-full h-[420px] object-cover"
                alt="Security Systems"
              />
            </div>
          </SlideIn>

        </div>
      </section>

      {/* ================= INTELLIGENT INTEGRATION ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <SlideIn direction={isRTL ? "right" : "left"}>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=900"
                className="w-full h-[420px] object-cover"
                alt="Integrated Systems"
              />
            </div>
          </SlideIn>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("ssIntegrationLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("ssIntegrationTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("ssIntegrationDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("ssIntegrationDesc2")}
            </p>
          </div>

        </div>
      </section>
      {/* ================= WHAT WE DELIVER ================= */}
<section className="w-full bg-[#eef3f7] py-20">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
      {t("ssDeliveryLabel")}
    </p>

    <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
      {t("ssDeliveryTitle")}
    </h2>

    <p
      className="text-gray-600 text-[17px] leading-relaxed text-justify"
      style={{ textJustify: "inter-word" }}
    >
      {t("ssDeliveryDesc")}
    </p>

  </div>
</section>

{/* ================= TECHNOLOGY PARTNERS ================= */}
<section className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6">

    <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-4">
      {t("ssPartnersLabel")}
    </p>

    <h2 className="text-3xl md:text-4xl font-light text-[#0d355d] mb-6">
      {t("ssPartnersTitle")}
    </h2>

    <p className="text-gray-600 text-[17px] leading-relaxed mb-16">
      {t("ssPartnersDesc")}
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-16 gap-y-12 items-center">
      {[
        "/role/44r.png", // Hikvision
        "/role/45r.png", // Dahua
        "/role/46r.png", // Hanwha Vision
        "/role/47r.png", // Pelco
        "/role/48r.png", // Nitgen
        "/role/50r.png", // Virdi
        "/role/51r.png", // VOTI
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

{/* ================= CORE SECURITY CAPABILITIES ================= */}
<section className="w-full bg-gray-50 py-16 md:py-20">
  <div className="max-w-7xl mx-auto px-6">

    <div className="mb-12 text-center">
      <p className="uppercase text-xs tracking-[0.25em] text-gray-400 mb-3">
        {t("ssCapabilitiesLabel")}
      </p>
      <h2 className="text-3xl md:text-4xl font-light text-[#0e355d]">
        {t("ssCapabilitiesTitle")}
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      <StackCard
        image="/security/cctv.jpg"
        title={t("ssCardCctv")}
        href="/solutions/security-surveillance/CCTV"
      />

      <StackCard
        image="/security/access-control.jpg"
        title={t("ssCardAccess")}
        href="/solutions/security-surveillance/Access-Control-Systems"
      />

      <StackCard
        image="/security/intrusion.jpg"
        title={t("ssCardIntrusion")}
        href="/solutions/security-surveillance/Intrusion-Detection"
      />

      <StackCard
        image="/security/fire.jpg"
        title={t("ssCardFire")}
        href="/solutions/security-surveillance/Analytics-&-AI"
      />

      <StackCard
        image="/security/monitoring.jpg"
        title={t("ssCardMonitoring")}
        href="/solutions/security-surveillance/Central-Monitoring"
      />

      <StackCard
        image="/security/integration.jpg"
        title={t("ssCardIntegration")}
        href="/solutions/security-surveillance/Maintenance-&-Compliance"
      />

    </div>
  </div>
</section>


      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ssServicesTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ssServicesSubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard icon={<Camera />} title={t("ssServiceCctvTitle")} desc={t("ssServiceCctvDesc")} />
          <ServiceCard icon={<Lock />} title={t("ssServiceAccessTitle")} desc={t("ssServiceAccessDesc")} />
          <ServiceCard icon={<Bell />} title={t("ssServiceFireTitle")} desc={t("ssServiceFireDesc")} />
          <ServiceCard icon={<Radio />} title={t("ssServicePaTitle")} desc={t("ssServicePaDesc")} />
          <ServiceCard icon={<Eye />} title={t("ssServiceIntercomTitle")} desc={t("ssServiceIntercomDesc")} />
          <ServiceCard icon={<Activity />} title={t("ssServiceAutomationTitle")} desc={t("ssServiceAutomationDesc")} />
        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("ssWhyTitle")}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("ssWhySubtitle")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <WhyCard icon={<Shield />} title={t("ssWhySecurityTitle")} desc={t("ssWhySecurityDesc")} />
          <WhyCard icon={<AlertTriangle />} title={t("ssWhyResponseTitle")} desc={t("ssWhyResponseDesc")} />
          <WhyCard icon={<Activity />} title={t("ssWhyControlTitle")} desc={t("ssWhyControlDesc")} />
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
