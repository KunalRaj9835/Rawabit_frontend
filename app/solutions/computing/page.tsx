import React from "react";
import {
  Database,
  HardDrive,
  Cloud,
  Shield,
  Activity,
  Zap,
  Server,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";

export default function ComputingSolutionsPage() {
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
            Computing Solutions
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Data Storage That Takes You From Insights to Innovation
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Transform and enhance business performance with comprehensive storage
            solutions designed for scalability, intelligence, and seamless cloud
            integration.
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
              Enterprise-Class Data Storage Infrastructure
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Unlock the full value of data from edge to cloud while meeting
              evolving business and technical requirements. Accelerate critical
              workloads from core to edge, minimize application outages, and
              optimize storage efficiency through advanced deduplication
              technologies.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With real-world experience and proven expertise,{" "}
              <strong>Rawabit Networks</strong> designs and builds
              enterprise-class data storage infrastructures that deliver
              exceptional performance, reliability, and resilience—no matter how
              complex the mission requirements.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=900"
              className="w-full h-[420px] object-cover"
              alt="Data Storage Infrastructure"
            />
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC APPROACH ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900"
              className="w-full h-[420px] object-cover"
              alt="Strategic Solutions"
            />
          </div>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              Strategic Partnerships
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Elite Technology Partnerships
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              At Rawabit Networks, we don't just offer technology—we deliver
              strategic, resilient solutions. By maintaining elite partnerships
              with the world's leading and most respected technology vendors, we
              bring cutting-edge innovation directly to your organization.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our expert team specializes in helping you design, build, and
              proactively manage comprehensive data environments with guaranteed
              data availability to eliminate downtime and rapid disaster recovery.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Comprehensive Computing Solutions
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            End-to-end data storage and management solutions for enterprise
            performance.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Data Storage</h3>
            </div>
            <p className="text-gray-600">
              Sophisticated systems for robust data storage, ensuring high-speed
              access and integrity across all environments.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Data Backup</h3>
            </div>
            <p className="text-gray-600">
              Seamless data backup protocols for absolute security and peace of
              mind.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Activity className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Data Availability</h3>
            </div>
            <p className="text-gray-600">
              Guaranteed data availability to eliminate downtime and maintain
              business continuity.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Disaster Recovery</h3>
            </div>
            <p className="text-gray-600">
              Rapid disaster recovery environments to protect critical business
              operations.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Cloud className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Cloud Integration</h3>
            </div>
            <p className="text-gray-600">
              Seamless integration from edge to cloud, optimizing data flow and
              accessibility.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <HardDrive className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Storage Optimization</h3>
            </div>
            <p className="text-gray-600">
              Advanced deduplication technologies to maximize storage efficiency
              and reduce costs.
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
            Proven expertise, strategic partnerships, and resilient solutions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Server className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">
                Enterprise-Class Infrastructure
              </h3>
            </div>
            <p className="text-gray-600">
              Exceptional performance, reliability, and resilience for complex
              mission requirements.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Proven Expertise</h3>
            </div>
            <p className="text-gray-600">
              Real-world experience in designing and managing comprehensive data
              environments.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Cutting-Edge Innovation</h3>
            </div>
            <p className="text-gray-600">
              Elite partnerships with world-leading technology vendors bring the
              latest innovations.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}