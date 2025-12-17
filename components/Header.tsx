"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

interface ArrowProps {
  isOpen: boolean;
}

const Arrow = ({ isOpen }: ArrowProps) => (
  <svg
    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

type MenuKey =
  | "services"
  | "solutions"
  | "services-mobile"
  | "solutions-mobile"
  | null;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);

  // Desktop menu hover timer
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleEnter = (menuName: MenuKey) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenMenu(menuName);
  };

  const handleLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), 200);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleMobileNavigate = () => {
    setOpenMenu(null);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center flex-shrink-0">
            <img src="/Rawabit-logo.webp" alt="Rawabit Networks" className="h-20 w-auto" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6 font-medium text-[#0e355d] text-sm">
              <a href="/" className="hover:text-[#e63946] transition-colors">
                Home
              </a>

              {/* SERVICES */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("services")}
                onMouseLeave={handleLeave}
              >
                <button className="hover:text-[#e63946] transition-colors flex items-center gap-1">
                  Services <Arrow isOpen={openMenu === "services"} />
                </button>

                <div
                  className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 w-64 transition-all duration-300 origin-top
                    ${
                      openMenu === "services"
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }
                  `}
                >
                  <a href="/services/managed-services" className="block py-2 hover:text-[#e63946] transition-colors">
                    Managed Services
                  </a>
                  <a href="/services/installation" className="block py-2 hover:text-[#e63946] transition-colors">
                    Installation and Integration
                  </a>
                  <a href="/services/design-consultation" className="block py-2 hover:text-[#e63946] transition-colors">
                    Design & Consultation
                  </a>
                </div>
              </div>

              {/* SOLUTIONS */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("solutions")}
                onMouseLeave={handleLeave}
              >
                <button className="hover:text-[#e63946] transition-colors flex items-center gap-1">
                  Solutions <Arrow isOpen={openMenu === "solutions"} />
                </button>

                <div
                  className={`absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg p-4 w-72 transition-all duration-300 origin-top
                    ${
                      openMenu === "solutions"
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }
                  `}
                >
                  <a href="/solutions/network-infrastructure" className="block py-2 hover:text-[#e63946] transition-colors">
                    Network Infrastructure & Security
                  </a>
                  <a href="/solutions/computing" className="block py-2 hover:text-[#e63946] transition-colors">
                    Computing Solutions
                  </a>
                  <a href="/solutions/cyber-security" className="block py-2 hover:text-[#e63946] transition-colors">
                    Cyber Security Solutions
                  </a>
                  <a href="/solutions/unified-communications" className="block py-2 hover:text-[#e63946] transition-colors">
                    Unified Communications
                  </a>
                  <a href="/solutions/av-meeting" className="block py-2 hover:text-[#e63946] transition-colors">
                    AV & Meeting Room Solutions
                  </a>
                  <a href="/solutions/digital-display" className="block py-2 hover:text-[#e63946] transition-colors">
                    Digital Display Solutions
                  </a>
                  <a href="/solutions/security-surveillance" className="block py-2 hover:text-[#e63946] transition-colors">
                    Security & Surveillance
                  </a>
                </div>
              </div>

              <a href="/about" className="hover:text-[#e63946] transition-colors">
                About
              </a>

              <a href="/contact-us" className="hover:text-[#e63946] transition-colors">
                Contact
              </a>
            </div>

            {/* Contact Info & Button */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
              <a
                href="tel:+966504142951"
                className="flex items-center gap-2 text-[#0e355d] hover:text-[#e63946] transition-colors text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>+966 50 414 2951</span>
              </a>

              <a
                href="/contact-us"
                className="px-6 py-2.5 bg-[#0e355d] text-white rounded-md hover:bg-[#e63946] transition-colors text-sm font-medium"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 flex flex-col gap-1.5 justify-center items-center w-10 h-10 bg-[#0e355d] rounded"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X size={20} className="text-white" strokeWidth={2.5} />
            ) : (
              <>
                <span className="w-5 h-0.5 bg-white"></span>
                <span className="w-5 h-0.5 bg-white"></span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white overflow-hidden transition-all duration-500
            ${menuOpen ? "max-h-[1000px] pb-6" : "max-h-0"}
          `}
        >
          <div className="flex flex-col gap-4 font-medium text-[#0e355d] text-sm pt-4">
            <a
              href="/"
              onClick={handleMobileNavigate}
              className="hover:text-[#e63946] transition-colors py-2"
            >
              Home
            </a>

            {/* SERVICES MOBILE */}
            <div>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "services-mobile" ? null : "services-mobile")
                }
                className="hover:text-[#e63946] transition-colors flex items-center justify-between w-full text-left py-2"
              >
                Services <Arrow isOpen={openMenu === "services-mobile"} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 pl-4
                  ${openMenu === "services-mobile" ? "max-h-80 mt-2" : "max-h-0"}
                `}
              >
                <a
                  href="/services/managed-services"
                  className="block py-2 hover:text-[#e63946] transition-colors"
                  onClick={handleMobileNavigate}
                >
                  Managed Services
                </a>
                <a
                  href="/services/installation"
                  className="block py-2 hover:text-[#e63946] transition-colors"
                  onClick={handleMobileNavigate}
                >
                  Installation and Integration
                </a>
                <a
                  href="/services/design-consultation"
                  className="block py-2 hover:text-[#e63946] transition-colors"
                  onClick={handleMobileNavigate}
                >
                  Design & Consultation
                </a>
              </div>
            </div>

            {/* SOLUTIONS MOBILE */}
            <div>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "solutions-mobile" ? null : "solutions-mobile")
                }
                className="hover:text-[#e63946] transition-colors flex items-center justify-between w-full text-left py-2"
              >
                Solutions <Arrow isOpen={openMenu === "solutions-mobile"} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 pl-4
                  ${openMenu === "solutions-mobile" ? "max-h-[500px] mt-2" : "max-h-0"}
                `}
              >
                <a
                  href="/solutions/network-infrastructure"
                  className="block py-2 hover:text-[#e63946] transition-colors"
                  onClick={handleMobileNavigate}
                >
                  Network Infrastructure & Security
                </a>
                <a
                  href="/solutions/computing"
                  className="block py-2 hover:text-[#e63946] transition-colors"
                  onClick={handleMobileNavigate}
                >
                  Computing Solutions
                </a>
                <a
                  href="/solutions/cyber-security"
                  className="block py-2 hover:text-[#e63946] transition-colors"
                  onClick={handleMobileNavigate}
                >
                  Cyber Security Solutions
                </a>
                <a
                  href="/solutions/unified-communications"
                  className="block py-2 hover:text-[#e63946] transition-colors"
                  onClick={handleMobileNavigate}
                >
                  Unified Communications
                </a>
                <a
                  href="/solutions/av-meeting"
                  className="block py-2 hover:text-[#e63946] transition-colors"
                  onClick={handleMobileNavigate}
                >
                  AV & Meeting Room Solutions
                </a>
                <a
                  href="/solutions/digital-display"
                  className="block py-2 hover:text-[#e63946] transition-colors"
                  onClick={handleMobileNavigate}
                >
                  Digital Display Solutions
                </a>
                <a
                  href="/solutions/security-surveillance"
                  className="block py-2 hover:text-[#e63946] transition-colors"
                  onClick={handleMobileNavigate}
                >
                  Security & Surveillance
                </a>
              </div>
            </div>

            <a
              href="/about"
              onClick={handleMobileNavigate}
              className="hover:text-[#e63946] transition-colors py-2"
            >
              About
            </a>

            <a
              href="/contact-us"
              onClick={handleMobileNavigate}
              className="hover:text-[#e63946] transition-colors py-2"
            >
              Contact
            </a>

            {/* Mobile Contact Info */}
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
              <a
                href="tel:+966504142951"
                className="flex items-center gap-3 py-2 text-[#0e355d] transition-colors hover:text-[#e63946] active:text-[#e63946] focus-visible:text-[#e63946]"
              >
                <Phone className="w-5 h-5" />
                <span className="font-medium">+966 50 414 2951</span>
              </a>

              <a
                href="/contact-us"
                onClick={handleMobileNavigate}
                className="w-full px-6 py-3 bg-[#0e355d] text-white rounded-md text-center font-medium transition-colors hover:bg-[#e63946] active:bg-[#e63946] focus-visible:bg-[#e63946]"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}