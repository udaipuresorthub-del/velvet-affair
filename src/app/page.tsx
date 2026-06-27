import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, CheckCircle2, LockKeyhole, MapPin, ShieldCheck, Heart, UserCheck, Star } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import {
  companionTypes,
  faqs,
  overviewRows,
  serviceAreas,
  siteConfig,
  trustPoints,
  seoContentHtml
} from "@/lib/site";

export const metadata = {
  title: "Premium Escort Services in Udaipur | Call Girls Udaipur Available Just ₹2999",
  description: "Book premium Escort Service in Udaipur with Call Girls Udaipur. Verified Udaipur Escorts, VIP & Russian Escorts from ₹2999. 24x7 cash on delivery, WhatsApp booking.",
  alternates: {
    canonical: siteConfig.url
  }
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.svg`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone,
      "contactType": "customer service",
      "email": siteConfig.email,
      "availableLanguage": ["English", "Hindi"]
    }
  };

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.name,
    "image": `${siteConfig.url}/images/luxury-escort-service-udaipur.jpg`,
    "@id": siteConfig.url,
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "City Palace Road",
      "addressLocality": "Udaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "313001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.5854,
      "longitude": 73.7125
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "INR"
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow-container">
            <Heart size={14} className="icon-pulse" />
            <span className="eyebrow">Elite Adult Companionship in Udaipur</span>
          </div>
          <h1>Premium Escort Services in Udaipur | Call Girls Available from ₹2999</h1>
          <p className="hero-description">
            Welcome to our premium agency offering elite <strong>Call Girls Udaipur</strong> and professional <strong>Escort Service in Udaipur</strong>. We feature a stunning gallery of verified <strong>Udaipur Escorts</strong>, including refined <strong>Independent Call Girls</strong>, high-class <strong>VIP Escorts</strong>, stunning <strong>Russian Escorts</strong>, charming <strong>College Girls</strong>, and discreet <strong>Housewife Escorts</strong>. With our <strong>24x7 Service</strong>, instant <strong>WhatsApp Booking</strong>, and trust-oriented <strong>Cash on Delivery</strong> payment model, booking the perfect companion starts from just ₹2999.
          </p>
          <div className="hero-actions">
            <Link className="button gold" href="#contact">
              <CalendarCheck size={18} /> Book Companion
            </Link>
            <Link className="button outline" href="/profiles">
              View Profiles
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-badges-bar">
        <div className="shell badges-grid">
          <div className="badge-item">
            <Star size={18} />
            <span>₹2999 Entry Rates</span>
          </div>
          <div className="badge-item">
            <UserCheck size={18} />
            <span>100% Genuine Profiles</span>
          </div>
          <div className="badge-item">
            <LockKeyhole size={18} />
            <span>Secure & Private Booking</span>
          </div>
          <div className="badge-item">
            <ShieldCheck size={18} />
            <span>Cash on Delivery</span>
          </div>
        </div>
      </section>

      {/* Core Presentation Section */}
      <section className="section">
        <div className="shell split">
          <div>
            <div className="eyebrow">Luxury & Confidentiality</div>
            <h2>Premium Adult Companionship in the Romantic City of Lakes</h2>
            <p className="lead">
              Udaipur is renowned for its lakefront royal retreats, heritage havelis, destination events, and fine-dining experiences. Our platform coordinates premium social escort services for discerning travellers and local residents seeking absolute discretion, polite conversation, and refined company.
            </p>
            <div className="stats">
              <div className="stat">
                <strong>24x7</strong>
                <span>Support Team</span>
              </div>
              <div className="stat">
                <strong>100%</strong>
                <span>Discreet Booking</span>
              </div>
              <div className="stat">
                <strong>COD</strong>
                <span>Cash on Delivery</span>
              </div>
            </div>
          </div>
          <div className="media-grid">
            <Image
              src="/images/luxury-escort-service-udaipur.jpg"
              alt="Premium Escort Service in Udaipur"
              width={640}
              height={800}
              priority
              className="zoom-image"
            />
            <Image
              src="/images/hotel-escort-service-udaipur.jpg"
              alt="Udaipur Escorts Hotel Companionship"
              width={420}
              height={520}
              className="zoom-image"
            />
          </div>
        </div>
      </section>

      {/* Service Category Selection */}
      <section className="section alt" id="services">
        <div className="shell">
          <div className="center-header">
            <div className="eyebrow">Select Companion Profile Type</div>
            <h2>Our Verified Escort Categories in Udaipur</h2>
            <p className="subtitle">
              Browse through our premium categories starting from just ₹2999. Choose the perfect profile for your social gathering, resort visit, or hotel companion stay.
            </p>
          </div>
          <div className="cards">
            {companionTypes.map((item) => (
              <article className="card" key={item.title}>
                <div className="card-image-wrap">
                  <Image src={item.image} alt={item.title} width={420} height={520} />
                </div>
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Guarantee points */}
      <section className="section">
        <div className="shell split">
          <div>
            <div className="eyebrow">Why Choose Our Agency</div>
            <h2>Discretion, Authentic Previews, and Professional Coordination</h2>
            <p>
              We run a highly selective platform coordinating premium social companion profiles in Udaipur. From the initial booking enquiry to the meeting, your comfort and privacy are protected.
            </p>
            <div className="trust-list-v2">
              {trustPoints.map((point, index) => (
                <div className="trust-item-v2" key={index}>
                  <CheckCircle2 size={18} className="gold-check" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="image-side-box">
            <Image
              src="/images/udaipur-nightlife-escort.jpg"
              alt="Udaipur Elite Escort Service Companionship"
              width={640}
              height={760}
              className="side-banner-image"
            />
          </div>
        </div>
      </section>

      {/* Area Coverage Grid */}
      <section className="section alt" id="areas">
        <div className="shell">
          <div className="center-header">
            <div className="eyebrow">Available Coverage Zones</div>
            <h2>Prompt Escort Support Across All Key Udaipur Locations</h2>
            <p className="subtitle">
              We ensure fast arrival at all premier tourist spots, lakeside resorts, and heritage hotels.
            </p>
          </div>
          <div className="pill-list-v2">
            {serviceAreas.map((area) => (
              <span className="pill-v2" key={area}>
                <MapPin size={14} /> {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section" id="contact">
        <div className="shell form-wrap-v2">
          <div className="form-info-pane">
            <div className="eyebrow">Secure Booking Desk</div>
            <h2>Send Private Inquiry</h2>
            <p>
              Fill out this confidential reservation form for adult social companionship inquiries. We do not support or coordinate illegal services. Respect, clear boundaries, and consensual adult interactions are strict requirements.
            </p>
            <div className="info-badge">
              <strong>Guaranteed Discretion:</strong> All communications, text messages, and booking details are purged periodically to maintain client privacy.
            </div>
          </div>
          <div className="form-container-pane">
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Quick Overview Parameters */}
      <section className="section alt">
        <div className="shell overview-wrap-v2">
          <div>
            <div className="eyebrow">Quick Information Checklist</div>
            <h2>Service Parameters Summary</h2>
            <p>
              A clear snapshot of our premium companion booking details, operating locations, pricing structures, and privacy practices.
            </p>
          </div>
          <div className="overview-table-v2">
            {overviewRows.map(([label, value]) => (
              <div className="overview-row-v2" key={label}>
                <strong className="label">{label}</strong>
                <span className="value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq">
        <div className="shell">
          <div className="center-header">
            <div className="eyebrow">Got Questions?</div>
            <h2>Frequently Asked Questions</h2>
            <p className="subtitle">
              Find answers to common questions about call girl booking details, rates, and privacy policies in Udaipur.
            </p>
          </div>
          <div className="faq-grid-v2">
            {faqs.map((item, index) => (
              <details className="faq-details-v2" key={index}>
                <summary className="faq-summary-v2">{item.question}</summary>
                <div className="faq-content-v2">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Massive keyword-rich SEO Content section at the bottom (collapsible for premium UX) */}
      <section className="section alt seo-collapsible-section">
        <div className="shell">
          <details className="seo-collapsible-details">
            <summary className="seo-collapsible-summary">
              <span>View Editorial Guide & SEO Articles</span>
            </summary>
            <div
              className="seo-html-content"
              dangerouslySetInnerHTML={{ __html: seoContentHtml }}
            />
          </details>
        </div>
      </section>
    </main>
  );
}
