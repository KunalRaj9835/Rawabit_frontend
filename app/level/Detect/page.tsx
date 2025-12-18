import React from "react";
import { Shield, AlertTriangle, Eye, Bell, Activity, Brain, Search, Lock } from "lucide-react";
import SlideIn from "@/components/SlideIn";
export default function DetectPage() {
  return (
    <main className="w-full text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1800')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            Step 02 - Detect
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Intelligent Threat Detection & Risk Analysis
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Automated anomaly, risk, and threat detection using intelligent alerts and behavior analysis to protect your infrastructure before issues escalate.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Proactive Detection</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Stay Ahead of Threats with AI-Powered Insights
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Rawabit Networks employs advanced detection mechanisms that continuously analyze your infrastructure for anomalies, security threats, and performance risks. Our intelligent systems learn normal behavior patterns and instantly flag deviations that could indicate potential problems.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              By combining machine learning algorithms with expert analysis, we identify threats before they impact your operations, enabling rapid response and minimizing business disruption.
            </p>
          </div>
          <SlideIn direction="right">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900" className="w-full h-[420px] object-cover" alt="Threat Detection" />
          </div>
          </SlideIn>
        </div>
      </section>

      {/* BEHAVIOR ANALYSIS */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900" className="w-full h-[420px] object-cover" alt="Behavior Analysis" />
          </div>
          </SlideIn>
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Intelligent Analysis</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Advanced Behavior Analytics & Pattern Recognition
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Our detection systems utilize sophisticated behavior analysis to establish baselines and identify unusual patterns. Machine learning models continuously adapt to your environment, distinguishing between normal operational changes and genuine security threats.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Real-time correlation of events across your entire infrastructure provides comprehensive visibility, enabling us to detect complex, multi-stage attacks that traditional systems might miss.
            </p>
          </div>
        </div>
      </section>

      {/* DETECTION CAPABILITIES */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Comprehensive Detection Capabilities</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Multi-layered detection systems that identify threats at every level of your infrastructure.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Anomaly Detection</h3>
            </div>
            <p className="text-gray-600">Identify unusual patterns and deviations from normal behavior in real-time.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Security Threats</h3>
            </div>
            <p className="text-gray-600">Detect malware, intrusions, and unauthorized access attempts instantly.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Activity className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Performance Risks</h3>
            </div>
            <p className="text-gray-600">Identify capacity issues and performance degradation before impact.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Brain className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">AI-Powered Analysis</h3>
            </div>
            <p className="text-gray-600">Machine learning algorithms that adapt and improve detection accuracy.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Bell className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Intelligent Alerts</h3>
            </div>
            <p className="text-gray-600">Smart notifications that prioritize critical issues and reduce alert fatigue.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Search className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Deep Inspection</h3>
            </div>
            <p className="text-gray-600">Comprehensive analysis of network traffic and system behavior.</p>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="bg-[#eef3f7] py-24 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Detection That Makes a Difference</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Advanced capabilities that protect your business from emerging threats.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">24/7 Visibility</h3>
            </div>
            <p className="text-gray-600">Continuous monitoring and analysis of all infrastructure components around the clock.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Reduced Risk</h3>
            </div>
            <p className="text-gray-600">Early detection minimizes exposure time and potential damage from security incidents.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Smart Automation</h3>
            </div>
            <p className="text-gray-600">Automated detection reduces manual effort while improving accuracy and response time.</p>
          </div>
        </div>
      </section>
    </main>
  );
}