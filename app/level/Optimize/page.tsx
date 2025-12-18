import React from "react";
import { TrendingUp, Gauge, Zap, BarChart3, Settings, Target, Cpu, Database } from "lucide-react";
import SlideIn from "@/components/SlideIn";
export default function OptimizePage() {
  return (
    <main className="w-full text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            Step 04 - Optimize
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Continuous Performance Optimization & Capacity Planning
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Continuous tuning, capacity optimization, and performance improvements driven by analytics to ensure your infrastructure operates at peak efficiency.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Performance Excellence</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Maximize Efficiency Through Data-Driven Optimization
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Rawabit Networks continuously analyzes your infrastructure performance to identify optimization opportunities. Our data-driven approach ensures your systems operate at peak efficiency while reducing costs and maximizing resource utilization.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Through intelligent capacity planning, performance tuning, and proactive adjustments, we help you stay ahead of demand while maintaining optimal operational efficiency across all systems.
            </p>
          </div>
          <SlideIn direction="right">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900" className="w-full h-[420px] object-cover" alt="Performance Optimization" />
          </div>
          </SlideIn>
        </div>
      </section>

      {/* ANALYTICS DRIVEN */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900" className="w-full h-[420px] object-cover" alt="Analytics Dashboard" />
          </div>
          </SlideIn>
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Analytics-Driven Insights</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Intelligent Optimization Based on Real-Time Data
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Our optimization engine leverages advanced analytics and machine learning to identify performance bottlenecks, predict capacity needs, and recommend improvements. Every optimization decision is backed by comprehensive data analysis.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We continuously monitor key performance indicators, analyze trends, and implement optimizations that deliver measurable improvements in speed, efficiency, and cost-effectiveness.
            </p>
          </div>
        </div>
      </section>

      {/* OPTIMIZATION AREAS */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Comprehensive Optimization Strategy</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            End-to-end optimization across all aspects of your infrastructure and operations.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Gauge className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Performance Tuning</h3>
            </div>
            <p className="text-gray-600">Fine-tune systems for maximum speed and responsiveness across all workloads.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Capacity Planning</h3>
            </div>
            <p className="text-gray-600">Forecast future needs and optimize resource allocation proactively.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Cost Optimization</h3>
            </div>
            <p className="text-gray-600">Reduce operational costs while maintaining or improving performance levels.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Cpu className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Resource Utilization</h3>
            </div>
            <p className="text-gray-600">Maximize efficiency of compute, storage, and network resources.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Settings className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Configuration Management</h3>
            </div>
            <p className="text-gray-600">Optimize system configurations for peak performance and reliability.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Trend Analysis</h3>
            </div>
            <p className="text-gray-600">Identify patterns and predict optimization opportunities before they're needed.</p>
          </div>
        </div>
      </section>

      {/* KEY OUTCOMES */}
      <section className="bg-[#eef3f7] py-24 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Measurable Business Impact</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Optimization that delivers tangible results for your organization.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Enhanced Performance</h3>
            </div>
            <p className="text-gray-600">Faster response times, improved throughput, and better user experiences across all systems.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Proactive Planning</h3>
            </div>
            <p className="text-gray-600">Stay ahead of capacity needs with predictive analytics and intelligent forecasting.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Continuous Improvement</h3>
            </div>
            <p className="text-gray-600">Ongoing optimization ensures your infrastructure evolves with your business needs.</p>
          </div>
        </div>
      </section>
    </main>
  );
}