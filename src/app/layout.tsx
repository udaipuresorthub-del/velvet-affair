import type { Metadata } from "next";
import type { Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { MessageCircle, Phone, Mail, Clock, MapPin, Sparkles, Shield, Heart } from "lucide-react";
import "./globals.css";
import { serviceAreas, siteConfig } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: "#1 Udaipur Escort Service | Top Call Girls in Udaipur @ ₹3999 (24/7 COD)",
  description:
    "Book top-rated Udaipur Escort Service & verified call girls in Udaipur from ₹3999. Elite Russian escorts, VIP models & independent call girls with 24x7 Cash on Delivery. 100% private.",
  keywords: [
    "Udaipur Escort Service",
    "call girls in Udaipur",
    "escort service in Udaipur",
    "Udaipur escorts",
    "Russian escorts in Udaipur",
    "VIP escort service Udaipur",
    "independent call girls Udaipur",
    "Cash on Delivery call girls",
    "Lake Pichola escorts",
    "Fateh Sagar escort service"
  ],
  verification: {
    google: siteConfig.googleVerification
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: "#1 Udaipur Escort Service | Top Call Girls in Udaipur @ ₹3999 (24/7 COD)",
    description:
      "Book top-rated Udaipur Escort Service & verified call girls in Udaipur from ₹3999. Elite Russian escorts, VIP models & independent call girls with 24x7 Cash on Delivery.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: ["/images/udaipur-escort-service.jpg"],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Udaipur Escort Service | Top Call Girls in Udaipur @ ₹3999 (24/7 COD)",
    description:
      "Book top-rated Udaipur Escort Service & verified call girls in Udaipur from ₹3999. Elite Russian escorts, VIP models & independent call girls with 24x7 Cash on Delivery.",
    images: ["/images/udaipur-escort-service.jpg"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffffff",
  colorScheme: "light"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.className} ${poppins.variable}`}>
      <head>
        <meta name="google-site-verification" content={siteConfig.googleVerification} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <header className="header">
          <div className="topbar">
            <div className="shell topbar-inner">
              <span className="flex-center-gap"><Clock size={12} /> 24x7 Instant Dispatch Across Udaipur & Resorts</span>
              <span className="flex-center-gap"><ShieldCheckIcon size={12} /> 100% Private • Cash on Delivery (COD)</span>
            </div>
          </div>
          <nav className="shell nav" aria-label="Main navigation">
            <Link href="/" className="brand" aria-label="Velvet Affair - Udaipur Escort Service home">
              <Image
                src="/logo.png"
                alt="Velvet Affair - Udaipur Escort Service Logo"
                width={300}
                height={90}
                style={{ height: "48px", width: "auto", objectFit: "contain" }}
                priority
              />
            </Link>
            
            {/* Professional Hamburger Toggle */}
            <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />
            <label htmlFor="nav-toggle" className="nav-toggle-label" aria-label="Toggle navigation menu">
              <span></span>
              <span></span>
              <span></span>
            </label>

            <div className="navlinks">
              <Link href="/#services">Services</Link>
              <Link href="/profiles">Profiles</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/#areas">Locations</Link>
              <Link href="/#faq">FAQ</Link>
              <Link className="nav-call" href={`tel:${siteConfig.phone}`}>
                <Phone size={14} /> Call Now
              </Link>
              <Link className="button gold nav-cta" href="/#contact">
                <Sparkles size={14} /> Book Now
              </Link>
            </div>
          </nav>
        </header>
        
        {children}

        <footer className="footer">
          <div className="shell footer-grid">
            <div className="footer-brand">
              <Image
                src="/logo.png"
                alt="Velvet Affair - Udaipur Escort Service Footer Logo"
                width={300}
                height={90}
                style={{ height: "48px", width: "auto", objectFit: "contain" }}
              />
              <p>
                Udaipur&apos;s premier luxury adult companionship concierge service. We coordinate VIP models, Russian call girls, independent escorts, and local companions with absolute discretion and Cash on Delivery starting from ₹3999.
              </p>
              <div className="footer-actions">
                <Link className="button gold" href={`tel:${siteConfig.phone}`}>
                  <Phone size={16} /> Direct Call: {siteConfig.phone}
                </Link>
                <Link className="button footer-whatsapp" href={`https://wa.me/${siteConfig.whatsapp}`}>
                  <MessageCircle size={16} /> WhatsApp Booking
                </Link>
              </div>
            </div>
            <div className="footer-col">
              <h3>Companion Services</h3>
              <Link href="/#services">VIP Escorts Udaipur</Link>
              <Link href="/profiles">Verified Call Girl Profiles</Link>
              <Link href="/#services">Russian Escorts in Udaipur</Link>
              <Link href="/#services">Independent Companions</Link>
              <Link href="/#services">Hotel & Resort Visits</Link>
            </div>
            <div className="footer-col">
              <h3>Lakeside Locations</h3>
              {serviceAreas.slice(0, 6).map((area) => (
                <span key={area} className="flex-center-gap"><MapPin size={12} /> {area}</span>
              ))}
            </div>
            <div className="footer-col">
              <h3>Discretion & Trust</h3>
              <Link href="/blog">Booking Guides & Blog</Link>
              <Link href="/privacy">Privacy & Confidentiality</Link>
              <Link href="/terms">Terms of Service (18+)</Link>
              <span className="flex-center-gap"><Mail size={12} /> {siteConfig.email}</span>
              <span className="flex-center-gap"><Shield size={12} /> Strict 18+ Adult Policy</span>
            </div>
          </div>
          <div className="shell footer-bottom">
            <span>&copy; {new Date().getFullYear()} Udaipur Escort Service. All Rights Reserved.</span>
            <span>DISCLAIMER: 18+ adult social companionship service. Consensual adult guidelines apply. No advance booking charges.</span>
          </div>
        </footer>

        {/* Sticky Mobile Contact Actions */}
        <div className="mobile-sticky-actions" aria-label="Quick contact actions">
          <Link href={`tel:${siteConfig.phone}`} className="mobile-call-sticky">
            <Phone size={16} /> Call Now
          </Link>
          <Link href={`https://wa.me/${siteConfig.whatsapp}`} className="mobile-wa-sticky">
            <MessageCircle size={16} /> WhatsApp
          </Link>
        </div>
      </body>
    </html>
  );
}

function ShieldCheckIcon({ size }: { size: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
