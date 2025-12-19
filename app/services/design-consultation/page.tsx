"use client";

import React from "react";
import {
  Layers,
  Plug,
  Network,
  Settings,
  CheckCircle,
  ArrowRight,
  Monitor,
  Zap,
  Shield,
  Clock,
  Award,
  Target,
  Lightbulb,
  Users,
  TrendingUp,
  FileText,
  Compass,
  Database,
} from "lucide-react";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

export default function DesignPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="w-full text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO IMAGE ================= */}
      <section
        className="w-full h-[330px] md:h-[460px] lg:h-[570px]
                   bg-black bg-center bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/design/wave.jpg')" }}
      >
      </section>

      {/* ================= INTRO SECTION ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.25em] text-[11px] text-red-500 mb-3">
              {t("designLabel")}
            </p>

            <h1 className="text-3xl md:text-5xl font-extralight leading-tight mb-6">
              {t("designHeroTitle")}
            </h1>

            <p className="text-base md:text-lg text-gray-600 font-light mb-5 leading-relaxed">
              {t("designHeroPara1")}
            </p>

            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
              {t("designHeroPara2")}
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONSULTING APPROACH ================= */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              {t("designApproachLabel")}
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              {t("designApproachTitle")}
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-light max-w-3xl">
              {t("designApproachDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ConsultingPhase
              icon={<Compass className="w-8 h-8 text-red-600" />}
              number="01"
              title={t("designPhase1Title")}
              description={t("designPhase1Desc")}
            />
            <ConsultingPhase
              icon={<Lightbulb className="w-8 h-8 text-red-600" />}
              number="02"
              title={t("designPhase2Title")}
              description={t("designPhase2Desc")}
            />
            <ConsultingPhase
              icon={<FileText className="w-8 h-8 text-red-600" />}
              number="03"
              title={t("designPhase3Title")}
              description={t("designPhase3Desc")}
            />
            <ConsultingPhase
              icon={<CheckCircle className="w-8 h-8 text-red-600" />}
              number="04"
              title={t("designPhase4Title")}
              description={t("designPhase4Desc")}
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              {t("designServiceAreasLabel")}
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              {t("designServiceAreasTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceBox
              icon={<Network className="w-8 h-8 text-red-600" />}
              title={t("designService1Title")}
              description={t("designService1Desc")}
            />
            <ServiceBox
              icon={<Layers className="w-8 h-8 text-red-600" />}
              title={t("designService2Title")}
              description={t("designService2Desc")}
            />
            <ServiceBox
              icon={<Shield className="w-8 h-8 text-red-600" />}
              title={t("designService3Title")}
              description={t("designService3Desc")}
            />
            <ServiceBox
              icon={<Database className="w-8 h-8 text-red-600" />}
              title={t("designService4Title")}
              description={t("designService4Desc")}
            />
            <ServiceBox
              icon={<TrendingUp className="w-8 h-8 text-red-600" />}
              title={t("designService5Title")}
              description={t("designService5Desc")}
            />
            <ServiceBox
              icon={<Monitor className="w-8 h-8 text-red-600" />}
              title={t("designService6Title")}
              description={t("designService6Desc")}
            />
          </div>
        </div>
      </section>

      {/* ================= DESIGN PRINCIPLES ================= */}
      <section className="w-full bg-[#111827] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-3">
                {t("designPrinciplesLabel")}
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                {t("designPrinciplesTitle")}
              </h2>

              <p className="text-sm text-gray-300 font-light mb-6 leading-relaxed">
                {t("designPrinciplesDesc")}
              </p>

              <div className="space-y-4">
                <PrincipleItem 
                  title={t("designPrinciple1Title")}
                  description={t("designPrinciple1Desc")}
                />
                <PrincipleItem 
                  title={t("designPrinciple2Title")}
                  description={t("designPrinciple2Desc")}
                />
                <PrincipleItem 
                  title={t("designPrinciple3Title")}
                  description={t("designPrinciple3Desc")}
                />
                <PrincipleItem 
                  title={t("designPrinciple4Title")}
                  description={t("designPrinciple4Desc")}
                />
              </div>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-light mb-6 text-red-400">{t("designDeliverablesTitle")}</h3>
              
              <div className="space-y-4">
                <DeliverableItem text={t("designDeliverable1")} />
                <DeliverableItem text={t("designDeliverable2")} />
                <DeliverableItem text={t("designDeliverable3")} />
                <DeliverableItem text={t("designDeliverable4")} />
                <DeliverableItem text={t("designDeliverable5")} />
                <DeliverableItem text={t("designDeliverable6")} />
                <DeliverableItem text={t("designDeliverable7")} />
                <DeliverableItem text={t("designDeliverable8")} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= COLLABORATIVE PROCESS ================= */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              {t("designCollaborativeLabel")}
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              {t("designCollaborativeTitle")}
            </h2>
            <p className="text-sm text-gray-600 font-light max-w-3xl">
              {t("designCollaborativeDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <ProcessCard
              icon={<Users className="w-6 h-6 text-blue-600" />}
              title={t("designProcess1Title")}
              description={t("designProcess1Desc")}
              color="bg-blue-50"
            />

            <ProcessCard
              icon={<Target className="w-6 h-6 text-green-600" />}
              title={t("designProcess2Title")}
              description={t("designProcess2Desc")}
              color="bg-green-50"
            />

            <ProcessCard
              icon={<Settings className="w-6 h-6 text-purple-600" />}
              title={t("designProcess3Title")}
              description={t("designProcess3Desc")}
              color="bg-purple-50"
            />

            <ProcessCard
              icon={<Award className="w-6 h-6 text-orange-600" />}
              title={t("designProcess4Title")}
              description={t("designProcess4Desc")}
              color="bg-orange-50"
            />

          </div>
        </div>
      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
                {t("designAdvantageLabel")}
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                {t("designAdvantageTitle")}
              </h2>

              <p className="text-base text-gray-600 font-light mb-6 leading-relaxed">
                {t("designAdvantageDesc")}
              </p>

              <div className="space-y-3">
                <ValuePoint text={t("designValue1")} />
                <ValuePoint text={t("designValue2")} />
                <ValuePoint text={t("designValue3")} />
                <ValuePoint text={t("designValue4")} />
                <ValuePoint text={t("designValue5")} />
              </div>
            </div>

            <div className="space-y-6">
              <StatCard
                number={t("designStat1Number")}
                label={t("designStat1Label")}
                icon={<Layers className="w-8 h-8 text-red-600" />}
              />
              <StatCard
                number={t("designStat2Number")}
                label={t("designStat2Label")}
                icon={<Award className="w-8 h-8 text-green-600" />}
              />
              <StatCard
                number={t("designStat3Number")}
                label={t("designStat3Label")}
                icon={<TrendingUp className="w-8 h-8 text-blue-600" />}
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#F5F7FB] py-20 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("designWhyRawabitTitle")}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              {t("designWhyRawabitSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">{t("designWhy1Title")}</h3>
              </div>
              <p className="text-gray-600">
                {t("designWhy1Desc")}
              </p>
            </div>

            <div className="bg-white border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">{t("designWhy2Title")}</h3>
              </div>
              <p className="text-gray-600">
                {t("designWhy2Desc")}
              </p>
            </div>

            <div className="bg-white border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">{t("designWhy3Title")}</h3>
              </div>
              <p className="text-gray-600">
                {t("designWhy3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================== HELPER COMPONENTS ================== */

function ConsultingPhase({
  icon,
  number,
  title,
  description,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-900/20 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <span className="text-2xl font-extralight text-red-600">{number}</span>
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-[13px] text-gray-600 leading-relaxed font-light">
        {description}
      </p>
    </div>
  );
}

function ServiceBox({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#F5F7FB] border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-[13px] text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function PrincipleItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 bg-white/5 border border-white/20 rounded-lg p-4">
      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-sm font-light mb-1">{title}</p>
        <p className="text-xs text-gray-400 font-light">{description}</p>
      </div>
    </div>
  );
}

function DeliverableItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
      <p className="text-sm text-gray-300 font-light">{text}</p>
    </div>
  );
}

function ProcessCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className={`${color} border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}>
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function ValuePoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0"></div>
      <p className="text-sm text-gray-700 font-light">{text}</p>
    </div>
  );
}

function StatCard({
  number,
  label,
  icon,
}: {
  number: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-[#F5F7FB] border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between mb-3">
        <div className="text-4xl font-extralight text-red-600">{number}</div>
        {icon}
      </div>
      <p className="text-sm text-gray-600 font-light">{label}</p>
    </div>
  );
}