import React from "react";
import {
  Cpu,
  Users,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import ClientShowcase from "@/components/Patners";


export default function AboutUsPage() {
  return (
    <main className="w-full text-gray-900">

      {/* ================= HERO (PARALLAX) ================= */}
      <section
        className="
          relative
          h-[90vh]
          flex
          items-center
          bg-center
          bg-cover
          bg-no-repeat
          px-4
          md:bg-fixed
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1800')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <span className="inline-block mb-5 px-4 py-1 text-sm font-medium bg-white/20 rounded">
            About Us
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold max-w-4xl leading-tight">
            Professional Networking & Technology Experts
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-200">
            Building secure, scalable, and intelligent IT infrastructure that
            empowers modern enterprises to grow with confidence.
          </p>
        </div>
      </section>

      {/* ================= ABOUT COMPANY ================= */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold text-red-600">
              About Company
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold">
              Reliable. Secure. Future-Ready.
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              At <strong>Rawabit Networks</strong>, we specialize in designing,
              deploying, and managing enterprise-grade networking and IT
              infrastructure. Our solutions are built to ensure performance,
              security, and long-term scalability.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              From advanced network architecture to cybersecurity and managed
              services, we help organizations thrive in an increasingly
              connected digital world.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900"
              alt="Data center engineer"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-[#eef3f7] py-24 px-4">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-bold">
      How We Work
    </h2>

    <p className="mt-4 max-w-3xl mx-auto text-gray-600">
      A structured, transparent, and security-first approach to delivering
      technology solutions that last.
    </p>

    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
      {[
        {
          title: "Modern Technology",
          text: "We use proven and modern technologies designed for performance and scalability.",
          icon: Cpu,
        },
        {
          title: "Client Focused",
          text: "Every solution is aligned with your business goals and operations.",
          icon: Users,
        },
        {
          title: "Security First",
          text: "Security is embedded into every layer of infrastructure we design.",
          icon: ShieldCheck,
        },
        {
          title: "Continuous Support",
          text: "Ongoing monitoring, optimization, and expert support.",
          icon: Headphones,
        },
      ].map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
          >
            {/* Title Row */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-50">
                <Icon className="w-5 h-5 text-red-600" />
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-600">
              {item.text}
            </p>
          </div>
        );
      })}
    </div>
  </div>

</section>
  <ClientShowcase />
      {/* ================= OUR PURPOSE ================= */}
     

    </main>
  );
}
