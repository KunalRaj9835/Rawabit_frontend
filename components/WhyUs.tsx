"use client";

import React, { ReactNode } from "react";
import { Network, ShieldCheck, Users, Award, Zap, Headphones } from "lucide-react";

export default function WhyUs(): React.ReactNode {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9fafb] to-[#ffffff] -z-10"></div>

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-[2.5rem] font-light text-[#0e355d]">Why Choose Us</h2>
        <div className="h-1 w-20 bg-red-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Mission + Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-20 text-[#0e355d]">
        <Card title="Our Mission">
          To connect people and businesses through innovative technology that drives efficiency, 
          safety, and growth. We deliver secure, scalable, and high-performance IT infrastructure 
          tailored to businesses of all sizes.
        </Card>

        <Card title="Our Vision">
          To become the leading provider of networking and IT solutions in the region, recognized 
          for excellence in design, implementation, and support. We aim to empower organizations 
          with cutting-edge technology solutions.
        </Card>
      </div>

      {/* Core Values Title */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-light text-[#0e355d]">Six Reasons For People Choosing Us</h3>
        <div className="h-1 w-16 bg-red-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Core Values Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        <ValueCard
          icon={<ShieldCheck size={40} className="text-red-500 mx-auto" />}
          title="Quality Solutions"
          desc="We deliver enterprise-grade technology built to perform and last."
        />
        <ValueCard
          icon={<Users size={40} className="text-red-500 mx-auto" />}
          title="Accredited Experts"
          desc="Certified engineers with proven industry experience."
        />
        <ValueCard
          icon={<Award size={40} className="text-red-500 mx-auto" />}
          title="Trained Professionals"
          desc="A skilled team dedicated to delivering excellence every time."
        />
        <ValueCard
          icon={<Zap size={40} className="text-red-500 mx-auto" />}
          title="On-Time Delivery"
          desc="We respect your timelines and business priorities."
        />
        <ValueCard
          icon={<Headphones size={40} className="text-red-500 mx-auto" />}
          title="24/7 Support"
          desc="Fast, round-the-clock support to keep your systems running smoothly."
        />
        <ValueCard
          icon={<Network size={40} className="text-red-500 mx-auto" />}
          title="Reliable Infrastructure"
          desc="Robust, scalable solutions that grow with your business."
        />
      </div>

      {/* Stands Out Title */}
      <div className="text-center mb-10">
        <h3 className="text-2xl font-light text-[#0e355d]">Why Rawabit Networks Stands Out</h3>
        <div className="h-1 w-16 bg-red-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Stands Out Grid */}
      <div className="grid md:grid-cols-2 gap-8 text-[#0e355d]">
        <AdvantageCard title="Comprehensive IT Expertise">
          From network infrastructure to cybersecurity and unified communications, we provide 
          end-to-end solutions that cover all your technology needs.
        </AdvantageCard>

        <AdvantageCard title="Trusted by Leading Organizations">
          We work with businesses across industries including finance, healthcare, education, 
          and government—delivering reliable and secure solutions.
        </AdvantageCard>

        <AdvantageCard title="Certified Technology Provider">
          As a certified partner of leading brands, we ensure world-class implementation, 
          support, and compliance with international standards.
        </AdvantageCard>

        <AdvantageCard title="Tailored Solutions for Your Business">
          Whether you need network design, computing infrastructure, security systems, we customize 
          solutions to fit your unique requirements.
        </AdvantageCard>
      </div>
    </section>
  );
}

/* ----------------- COMPONENTS ------------------ */

interface CardProps {
  title: string;
  children: ReactNode;
}

function Card({ title, children }: CardProps): React.ReactNode {
  return (
    <div className="bg-white shadow-xl p-6 md:p-10 rounded-xl border border-black hover:shadow-2xl transition-all duration-300">
      <h3 className="text-3xl font-light text-red-500 mb-4">{title}</h3>
      <p className="leading-normal font-normal text-left md:text-left lg:text-justify hyphens-auto">
        {children}
      </p>
    </div>
  );
}

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

function ValueCard({ icon, title, desc }: ValueCardProps): React.ReactNode {
  return (
    <div className="bg-white shadow-md p-8 rounded-xl border border-black text-center hover:shadow-xl transition-all duration-300">
      {icon}
      <h4 className="text-xl font-light text-[#0e355d] mt-4 mb-2">{title}</h4>
      <p className="text-sm font-light leading-relaxed">{desc}</p>
    </div>
  );
}

interface AdvantageCardProps {
  title: string;
  children: ReactNode;
}

function AdvantageCard({ title, children }: AdvantageCardProps): React.ReactNode {
  return (
    <div className="bg-white p-8 rounded-xl border shadow-md hover:shadow-xl transition-all duration-300">
      <h4 className="text-xl font-light text-red-500 mb-3">{title}</h4>
      <p className="leading-relaxed font-light">{children}</p>
    </div>
  );
}