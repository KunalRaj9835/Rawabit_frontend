"use client";

import React from "react";
import { Cpu, Users, ShieldCheck, Headphones } from "lucide-react";
import ClientShowcase from "@/components/Patners";
import { useLang } from "@/context/LanguageContext";

export default function AboutUsPage() {
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
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            {t("aboutHeroBadge")}
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            {t("aboutHeroTitle")}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            {t("aboutHeroDesc")}
          </p>
        </div>
      </section>

      {/* ================= ABOUT COMPANY ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              {t("aboutCompanyLabel")}
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("aboutCompanyTitle")}
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {t("aboutCompanyDesc1")}
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              {t("aboutCompanyDesc2")}
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900"
              alt="Data center engineer"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold">
            {t("aboutWorkTitle")}
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            {t("aboutWorkSubtitle")}
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
            <WorkCard
              icon={<Cpu />}
              title={t("aboutWorkTechTitle")}
              desc={t("aboutWorkTechDesc")}
            />
            <WorkCard
              icon={<Users />}
              title={t("aboutWorkClientTitle")}
              desc={t("aboutWorkClientDesc")}
            />
            <WorkCard
              icon={<ShieldCheck />}
              title={t("aboutWorkSecurityTitle")}
              desc={t("aboutWorkSecurityDesc")}
            />
            <WorkCard
              icon={<Headphones />}
              title={t("aboutWorkSupportTitle")}
              desc={t("aboutWorkSupportDesc")}
            />
          </div>
        </div>
      </section>

      <ClientShowcase />

    </main>
  );
}

/* ================= COMPONENT ================= */

function WorkCard({ icon, title, desc }: any) {
  return (
    <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-50 text-red-600">
          {icon}
        </div>
        <h3 className="font-semibold text-lg text-gray-900">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-gray-600">
        {desc}
      </p>
    </div>
  );
}
