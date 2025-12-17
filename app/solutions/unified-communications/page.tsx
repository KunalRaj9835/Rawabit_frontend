import React from "react";
import {
  Video,
  MessageSquare,
  Users,
  Smartphone,
  Headphones,
  Zap,
  Globe,
  Shield,
} from "lucide-react";
import SlideIn from "@/components/SlideIn";
export default function UnifiedCommunicationsPage() {
  return (
    <main className="w-full text-gray-900">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] flex items-center bg-center bg-cover bg-no-repeat px-4 md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            Unified Communications
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Transform Every Business Interaction with Unified Communications
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Streamline communication and accelerate decision-making with a single, 
            comprehensive platform built for the modern enterprise.
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
              Unified Communications Platform for Maximum Agility
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Transform and streamline every business interaction with a single, 
              comprehensive communications platform designed for maximum agility. 
              We replace fragmented tools with an integrated experience that simplifies 
              complex workflows and accelerates operational pace.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Unlock the full potential of your entire team, regardless of location or device. 
              Our platform ensures seamless user experience across desktops, mobiles, and meeting rooms, 
              directly addressing the evolving demands of hybrid work and remote productivity.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900"
              className="w-full h-[420px] object-cover"
              alt="Unified Communications"
            />
          </div>
        </div>
      </section>

      {/* ================= SEAMLESS EXPERIENCE ================= */}
      <section className="bg-gray-50 py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900"
              className="w-full h-[420px] object-cover"
              alt="Team Collaboration"
            />
          </div>

          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              Enterprise Excellence
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Enterprise-Class Communication Infrastructure
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              With real-world experience and proven expertise, Rawabit Networks designs 
              and builds enterprise-class Unified Communications infrastructures that deliver 
              exceptional clarity, reliability, and security—no matter how complex the operational requirements.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              In partnership with the world's most respected technology vendors, we help organizations 
              design, build, and manage robust communication and collaboration environments that ensure 
              team cohesion and business velocity.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Comprehensive UC Solutions
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Minimize communication friction and optimize every workflow through 
            an advanced, integrated suite of communication tools.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Video className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Video Conferencing</h3>
            </div>
            <p className="text-gray-600">
              High-quality video meetings with seamless integration across all devices and platforms.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <MessageSquare className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Team Messaging</h3>
            </div>
            <p className="text-gray-600">
              Instant messaging and collaboration tools for real-time team communication.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Smartphone className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Mobility Solutions</h3>
            </div>
            <p className="text-gray-600">
              Work from anywhere with full-featured mobile applications and seamless device switching.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Headphones className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Voice Integration</h3>
            </div>
            <p className="text-gray-600">
              Enterprise telephony integrated with collaboration tools for unified communications.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Globe className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Global Connectivity</h3>
            </div>
            <p className="text-gray-600">
              Connect teams across locations with reliable, low-latency global infrastructure.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-white hover:border-red-600">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-semibold">Security & Compliance</h3>
            </div>
            <p className="text-gray-600">
              Enterprise-grade security with encryption and compliance features built-in.
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
            Accelerate decision-making and ensure every conversation drives success.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">
                Maximum Agility
              </h3>
            </div>
            <p className="text-gray-600">
              Quickly adapt to market shifts and scale effortlessly with our flexible platform.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">
                Higher Engagement
              </h3>
            </div>
            <p className="text-gray-600">
              Foster higher engagement and faster project turnaround through instant collaboration.
            </p>
          </div>

          <div className="p-8 bg-white border border-gray-900/20 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-red-600">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-red-600" />
              <h3 className="text-xl font-semibold">
                Proven Expertise
              </h3>
            </div>
            <p className="text-gray-600">
              Real-world experience delivering exceptional clarity, reliability, and security.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}