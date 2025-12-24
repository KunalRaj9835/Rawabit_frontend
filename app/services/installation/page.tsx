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
} from "lucide-react";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import Image from "next/image";
import BenefitCard from "@/components/BenefitCard";
import OffWhiteCard from "@/components/OffWhiteCard";


export default function InstallationIntegrationPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="w-full text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO / BANNER ================= */}
      <section className="relative w-full bg-[#000000] text-white py-25 md:py-35 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-blue-900/10" />
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

            {/* LEFT – TEXT */}
            <div className="order-2 md:order-1">
              <p className="uppercase tracking-[0.25em] text-[11px] text-red-400 mb-3">
                {t("installationLabel")}
              </p>

              <h1 className="text-3xl md:text-5xl font-extralight leading-tight mb-5">
                {t("installationHeroTitle")}
              </h1>

              <p className="text-base md:text-lg text-gray-200 font-light mb-6">
                {t("installationHeroDesc")}
              </p>

              <div className="flex flex-wrap gap-4">
                <IntegrationBadge icon={<Layers className="w-4 h-4" />} text={t("badgeMultiSystem")} />
                <IntegrationBadge icon={<Network className="w-4 h-4" />} text={t("badgeZeroDowntime")} />
                <IntegrationBadge icon={<Settings className="w-4 h-4" />} text={t("badgeCustomConfig")} />
              </div>
            </div>

            {/* RIGHT – VIDEO */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden bg-black shadow-2xl">
                  <video
                    src="/installation/n.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= DIGITAL DISPLAY SOLUTIONS ================= */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              {t("digitalDisplayLabel")}
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              {t("digitalDisplayTitle")}
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-light max-w-3xl">
              {t("digitalDisplayDesc1")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
  <BenefitCard
    icon={<Monitor className="w-8 h-8 text-red-600" />}
    title={t("solutionInteractiveTitle")}
    desc={t("solutionInteractiveDesc")}
  />

  <BenefitCard
    icon={<Layers className="w-8 h-8 text-red-600" />}
    title={t("solutionVideoWallTitle")}
    desc={t("solutionVideoWallDesc")}
  />

  <BenefitCard
    icon={<Network className="w-8 h-8 text-red-600" />}
    title={t("solutionContentTitle")}
    desc={t("solutionContentDesc")}
  />
</div>

        </div>
      </section>

      {/* ================= INTEGRATION APPROACH ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
                {t("approachLabel")}
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                {t("approachTitle")}
              </h2>

              <p className="text-sm text-gray-600 font-light mb-6">
                {t("approachDesc")}
              </p>

              <div className="space-y-4">
                <PhaseItem 
                  number="01"
                  title={t("phase1Title")}
                  description={t("phase1Desc")}
                />
                <PhaseItem 
                  number="02"
                  title={t("phase2Title")}
                  description={t("phase2Desc")}
                />
                <PhaseItem 
                  number="03"
                  title={t("phase3Title")}
                  description={t("phase3Desc")}
                />
                <PhaseItem 
                  number="04"
                  title={t("phase4Title")}
                  description={t("phase4Desc")}
                />
              </div>
            </div>

            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
                {t("benefitsLabel")}
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                {t("benefitsTitle")}
              </h2>

              <div className="bg-[#F5F7FB] rounded-xl p-6">
                <div className="space-y-5">
                  <BenefitItem 
                    icon={<Shield className="w-5 h-5 text-green-600" />}
                    title={t("benefit1Title")}
                    description={t("benefit1Desc")}
                  />
                  <BenefitItem 
                    icon={<Target className="w-5 h-5 text-blue-600" />}
                    title={t("benefit2Title")}
                    description={t("benefit2Desc")}
                  />
                  <BenefitItem 
                    icon={<Zap className="w-5 h-5 text-purple-600" />}
                    title={t("benefit3Title")}
                    description={t("benefit3Desc")}
                  />
                  <BenefitItem 
                    icon={<Award className="w-5 h-5 text-orange-600" />}
                    title={t("benefit4Title")}
                    description={t("benefit4Desc")}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= INTEGRATION CAPABILITIES ================= */}
      <section className="w-full bg-[#111827] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-3">
              {t("capabilitiesLabel")}
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              {t("capabilitiesTitle")}
            </h2>
            <p className="text-sm text-gray-300 font-light max-w-3xl mx-auto">
              {t("capabilitiesDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CapabilityCard 
              title={t("capabilityNetworkTitle")}
              items={[
                t("capabilityNetwork1"),
                t("capabilityNetwork2"),
                t("capabilityNetwork3"),
                t("capabilityNetwork4")
              ]}
            />
            <CapabilityCard 
              title={t("capabilityCloudTitle")}
              items={[
                t("capabilityCloud1"),
                t("capabilityCloud2"),
                t("capabilityCloud3"),
                t("capabilityCloud4")
              ]}
            />
            <CapabilityCard 
              title={t("capabilityBusinessTitle")}
              items={[
                t("capabilityBusiness1"),
                t("capabilityBusiness2"),
                t("capabilityBusiness3"),
                t("capabilityBusiness4")
              ]}
            />
            <CapabilityCard 
              title={t("capabilitySecurityTitle")}
              items={[
                t("capabilitySecurity1"),
                t("capabilitySecurity2"),
                t("capabilitySecurity3"),
                t("capabilitySecurity4")
              ]}
            />
          </div>
        </div>
      </section>

      {/* ================= PROCESS TIMELINE ================= */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              {t("timelineLabel")}
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              {t("timelineTitle")}
            </h2>
          </div>

          <div className="relative">
  <div className={`absolute ${isRTL ? 'right-8' : 'left-8'} top-0 bottom-0 w-0.5 bg-red-200`}></div>
  
  <div className="space-y-8">
    {isRTL ? (
      <>
        <TimelineStepRTL day={t("timeline1Day")} title={t("timeline1Title")} description={t("timeline1Desc")} />
        <TimelineStepRTL day={t("timeline2Day")} title={t("timeline2Title")} description={t("timeline2Desc")} />
        <TimelineStepRTL day={t("timeline3Day")} title={t("timeline3Title")} description={t("timeline3Desc")} />
        <TimelineStepRTL day={t("timeline4Day")} title={t("timeline4Title")} description={t("timeline4Desc")} />
        <TimelineStepRTL day={t("timeline5Day")} title={t("timeline5Title")} description={t("timeline5Desc")} />
        <TimelineStepRTL day={t("timeline6Day")} title={t("timeline6Title")} description={t("timeline6Desc")} />
      </>
    ) : (
      <>
        <TimelineStepLTR day={t("timeline1Day")} title={t("timeline1Title")} description={t("timeline1Desc")} />
        <TimelineStepLTR day={t("timeline2Day")} title={t("timeline2Title")} description={t("timeline2Desc")} />
        <TimelineStepLTR day={t("timeline3Day")} title={t("timeline3Title")} description={t("timeline3Desc")} />
        <TimelineStepLTR day={t("timeline4Day")} title={t("timeline4Title")} description={t("timeline4Desc")} />
        <TimelineStepLTR day={t("timeline5Day")} title={t("timeline5Title")} description={t("timeline5Desc")} />
        <TimelineStepLTR day={t("timeline6Day")} title={t("timeline6Title")} description={t("timeline6Desc")} />
      </>
    )}
  </div>
</div>
        </div>
      </section>
  <section className="w-full bg-[#edf3f7] py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-3">
            {t("instprocessLabel")}
          </p>
          <h2 className="text-3xl md:text-4xl font-extralight text-black">
            {t("instprocessTitle")}
          </h2>
        </div>

        {/* PROCESS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <ProcessCard
            image="/steps/s1.png"
            title={t("processStep1Title")}
            description={t("processStep1Desc")}
            href="/services/installation/assessment"
            readMore={t("readMore")}
          />

          <ProcessCard
            image="/steps/s2.png"
            title={t("processStep2Title")}
            description={t("processStep2Desc")}
            href="/services/installation/preparation"
            readMore={t("readMore")}
          />

          <ProcessCard
            image="/steps/s3.png"
            title={t("processStep3Title")}
            description={t("processStep3Desc")}
            href="/services/installation/deployment"
            readMore={t("readMore")}
          />

          <ProcessCard
            image="/steps/s4.png"
            title={t("processStep4Title")}
            description={t("processStep4Desc")}
            href="/services/installation/testing"
            readMore={t("readMore")}
          />
        </div>

      </div>
    </section>
      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-white py-20 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("whyRawabitInstallTitle")}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              {t("whyRawabitInstallSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  <OffWhiteCard
    icon={<Award className="w-8 h-8 text-red-600" />}
    title={t("whyInstall1Title")}
    desc={t("whyInstall1Desc")}
  />

  <OffWhiteCard
    icon={<Clock className="w-8 h-8 text-red-600" />}
    title={t("whyInstall2Title")}
    desc={t("whyInstall2Desc")}
  />

  <OffWhiteCard
    icon={<Shield className="w-8 h-8 text-red-600" />}
    title={t("whyInstall3Title")}
    desc={t("whyInstall3Desc")}
  />
</div>

        </div>
      </section>

    </main>
  );
}

/* ================== HELPER COMPONENTS ================== */

function IntegrationBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 border border-white/20 rounded-full px-4 py-2 backdrop-blur-sm">
      <div className="text-red-400">{icon}</div>
      <span className="text-xs font-light text-gray-200">{text}</span>
    </div>
  );
}

function SolutionBox({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
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

function PhaseItem({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-lg flex items-center justify-center font-light text-sm">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="text-base font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600 font-light">{description}</p>
      </div>
    </div>
  );
}

function BenefitItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-0.5">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-1">{title}</h4>
        <p className="text-xs text-gray-600 font-light">{description}</p>
      </div>
    </div>
  );
}

function CapabilityCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white/5 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
      <h3 className="text-lg font-light mb-4 text-red-400">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300 font-light">
            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TimelineIndicator({ day }: { day: string }) {
  return (
    <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-full border-4 border-[#F5F7FB] flex items-center justify-center z-10">
      <span className="text-xs font-light text-white">{day}</span>
    </div>
  );
}

function TimelineContentLTR({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex-1 pt-2">
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-sm text-gray-600 font-light">{description}</p>
    </div>
  );
}

function TimelineContentRTL({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex-1 pt-2 text-right">
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-sm text-gray-600 font-light">{description}</p>
    </div>
  );
}

function TimelineStepLTR({
  day,
  title,
  description,
}: {
  day: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex gap-6 items-start">
      <TimelineIndicator day={day} />
      <TimelineContentLTR title={title} description={description} />
    </div>
  );
}

function TimelineStepRTL({
  day,
  title,
  description,
}: {
  day: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative pr-24">
      <div className="absolute right-0">
        <TimelineIndicator day={day} />
      </div>
      <TimelineContentRTL title={title} description={description} />
    </div>
  );
}

function ProcessCard({
  image,
  title,
  description,
  href,
  readMore,
}: {
  image: string;
  title: string;
  description: string;
  href: string;
  readMore: string;
}) {
  return (
    <div className="bg-[#111827] border border-white/20 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-600 group h-full">
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-light text-white mb-4">{title}</h3>
        <p className="text-sm text-white/90 font-light mb-6 leading-relaxed">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-red-400 text-sm font-light transition-all group-hover:gap-3"
        >
          {readMore} →
        </Link>
      </div>
    </div>
  );
}