"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "@/context/LanguageContext";

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
  const { t, lang } = useLang();
  const isRTL = lang === "sa";
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

  const servicesItems = [
    {
      href: "/services/managed-services",
      title: t("managedServices"),
      desc: t("managedServicesDesc"),
    },
    {
      href: "/services/installation",
      title: t("installation"),
      desc: t("installationDesc"),
    },
    {
      href: "/services/design-consultation",
      title: t("designConsultation"),
      desc: t("designConsultationDesc"),
    },
  ];

  const solutionsItems = [
    {
      href: "/solutions/network-infrastructure",
      title: t("networkInfrastructure"),
      desc: t("networkInfrastructureDesc"),
    },
    {
      href: "/solutions/computing",
      title: t("computingSolutions"),
      desc: t("computingSolutionsDesc"),
    },
    {
      href: "/solutions/cyber-security",
      title: t("cyberSecurity"),
      desc: t("cyberSecurityDesc"),
    },
    {
      href: "/solutions/unified-communications",
      title: t("unifiedCommunications"),
      desc: t("unifiedCommunicationsDesc"),
    },
    {
      href: "/solutions/av-meeting",
      title: t("avMeeting"),
      desc: t("avMeetingDesc"),
    },
    {
      href: "/solutions/digital-display",
      title: t("digitalDisplay"),
      desc: t("digitalDisplayDesc"),
    },
    {
      href: "/solutions/security-surveillance",
      title: t("securitySurveillance"),
      desc: t("securitySurveillanceDesc"),
    },
  ];

  return (
    <nav className="fixed top-0 left-0 inset-x-0 z-50 bg-white shadow-md">
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
                {t("home")}
              </a>

              {/* SERVICES */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("services")}
                onMouseLeave={handleLeave}
              >
                <button className="hover:text-[#e63946] transition-colors flex items-center gap-1">
                  {t("services")} <Arrow isOpen={openMenu === "services"} />
                </button>

                <div
                  className={`fixed left-0 right-0 top-[72px] bg-white shadow-lg transition-all duration-300 
                    ${
                      openMenu === "services"
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }
                  `}
                >
                  <div className="relative w-full px-6 py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {servicesItems.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="group block rounded-md p-4 transition-all duration-200 hover:bg-gray-100"
                        >
                          <h4 className="text-[15px] text-[#0e355d] font-semibold mb-1">
                            {item.title}
                          </h4>
                          <p className="text-[13px] text-gray-500 mb-2 leading-relaxed">
                            {item.desc}
                          </p>
                          <span className="text-[13px] font-medium text-[#0d355d] group-hover:text-[#e63946]">
                            {t("learnMore")}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* SOLUTIONS */}
              <div
                className="relative"
                onMouseEnter={() => handleEnter("solutions")}
                onMouseLeave={handleLeave}
              >
                <button className="hover:text-[#e63946] transition-colors flex items-center gap-1">
                  {t("solutions")} <Arrow isOpen={openMenu === "solutions"} />
                </button>

                <div
                  className={`fixed left-0 right-0 top-[72px] bg-white shadow-lg transition-all duration-300
                    ${
                      openMenu === "solutions"
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }
                  `}
                >
                  <div className="relative w-full mx-auto px-6 py-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {solutionsItems.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className="group block rounded-md p-4 transition-all duration-200 hover:bg-gray-100"
                        >
                          <h4 className="text-[15px] text-[#0e355d] font-semibold mb-1 leading-snug">
                            {item.title}
                          </h4>
                          <p className="text-[13px] text-gray-500 mb-2 leading-relaxed">
                            {item.desc}
                          </p>
                          <span className="text-[13px] font-medium text-[#0d355d] group-hover:text-[#e63946]">
                            {t("learnMore")}
                          </span>
                        </a>
                      ))}
                    </div>
                    <div
                      className={`absolute top-0 h-full w-[25px] bg-[#0d355d] ${
                        isRTL ? "left-0" : "right-0"
                      }`}
                    />

                    <div
                      className={`absolute bottom-0 h-[25px] w-[950px] bg-[#0d355d] ${
                        isRTL ? "left-0" : "right-0"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <a href="/about" className="hover:text-[#e63946] transition-colors">
                {t("about")}
              </a>

              <a href="/contact-us" className="hover:text-[#e63946] transition-colors">
                {t("contact")}
              </a>
            </div>

            {/* Contact Info & Button */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
              <a
                href="tel:+966504142951"
  className={`flex items-center gap-2 text-[#0e355d] hover:text-[#e63946] transition-colors text-sm font-medium ${
    isRTL ? "flex-row-reverse" : ""
  }`}
>
  <Phone className="w-4 h-4" />
  <span dir="ltr">+966 50 414 2951</span>
</a>

              <a
                href="/contact-us"
                className="px-6 py-2.5 bg-[#0e355d] text-white rounded-md hover:bg-[#e63946] transition-colors text-sm font-medium"
              >
                {t("contactUs")}
              </a>
            </div>
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              className="p-2 flex flex-col gap-1.5 justify-center items-center w-10 h-10 bg-[#0e355d] rounded"
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
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white overflow-hidden transition-all duration-500
            ${menuOpen ? "max-h-[1000px] pb-6" : "max-h-0"}
          `}
          dir={isRTL ? "rtl" : "ltr"}
        >
          <div className="flex flex-col gap-4 font-medium text-[#0e355d] text-sm pt-4">
            <a
              href="/"
              onClick={handleMobileNavigate}
              className="hover:text-[#e63946] transition-colors py-2 text-start"
            >
              {t("home")}
            </a>

            {/* SERVICES MOBILE */}
            <div>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "services-mobile" ? null : "services-mobile")
                }
                className="hover:text-[#e63946] transition-colors flex items-center justify-between w-full py-2"
                style={{ textAlign: isRTL ? 'right' : 'left' }}
              >
                {t("services")} <Arrow isOpen={openMenu === "services-mobile"} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${isRTL ? 'pr-4' : 'pl-4'}
                  ${openMenu === "services-mobile" ? "max-h-80 mt-2" : "max-h-0"}
                `}
              >
                {servicesItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="block py-2 hover:text-[#e63946] transition-colors text-start"
                    onClick={handleMobileNavigate}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            {/* SOLUTIONS MOBILE */}
            <div>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "solutions-mobile" ? null : "solutions-mobile")
                }
                className="hover:text-[#e63946] transition-colors flex items-center justify-between w-full py-2"
                style={{ textAlign: isRTL ? 'right' : 'left' }}
              >
                {t("solutions")} <Arrow isOpen={openMenu === "solutions-mobile"} />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${isRTL ? 'pr-4' : 'pl-4'}
                  ${openMenu === "solutions-mobile" ? "max-h-[500px] mt-2" : "max-h-0"}
                `}
              >
                {solutionsItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="block py-2 hover:text-[#e63946] transition-colors text-start"
                    onClick={handleMobileNavigate}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/about"
              onClick={handleMobileNavigate}
              className="hover:text-[#e63946] transition-colors py-2 text-start"
            >
              {t("about")}
            </a>

            <a
              href="/contact-us"
              onClick={handleMobileNavigate}
              className="hover:text-[#e63946] transition-colors py-2 text-start"
            >
              {t("contact")}
            </a>

            {/* Mobile Contact Info */}
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-4">
              <a
                href="tel:+966504142951"
  className={`flex items-center gap-3 py-2 text-[#0e355d] transition-colors hover:text-[#e63946] active:text-[#e63946] focus-visible:text-[#e63946] ${
    isRTL ? "flex-row-reverse" : ""
  }`}
>
  <Phone className="w-5 h-5" />
  <span dir="ltr" className="font-medium">+966 50 414 2951</span>
</a>

              <a
                href="/contact-us"
                onClick={handleMobileNavigate}
                className="w-full px-6 py-3 bg-[#0e355d] text-white rounded-md text-center font-medium transition-colors hover:bg-[#e63946] active:bg-[#e63946] focus-visible:bg-[#e63946]"
              >
                {t("contactUs")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}