"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1b1f2a] text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Solutions */}
        <div>
          <h4 className="text-white text-lg font-light mb-6">Solutions</h4>
          <ul className="space-y-3 text-sm">
            <li>Next Generation Networking</li>
            <li>Enterprise Mobility</li>
            <li>Collaboration</li>
            <li>Network Security</li>
            <li>Data Center</li>
            <li>Microsoft Solutions</li>
            
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-lg font-light mb-6">Services</h4>
          <ul className="space-y-3 text-sm">
            <li>Maintenance & Support</li>
            <li>Deployment & Integration</li>
            <li>Consulting & Design</li>
            <li>Procurement & Logistics</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white text-lg font-light mb-6">Company</h4>
          <ul className="space-y-3 text-sm">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Partners</li>
            <li>Awards & Accreditations</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-light mb-6">Get In Touch</h4>
          <p className="text-sm leading-relaxed">
            King Abdul Aziz Street,<br />
            Opp. ANB Regional Office<br />
            Post Box 2320, Al Khobar 31952<br />
            Saudi Arabia
          </p>

          <p className="mt-4 text-sm">
            Tel: +966 9200 33 189<br />
            Email: info@rawabitnetworks.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <SocialIcon icon={<Facebook />} />
            <SocialIcon icon={<Twitter />} />
            <SocialIcon icon={<Youtube />} />
            <SocialIcon icon={<Linkedin />} />
            <SocialIcon icon={<Instagram />} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2025 Rawabit Networks. All rights reserved.</p>
        
      </div>
    </footer>
  );
}

/* ---------- Small Component ---------- */

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition cursor-pointer">
      {icon}
    </div>
  );
}
