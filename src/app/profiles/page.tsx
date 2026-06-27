import Image from "next/image";
import Link from "next/link";
import { profileImages, siteConfig } from "@/lib/site";

export const metadata = {
  title: "Reviewed Companion Profiles | Call Girls in Udaipur Preview",
  description: "Browse our premium companion profiles in Udaipur. Select VIP, independent, model-style, and Russian escort previews starting from ₹3999 with 24x7 support.",
  alternates: {
    canonical: `${siteConfig.url}/profiles`
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

  return (
    <main className="section legal-page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="shell">
        <div className="eyebrow">Reviewed Profile Previews</div>
        <h1>Our Premium Companion Profiles in Udaipur</h1>
        <p className="lead">
          Browse through our verified portfolio of VIP companion profiles, independent call girls, and model-style escorts. Previews are sorted below for client convenience. Booking packages start at just ₹3999 with cash on delivery.
        </p>

        <div className="profile-grid" style={{ marginTop: 40 }}>
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

        <div className="actions" style={{ marginTop: 40 }}>
          <Link href="/#contact" className="button gold">
            Check Availability
          </Link>
          <Link href="/" className="button">
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
