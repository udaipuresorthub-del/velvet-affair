import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/lib/site";

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
    <html lang="en-IN">
      <body>
        <header className="header">
          <nav className="shell nav" aria-label="Main navigation">
            <Link href="/" className="brand" aria-label="Udaipur Companion Service home">
              <Image src="/logo.svg" alt="Udaipur Companion Service" width={240} height={64} priority />
            </Link>
            <div className="navlinks">
              <Link href="/#services">Services</Link>
              <Link href="/profiles">Profiles</Link>
              <Link href="/#areas">Areas</Link>
              <Link href="/#faq">FAQ</Link>
              <Link className="button gold" href="/#contact">
                Enquire
              </Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="footer">
          <div className="shell footer-grid">
            <div>
              <Image src="/logo.svg" alt="Udaipur Companion Service" width={220} height={59} />
              <p>
                Adult-only social companionship platform for lawful, respectful, and private inquiries in Udaipur.
              </p>
            </div>
            <div>
              <p>
                <Link href="/privacy">Privacy Policy</Link> · <Link href="/terms">Terms</Link>
              </p>
              <p>18+ only. Users must follow all applicable local laws.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
