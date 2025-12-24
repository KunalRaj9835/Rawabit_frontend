"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t, lang } = useLang();
  const isRTL = lang === "sa";

  return (
    <footer className="bg-[#1b1f2a] text-gray-300">
      {/* Top Section */}
      <div
        className={`max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {/* Solutions */}
        <div>
          <h4 className="text-white text-lg font-light mb-6">
            {t("footerSolutions")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li>{t("footerSolution1")}</li>
            <li>{t("footerSolution2")}</li>
            <li>{t("footerSolution3")}</li>
            <li>{t("footerSolution4")}</li>
            <li>{t("footerSolution5")}</li>
            <li>{t("footerSolution6")}</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-lg font-light mb-6">
            {t("footerServices")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li>{t("footerService1")}</li>
            <li>{t("footerService2")}</li>
            <li>{t("footerService3")}</li>
            <li>{t("footerService4")}</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white text-lg font-light mb-6">
            {t("footerCompany")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li>{t("footerCompany1")}</li>
            <li>{t("footerCompany2")}</li>
            <li>{t("footerCompany3")}</li>
            <li>{t("footerCompany4")}</li>
            <li>{t("footerCompany5")}</li>
            <li>{t("footerCompany6")}</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-lg font-light mb-6">
            {t("footerContact")}
          </h4>

          <p className="text-sm leading-relaxed">
            {t("footerAddress1")}
            <br />
            {t("footerAddress2")}
            <br />
            {t("footerAddress3")}
            <br />
            {t("footerAddress4")}
          </p>

          {/* Phone + Email (RTL-safe) */}
          <div
            className={`mt-4 text-sm flex flex-col gap-1 ${
              isRTL ? "items-end" : "items-start"
            }`}
          >
            <p>
              {t("footerPhone")} <span dir="ltr"> +966 9200 33 189 </span>
            </p>
            <p>
              {t("footerEmail")} <span dir="ltr"> info@rawabitnetworks.com </span>
            </p>
          </div>
          {/* Social Icons */}
          <div
            className={`flex gap-4 mt-6 ${
              isRTL ? "justify-end" : ""
            }`}
          >
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
        <p>{t("footerCopyright")}</p>
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
