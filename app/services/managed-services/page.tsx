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
export default function ManagedServicesPage() {
  return (
    <main className="w-full pt-[60px]  text-gray-900">

      {/* ================= HERO ================= */}
     <section className="w-full bg-[#111827] text-white py-14 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

      {/* TEXT */}
      <div className="order-1">
        <p className="uppercase tracking-[0.25em] text-[11px] text-red-400 mb-3">
          Managed Services
        </p>

        <h1 className="text-3xl md:text-5xl font-extralight leading-tight mb-5">
          24/7 Infrastructure Management & Technical Support
        </h1>

        <p className="text-base md:text-lg text-gray-200 font-light">
          Continuous monitoring, proactive maintenance, and rapid response to
          ensure maximum uptime, optimal performance, and seamless IT operations.
        </p>
      </div>

      {/* DIAGRAM */}
      <div className="order-2 flex justify-center md:justify-end">
        {/* MOBILE WIDTH CLAMP */}
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
              Core Service Pillars
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Comprehensive infrastructure oversight
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-light max-w-3xl">
              Our managed services combine advanced automation, intelligent monitoring, and expert technical support to maintain peak system performance around the clock.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <PillarBox
              icon={<Activity className="w-8 h-8 text-red-600" />}
              title="Remote Monitoring"
              description="Real-time infrastructure monitoring with automated alerts, performance tracking, and predictive analytics to detect issues before they impact operations."
            />
            <PillarBox
              icon={<Server className="w-8 h-8 text-red-600" />}
              title="System Maintenance"
              description="Scheduled updates, patch management, optimization routines, and preventive maintenance to ensure reliability and security across all systems."
            />
            <PillarBox
              icon={<Shield className="w-8 h-8 text-red-600" />}
              title="Technical Support"
              description="24/7 expert support with rapid incident response, troubleshooting, and resolution to minimize downtime and maintain business continuity."
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
                Performance Metrics
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                Infrastructure health at a glance
              </h2>

              <div className="space-y-6">
                <MetricDisplay
                  label="System Uptime"
                  value="99.9%"
                  target="99.5%"
                  status="excellent"
                />
                <MetricDisplay
                  label="Average Response Time"
                  value="<15min"
                  target="<30min"
                  status="excellent"
                />
                <MetricDisplay
                  label="Issue Resolution Rate"
                  value="94%"
                  target="90%"
                  status="excellent"
                />
                <MetricDisplay
                  label="Preventive Actions/Month"
                  value="120+"
                  target="80+"
                  status="excellent"
                />
              </div>
            </div>

            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
                Service Coverage
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                Comprehensive monitoring scope
              </h2>

              <div className="bg-[#F5F7FB] rounded-xl p-6">
                <div className="space-y-4">
                  <CoverageBar label="Network Infrastructure" percentage={100} />
                  <CoverageBar label="Server Systems" percentage={100} />
                  <CoverageBar label="Storage & Backup" percentage={95} />
                  <CoverageBar label="Security Systems" percentage={100} />
                  <CoverageBar label="Application Performance" percentage={90} />
                  <CoverageBar label="Cloud Services" percentage={85} />
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
              Incident Response
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Rapid issue detection and resolution
            </h2>
            <p className="text-sm text-gray-300 font-light max-w-3xl mx-auto">
              Our automated monitoring and expert response teams work together to identify, diagnose, and resolve issues quickly, minimizing impact on your business operations.
            </p>
          </div>

          <ResponseTimeline />
        </div>
      </section>

      {/* ================= SERVICE COMPARISON ================= */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              Service Impact
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Before vs. After managed services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-light mb-6 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-500" />
                Without Managed Services
              </h3>
              
              <div className="space-y-4">
                <ComparisonMetric 
                  label="Average Downtime/Month"
                  value="8-12 hours"
                  color="bg-red-500"
                />
                <ComparisonMetric 
                  label="Issue Detection Time"
                  value="45-120 min"
                  color="bg-orange-500"
                />
                <ComparisonMetric 
                  label="Mean Time to Resolve"
                  value="4-8 hours"
                  color="bg-amber-500"
                />
                <ComparisonMetric 
                  label="System Optimization"
                  value="Quarterly"
                  color="bg-yellow-500"
                />
                <ComparisonMetric 
                  label="Security Patching"
                  value="Reactive"
                  color="bg-red-500"
                />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-light mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                With Managed Services
              </h3>
              
              <div className="space-y-4">
                <ComparisonMetric 
                  label="Average Downtime/Month"
                  value="<1 hour"
                  color="bg-green-500"
                />
                <ComparisonMetric 
                  label="Issue Detection Time"
                  value="<5 min"
                  color="bg-green-500"
                />
                <ComparisonMetric 
                  label="Mean Time to Resolve"
                  value="15-45 min"
                  color="bg-green-500"
                />
                <ComparisonMetric 
                  label="System Optimization"
                  value="Continuous"
                  color="bg-green-500"
                />
                <ComparisonMetric 
                  label="Security Patching"
                  value="Proactive"
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
                Intelligent Automation
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                Advanced tools reduce manual intervention
              </h2>

              <p className="text-sm text-gray-600 font-light mb-6">
                By leveraging AI-powered monitoring, automated remediation, and intelligent alerting, our managed services handle routine tasks automatically while escalating complex issues to expert technicians.
              </p>

              <div className="space-y-3">
                <AutomationFeature 
                  title="Automated Health Checks"
                  description="Continuous system validation across 200+ parameters"
                />
                <AutomationFeature 
                  title="Self-Healing Systems"
                  description="Automatic recovery for common failure scenarios"
                />
                <AutomationFeature 
                  title="Predictive Maintenance"
                  description="ML-based forecasting prevents 85% of potential failures"
                />
                <AutomationFeature 
                  title="Intelligent Routing"
                  description="Smart ticket assignment to specialized teams"
                />
              </div>
            </div>

            <div>
              <AutomationStats />
            </div>

          </div>
        </div>
      </section>

      {/* ================= SERVICE TIERS ================= */}


<section className="w-full bg-[#edf3f7] py-16 md:py-20">
  <div className="max-w-[1400px] mx-auto px-4">

    {/* Heading */}
    <div className="mb-14 text-center">
      <p className="uppercase text-xs tracking-[0.25em] text-red-400 mb-3">
        Our Process
      </p>
      <h2 className="text-3xl md:text-4xl font-extralight text-black">
        Complete infrastructure lifecycle management
      </h2>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      <ProcessCard
        image="/steps/s1.png"
        title="Monitor"
        description="24/7 real-time infrastructure monitoring with continuous health checks and performance visibility."
        href="/level/Monitor"
      />

      <ProcessCard
        image="/steps/s2.png"
        title="Detect"
        description="Automated anomaly, risk, and threat detection using intelligent alerts and behavior analysis."
        href="/level/Detect"
      />

      <ProcessCard
        image="/steps/s3.png"
        title="Optimize"
        description="Continuous tuning, capacity optimization, and performance improvements driven by analytics."
        href="/level/Optimize"
      />

      <ProcessCard
        image="/steps/s4.png"
        title="Respond"
        description="Rapid incident response and remediation with expert intervention to minimize downtime."
        href="/level/Respond"
      />
    </div>

  </div>
</section>


      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#F5F7FB] py-20 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose Rawabit Networks
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              Expert teams, proven processes, and cutting-edge tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">24/7 Availability</h3>
              </div>
              <p className="text-gray-600">
                Round-the-clock monitoring and support with guaranteed response times for critical incidents.
              </p>
            </div>

            <div className="bg-white border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">Proactive Approach</h3>
              </div>
              <p className="text-gray-600">
                Predictive analytics and preventive maintenance that address issues before they impact operations.
              </p>
            </div>

            <div className="bg-white border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">Rapid Response</h3>
              </div>
              <p className="text-gray-600">
                Expert technicians resolve issues quickly with average response times under 15 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

/* ================== HELPER COMPONENTS ================== */



function PillarBox({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="
      bg-white
      border border-gray-900/20
      rounded-xl
      p-8
      transition-all duration-300
      hover:shadow-xl
      hover:scale-105
      hover:border-red-600
    ">
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


function MetricDisplay({ label, value, target, status }: { label: string; value: string; target: string; status: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
      <div className="flex-1">
        <p className="text-sm font-light text-gray-700">{label}</p>
        <p className="text-xs text-gray-500 mt-1">Target: {target}</p>
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

function ResponseTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-600/30 -translate-x-1/2"></div>
      
      <div className="space-y-8">
        <TimelineItem 
          time="0-5 min"
          title="Detection"
          description="Automated monitoring detects anomaly and triggers alert"
          position="left"
        />
        <TimelineItem 
          time="5-10 min"
          title="Analysis"
          description="AI system analyzes impact and determines severity level"
          position="right"
        />
        <TimelineItem 
          time="10-15 min"
          title="Response"
          description="Expert team begins investigation and implements fix"
          position="left"
        />
        <TimelineItem 
          time="15-45 min"
          title="Resolution"
          description="Issue resolved, systems restored, documentation updated"
          position="right"
        />
      </div>
    </div>
  );
}

function TimelineItem({ time, title, description, position }: { time: string; title: string; description: string; position: string }) {
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

function ComparisonMetric({ label, value, color }: { label: string; value: string; color: string }) {
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

function AutomationFeature({ title, description }: { title: string; description: string }) {
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

function AutomationStats() {
  return (
    <div className="bg-[#F5F7FB] rounded-xl p-6">
      <p className="text-xs uppercase tracking-wider text-red-600 mb-4">Automation Impact</p>
      
      <div className="space-y-6">
        <StatBar label="Tasks Automated" value={78} color="bg-blue-600" />
        <StatBar label="Response Speed" value={92} color="bg-green-600" />
        <StatBar label="Error Reduction" value={85} color="bg-purple-600" />
        <StatBar label="Cost Efficiency" value={65} color="bg-orange-600" />
      </div>
    </div>
  );
}

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
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
}: {
  image: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div
      className="
        bg-[#111827]
        border border-white/20
        rounded-xl
        overflow-hidden
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-red-600
        group
        h-full
      "
    >
      {/* Image */}
      <div className="relative w-full h-56"> {/* increased height */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8"> {/* more padding */}
        <h3 className="text-2xl font-light text-white mb-4">
          {title}
        </h3>

        <p className="text-sm text-white/90 font-light mb-6 leading-relaxed">
          {description}
        </p>

        <Link
          href={href}
          className="
            inline-flex items-center gap-2
            text-red-400 text-sm font-light
            transition-all
            group-hover:gap-3
          "
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
