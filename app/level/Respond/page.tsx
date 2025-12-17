import React from "react";
import { Siren, Clock, Shield, HeartPulse, Users, Wrench, CheckCircle, Phone } from "lucide-react";
import SlideIn from "@/components/SlideIn";
export default function RespondPage() {
  return (
    <main className="w-full text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1800')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            Step 03 - Respond
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Rapid Incident Response & Expert Remediation
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Rapid incident response and remediation with expert intervention to minimize downtime and restore normal operations quickly.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Swift Action</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              When Seconds Count, We Respond Immediately
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Rawabit Networks maintains a dedicated response team ready to address incidents 24/7. Our rapid response protocols ensure that critical issues are handled immediately by expert engineers who understand your infrastructure intimately.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From initial triage to complete resolution, we minimize downtime and business impact through proven incident management methodologies and deep technical expertise.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900" className="w-full h-[420px] object-cover" alt="Incident Response" />
          </div>
        </div>
      </section>

      {/* EXPERT INTERVENTION */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900" className="w-full h-[420px] object-cover" alt="Expert Team" />
          </div>
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Expert Remediation</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Skilled Engineers, Proven Processes
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Our response teams combine deep technical knowledge with years of real-world incident management experience. Every team member is trained in advanced troubleshooting, security remediation, and disaster recovery procedures.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We follow industry-standard incident response frameworks while maintaining the flexibility to adapt to your unique environment and business requirements, ensuring the fastest path to resolution.
            </p>
          </div>
        </div>
      </section>

      {/* RESPONSE CAPABILITIES */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Complete Incident Response Coverage</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Comprehensive capabilities to handle any incident, from minor issues to critical outages.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Siren className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Immediate Triage</h3>
            </div>
            <p className="text-gray-600">Fast assessment and prioritization of incidents based on business impact.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">24/7 Availability</h3>
            </div>
            <p className="text-gray-600">Round-the-clock response team ready to handle incidents at any time.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Security Incidents</h3>
            </div>
            <p className="text-gray-600">Specialized response for breaches, attacks, and security compromises.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <HeartPulse className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">System Recovery</h3>
            </div>
            <p className="text-gray-600">Rapid restoration of services to minimize downtime and data loss.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Wrench className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Root Cause Analysis</h3>
            </div>
            <p className="text-gray-600">Thorough investigation to prevent recurrence of similar incidents.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Post-Incident Review</h3>
            </div>
            <p className="text-gray-600">Detailed analysis and recommendations to strengthen your infrastructure.</p>
          </div>
        </div>
      </section>

      {/* RESPONSE PROCESS */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Structured Response Process</h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              A proven methodology that ensures consistent, effective incident resolution.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
              <div className="text-3xl font-bold text-red-600 mb-3">01</div>
              <h3 className="text-xl font-semibold mb-3">Detection & Alert</h3>
              <p className="text-gray-600">Automated systems detect issues and immediately notify response teams.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
              <div className="text-3xl font-bold text-red-600 mb-3">02</div>
              <h3 className="text-xl font-semibold mb-3">Assessment & Triage</h3>
              <p className="text-gray-600">Experts evaluate severity and determine appropriate response level.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
              <div className="text-3xl font-bold text-red-600 mb-3">03</div>
              <h3 className="text-xl font-semibold mb-3">Containment & Resolution</h3>
              <p className="text-gray-600">Swift action to contain damage and restore normal operations.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
              <div className="text-3xl font-bold text-red-600 mb-3">04</div>
              <h3 className="text-xl font-semibold mb-3">Analysis & Prevention</h3>
              <p className="text-gray-600">Identify root causes and implement measures to prevent recurrence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY ADVANTAGES */}
      <section className="bg-[#eef3f7] py-24 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Response That Protects Your Business</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Minimize impact and restore operations faster with expert incident response.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Minimal Downtime</h3>
            </div>
            <p className="text-gray-600">Rapid response reduces incident duration and minimizes business disruption.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Expert Support</h3>
            </div>
            <p className="text-gray-600">Skilled engineers with deep knowledge of your infrastructure and industry best practices.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Always Available</h3>
            </div>
            <p className="text-gray-600">24/7/365 coverage ensures help is always available when you need it most.</p>
          </div>
        </div>
      </section>
    </main>
  );
}