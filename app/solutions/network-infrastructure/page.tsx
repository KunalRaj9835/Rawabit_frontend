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

export default function NetworkInfrastructureSecurityPage() {
  return (
    <main className="w-full text-gray-900">

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
            Network Infrastructure & Security
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Secure, Scalable & High-Performance Network Solutions
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            We design, deploy, and secure enterprise-grade network infrastructures
            that deliver reliability, performance, and protection.
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
              Enterprise Network Infrastructure Built for the Future
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              At <strong>Rawabit Networks</strong>, we engineer resilient,
              scalable, and secure network infrastructures that support
              mission-critical operations.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From core routing and switching to zero-trust security models, our
              solutions are designed for long-term growth.
            </p>
          </div>

          <SlideIn direction="right">
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
          <SlideIn direction="left">
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
              Security First
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Integrated Security at Every Layer
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We apply defense-in-depth strategies to protect users, devices,
              applications, and data from modern cyber threats.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Security controls are embedded directly into the network fabric
              without compromising performance.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Our Network & Security Services
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            End-to-end solutions to design, secure, and manage enterprise
            networks.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Card */}
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Network className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">
                Network Design & Architecture
              </h3>
            </div>
            <p className="text-gray-600">
              LAN, WAN, and SD-WAN architectures engineered for scalability,
              redundancy, and low latency.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">
                Routing & Switching
              </h3>
            </div>
            <p className="text-gray-600">
              Enterprise-grade routing and switching for reliable, high-speed
              connectivity.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">
                Firewall & Threat Protection
              </h3>
            </div>
            <p className="text-gray-600">
              Advanced firewalls, IPS, and threat detection systems to protect
              critical assets.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">
                Zero Trust Access Control
              </h3>
            </div>
            <p className="text-gray-600">
              Identity-driven security ensuring only verified users and devices
              gain access.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Cpu className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">
                Network Monitoring
              </h3>
            </div>
            <p className="text-gray-600">
              Real-time monitoring and performance optimization to ensure peak
              efficiency.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Headphones className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">
                Managed Network Services
              </h3>
            </div>
            <p className="text-gray-600">
              24/7 operations, incident response, and lifecycle management.
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
            Proven expertise, security-first architecture, and future-ready
            design.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">
                Expert Engineering Team
              </h3>
            </div>
            <p className="text-gray-600">
              Certified professionals with deep enterprise networking experience.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">
                Security-Driven Design
              </h3>
            </div>
            <p className="text-gray-600">
              Security and compliance embedded into every solution.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">
                Future-Ready Infrastructure
              </h3>
            </div>
            <p className="text-gray-600">
              Architectures built to evolve with cloud and emerging technologies.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}