import Image from "next/image";
import Link from "next/link";
import { profileImages, siteConfig } from "@/lib/site";
import { MessageCircle, Phone, Sparkles } from "lucide-react";

export const metadata = {
  title: "Verified Companion Profiles | Udaipur Escort Service & VIP Models",
  description:
    "Explore verified Udaipur escort profiles & call girls in Udaipur. VIP models, Russian companions & independent escorts available 24/7 with Cash on Delivery from ₹3999.",
  alternates: {
    canonical: `${siteConfig.url}/profiles`
  },
  openGraph: {
    title: "Verified Companion Profiles | Udaipur Escort Service & VIP Models",
    description:
      "Explore verified Udaipur escort profiles & call girls in Udaipur. VIP models, Russian companions & independent escorts available 24/7 with Cash on Delivery from ₹3999.",
    url: `${siteConfig.url}/profiles`,
    siteName: siteConfig.name,
    images: ["/images/udaipur-escort-service.jpg"],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Verified Companion Profiles | Udaipur Escort Service & VIP Models",
    description:
      "Explore verified Udaipur escort profiles & call girls in Udaipur. VIP models, Russian companions & independent escorts available 24/7 with Cash on Delivery from ₹3999.",
    images: ["/images/udaipur-escort-service.jpg"]
  }
};

export default function ProfilesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Profiles",
        "item": `${siteConfig.url}/profiles`
      }
    ]
  };

  const profileItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Verified Companion Profiles - Udaipur Escort Service Previews",
    "itemListElement": profileImages.map((image, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `Verified Udaipur escort companion profile preview ${index + 1}`,
      "url": `${siteConfig.url}/profiles`,
      "image": `${siteConfig.url}${image}`,
      "description": `Browse our verified portfolio of VIP companion profiles, independent call girls, and model-style escorts.`
    }))
  };

  return (
    <main className="section legal-page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileItemListJsonLd) }}
      />
      <div className="shell">
        <div className="eyebrow">Verified Gallery Portfolio</div>
        <h1>Exclusive Companion Profiles – Udaipur Escort Service</h1>
        <p className="lead" style={{ fontSize: 16, color: "var(--muted)", maxWidth: 840, lineHeight: 1.8, marginBottom: 30 }}>
          Explore our handpicked selection of VIP models, international Russian escorts, and independent call girls in Udaipur. Each profile is physically verified for authenticity, aesthetic grace, and discreet professionalism. Packages start from just ₹3999 with 100% Cash on Delivery (COD) on physical arrival.
        </p>

        <div className="profile-grid" style={{ marginTop: 30 }}>
          {profileImages.map((image, index) => (
            <div key={image} className="profile-card-wrap">
              <div className="profile-img-container">
                <Image
                  src={image}
                  alt={`Verified Udaipur escort companion profile preview ${index + 1}`}
                  width={420}
                  height={540}
                  className="profile-photo"
                />
              </div>
              <div className="profile-card-badge">
                <span>Verified 18+</span>
              </div>
            </div>
          ))}
        </div>

        <div className="actions" style={{ marginTop: 44, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
          <Link href={`https://wa.me/${siteConfig.whatsapp}`} className="button gold">
            <MessageCircle size={16} /> WhatsApp for Live Photos
          </Link>
          <Link href={`tel:${siteConfig.phone}`} className="button outline">
            <Phone size={16} /> Direct Call: {siteConfig.phone}
          </Link>
          <Link href="/#contact" className="button">
            <Sparkles size={16} /> Reserve Companion
          </Link>
        </div>
      </div>
    </main>
  );
}
