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

export default function InstallationIntegrationPage() {
  return (
    <main className="w-full text-gray-900">

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
                Installation & Integration
              </p>

              <h1 className="text-3xl md:text-5xl font-extralight leading-tight mb-5">
                Precision Deployment & Seamless System Integration
              </h1>

              <p className="text-base md:text-lg text-gray-200 font-light mb-6">
                Expert installation and integration services that transform complex infrastructure into unified, secure, and scalable environments. From digital displays to complete IT systems, we ensure flawless deployment and seamless operation.
              </p>

              <div className="flex flex-wrap gap-4">
                <IntegrationBadge icon={<Layers className="w-4 h-4" />} text="Multi-System Integration" />
                <IntegrationBadge icon={<Network className="w-4 h-4" />} text="Zero Downtime" />
                <IntegrationBadge icon={<Settings className="w-4 h-4" />} text="Custom Configuration" />
              </div>
            </div>

            {/* RIGHT – VIDEO */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-lg">
                <div className="relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden  bg-black shadow-2xl">
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
              Digital Display Solutions
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Transform your visual communication strategy
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-light max-w-3xl">
              From interactive touchscreens to large-format video walls, we design and deploy visual solutions engineered to capture attention and convey messages with absolute clarity across corporate, retail, education, and public environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <SolutionBox
              icon={<Monitor className="w-8 h-8 text-red-600" />}
              title="Interactive Displays"
              description="Advanced touchscreen systems that enable dynamic engagement, real-time collaboration, and immersive user experiences across any environment."
            />
            <SolutionBox
              icon={<Layers className="w-8 h-8 text-red-600" />}
              title="Video Wall Systems"
              description="Large-format display arrays delivering stunning visual impact with seamless integration, intelligent content management, and remote control capabilities."
            />
            <SolutionBox
              icon={<Network className="w-8 h-8 text-red-600" />}
              title="Content Management"
              description="Sophisticated CMS platforms enabling real-time updates, scheduling, and centralized control of all display content across multiple locations."
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
                Our Approach
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                Systematic integration methodology
              </h2>

              <p className="text-sm text-gray-600 font-light mb-6">
                Every installation follows our proven four-phase methodology, ensuring seamless integration with existing IT infrastructure while maintaining operational continuity and minimizing disruption.
              </p>

              <div className="space-y-4">
                <PhaseItem 
                  number="01"
                  title="Assessment & Planning"
                  description="Comprehensive site analysis, requirements gathering, and custom solution design"
                />
                <PhaseItem 
                  number="02"
                  title="Pre-Installation Preparation"
                  description="Infrastructure readiness verification, equipment testing, and logistics coordination"
                />
                <PhaseItem 
                  number="03"
                  title="Deployment & Configuration"
                  description="Professional installation, system configuration, and integration with existing infrastructure"
                />
                <PhaseItem 
                  number="04"
                  title="Testing & Handover"
                  description="Rigorous quality assurance, staff training, and comprehensive documentation delivery"
                />
              </div>
            </div>

            <div>
              <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
                Key Benefits
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                Why choose Rawabit Networks
              </h2>

              <div className="bg-[#F5F7FB] rounded-xl p-6">
                <div className="space-y-5">
                  <BenefitItem 
                    icon={<Shield className="w-5 h-5 text-green-600" />}
                    title="Zero Downtime Deployment"
                    description="Strategic installation scheduling ensures business operations continue uninterrupted"
                  />
                  <BenefitItem 
                    icon={<Target className="w-5 h-5 text-blue-600" />}
                    title="Custom Configuration"
                    description="Every system tailored to your specific operational requirements and workflow"
                  />
                  <BenefitItem 
                    icon={<Zap className="w-5 h-5 text-purple-600" />}
                    title="Rapid Deployment"
                    description="Efficient project execution with typical installations completed within 48-72 hours"
                  />
                  <BenefitItem 
                    icon={<Award className="w-5 h-5 text-orange-600" />}
                    title="Certified Technicians"
                    description="Industry-certified experts with extensive experience across all major platforms"
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
              Integration Capabilities
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Seamless connectivity across platforms
            </h2>
            <p className="text-sm text-gray-300 font-light max-w-3xl mx-auto">
              Our integration expertise spans the complete technology stack, enabling unified operation across diverse systems, platforms, and vendor ecosystems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CapabilityCard 
              title="Network Infrastructure"
              items={["Enterprise Networks", "VLANs & Subnets", "Load Balancers", "Network Security"]}
            />
            <CapabilityCard 
              title="Cloud Platforms"
              items={["AWS Integration", "Azure Services", "Google Cloud", "Hybrid Cloud"]}
            />
            <CapabilityCard 
              title="Business Systems"
              items={["CRM Integration", "ERP Systems", "Database Connectivity", "API Development"]}
            />
            <CapabilityCard 
              title="Security Systems"
              items={["Access Control", "Video Surveillance", "Identity Management", "SIEM Integration"]}
            />
          </div>
        </div>
      </section>

      {/* ================= PROCESS TIMELINE ================= */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              Installation Timeline
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              From concept to completion
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-200"></div>
            
            <div className="space-y-8">
              <TimelineStep 
                day="Day 1-3"
                title="Site Survey & Planning"
                description="Detailed assessment of installation site, infrastructure evaluation, and project planning"
              />
              <TimelineStep 
                day="Day 4-5"
                title="Equipment Preparation"
                description="Hardware configuration, software setup, and pre-installation testing in controlled environment"
              />
              <TimelineStep 
                day="Day 6-7"
                title="On-Site Installation"
                description="Professional deployment, physical installation, cabling, and initial system configuration"
              />
              <TimelineStep 
                day="Day 8"
                title="Integration & Testing"
                description="System integration with existing infrastructure, comprehensive testing, and quality assurance"
              />
              <TimelineStep 
                day="Day 9"
                title="Training & Documentation"
                description="Staff training sessions, documentation delivery, and knowledge transfer"
              />
              <TimelineStep 
                day="Day 10"
                title="Go-Live & Support"
                description="System activation, final verification, and ongoing support engagement"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-white py-20 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose Rawabit Networks
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              Industry-leading expertise in installation and system integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#F5F7FB] border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">Certified Excellence</h3>
              </div>
              <p className="text-gray-600">
                Factory-certified technicians with proven expertise across all major vendor platforms and industry standards.
              </p>
            </div>

            <div className="bg-[#F5F7FB] border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">Rapid Deployment</h3>
              </div>
              <p className="text-gray-600">
                Streamlined processes and expert project management ensure quick turnaround without compromising quality.
              </p>
            </div>

            <div className="bg-[#F5F7FB] border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">Comprehensive Support</h3>
              </div>
              <p className="text-gray-600">
                Ongoing maintenance, 24/7 technical support, and proactive monitoring to ensure optimal system performance.
              </p>
            </div>
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

function TimelineStep({ day, title, description }: { day: string; title: string; description: string }) {
  return (
    <div className="relative flex gap-6 items-start">
      <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-full border-4 border-[#F5F7FB] flex items-center justify-center z-10">
        <span className="text-xs font-light text-white">{day}</span>
      </div>
      <div className="flex-1 pt-2">
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-600 font-light">{description}</p>
      </div>
    </div>
  );
}