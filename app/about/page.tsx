import React from "react";

export default function AboutUsPage() {
  return (
    <main className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-[#eef3f7] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-[#0e355d] bg-white rounded">
            About Us
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl">
            Building Secure, Scalable, and Intelligent Technology Foundations
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            Rawabit Networks is a technology-focused networking and IT services
            company helping organizations design, deploy, and manage secure
            infrastructure that supports growth, performance, and reliability.
          </p>
        </div>
      </section>

      {/* ================= ABOUT COMPANY ================= */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text */}
          <div>
            <span className="inline-block mb-3 text-sm font-semibold text-red-600">
              About Company
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Professional Networking & Technology Experts
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              At <strong>Rawabit Networks</strong>, we specialize in designing and
              delivering secure, scalable, and high-performance IT infrastructure
              for businesses of all sizes. Our expertise includes advanced networking,
              cybersecurity, unified communications, and managed IT services.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We work closely with our clients to understand their challenges and
              provide solutions that are reliable, future-ready, and aligned with
              long-term business goals.
            </p>
          </div>

          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900"
              alt="IT Infrastructure"
              className="w-full h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-[#eef3f7] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            How We Work
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            We partner with organizations to deliver sustainable, secure, and
            high-impact technology solutions through a structured and transparent
            approach.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
            {[
              {
                title: "Innovation & Technology",
                text: "We leverage modern and proven technologies to ensure performance and scalability.",
              },
              {
                title: "Client-Centric Approach",
                text: "Every solution is tailored to your operational and business requirements.",
              },
              {
                title: "Security First",
                text: "Security is embedded at every layer of infrastructure and system design.",
              },
              {
                title: "Ongoing Support",
                text: "We provide continuous monitoring, optimization, and technical support.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR PURPOSE ================= */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block mb-6 text-sm font-semibold text-red-600">
            Our Purpose
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Insight to Action",
                text: "Turning complex challenges into practical technology solutions.",
              },
              {
                title: "Inspired Impact",
                text: "Delivering long-term value, not just quick fixes.",
              },
              {
                title: "Conquer Complexity",
                text: "Simplifying systems while maintaining enterprise-grade reliability.",
              },
              {
                title: "Lead with Integrity",
                text: "Operating with transparency, accountability, and trust.",
              },
              {
                title: "Grow Together",
                text: "Empowering clients and teams to scale with confidence.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-sm font-semibold text-red-600">
            Why Choose Us
          </span>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Reasons for Choosing Rawabit Networks
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Accredited Experts",
                text: "Certified professionals with proven industry experience.",
              },
              {
                title: "Reliable Execution",
                text: "Consistent delivery using proven methodologies and best practices.",
              },
              {
                title: "Enterprise-Grade Solutions",
                text: "Secure, scalable infrastructure built to perform and last.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-lg shadow"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
