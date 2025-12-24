
"use client";

import React from "react";
import {
  Activity,
  Server,
  Shield,
  Clock,
  TrendingUp,
  Zap,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { ServiceFlowDiagram } from "@/components/ServiceFlowDiagram";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import BenefitCard from "@/components/BenefitCard";

export default function ManagedServicesPage() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <main className="w-full pt-[60px] text-gray-900" dir={isRTL ? "rtl" : "ltr"}>

      {/* ================= HERO ================= */}
      <section className="w-full bg-[#111827] text-white py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            
            {/* TEXT */}
            <div className="order-1">
              <p className="uppercase tracking-[0.25em] text-[11px] text-red-400 mb-3">
                {t("managedServicesLabel")}
              </p>

              <h1 className="text-3xl md:text-5xl font-extralight leading-tight mb-5">
                {t("managedServicesHeroTitle")}
              </h1>

              <p className="text-base md:text-lg text-gray-200 font-light">
                {t("managedServicesHeroDesc")}
              </p>
            </div>

            {/* DIAGRAM */}
            <div className="order-2 flex justify-center md:justify-end">
              <div className="w-full max-w-sm md:max-w-none">
                <ServiceFlowDiagram />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICE PILLARS ================= */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              {t("servicePillarsLabel")}
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              {t("servicePillarsTitle")}
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-light max-w-3xl">
              {t("servicePillarsDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <BenefitCard
  icon={<Activity className="w-8 h-8 text-red-600" />}
  title={t("pillarMonitoringTitle")}
  desc={t("pillarMonitoringDesc")}
/>

<BenefitCard
  icon={<Server className="w-8 h-8 text-red-600" />}
  title={t("pillarMaintenanceTitle")}
  desc={t("pillarMaintenanceDesc")}
/>

<BenefitCard
  icon={<Shield className="w-8 h-8 text-red-600" />}
  title={t("pillarSupportTitle")}
  desc={t("pillarSupportDesc")}
/>

          </div>
        </div>
      </section>

      {/* ================= MONITORING METRICS ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
                {t("performanceMetricsLabel")}
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                {t("performanceMetricsTitle")}
              </h2>

              <div className="space-y-6">
                <MetricDisplay
                  label={t("metricUptimeLabel")}
                  value="99.9%"
                  target="99.5%"
                  targetLabel={t("metricTargetLabel")}
                  status="excellent"
                />
                <MetricDisplay
                  label={t("metricResponseLabel")}
                  value="<15min"
                  target="<30min"
                  targetLabel={t("metricTargetLabel")}
                  status="excellent"
                />
                <MetricDisplay
                  label={t("metricResolutionLabel")}
                  value="94%"
                  target="90%"
                  targetLabel={t("metricTargetLabel")}
                  status="excellent"
                />
                <MetricDisplay
                  label={t("metricPreventiveLabel")}
                  value="120+"
                  target="80+"
                  targetLabel={t("metricTargetLabel")}
                  status="excellent"
                />
              </div>
            </div>

            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
                {t("serviceCoverageLabel")}
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                {t("serviceCoverageTitle")}
              </h2>

              <div className="bg-[#F5F7FB] rounded-xl p-6">
                <div className="space-y-4">
                  <CoverageBar label={t("coverageNetworkLabel")} percentage={100} />
                  <CoverageBar label={t("coverageServerLabel")} percentage={100} />
                  <CoverageBar label={t("coverageStorageLabel")} percentage={95} />
                  <CoverageBar label={t("coverageSecurityLabel")} percentage={100} />
                  <CoverageBar label={t("coverageApplicationLabel")} percentage={90} />
                  <CoverageBar label={t("coverageCloudLabel")} percentage={85} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= RESPONSE TIMELINE ================= */}
      <section className="w-full bg-[#111827] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-3">
              {t("incidentResponseLabel")}
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              {t("incidentResponseTitle")}
            </h2>
            <p className="text-sm text-gray-300 font-light max-w-3xl mx-auto">
              {t("incidentResponseDesc")}
            </p>
          </div>

          <ResponseTimeline t={t} />
        </div>
      </section>

      {/* ================= SERVICE COMPARISON ================= */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              {t("serviceImpactLabel")}
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              {t("serviceImpactTitle")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-light mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                {t("comparisonWithoutTitle")}
              </h3>
              
              <div className="space-y-4">
                <ComparisonMetric 
                  label={t("comparisonDowntimeLabel")}
                  value={t("comparisonDowntimeWithout")}
                  color="bg-red-500"
                />
                <ComparisonMetric 
                  label={t("comparisonDetectionLabel")}
                  value={t("comparisonDetectionWithout")}
                  color="bg-orange-500"
                />
                <ComparisonMetric 
                  label={t("comparisonResolveLabel")}
                  value={t("comparisonResolveWithout")}
                  color="bg-amber-500"
                />
                <ComparisonMetric 
                  label={t("comparisonOptimizationLabel")}
                  value={t("comparisonOptimizationWithout")}
                  color="bg-yellow-500"
                />
                <ComparisonMetric 
                  label={t("comparisonPatchingLabel")}
                  value={t("comparisonPatchingWithout")}
                  color="bg-red-500"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-light mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                {t("comparisonWithTitle")}
              </h3>
              
              <div className="space-y-4">
                <ComparisonMetric 
                  label={t("comparisonDowntimeLabel")}
                  value={t("comparisonDowntimeWith")}
                  color="bg-green-500"
                />
                <ComparisonMetric 
                  label={t("comparisonDetectionLabel")}
                  value={t("comparisonDetectionWith")}
                  color="bg-green-500"
                />
                <ComparisonMetric 
                  label={t("comparisonResolveLabel")}
                  value={t("comparisonResolveWith")}
                  color="bg-green-500"
                />
                <ComparisonMetric 
                  label={t("comparisonOptimizationLabel")}
                  value={t("comparisonOptimizationWith")}
                  color="bg-green-500"
                />
                <ComparisonMetric 
                  label={t("comparisonPatchingLabel")}
                  value={t("comparisonPatchingWith")}
                  color="bg-green-500"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= AUTOMATION BENEFITS ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1.2fr,1fr] gap-12 items-center">
            
            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
                {t("automationLabel")}
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                {t("automationTitle")}
              </h2>

              <p className="text-sm text-gray-600 font-light mb-6">
                {t("automationDesc")}
              </p>

              <div className="space-y-3">
                <AutomationFeature 
                  title={t("automationHealthTitle")}
                  description={t("automationHealthDesc")}
                />
                <AutomationFeature 
                  title={t("automationSelfHealTitle")}
                  description={t("automationSelfHealDesc")}
                />
                <AutomationFeature 
                  title={t("automationPredictiveTitle")}
                  description={t("automationPredictiveDesc")}
                />
                <AutomationFeature 
                  title={t("automationRoutingTitle")}
                  description={t("automationRoutingDesc")}
                />
              </div>
            </div>

            <div>
              <AutomationStats t={t} />
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICE TIERS ================= */}
      <section className="w-full bg-[#edf3f7] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4">

          <div className="mb-14 text-center">
            <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-3">
              {t("processLabel")}
            </p>
            <h2 className="text-3xl md:text-4xl font-extralight text-black">
              {t("processTitle")}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <ProcessCard
              image="/steps/s1.png"
              title={t("processMonitorTitle")}
              description={t("processMonitorDesc")}
              href="/services/managed-services/Monitor"
              readMore={t("readMore")}
            />

            <ProcessCard
              image="/steps/s2.png"
              title={t("processDetectTitle")}
              description={t("processDetectDesc")}
              href="/services/managed-services/Detect"
              readMore={t("readMore")}
            />

            <ProcessCard
              image="/steps/s3.png"
              title={t("processOptimizeTitle")}
              description={t("processOptimizeDesc")}
              href="/services/managed-services/Optimize"
              readMore={t("readMore")}
            />

            <ProcessCard
              image="/steps/s4.png"
              title={t("processRespondTitle")}
              description={t("processRespondDesc")}
              href="/services/managed-services/Respond"
              readMore={t("readMore")}
            />
          </div>

        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#F5F7FB] py-20 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              {t("whyRawabitTitle")}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              {t("whyRawabitSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  <BenefitCard
    icon={<Clock className="w-8 h-8 text-red-600" />}
    title={t("why24x7Title")}
    desc={t("why24x7Desc")}
  />

  <BenefitCard
    icon={<TrendingUp className="w-8 h-8 text-red-600" />}
    title={t("whyProactiveTitle")}
    desc={t("whyProactiveDesc")}
  />

  <BenefitCard
    icon={<Zap className="w-8 h-8 text-red-600" />}
    title={t("whyRapidTitle")}
    desc={t("whyRapidDesc")}
  />
</div>

        </div>
      </section>

    </main>
  );
}

/* ================== HELPER COMPONENTS ================== */


function MetricDisplay({ 
  label, 
  value, 
  target, 
  targetLabel,
  status 
}: { 
  label: string; 
  value: string; 
  target: string; 
  targetLabel: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
      <div className="flex-1">
        <p className="text-sm font-light text-gray-700">{label}</p>
        <p className="text-xs text-gray-500 mt-1">{targetLabel}: {target}</p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-light text-green-600">{value}</p>
        <CheckCircle className="w-4 h-4 text-green-500 ml-auto mt-1" />
      </div>
    </div>
  );
}

function CoverageBar({ label, percentage }: { label: string; percentage: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1 font-light">
        <span>{label}</span>
        <span className="text-red-600">{percentage}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
        <div 
          className="h-full bg-red-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function ResponseTimeline({ t }: { t: any }) {
  return (
    <div className="relative" dir="ltr">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-600/30 -translate-x-1/2"></div>
      
      <div className="space-y-8">
        <TimelineItem 
          time="0-5 min"
          title={t("timelineDetectionTitle")}
          description={t("timelineDetectionDesc")}
          position="left"
        />
        <TimelineItem 
          time="5-10 min"
          title={t("timelineAnalysisTitle")}
          description={t("timelineAnalysisDesc")}
          position="right"
        />
        <TimelineItem 
          time="10-15 min"
          title={t("timelineResponseTitle")}
          description={t("timelineResponseDesc")}
          position="left"
        />
        <TimelineItem 
          time="15-45 min"
          title={t("timelineResolutionTitle")}
          description={t("timelineResolutionDesc")}
          position="right"
        />
      </div>
    </div>
  );
}

function TimelineItem({ 
  time, 
  title, 
  description, 
  position 
}: { 
  time: string; 
  title: string; 
  description: string; 
  position: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${position === 'right' ? 'flex-row-reverse' : ''}`}>
      <div className={`flex-1 ${position === 'right' ? 'text-left' : 'text-right'}`}>
        <p className="text-xs text-red-400 mb-1">{time}</p>
        <h4 className="text-lg font-light mb-1">{title}</h4>
        <p className="text-sm text-gray-400 font-light">{description}</p>
      </div>
      <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-slate-800"></div>
      <div className="flex-1"></div>
    </div>
  );
}

function ComparisonMetric({ 
  label, 
  value, 
  color 
}: { 
  label: string; 
  value: string; 
  color: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-2 h-2 ${color} rounded-full`}></div>
      <div className="flex-1">
        <p className="text-xs text-gray-500 font-light">{label}</p>
        <p className="text-sm font-light">{value}</p>
      </div>
    </div>
  );
}

function AutomationFeature({ 
  title, 
  description 
}: { 
  title: string; 
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-[#F5F7FB] rounded-lg p-3">
      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
      <div>
        <p className="text-sm font-light mb-0.5">{title}</p>
        <p className="text-xs text-gray-600 font-light">{description}</p>
      </div>
    </div>
  );
}

function AutomationStats({ t }: { t: any }) {
  return (
    <div className="bg-[#F5F7FB] rounded-xl p-6">
      <p className="text-xs uppercase tracking-wider text-red-600 mb-4">
        {t("automationImpactLabel")}
      </p>
      
      <div className="space-y-6">
        <StatBar label={t("statTasksLabel")} value={78} color="bg-blue-600" />
        <StatBar label={t("statSpeedLabel")} value={92} color="bg-green-600" />
        <StatBar label={t("statErrorLabel")} value={85} color="bg-purple-600" />
        <StatBar label={t("statCostLabel")} value={65} color="bg-orange-600" />
      </div>
    </div>
  );
}

function StatBar({ 
  label, 
  value, 
  color 
}: { 
  label: string; 
  value: number; 
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2 font-light">
        <span>{label}</span>
        <span className="text-red-600 font-medium">{value}%</span>
      </div>
      <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-700`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
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
