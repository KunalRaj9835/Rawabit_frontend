import React from "react";
import { Activity, Eye, Server, Network, BarChart2, Clock, Radio, LineChart } from "lucide-react";
import SlideIn from "@/components/SlideIn";
export default function MonitorPage() {
  return (
    <main className="w-full text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            Step 01 - Monitor
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            24/7 Real-Time Infrastructure Monitoring
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            24/7 real-time infrastructure monitoring with continuous health checks and performance visibility to ensure optimal system operations.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Continuous Monitoring</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Complete Visibility Into Your Infrastructure
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Rawabit Networks provides comprehensive 24/7 monitoring of your entire IT infrastructure. Our advanced monitoring systems continuously track performance metrics, system health, and resource utilization across all your critical systems and applications.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With real-time dashboards and intelligent alerting, you gain complete visibility into your infrastructure's status, enabling proactive management and rapid response to potential issues before they impact your business.
            </p>
          </div>
          <SlideIn direction="right">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900" className="w-full h-[420px] object-cover" alt="Infrastructure Monitoring" />
          </div>
          </SlideIn>
        </div>
      </section>

      {/* HEALTH CHECKS */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900" className="w-full h-[420px] object-cover" alt="Health Monitoring" />
          </div>
          </SlideIn>
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Proactive Health Checks</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Continuous System Health Assessment
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Our monitoring platform performs continuous health checks across all infrastructure components, validating availability, performance, and functionality. Automated tests run around the clock to ensure every system meets defined service levels.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              By establishing comprehensive health baselines and tracking deviations, we identify potential issues early and maintain optimal system performance through proactive intervention and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* MONITORING CAPABILITIES */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Comprehensive Monitoring Coverage</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            End-to-end visibility across your entire technology stack and infrastructure.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Server className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Server Monitoring</h3>
            </div>
            <p className="text-gray-600">Track CPU, memory, disk, and system resources across all servers in real-time.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Network className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Network Performance</h3>
            </div>
            <p className="text-gray-600">Monitor bandwidth, latency, packet loss, and network device health.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Activity className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Application Health</h3>
            </div>
            <p className="text-gray-600">End-to-end application monitoring with synthetic transactions and user experience tracking.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <BarChart2 className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Performance Metrics</h3>
            </div>
            <p className="text-gray-600">Comprehensive KPI tracking with customizable dashboards and reporting.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Radio className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Service Availability</h3>
            </div>
            <p className="text-gray-600">Continuous uptime monitoring with instant alerts for service disruptions.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <LineChart className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Trend Analysis</h3>
            </div>
            <p className="text-gray-600">Historical data analysis to identify patterns and predict future needs.</p>
          </div>
        </div>
      </section>

      {/* MONITORING FEATURES */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Advanced Monitoring Features</h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-600">
              Powerful capabilities that provide deep insights into your infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Real-Time Dashboards</h3>
              <p className="text-gray-600 mb-4">Intuitive dashboards provide instant visibility into system status, performance metrics, and health indicators across your entire infrastructure.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Customizable views for different teams and roles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Live metric updates with sub-second refresh rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Interactive charts and graphs for detailed analysis</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Intelligent Alerting</h3>
              <p className="text-gray-600 mb-4">Smart alert system that notifies the right people at the right time, reducing noise while ensuring critical issues are never missed.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Threshold-based and anomaly detection alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Multi-channel notifications (email, SMS, Slack)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Escalation policies for critical incidents</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Historical Analysis</h3>
              <p className="text-gray-600 mb-4">Comprehensive data retention and analysis tools enable trend identification, capacity planning, and performance optimization over time.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Long-term data retention for compliance and analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Comparative analysis across time periods</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Automated reporting and trend visualization</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Integration Ready</h3>
              <p className="text-gray-600 mb-4">Seamless integration with existing tools, platforms, and workflows ensures monitoring data flows where you need it most.</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>API access for custom integrations and automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>ITSM and ticketing system integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>Third-party tool compatibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="bg-[#eef3f7] py-24 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">The Foundation of Reliable IT Operations</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Monitoring that enables proactive management and optimal performance.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Complete Visibility</h3>
            </div>
            <p className="text-gray-600">Real-time insights into every aspect of your infrastructure for informed decision-making.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Proactive Management</h3>
            </div>
            <p className="text-gray-600">Identify and address issues before they impact users or business operations.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Optimal Performance</h3>
            </div>
            <p className="text-gray-600">Continuous monitoring ensures systems operate at peak efficiency around the clock.</p>
          </div>
        </div>
      </section>
    </main>
  );
}