import React from "react";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  ShieldCheck,
  Activity,
  FileSearch,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
export default function CyberSecurityPage() {
  return (
    <main className="w-full text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            Cyber Security Solutions
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Protecting Critical Data & Infrastructure Against Evolving Threats
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Comprehensive security solutions designed to safeguard networks,
            applications, and endpoints with advanced threat detection and
            real-time monitoring.
          </p>
        </div>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              Overview
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Resilient Defenses for the Digital Age
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              In an era of increasing digital threats, protecting critical data
              and infrastructure is essential for every organization.{" "}
              <strong>Rawabit Networks</strong> delivers comprehensive Cyber
              Security Solutions designed to safeguard networks, applications,
              and endpoints against evolving cyber risks.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              By integrating advanced threat detection, real-time monitoring, and
              automated response systems, these solutions ensure continuous
              protection and compliance across all layers of the IT environment.
            </p>
          </div>
          <SlideIn direction="right">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900"
              className="w-full h-[420px] object-cover"
              alt="Cyber Security"
            />
          </div>
          </SlideIn>
        </div>
      </section>

      {/* ================= EXPERTISE ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900"
              className="w-full h-[420px] object-cover"
              alt="Security Architecture"
            />
          </div>
        </SlideIn>
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              Deep Expertise
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Proactive Security Architecture
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              With deep expertise in security architecture, risk assessment, and
              incident management, Rawabit Networks helps organizations build
              resilient defenses that adapt to emerging challenges.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Through partnerships with leading security vendors and a proactive
              approach to threat intelligence, these solutions empower businesses
              to operate confidently, maintain data integrity, and ensure
              uninterrupted operations in a secure digital ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Our Cyber Security Services
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Comprehensive protection across all layers of your IT environment.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Threat Detection</h3>
            </div>
            <p className="text-gray-600">
              Advanced threat detection systems that identify and respond to
              cyber risks in real-time.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Security Monitoring</h3>
            </div>
            <p className="text-gray-600">
              24/7 security monitoring and real-time threat intelligence across
              your entire infrastructure.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Endpoint Protection</h3>
            </div>
            <p className="text-gray-600">
              Comprehensive endpoint security to protect devices, applications,
              and user data.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Incident Response</h3>
            </div>
            <p className="text-gray-600">
              Rapid incident response and automated remediation to minimize
              impact and downtime.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <FileSearch className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Risk Assessment</h3>
            </div>
            <p className="text-gray-600">
              Comprehensive security audits and risk assessments to identify
              vulnerabilities.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Compliance Management</h3>
            </div>
            <p className="text-gray-600">
              Ensure continuous compliance with industry standards and regulatory
              requirements.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY RAWABIT ================= */}
      <section className="bg-[#eef3f7] py-24 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Why Choose Rawabit Networks
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Deep expertise, proactive defense, and trusted partnerships.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Expert Security Team</h3>
            </div>
            <p className="text-gray-600">
              Certified professionals with deep expertise in security
              architecture and threat management.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Proactive Approach</h3>
            </div>
            <p className="text-gray-600">
              Advanced threat intelligence and proactive monitoring to stay ahead
              of emerging risks.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Trusted Partnerships</h3>
            </div>
            <p className="text-gray-600">
              Partnerships with leading security vendors delivering cutting-edge
              protection.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}