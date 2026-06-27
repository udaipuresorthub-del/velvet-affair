import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy | Udaipur Call Girls Services",
  description: "Discreet and private data practices. Learn how Udaipur Call Girls Services protects user confidentiality, inquiry details, and respects client preferences.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`
  }
};

export default function PrivacyPage() {
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
        "name": "Privacy Policy",
        "item": `${siteConfig.url}/privacy`
      }
    ]
  };

  return (
    <main className="section legal-page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="shell legal-content-box">
        <div className="eyebrow">Client Privacy Safeguards</div>
        <h1>Privacy Policy</h1>
        <p className="lead">
          We maintain absolute confidentiality for our Udaipur escort service bookings. Learn how your data is managed below.
        </p>
        
        <h2>Information Collection & Scope</h2>
        <p>
          Udaipur Call Girls Services operates as an adult-only companionship inquiry system. We collect only the essential parameters required to check companion availability, such as your nickname/name, phone number or WhatsApp contact details, preferred local area, timing window, and escort profile preferences.
        </p>
        
        <h2>How Information Is Used</h2>
        <p>
          Your inquiry parameters are strictly utilized to verify available companion profiles, coordinate schedules, and confirm the details of your booking. We never maintain permanent logs or databases of user personal data, nor do we disclose or sell any user information to third-party databases.
        </p>
        
        <h2>Confidentiality Practices</h2>
        <p>
          All direct communications via call, SMS, or WhatsApp are treated with absolute discretion. We regularly purge reservation messages and call histories to safeguard your identity and preference parameters.
        </p>
        
        <h2>Strictly 18+ Access Only</h2>
        <p>
          Our site and services are restricted to consenting adults aged 18 and older. By submitting an inquiry form, you verify that you meet this requirement and will comply with all local laws and rules during your social companion booking.
        </p>
      </div>
    </main>
  );
}
