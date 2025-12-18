import React from "react";
import { Monitor, Tv, Smartphone, Cloud, Eye, Radio, TrendingUp, Zap,Cog } from "lucide-react";
import SlideIn from "@/components/SlideIn";
export default function DigitalDisplayPage() {
  return (
    <main className="w-full text-gray-900">
      {/* HERO */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1800')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            Digital Display Solutions
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Transform Spaces into Dynamic Visual Communication Platforms
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Innovative Digital Display Solutions that deliver high-impact visual experiences across corporate, retail, education, and public environments.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Overview</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Digital Displays Transforming Communication
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Digital displays are transforming the way organizations communicate, engage, and share information. Rawabit Networks provides innovative Digital Display Solutions that deliver dynamic, high-impact visual experiences across corporate, retail, education, and public environments.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From interactive touchscreens to large-format video walls, each solution is designed to capture attention and convey messages with clarity and precision.
            </p>
          </div>
          <SlideIn direction="right">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=900" className="w-full h-[420px] object-cover" alt="Digital Displays" />
          </div>
          </SlideIn>
        </div>
      </section>

      {/* INTELLIGENT CONTENT */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=900" className="w-full h-[420px] object-cover" alt="Content Management" />
          </div>
          </SlideIn>
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">Smart Technology</span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Advanced Content Management Systems
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              By combining advanced display technologies with intelligent content management systems, Rawabit Networks enables real-time updates, remote control, and seamless integration with existing IT infrastructure.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              These solutions enhance brand visibility, improve customer engagement, and create immersive digital experiences that drive interaction and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Complete Digital Display Solutions</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Transform stagnant spaces into dynamic, engaging, and information-rich communication platforms.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Tv className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Video Walls</h3>
            </div>
            <p className="text-gray-600">Large-format video walls for stunning visual impact in any environment.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Monitor className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Interactive Displays</h3>
            </div>
            <p className="text-gray-600">Touch-enabled displays for immersive, interactive user experiences.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Radio className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Digital Signage</h3>
            </div>
            <p className="text-gray-600">Dynamic signage solutions for corporate, retail, and public spaces.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Cloud className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Content Management</h3>
            </div>
            <p className="text-gray-600">Intelligent CMS for real-time updates and remote control of all displays.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Visual Experiences</h3>
            </div>
            <p className="text-gray-600">Immersive digital experiences that capture attention and drive engagement.</p>
          </div>
          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Mobile Integration</h3>
            </div>
            <p className="text-gray-600">Seamless integration with mobile devices for interactive control.</p>
          </div>
        </div>
      </section>

      {/* WHY RAWABIT */}
      <section className="bg-[#eef3f7] py-24 px-4 text-gray-900">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Rawabit Networks</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Powerful communication platforms that transform spaces into engaging environments.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Enhanced Engagement</h3>
            </div>
            <p className="text-gray-600">Improve customer engagement and brand visibility with dynamic content.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Seamless Integration</h3>
            </div>
            <p className="text-gray-600">Integration with existing IT infrastructure for smooth operation.</p>
          </div>
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Cog className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">Expert Support</h3>
            </div>
            <p className="text-gray-600">Complete design, installation, and maintenance for flawless performance.</p>
          </div>
        </div>
      </section>
    </main>
  );
}