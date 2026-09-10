import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Heart,
  UserCheck,
  Star,
  Check,
  ChevronRight,
  Phone,
  MessageCircle,
  Clock,
  Sparkles,
  Award,
  Crown,
  ShieldAlert
} from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { profileImages, serviceAreas, siteConfig, overviewRows, seoContentHtml, faqs } from "@/lib/site";
import { blogPosts } from "@/lib/blogs";
import { GirlsCarousel } from "@/components/GirlsCarousel";

function getIndianDateString() {
  const utcDate = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(utcDate.getTime() + istOffset);
  const yyyy = istDate.getUTCFullYear();
  const mm = String(istDate.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(istDate.getUTCDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export const metadata = {
  title: "#1 Udaipur Escort Service | Top Call Girls in Udaipur @ ₹3999 (24/7 COD)",
  description:
    "Book top-rated Udaipur Escort Service & verified call girls in Udaipur from ₹3999. Elite Russian escorts, VIP models & independent call girls with 24x7 Cash on Delivery. 100% private.",
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

export default function Home() {
  const girlsCards = [
    {
      name: "Aisha Sharma",
      age: "22 Years",
      rating: "4.9",
      image: "/images/beautiful-escort-girls-udaipur.jpg",
      title: "VIP Escort",
      copy: "Aisha is a charming companion offering sophisticated conversation and gracious company for luxury palace dinners in Udaipur."
    },
    {
      name: "Priya Singh",
      age: "24 Years",
      rating: "5.0",
      image: "/images/model-call-girl-service-udaipur.jpg",
      title: "Celebrity Model",
      copy: "Priya brings an elite, polished presence ideal for upscale corporate events, cocktail galas, and lakeside resort getaways."
    },
    {
      name: "Neha Verma",
      age: "21 Years",
      rating: "4.8",
      image: "/images/high-class-call-girls-udaipur.jpg",
      title: "Verified Companion",
      copy: "Neha offers a friendly, genuine, and cheerful aura, making clients feel thoroughly comfortable and respected from the very start."
    },
    {
      name: "Ananya Sen",
      age: "23 Years",
      rating: "4.9",
      image: "/images/beautiful-independent-escort-udaipur.jpg",
      title: "Independent Model",
      copy: "Ananya is an unhurried independent companion who loves romantic lakeside strolls along Lake Pichola and quiet dinner dates."
    },
    {
      name: "Sofia Petrova",
      age: "25 Years",
      rating: "5.0",
      image: "/images/russian-escort-in-udaipur.jpg",
      title: "Russian Escort",
      copy: "Sofia radiates international glamour and poise, making her a favorite companion for destination weddings and luxury suite visits."
    },
    {
      name: "Riya Kapoor",
      age: "22 Years",
      rating: "4.8",
      image: "/images/beautiful-model-escort-udaipur.jpg",
      title: "College Profile",
      copy: "Riya is playful, witty, and engaging, perfectly suited for young travelers seeking a knowledgeable local companion in Udaipur."
    },
    {
      name: "Sana Khan",
      age: "26 Years",
      rating: "4.9",
      image: "/images/classy-escort-service-udaipur.jpg",
      title: "High Profile Escort",
      copy: "Sana delivers effortless sophistication and flawless etiquette for exclusive business evenings and high-profile resort stays."
    },
    {
      name: "Pooja Malhotra",
      age: "24 Years",
      rating: "4.7",
      image: "/images/elegant-udaipur-escorts.jpg",
      title: "Verified Escort",
      copy: "Pooja is attentive and discreet, catering to gentlemen who value privacy, serene hotel companionship, and warm conversation."
    },
    {
      name: "Kavya Patel",
      age: "23 Years",
      rating: "4.9",
      image: "/images/high-profile-udaipur-escorts.jpg",
      title: "Premium Companion",
      copy: "Kavya blends modern style with traditional warmth, perfect for scenic evening dates overlooking illuminated palaces."
    },
    {
      name: "Aditi Rao",
      age: "22 Years",
      rating: "4.8",
      image: "/images/hot-escort-girls-udaipur.jpg",
      title: "Independent Call Girl",
      copy: "Aditi provides gentle, affectionate companionship with flexible booking durations and total confidentiality."
    },
    {
      name: "Elena Gomez",
      age: "24 Years",
      rating: "5.0",
      image: "/images/exclusive-escort-service-udaipur.jpg",
      title: "Elite Russian Model",
      copy: "Elena offers breathtaking beauty and refined social graces, popular for private luxury villa stays along Airport Road."
    },
    {
      name: "Meera Joshi",
      age: "27 Years",
      rating: "4.8",
      image: "/images/hot-udaipur-call-girl.jpg",
      title: "Mature Companion",
      copy: "Meera delivers a calm, understanding, and warm companion experience for clients desiring deep, relaxing conversation."
    }
  ];

  const today = getIndianDateString();
  const publishedBlogs = blogPosts
    .filter((post) => post.publishDate <= today)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
    .slice(0, 6);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
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
    "priceRange": "INR",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "194"
    }
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Premium Adult Companionship & Escort Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
    "serviceType": "Adult Companionship",
    "areaServed": {
      "@type": "City",
      "name": "Udaipur"
    },
    "description": "Premium adult social companionship and escort service in Udaipur coordinating VIP, Russian, and independent call girls starting from ₹3999."
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "inLanguage": "en-IN",
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "logo": `${siteConfig.url}/logo.png`
    }
  };

  const profileItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Premium Escort Services in Udaipur - Call Girls Available",
    "itemListElement": girlsCards.map((girl, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `${girl.name} - ${girl.title}`,
      "url": `${siteConfig.url}/profiles`,
      "image": `${siteConfig.url}${girl.image}`,
      "description": girl.copy
    }))
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
    <main className="main-content">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileItemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow-container">
            <Crown size={15} className="icon-pulse" />
            <span className="eyebrow">The Royal Concierge of Udaipur</span>
          </div>
          <h1>#1 Premium Udaipur Escort Service & Elite Call Girls in Udaipur</h1>
          <p className="hero-description">
            Welcome to <strong>Udaipur Escort Service</strong>, the premier luxury companion agency catering to gentlemen seeking top-tier <strong>escort services in Udaipur</strong> starting at just <strong>₹3999</strong>. If you are searching for genuine and stunning <strong>call girls in Udaipur</strong>, our exclusive portfolio brings together verified <strong>Udaipur escorts</strong>, prestigious <strong>VIP escorts</strong>, gorgeous <strong>Russian call girls</strong>, and charming independent models. Enjoy seamless <strong>24/7 service</strong>, immediate <strong>WhatsApp booking</strong>, and safe <strong>Cash on Delivery (COD)</strong> payment with 100% discretion across all lakeside resorts and luxury heritage hotels in Udaipur.
          </p>
          <div className="hero-actions">
            <Link className="button gold" href="#contact">
              <CalendarCheck size={18} /> Reserve Companion
            </Link>
            <Link className="button outline" href="/profiles">
              Explore Verified Profiles
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="trust-badges-bar">
        <div className="shell badges-grid">
          <div className="badge-item">
            <Star size={18} />
            <span>₹3999 Entry Rates</span>
          </div>
          <div className="badge-item">
            <UserCheck size={18} />
            <span>100% Genuine Profiles</span>
          </div>
          <div className="badge-item">
            <LockKeyhole size={18} />
            <span>Strict Privacy Guaranteed</span>
          </div>
          <div className="badge-item">
            <ShieldCheck size={18} />
            <span>Cash on Delivery (COD)</span>
          </div>
        </div>
      </section>

      {/* Girls Profile Carousel Preview */}
      <section className="section" id="profiles-preview">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Curated Portfolio</span>
            <h2>Premium Escort Services in Udaipur – Verified Call Girls</h2>
            <p className="subtitle">
              Explore current companion previews and connect with our 24/7 concierge for real-time dispatch availability in Udaipur.
            </p>
          </div>

          <GirlsCarousel girls={girlsCards} />
        </div>
      </section>

      {/* Visual Gallery Grid */}
      <section className="section alt" id="gallery">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Visual Roster</span>
            <h2>Exclusive Udaipur Companion Gallery</h2>
            <p className="subtitle">
              Inspect authentic visual previews of our verified high-class models before confirming your reservation.
            </p>
          </div>

          <div className="homepage-gallery-grid">
            {profileImages.slice(0, 8).map((image, index) => (
              <Link href="/profiles" className="gallery-tile" key={image}>
                <Image
                  src={image}
                  alt={`Verified Udaipur escort model preview image ${index + 1}`}
                  width={420}
                  height={540}
                  className="gallery-image"
                />
                <span>Verified 18+</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts */}
      {publishedBlogs.length > 0 && (
        <section className="section" id="featured-blogs">
          <div className="shell">
            <div className="center-header">
              <span className="eyebrow">Travel & Companionship Guides</span>
              <h2>Latest Udaipur Companion Articles & Etiquette</h2>
              <p className="subtitle">
                Essential advice on hotel bookings, romantic lakeside date spots, and private companion etiquette in Udaipur.
              </p>
            </div>

            <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 30 }}>
              {publishedBlogs.map((post) => (
                <article key={post.slug} className="blog-card" style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "var(--transition-smooth)",
                  boxShadow: "var(--card-shadow)"
                }}>
                  <Link href={`/blog/${post.slug}`} style={{
                    position: "relative",
                    aspectRatio: "16 / 10",
                    overflow: "hidden",
                    display: "block"
                  }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={480}
                      height={300}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                      className="blog-card-img"
                    />
                  </Link>
                  <div style={{ padding: 26, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <div style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 12,
                      fontWeight: 400,
                      color: "var(--gold-dark)",
                      marginBottom: 10
                    }}>
                      <CalendarCheck size={13} />
                      <span>{post.publishDate}</span>
                    </div>
                    <h3 style={{ fontSize: 18, color: "var(--ink)", marginBottom: 12, lineHeight: 1.35, fontWeight: 400 }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: "var(--ink)" }} className="hover-gold">
                        {post.title}
                      </Link>
                    </h3>
                    <p style={{ fontSize: 13.5, color: "var(--muted)", marginBottom: 20, flexGrow: 1, lineHeight: 1.65, fontWeight: 400 }}>
                      {post.description}
                    </p>
                    <Link href={`/blog/${post.slug}`} style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      fontSize: 13,
                      fontWeight: 400,
                      color: "var(--gold-dark)"
                    }} className="hover-underline">
                      Read Full Article <ChevronRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 44 }}>
              <Link href="/blog" className="button outline">
                View All Companion Guides
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Quick Overview Table */}
      <section className="section alt">
        <div className="shell overview-wrap-v2">
          <div className="center-header">
            <span className="eyebrow">Service Summary</span>
            <h2>Snapshot of Our Udaipur Escort Concierge</h2>
            <p className="subtitle">
              A comprehensive overview of service options, destination reach, tariff transparency, and privacy protocols.
            </p>
          </div>
          <div className="overview-table-container">
            <div className="overview-table-v2">
              <div className="overview-row-v2 header-row">
                <span className="label">Parameter</span>
                <span className="value">Standard Policy</span>
              </div>
              {overviewRows.map(([key, val]) => (
                <div className="overview-row-v2" key={key}>
                  <span className="label">{key}</span>
                  <span className="value">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & What Makes Us Different */}
      <section className="section">
        <div className="shell grid-2">
          <div className="premium-box">
            <div className="eyebrow">Why Velvet Affair</div>
            <h3>Why Select Udaipur Escort Service for Your Companionship?</h3>
            <p className="box-desc">
              When visiting the City of Lakes, discerning clients require absolute trust, uncompromised privacy, and genuine visual profiles. Udaipur Escort Service is renowned for delivering an effortless, respectful, and transparent experience from initial enquiry to final room arrival.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> 100% Authentic, pre-screened companion profiles</li>
              <li><Check size={16} /> Courteous, articulate, and well-mannered companions</li>
              <li><Check size={16} /> Zero upfront advance payment – Strict Cash on Delivery</li>
              <li><Check size={16} /> Rapid WhatsApp booking with real-time picture previews</li>
              <li><Check size={16} /> 24x7 Round-the-clock concierge dispatch</li>
              <li><Check size={16} /> Coverage across heritage palace suites and lakeside villas</li>
              <li><Check size={16} /> Full adherence to consensual adult-only (18+) guidelines</li>
              <li><Check size={16} /> End-to-end client confidentiality and privacy protection</li>
            </ul>
          </div>

          <div className="premium-box alt">
            <div className="eyebrow">The Royal Distinction</div>
            <h3>Best Escort Services Udaipur – What Truly Sets Us Apart?</h3>
            <p className="box-desc">
              Unlike ordinary agencies that use generic stock images or impose misleading advance deposits, our platform operates on transparency, dignity, and prompt service. We guarantee that the verified companion who arrives at your venue matches your chosen profile.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> Transparent package tariffs starting from ₹3999</li>
              <li><Check size={16} /> Verified international Russian escorts & VIP models</li>
              <li><Check size={16} /> Prompt 30 to 45-minute hotel room delivery</li>
              <li><Check size={16} /> Respectful, discreet, and non-judgmental customer care</li>
              <li><Check size={16} /> In-call and out-call flexibility across Udaipur</li>
              <li><Check size={16} /> Direct coordination with independent call girls</li>
              <li><Check size={16} /> Complete data privacy with zero chat logging</li>
              <li><Check size={16} /> Dedicated VIP concierge available anytime on WhatsApp</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Verified Profiles & Premium Companionship */}
      <section className="section alt" id="areas">
        <div className="shell grid-2">
          <div className="content-panel">
            <span className="eyebrow">Verified & Authentic</span>
            <h3>Udaipur Escorts Service with Hand-Picked Profiles</h3>
            <p>
              A distinguished companionship concierge begins with genuine visual authenticity and mutual respect. At Udaipur Escort Service, we screen every companion to guarantee poise, charm, and engaging social chemistry.
            </p>
            <div className="checklist-grid">
              <span className="check-item"><CheckCircle2 size={16} /> Visual Authenticity</span>
              <span className="check-item"><CheckCircle2 size={16} /> Elegant Social Presentation</span>
              <span className="check-item"><CheckCircle2 size={16} /> Polite Communication</span>
              <span className="check-item"><CheckCircle2 size={16} /> Cheerful & Welcoming Demeanor</span>
              <span className="check-item"><CheckCircle2 size={16} /> Luxury Hotel Etiquette</span>
              <span className="check-item"><CheckCircle2 size={16} /> Absolute Privacy Awareness</span>
              <span className="check-item"><CheckCircle2 size={16} /> Flexible Booking Durations</span>
              <span className="check-item"><CheckCircle2 size={16} /> Punctual Physical Arrival</span>
            </div>
            <p className="note-text">
              Whether you desire an affectionate companion for a lakeside candlelight dinner, a high-class partner for corporate celebrations, or private hotel room comfort, our concierges assist you with customized matches.
            </p>
          </div>

          <div className="content-panel">
            <span className="eyebrow">Tailored Occasions</span>
            <h3>Premium Adult Companionship in Udaipur for Every Setting</h3>
            <p>
              Udaipur offers some of India&apos;s most magnificent romantic backdrops. Our companions are skilled at fitting seamlessly into varied social environments, providing delightful warmth and intelligent conversation.
            </p>
            <div className="suitability-tag-grid">
              <span className="tag-item">Lakefront Candlelight Dinners</span>
              <span className="tag-item">Heritage Palace Stays</span>
              <span className="tag-item">Private Resort Relaxation</span>
              <span className="tag-item">Executive Business Travel</span>
              <span className="tag-item">Cocktail Parties & Galas</span>
              <span className="tag-item">Lakeside Sunset Strolls</span>
              <span className="tag-item">Destination Weddings</span>
              <span className="tag-item">Unhurried Weekend Getaways</span>
            </div>
            <p className="note-text">
              Every client has unique companionship preferences. Some appreciate witty, talkative college companions, while others prefer mature, quiet sophistication. Our support desk helps you discover your ideal companion effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Expanded VIP & Russian Escort Info */}
      <section className="section" id="services">
        <div className="shell grid-2">
          <div className="editorial-card-v3">
            <Sparkles size={26} className="gold-text" />
            <h3>High Profile Russian Escorts & VIP Call Girls in Udaipur</h3>
            <p>
              We maintain an exclusive roster of international models and <strong>Russian escorts in Udaipur</strong> for clients with refined global tastes. Possessing tall statures, striking facial symmetry, and graceful conversational manners, our Russian companions add royal glamour to luxury palace suites and private resort villas.
            </p>
            <p>
              Every international companion is seasoned in private VIP etiquette, ensuring seamless discretion and charming presence for high-end celebrations and intimate evenings.
            </p>
          </div>
          <div className="editorial-card-v3">
            <Award size={26} className="gold-text" />
            <h3>Top Rated Independent Companions & Local College Girls</h3>
            <p>
              If your preference leans toward a warm, authentic, and down-to-earth romantic connection, our <strong>independent escort service Udaipur</strong> roster provides charming local companions. These cheerful college girls and independent models make delightful dates for discovering historic havelis, rooftop dining near the City Palace, or relaxed suite meetings.
            </p>
            <p>
              By offering direct booking without any advance fee via <strong>Cash on Delivery (COD)</strong>, we provide complete safety for both guests and companions starting from ₹3999.
            </p>
          </div>
        </div>
      </section>

      {/* VIP Category & Destination Coverage */}
      <section className="section alt" id="areas">
        <div className="shell grid-2">
          <div className="premium-box">
            <span className="eyebrow">VIP Prestige</span>
            <h3>VIP Escort Services Udaipur for Discerning Gentlemen</h3>
            <p className="box-desc">
              Our <strong>VIP escort service Udaipur</strong> is designed for high-profile business leaders, celebrities, and travelers who require the very best in presentation, beauty, and privacy. VIP companions are accustomed to 5-star hospitality and luxury settings.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> Flawless aesthetic styling & designer fashion</li>
              <li><Check size={16} /> Fluent, refined conversational etiquette</li>
              <li><Check size={16} /> Priority booking coordination via WhatsApp</li>
              <li><Check size={16} /> Discreet arrival in unmarked luxury vehicles</li>
              <li><Check size={16} /> Complete peace of mind and confidentiality</li>
            </ul>
          </div>

          <div className="premium-box alt">
            <span className="eyebrow">Coverage Areas</span>
            <h3>Escort Service Udaipur Available Across Prime Destinations</h3>
            <p className="box-desc">
              Our concierge covers all primary tourist, commercial, and residential zones across Udaipur. Whether your reservation is at a royal palace hotel or an intimate boutique villa, our dispatch team coordinates timely arrival.
            </p>
            <div className="location-grid-v2">
              <span className="loc-badge"><MapPin size={12} /> Lake Pichola</span>
              <span className="loc-badge"><MapPin size={12} /> Fateh Sagar Lake</span>
              <span className="loc-badge"><MapPin size={12} /> City Palace Area</span>
              <span className="loc-badge"><MapPin size={12} /> Hiran Magri</span>
              <span className="loc-badge"><MapPin size={12} /> Sukher</span>
              <span className="loc-badge"><MapPin size={12} /> Bhuwana</span>
              <span className="loc-badge"><MapPin size={12} /> Airport Road Luxury Resorts</span>
              <span className="loc-badge"><MapPin size={12} /> Railway Station Area</span>
              <span className="loc-badge"><MapPin size={12} /> Private Heritage Havelis</span>
            </div>
            <p className="box-footer-text">
              Clients searching for an <strong>escort service in Udaipur near me</strong> benefit from swift 30-minute companion dispatch across all mapped zones.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Steps Section */}
      <section className="section">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Simple & Discreet</span>
            <h2>Effortless 5-Step Companion Booking Process</h2>
            <p className="subtitle">
              Reserving a companion with Udaipur Escort Service is swift, confidential, and completely transparent.
            </p>
          </div>
          <div className="booking-steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h4>Browse Profiles</h4>
              <p>Explore our verified online companion roster and choose your preferred category.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h4>Reach Out</h4>
              <p>Contact our concierge desk via WhatsApp or direct phone call at +91 9549032117.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h4>Share Location</h4>
              <p>Provide your hotel or villa address, timing preference, and companion requirements.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h4>Confirm Preview</h4>
              <p>Receive live photo verification on WhatsApp and confirm your booking instantly.</p>
            </div>
            <div className="step-card">
              <div className="step-number">05</div>
              <h4>Meet & Pay (COD)</h4>
              <p>Meet your companion at your venue and settle the agreed tariff via Cash on Delivery.</p>
            </div>
          </div>
          <p className="step-footer-text">
            Our support desk guarantees swift responses and assists you with companion availability, timing adjustments, and pricing clarity with total confidentiality.
          </p>
        </div>
      </section>

      {/* Privacy Standards & Discretion */}
      <section className="section alt">
        <div className="shell grid-2">
          <div className="premium-box">
            <span className="eyebrow">Confidentiality Assured</span>
            <h3>Strict Privacy & Discretion Standards</h3>
            <p className="box-desc">
              Your personal privacy is our highest priority. We recognize that discerning clients value confidential communications and discreet coordination above all else.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> End-to-end encrypted WhatsApp communication</li>
              <li><Check size={16} /> No intrusive questions or unnecessary records</li>
              <li><Check size={16} /> Automatic periodic purge of client inquiry details</li>
              <li><Check size={16} /> Companions arrive in normal private attire</li>
              <li><Check size={16} /> Zero risk of data leakage or credit card records</li>
            </ul>
          </div>

          <div className="premium-box alt">
            <span className="eyebrow">Trust & Integrity</span>
            <h3>Trusted Adult Companionship Agency in Udaipur</h3>
            <p className="box-desc">
              Many travelers search for <strong>call girl Udaipur</strong>, <strong>Udaipur call girls</strong>, or <strong>top call girls service in Udaipur</strong> when seeking companionship online. Our platform elevates this service into an authentic, respectful, and reliable concierge experience.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> Genuine, unedited companion portfolio</li>
              <li><Check size={16} /> No advance deposits – Pay upon physical arrival</li>
              <li><Check size={16} /> Courteous, polite, and responsive coordinators</li>
              <li><Check size={16} /> Service availability 24 hours a day, 7 days a week</li>
              <li><Check size={16} /> Consistent 5-star feedback from repeat guests</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Block Cards */}
      <section className="section">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Companion Categories</span>
            <h2>Select Your Preferred Companion Category</h2>
            <p className="subtitle">
              From sophisticated models to local college profiles, find the exact match for your itinerary.
            </p>
          </div>

          <div className="features-container">
            <div className="feature-block-card">
              <h3>Local Udaipur Companions</h3>
              <p>
                Friendly local companions well-versed in the romantic culture and lifestyle of Udaipur, ideal for casual city exploration and warm private social company.
              </p>
              <ul className="minimal-bullet-list">
                <li><ChevronRight size={14} /> Knowledgeable Udaipur locals</li>
                <li><ChevronRight size={14} /> Relaxed dinner dates & city strolls</li>
                <li><ChevronRight size={14} /> Flexible short & long booking slots</li>
              </ul>
            </div>

            <div className="feature-block-card">
              <h3>High Profile Fashion Models</h3>
              <p>
                Statuesque, fashionable companions possessing magnetic beauty and refined presence, suited for luxury resort gatherings and prestigious private parties.
              </p>
              <ul className="minimal-bullet-list">
                <li><ChevronRight size={14} /> Stunning photographic beauty</li>
                <li><ChevronRight size={14} /> High-end social conversational skill</li>
                <li><ChevronRight size={14} /> VIP hotel & resort companionship</li>
              </ul>
            </div>

            <div className="feature-block-card">
              <h3>24/7 Dedicated Concierge Support</h3>
              <p>
                Our professional booking team operates around the clock to provide real-time availability checks, location-based dispatch, and transparent guidance.
              </p>
              <ul className="minimal-bullet-list">
                <li><ChevronRight size={14} /> Instant WhatsApp & call assistance</li>
                <li><ChevronRight size={14} /> Quick 30-minute dispatch coordination</li>
                <li><ChevronRight size={14} /> Discreet answers to all client inquiries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive SEO Content Guide */}
      <section className="section alt">
        <div className="shell">
          <div
            dangerouslySetInnerHTML={{ __html: seoContentHtml }}
          />
        </div>
      </section>

      {/* Direct Booking CTA Panel */}
      <section className="section">
        <div className="shell booking-cta-panel">
          <div className="cta-left">
            <span className="eyebrow text-dark">Instant Dispatch</span>
            <h2 className="text-dark">Reserve Your Udaipur Companion Now</h2>
            <p className="text-dark-muted">
              Ready to experience royal hospitality in Udaipur? Contact our confidential booking desk today for live verified photo previews and prompt companion arrival.
            </p>
            <ul className="dark-bullet-list">
              <li><Check size={16} /> Entry packages from ₹3999</li>
              <li><Check size={16} /> 100% Cash on Delivery (COD)</li>
              <li><Check size={16} /> 24x7 Round-the-clock booking</li>
              <li><Check size={16} /> Lake Pichola & Fateh Sagar coverage</li>
              <li><Check size={16} /> Verified VIP, Russian & model profiles</li>
              <li><Check size={16} /> Completely confidential and private</li>
            </ul>
          </div>
          <div className="cta-right flex-center-col" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="cta-phone-card">
              <Phone size={24} className="gold-text" />
              <span>Direct Phone Call</span>
              <a href={`tel:${siteConfig.phone}`} className="phone-link">{siteConfig.phone}</a>
            </div>
            <div className="cta-wa-card">
              <MessageCircle size={24} className="green-text" />
              <span>WhatsApp Concierge</span>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} className="wa-link">Chat with Concierge</a>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="section alt" id="contact">
        <div className="shell form-wrap-v2">
          <div className="form-info-pane">
            <span className="eyebrow">Confidential Inquiries</span>
            <h2>Send Private Reservation Request</h2>
            <p>
              Submit your inquiry through our encrypted reservation desk. We coordinate verified adult social companionship across luxury hotels and villas in Udaipur. Strict 18+ adult policies apply.
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

      {/* Interactive FAQ Accordion */}
      <section className="section" id="faq">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Client Inquiries</span>
            <h2>Frequently Asked Questions</h2>
            <p className="subtitle">
              Authoritative answers regarding companion verification, pricing tariffs, and hotel room delivery across Udaipur.
            </p>
          </div>
          <div className="faq-grid-v2">
            {faqs.map((faq, index) => (
              <details className="faq-details-v2" open={index === 0} key={faq.question}>
                <summary className="faq-summary-v2">{faq.question}</summary>
                <div className="faq-content-v2">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
