import React from "react";
import { Presentation, Monitor, Mic, Camera, Volume2, Lightbulb, Cog, Zap } from "lucide-react";
import SlideIn from "@/components/SlideIn";
export default function AVMeetingRoomPage() {
  return (
    <main className="w-full text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            AV & Meeting Room Solutions
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Transform Meeting Rooms into Intelligent Collaboration Spaces
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Advanced Audio-Visual solutions that connect people, ideas, and technology effortlessly—enhancing engagement, clarity, and productivity.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Overview</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Modern Workplaces Demand Seamless Collaboration
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Rawabit Networks delivers advanced Meeting Room and Audio-Visual (AV) solutions that connect people, ideas, and technology effortlessly. From small huddle spaces to large conference rooms, every solution is designed to enhance engagement, clarity, and productivity through high-quality audio, video, and interactive technologies.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We transform ordinary meeting rooms into intelligent, high-performance collaboration environments that foster innovation and accelerate decision-making.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900" className="w-full h-[420px] object-cover" alt="Meeting Room" />
          </div>
        </div>
      </section>

      {/* INTELLIGENT CONTROL */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900" className="w-full h-[420px] object-cover" alt="Control Systems" />
          </div>
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Intelligent Control</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Simplify Complexity with Centralized Control
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              By integrating intelligent control systems, unified communication platforms, and cutting-edge AV equipment, Rawabit Networks creates environments that foster collaboration and innovation. Simplify complexity by centralizing control over lighting, climate, and media, allowing users to start any meeting with a single touch.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Each solution is tailored to meet specific business needs, ensuring reliability, ease of use, and a consistent user experience across all meeting spaces.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Comprehensive AV Solutions</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            From huddle spaces to boardrooms, we deliver exceptional audio-visual experiences.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Camera className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Video Systems</h3>
            </div>
            <p className="text-gray-600">High-definition cameras and displays for crystal-clear visual communication.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Mic className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Audio Solutions</h3>
            </div>
            <p className="text-gray-600">Professional-grade microphones and speakers for exceptional audio clarity.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Monitor className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Display Technology</h3>
            </div>
            <p className="text-gray-600">Interactive displays and video walls for impactful presentations.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Cog className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Control Systems</h3>
            </div>
            <p className="text-gray-600">One-touch control over all room systems for seamless meeting starts.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Lightbulb className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Smart Integration</h3>
            </div>
            <p className="text-gray-600">Integrated lighting, climate, and media control for optimal environments.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Volume2 className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Acoustic Design</h3>
            </div>
            <p className="text-gray-600">Professional acoustic treatment for perfect sound in every space.</p>
          </div>
        </div>
      </section>

      {/* WHY RAWABIT */}
      <section className="bg-[#eef3f7] py-24 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Rawabit Networks</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Complete support throughout the entire lifecycle of your collaboration investment.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Presentation className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Expert Design</h3>
            </div>
            <p className="text-gray-600">Comprehensive system design tailored to your specific business needs.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Seamless Integration</h3>
            </div>
            <p className="text-gray-600">Consistent user experience across all meeting spaces and devices.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Cog className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Ongoing Support</h3>
            </div>
            <p className="text-gray-600">Proactive maintenance and guaranteed long-term performance.</p>
          </div>
        </div>
      </section>
    </main>
  );
}