import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: [
    "100", "200", "300", "400", "500", "600", "700", "800", "900"
  ],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});
export const metadata = {
  title: "Rawabit Networks | Enterprise IT, Networking & Security Solutions",
  description:
    "Rawabit Networks is a leading provider of enterprise IT solutions, specializing in network infrastructure, cybersecurity, managed services, unified communications, AV solutions, and digital transformation. We design, deploy, and manage secure, scalable, and future-ready technology environments for businesses.",

  keywords: [
    "Rawabit Networks",
    "IT solutions company",
    "network infrastructure",
    "cyber security solutions",
    "managed IT services",
    "enterprise networking",
    "IT infrastructure services",
    "unified communications",
    "AV meeting room solutions",
    "digital display solutions",
    "security and surveillance",
    "cloud and computing solutions",
  ],

  authors: [{ name: "Rawabit Networks" }],
  creator: "Rawabit Networks",
  publisher: "Rawabit Networks",

  openGraph: {
    title: "Rawabit Networks | Secure, Scalable & Intelligent IT Solutions",
    description:
      "Rawabit Networks delivers end-to-end IT and networking solutions including infrastructure design, cybersecurity, managed services, unified communications, and smart enterprise systems. Empowering organizations with reliable and secure technology.",
    url: "https://www.rawabitnetworks.com",
    siteName: "Rawabit Networks",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rawabit Networks – Enterprise IT Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rawabit Networks | Enterprise IT & Security Experts",
    description:
      "Enterprise-grade IT, networking, and cybersecurity solutions designed for performance, security, and scalability.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
      <Header />
       {children}
      <Footer/>
      </body>
    </html>
  );
}