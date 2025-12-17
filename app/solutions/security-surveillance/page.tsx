import React from "react";
import { Camera, Lock, Bell, Radio, Eye, Shield, AlertTriangle, Activity } from "lucide-react";
import SlideIn from "@/components/SlideIn";
export default function SecuritySurveillancePage() {
  return (
    <main className="w-full text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1800')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            Security & Surveillance
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Comprehensive Low Current Systems for Safety & Automation
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Integrated security, surveillance, and building automation systems that enhance safety, efficiency, and operational control.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Overview</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Essential Systems for Modern Buildings
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Low Current Systems are essential for ensuring safety, communication, and automation within modern buildings. Rawabit Networks designs and implements comprehensive Low Current System solutions that integrate seamlessly with existing infrastructure.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              These systems include CCTV surveillance, access control, fire alarm, public address, and intercom systems—each engineered to enhance security, efficiency, and operational control across commercial, residential, and industrial environments.
            </p>
          </div>
          <SlideIn direction="right">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1558002038-1055907df827?w=900" className="w-full h-[420px] object-cover" alt="Security Systems" />
          </div>
          </SlideIn>
        </div>
      </section>

      {/* INTELLIGENT INTEGRATION */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="left">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=900" className="w-full h-[420px] object-cover" alt="Integrated Systems" />
          </div>
          </SlideIn>
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Intelligent Integration</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Resilient, Intelligent Building Environments
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              By combining advanced technologies with intelligent system design, Rawabit Networks delivers reliable, scalable, and energy-efficient solutions tailored to specific project requirements. Every installation is executed with precision to ensure optimal performance, ease of maintenance, and long-term value.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              These advanced LCS solutions empower organizations with enhanced situational awareness, improved response times during emergencies, and simplified operational control.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Full-Spectrum Low Current Systems</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Expertly engineered systems designed to enhance security, efficiency, and real-time operational control.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Camera className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">CCTV Surveillance</h3>
            </div>
            <p className="text-gray-600">Advanced video surveillance systems for comprehensive security monitoring.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Access Control</h3>
            </div>
            <p className="text-gray-600">Intelligent access management systems to secure facilities and track entry.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Bell className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Fire Alarm Systems</h3>
            </div>
            <p className="text-gray-600">Life safety systems for early detection and emergency response.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Radio className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Public Address</h3>
            </div>
            <p className="text-gray-600">Clear communication systems for announcements and emergency alerts.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Intercom Systems</h3>
            </div>
            <p className="text-gray-600">Integrated communication for seamless internal coordination.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Activity className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Building Automation</h3>
            </div>
            <p className="text-gray-600">Smart automation for energy efficiency and operational control.</p>
          </div>
        </div>
      </section>

      {/* WHY RAWABIT */}
      <section className="bg-[#eef3f7] py-24 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Rawabit Networks</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Create safer, smarter, and more connected spaces for the digital world.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Enhanced Security</h3>
            </div>
            <p className="text-gray-600">Comprehensive protection with advanced surveillance and access control.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Improved Response Times</h3>
            </div>
            <p className="text-gray-600">Faster emergency response with integrated alarm and communication systems.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Operational Control</h3>
            </div>
            <p className="text-gray-600">Simplified control and monitoring for efficient facility management.</p>
          </div>
        </div>
      </section>
    </main>
  );
}