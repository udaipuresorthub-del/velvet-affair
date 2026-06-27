import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";
import "./globals.css";
import { serviceAreas, siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Premium Escort Services in Udaipur | Call Girls Udaipur Available Just ₹3999",
  description:
    "Book premium Escort Service in Udaipur with Call Girls Udaipur. Verified Udaipur Escorts, VIP & Russian Escorts from ₹3999. 24x7 cash on delivery, WhatsApp booking.",
  verification: {
    google: siteConfig.googleVerification
  },
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Premium Escort Services in Udaipur | Call Girls Udaipur Just ₹3999",
    description:
      "Book premium Escort Service in Udaipur with Call Girls Udaipur. Verified Udaipur Escorts, VIP & Russian Escorts from ₹3999. 24x7 cash on delivery, WhatsApp booking.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: ["/images/udaipur-escort-service.jpg"],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Escort Services in Udaipur | Call Girls Udaipur Just ₹3999",
    description:
      "Book premium Escort Service in Udaipur with Call Girls Udaipur. Verified Udaipur Escorts, VIP & Russian Escorts from ₹3999. 24x7 cash on delivery, WhatsApp booking.",
    images: ["/images/udaipur-escort-service.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.className}>
      <head>
        <meta name="google-site-verification" content={siteConfig.googleVerification} />
      </head>
      <body>
        <header className="header">
          <div className="topbar">
            <div className="shell topbar-inner">
              <span className="flex-center-gap"><Clock size={12} /> 24x7 Instant Dispatch & Booking</span>
              <span className="flex-center-gap"><ShieldCheckIcon size={12} /> Cash on Delivery Available</span>
            </div>
          </div>
          <nav className="shell nav" aria-label="Main navigation">
            <Link href="/" className="brand" aria-label="Udaipur Call Girls Services home">
              <Image src="/logo.svg" alt="Udaipur Call Girls Services Logo" width={270} height={64} priority />
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
              <Link href="/#areas">Areas</Link>
              <Link href="/#faq">FAQ</Link>
              <Link className="nav-call" href={`tel:${siteConfig.phone}`}>
                <Phone size={14} /> Call Now
              </Link>
              <Link className="button gold nav-cta" href="/#contact">
                Book Now
              </Link>
            </div>
          </nav>
        </header>
        
        {children}

        <footer className="footer">
          <div className="shell footer-grid">
            <div className="footer-brand">
              <Image src="/logo.svg" alt="Udaipur Call Girls Services Footer Logo" width={270} height={64} />
              <p>
                Udaipur's premier adult companionship desk coordinating VIP, Independent, Russian, and local companion profiles. Book starting from ₹3999 with 100% discretion and cash on delivery.
              </p>
              <div className="footer-actions">
                <Link className="button gold" href={`tel:${siteConfig.phone}`}>
                  <Phone size={18} /> Call Now
                </Link>
                <Link className="button footer-whatsapp" href={`https://wa.me/${siteConfig.whatsapp}`}>
                  <MessageCircle size={18} /> WhatsApp Booking
                </Link>
              </div>
            </div>
            <div className="footer-col">
              <h3>Services</h3>
              <Link href="/#services">VIP Escorts</Link>
              <Link href="/profiles">Verified Profiles</Link>
              <Link href="/#services">Russian Companions</Link>
              <Link href="/#services">Independent Girls</Link>
            </div>
            <div className="footer-col">
              <h3>Lakeside Locations</h3>
              {serviceAreas.slice(0, 5).map((area) => (
                <span key={area} className="flex-center-gap"><MapPin size={12} /> {area}</span>
              ))}
            </div>
            <div className="footer-col">
              <h3>Legal & Contact</h3>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Use</Link>
              <span className="flex-center-gap"><Mail size={12} /> {siteConfig.email}</span>
              <span>Must be 18+ to book.</span>
            </div>
          </div>
          <div className="shell footer-bottom">
            <span>&copy; {new Date().getFullYear()} Udaipur Call Girls Services. All Rights Reserved.</span>
            <span>DISCLAIMER: 18+ adult social companionship desk. We operate in compliance with all local guidelines.</span>
          </div>
        </footer>

        {/* Sticky Mobile Contact Actions */}
        <div className="mobile-sticky-actions" aria-label="Quick contact actions">
          <Link href={`tel:${siteConfig.phone}`} className="mobile-call-sticky">
            <Phone size={18} /> Call Now
          </Link>
          <Link href={`https://wa.me/${siteConfig.whatsapp}`} className="mobile-wa-sticky">
            <MessageCircle size={18} /> WhatsApp
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
