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

export default function DesignPage() {
  return (
    <main className="w-full text-gray-900">

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
              Consulting & Design
            </p>

            <h1 className="text-3xl md:text-5xl font-extralight leading-tight mb-6">
              Strategic Insight & Technical Expertise for Future-Ready Infrastructure
            </h1>

            <p className="text-base md:text-lg text-gray-600 font-light mb-5 leading-relaxed">
              Rawabit Networks provides organizations with the strategic insight and technical expertise needed to build efficient, future-ready IT infrastructures. Through a collaborative approach, each project begins with a thorough assessment of business goals, operational challenges, and technology requirements.
            </p>

            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
              Every solution is tailored to align with organizational objectives while maximizing performance, scalability, and cost-effectiveness. From network architecture to digital transformation strategies, we craft designs that deliver reliability, flexibility, and seamless functionality.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONSULTING APPROACH ================= */}
      <section className="w-full bg-[#F5F7FB] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              Our Approach
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Collaborative consulting methodology
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-light max-w-3xl">
              We transform complex requirements into practical, innovative designs that support long-term growth through a proven four-phase consulting process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ConsultingPhase
              icon={<Compass className="w-8 h-8 text-red-600" />}
              number="01"
              title="Discovery"
              description="Comprehensive assessment of business goals, operational challenges, and technology requirements"
            />
            <ConsultingPhase
              icon={<Lightbulb className="w-8 h-8 text-red-600" />}
              number="02"
              title="Strategy"
              description="Development of tailored roadmap aligning technology solutions with organizational objectives"
            />
            <ConsultingPhase
              icon={<FileText className="w-8 h-8 text-red-600" />}
              number="03"
              title="Design"
              description="Detailed architecture and system design ensuring scalability, security, and performance"
            />
            <ConsultingPhase
              icon={<CheckCircle className="w-8 h-8 text-red-600" />}
              number="04"
              title="Implementation"
              description="Execution oversight and validation to ensure successful deployment and knowledge transfer"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREAS ================= */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="uppercase text-xs tracking-[0.25em] text-red-500 mb-3">
              Service Areas
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Comprehensive design expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceBox
              icon={<Network className="w-8 h-8 text-red-600" />}
              title="Network Architecture"
              description="Design of robust, scalable network infrastructures optimized for performance, security, and reliability across enterprise environments."
            />
            <ServiceBox
              icon={<Layers className="w-8 h-8 text-red-600" />}
              title="System Integration"
              description="Seamless integration strategies connecting disparate systems, platforms, and applications into unified, efficient ecosystems."
            />
            <ServiceBox
              icon={<Shield className="w-8 h-8 text-red-600" />}
              title="Security Framework"
              description="Comprehensive security architecture design implementing defense-in-depth strategies and compliance requirements."
            />
            <ServiceBox
              icon={<Database className="w-8 h-8 text-red-600" />}
              title="Data Infrastructure"
              description="Strategic data architecture planning including storage, backup, disaster recovery, and business continuity solutions."
            />
            <ServiceBox
              icon={<TrendingUp className="w-8 h-8 text-red-600" />}
              title="Digital Transformation"
              description="Technology modernization strategies leveraging cloud, automation, and emerging technologies to drive business innovation."
            />
            <ServiceBox
              icon={<Monitor className="w-8 h-8 text-red-600" />}
              title="Infrastructure Design"
              description="Complete IT infrastructure planning from data centers to edge computing, ensuring optimal resource utilization."
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
                Design Principles
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                Building technology foundations that last
              </h2>

              <p className="text-sm text-gray-300 font-light mb-6 leading-relaxed">
                Every design we create adheres to core principles that ensure your infrastructure remains robust, adaptable, and aligned with business objectives as your organization evolves.
              </p>

              <div className="space-y-4">
                <PrincipleItem 
                  title="Scalability by Design"
                  description="Architectures built to grow seamlessly with your business demands"
                />
                <PrincipleItem 
                  title="Security-First Approach"
                  description="Integrated security at every layer, not as an afterthought"
                />
                <PrincipleItem 
                  title="Performance Optimization"
                  description="Efficient resource utilization maximizing ROI and operational efficiency"
                />
                <PrincipleItem 
                  title="Future-Ready Technology"
                  description="Forward-thinking designs supporting emerging technologies and standards"
                />
              </div>
            </div>

            <div className="bg-white/5 border border-white/20 rounded-xl p-8 backdrop-blur-sm">
              <h3 className="text-xl font-light mb-6 text-red-400">Consulting Deliverables</h3>
              
              <div className="space-y-4">
                <DeliverableItem text="Comprehensive infrastructure assessment reports" />
                <DeliverableItem text="Detailed architecture diagrams and documentation" />
                <DeliverableItem text="Technology roadmap and implementation timeline" />
                <DeliverableItem text="Cost analysis and budget projections" />
                <DeliverableItem text="Risk assessment and mitigation strategies" />
                <DeliverableItem text="Vendor evaluation and recommendations" />
                <DeliverableItem text="Performance benchmarks and KPIs" />
                <DeliverableItem text="Training materials and knowledge transfer" />
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
              Collaborative Process
            </p>
            <h2 className="text-3xl font-extralight mb-4">
              Working together for optimal outcomes
            </h2>
            <p className="text-sm text-gray-600 font-light max-w-3xl">
              Our experienced consultants and engineers partner closely with your team throughout the entire engagement, ensuring alignment and knowledge transfer at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <ProcessCard
              icon={<Users className="w-6 h-6 text-blue-600" />}
              title="Stakeholder Engagement"
              description="Regular communication with key stakeholders ensures solutions address real business needs and gain organizational buy-in."
              color="bg-blue-50"
            />

            <ProcessCard
              icon={<Target className="w-6 h-6 text-green-600" />}
              title="Requirements Alignment"
              description="Continuous validation of technical specifications against business objectives to maintain project focus and relevance."
              color="bg-green-50"
            />

            <ProcessCard
              icon={<Settings className="w-6 h-6 text-purple-600" />}
              title="Iterative Refinement"
              description="Agile approach with regular review cycles allowing for adjustments based on feedback and changing requirements."
              color="bg-purple-50"
            />

            <ProcessCard
              icon={<Award className="w-6 h-6 text-orange-600" />}
              title="Quality Assurance"
              description="Rigorous validation and testing protocols ensure designs meet industry standards and performance expectations."
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
                The Rawabit Advantage
              </p>
              <h2 className="text-3xl font-extralight mb-6">
                Transforming vision into reality
              </h2>

              <p className="text-base text-gray-600 font-light mb-6 leading-relaxed">
                With a team of experienced consultants and engineers, Rawabit Networks transforms complex requirements into practical, innovative designs that support long-term growth. The result is a strong technological foundation that empowers businesses to operate smarter and adapt quickly to evolving market demands.
              </p>

              <div className="space-y-3">
                <ValuePoint text="15+ years of infrastructure design experience" />
                <ValuePoint text="Certified architects across major technology platforms" />
                <ValuePoint text="Proven track record across diverse industries" />
                <ValuePoint text="Vendor-neutral recommendations focused on your needs" />
                <ValuePoint text="Post-implementation support and optimization" />
              </div>
            </div>

            <div className="space-y-6">
              <StatCard
                number="250+"
                label="Infrastructure Designs Delivered"
                icon={<Layers className="w-8 h-8 text-red-600" />}
              />
              <StatCard
                number="98%"
                label="Client Satisfaction Rate"
                icon={<Award className="w-8 h-8 text-green-600" />}
              />
              <StatCard
                number="35%"
                label="Average Cost Optimization"
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
              Why Choose Rawabit Networks
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              Strategic partners in your digital transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">Innovation Focus</h3>
              </div>
              <p className="text-gray-600">
                Forward-thinking designs incorporating emerging technologies and industry best practices for competitive advantage.
              </p>
            </div>

            <div className="bg-white border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">Collaborative Approach</h3>
              </div>
              <p className="text-gray-600">
                Partnership-based methodology ensuring your team is engaged, informed, and empowered throughout the process.
              </p>
            </div>

            <div className="bg-white border border-gray-900/20 rounded-xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-red-600" />
                <h3 className="text-xl font-semibold">Business-Aligned</h3>
              </div>
              <p className="text-gray-600">
                Every recommendation directly supports your business objectives, operational efficiency, and long-term strategic goals.
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