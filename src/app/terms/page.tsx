import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Terms and Conditions - Udaipur Call Girls Services",
  description: "Terms and conditions of use for Udaipur Call Girls Services. Essential rules, age criteria, and client requirements for booking adult companions in Udaipur.",
  alternates: {
    canonical: `${siteConfig.url}/terms`
  }
};

export default function TermsPage() {
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
        "name": "Terms",
        "item": `${siteConfig.url}/terms`
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
        <div className="eyebrow">Operating Rules & Criteria</div>
        <h1>Terms and Conditions of Use</h1>
        <p className="lead">
          Please review the terms of use carefully before making companion inquiries or using our platform in Udaipur.
        </p>

        <h2>Permitted & Authorized Use</h2>
        <p>
          This website serves exclusively as an information and coordination desk for private adult social companionship. You agree to use the site solely for making legitimate, lawful inquiries. Any form of exploitative, coercive, explicit, abusive, or unlawful requests is strictly prohibited.
        </p>

        <h2>Age Restrictions</h2>
        <p>
          You must be at least 18 years of age to access this site and request companion profiles. By submitting any forms or contacting our operators, you represent and warrant that you are of legal age and possess the capacity to agree to these terms.
        </p>

        <h2>Booking Coordination & Availability</h2>
        <p>
          Submitting a booking inquiry form or messaging our dispatch team does not constitute a guaranteed reservation. Profile availability fluctuates according to client location, timing, requested companions, and matching criteria. We reserve the right to decline booking inquiries at our discretion.
        </p>

        <h2>Client Conduct Requirements</h2>
        <p>
          Clients are expected to act respectfully, communicate politely, and abide by all local regulations, hotel rules, and safety guidelines. Any behavior compromising the dignity or safety of companions will result in the immediate termination of the companionship arrangement.
        </p>
      </div>
    </main>
  );
}
