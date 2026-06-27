import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Be_Vietnam_Pro } from "next/font/google";
import { MessageCircle, Phone } from "lucide-react";
import "./globals.css";
import { serviceAreas, siteConfig } from "@/lib/site";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Udaipur Companion Service | Premium Adult Social Companionship",
  description:
    "Private adult social companionship support in Udaipur with verified profiles, discreet inquiry handling, and respectful 18+ guidelines.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Udaipur Companion Service",
    description:
      "Discreet adult social companionship support across Udaipur hotels, resorts, events, and city locations.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: ["/images/udaipur-escort-service.jpg"],
    locale: "en_IN",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={beVietnam.className}>
      <body>
        <header className="header">
          <div className="topbar">
            <div className="shell topbar-inner">
              <span>18+ verified adult social companionship support in Udaipur</span>
              <span>Private inquiries | 24x7 response | Lawful use only</span>
            </div>
          </div>
          <nav className="shell nav" aria-label="Main navigation">
            <Link href="/" className="brand" aria-label="Udaipur Companion Service home">
              <Image src="/logo.svg" alt="Udaipur Companion Service" width={240} height={64} priority />
            </Link>
            <div className="navlinks">
              <Link href="/#services">Services</Link>
              <Link href="/profiles">Profiles</Link>
              <Link href="/#areas">Areas</Link>
              <Link href="/#faq">FAQ</Link>
              <Link className="nav-call" href={`tel:${siteConfig.phone}`}>
                <Phone size={16} /> Call
              </Link>
              <Link className="button gold nav-cta" href="/#contact">
                Enquire Now
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div className="shell footer-grid">
            <div className="footer-brand">
              <Image src="/logo.svg" alt="Udaipur Companion Service" width={220} height={59} />
              <p>
                Adult-only social companionship platform for lawful, respectful, and private inquiries in Udaipur.
              </p>
              <div className="footer-actions">
                <Link className="button gold" href={`tel:${siteConfig.phone}`}>
                  <Phone size={18} /> Call
                </Link>
                <Link className="button footer-whatsapp" href={`https://wa.me/${siteConfig.whatsapp}`}>
                  <MessageCircle size={18} /> WhatsApp
                </Link>
              </div>
            </div>
            <div className="footer-col">
              <h3>Explore</h3>
              <Link href="/#services">Services</Link>
              <Link href="/profiles">Profiles</Link>
              <Link href="/#contact">Contact</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
            <div className="footer-col">
              <h3>Locations</h3>
              {serviceAreas.slice(0, 5).map((area) => (
                <span key={area}>{area}</span>
              ))}
            </div>
            <div className="footer-col">
              <h3>Legal</h3>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms</Link>
              <span>18+ only</span>
              <span>Follow all applicable local laws.</span>
            </div>
          </div>
          <div className="shell footer-bottom">
            <span>{new Date().getFullYear()} Udaipur Companion Service</span>
            <span>Private adult social companionship inquiries only.</span>
          </div>
        </footer>
        <div className="mobile-sticky-actions" aria-label="Quick contact actions">
          <Link href={`tel:${siteConfig.phone}`}>
            <Phone size={18} /> Call Now
          </Link>
          <Link href={`https://wa.me/${siteConfig.whatsapp}`}>
            <MessageCircle size={18} /> WhatsApp
          </Link>
        </div>
      </body>
    </html>
  );
}
