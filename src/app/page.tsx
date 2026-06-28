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
  Award
} from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { profileImages, serviceAreas, siteConfig } from "@/lib/site";

export const metadata = {
  title: "Premium Escort Services in Udaipur | Call Girls Udaipur Available Just ₹3999",
  description: "Book premium Escort Service in Udaipur with Call Girls Udaipur. Verified Udaipur Escorts, VIP & Russian Escorts from ₹3999. 24x7 cash on delivery, WhatsApp booking.",
  alternates: {
    canonical: siteConfig.url
  }
};

export default function Home() {
  const girlsCards = [
    {
      name: "Aisha Sharma",
      age: "22 Years",
      rating: "4.9",
      image: "/images/beautiful-escort-girls-udaipur.jpg",
      title: "Premium Escort",
      copy: "Aisha is a polished companion choice for Udaipur guests who prefer charm, privacy, and smooth booking support."
    },
    {
      name: "Priya Singh",
      age: "24 Years",
      rating: "5.0",
      image: "/images/model-call-girl-service-udaipur.jpg",
      title: "VIP Companion",
      copy: "Priya offers a refined social presence for private dinners, hotel meetings, and premium companionship requests."
    },
    {
      name: "Neha Verma",
      age: "21 Years",
      rating: "4.8",
      image: "/images/high-class-call-girls-udaipur.jpg",
      title: "Verified Profile",
      copy: "Neha brings a fresh, friendly style for clients looking for discreet and comfortable companion availability."
    }
  ];

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
    "priceRange": "INR"
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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow-container">
            <Heart size={14} className="icon-pulse" />
            <span className="eyebrow">Udaipur Call Girls Services</span>
          </div>
          <h1>Premium Escort Services in Udaipur | Call Girls Udaipur Available Just ₹3999</h1>
          <p className="hero-description">
            Welcome to <strong>Girls of Passion</strong>, the premier <strong>Escort Service in Udaipur</strong> offering high-class companionship at affordable rates. If you are looking for elite <strong>Call Girls Udaipur</strong>, our agency coordinates with verified <strong>Udaipur Escorts</strong>, including stunning <strong>VIP Escorts</strong>, international <strong>Russian Escorts</strong>, refined <strong>Independent Call Girls</strong>, young <strong>College Girls</strong>, and discreet <strong>Housewife Escorts</strong>. With our <strong>24x7 Service</strong>, easy <strong>WhatsApp Booking</strong>, and trust-oriented <strong>Cash on Delivery</strong> terms, secure bookings start from just ₹3999. Experience private adult companionship across Udaipur's finest hotels and resorts with complete peace of mind.
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
            <span>₹3999 Entry Rates</span>
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

      {/* Girls Profile Cards */}
      <section className="section" id="profiles-preview">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Verified Girls</span>
            <h2>Premium Escort Services in Udaipur | Call Girls Available</h2>
            <p className="subtitle">
              Select from short profile previews and contact support for latest verified availability in Udaipur.
            </p>
          </div>

          <div className="girls-card-grid">
            {girlsCards.map((girl) => (
              <article className="girl-card" key={girl.name}>
                <div className="girl-image-wrap">
                  <Image
                    src={girl.image}
                    alt={`${girl.name} Udaipur verified companion profile`}
                    width={520}
                    height={620}
                    className="girl-card-image"
                  />
                  <span className="girl-rating"><Star size={14} /> {girl.rating}</span>
                  <span className="girl-age">{girl.age}</span>
                </div>
                <div className="girl-card-body">
                  <h3>{girl.name} - <span>{girl.title}</span></h3>
                  <p>{girl.copy}</p>
                  <div className="girl-card-meta">
                    <span><Award size={15} /> Verified 18+</span>
                    <Link href="/profiles">View Profile</Link>
                  </div>
                  <div className="girl-card-actions">
                    <Link href={`https://wa.me/${siteConfig.whatsapp}`} className="button girl-whatsapp">
                      <MessageCircle size={16} /> WhatsApp
                    </Link>
                    <Link href={`tel:${siteConfig.phone}`} className="button girl-call">
                      <Phone size={16} /> Call Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Homepage Gallery */}
      <section className="section alt" id="gallery">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Gallery</span>
            <h2>Girls Gallery Images in Udaipur</h2>
            <p className="subtitle">
              Browse premium companion gallery previews before checking current booking availability.
            </p>
          </div>

          <div className="homepage-gallery-grid">
            {profileImages.slice(0, 8).map((image, index) => (
              <Link href="/profiles" className="gallery-tile" key={image}>
                <Image
                  src={image}
                  alt={`Premium Udaipur girls gallery image ${index + 1}`}
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

      {/* Quick Overview Table */}
      <section className="section alt">
        <div className="shell overview-wrap-v2">
          <div className="section-intro">
            <span className="eyebrow">Overview</span>
            <h2>Quick Overview of Our Udaipur Escort Service</h2>
            <p>
              A snapshot of our key service parameters, location coverage, booking options, and profile quality.
            </p>
          </div>
          <div className="overview-table-v2">
            <div className="overview-row-v2 header-row">
              <strong>Feature</strong>
              <strong>Details</strong>
            </div>
            <div className="overview-row-v2">
              <span className="label">Service Type</span>
              <span className="value">Premium adult companionship & escort service in Udaipur</span>
            </div>
            <div className="overview-row-v2">
              <span className="label">Main Location</span>
              <span className="value">Udaipur, Rajasthan</span>
            </div>
            <div className="overview-row-v2">
              <span className="label">Available Areas</span>
              <span className="value">Lake Pichola, Fateh Sagar, City Palace area, Hiran Magri, Sukher, Bhuwana, Udaipur hotels and resorts</span>
            </div>
            <div className="overview-row-v2">
              <span className="label">Booking Options</span>
              <span className="value">Call and WhatsApp booking</span>
            </div>
            <div className="overview-row-v2">
              <span className="label">Availability</span>
              <span className="value">24x7 support, subject to profile availability</span>
            </div>
            <div className="overview-row-v2">
              <span className="label">Profile Quality</span>
              <span className="value">Verified, genuine, and carefully reviewed profiles</span>
            </div>
            <div className="overview-row-v2">
              <span className="label">Privacy Level</span>
              <span className="value">Discreet and confidential booking process</span>
            </div>
            <div className="overview-row-v2">
              <span className="label">Best For</span>
              <span className="value">Travellers, business guests, private meetings, hotel companionship, social events, dinner dates</span>
            </div>
            <div className="overview-row-v2">
              <span className="label">Support</span>
              <span className="value">Fast response and professional coordination</span>
            </div>
            <div className="overview-row-v2">
              <span className="label">Main Benefit</span>
              <span className="value">Reliable, private, and premium adult companionship experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & What Makes Us Different */}
      <section className="section">
        <div className="shell grid-2">
          {/* Why Choose Us */}
          <div className="premium-box">
            <div className="eyebrow">Why Girls of Passion</div>
            <h3>Why Choose Girls of Passion for Udaipur Escort Service?</h3>
            <p className="box-desc">
              Choosing the right Udaipur escort service is important because clients expect trust, privacy, genuine profiles, and professional coordination. In a popular tourist city like Udaipur, many people look for premium companionship, but not every platform provides the same level of reliability and confidentiality. Girls of Passion focuses on creating a smooth and comfortable experience from the first inquiry to final confirmation.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> Verified and genuine companion profiles</li>
              <li><Check size={16} /> Professional and polite communication</li>
              <li><Check size={16} /> Discreet booking process</li>
              <li><Check size={16} /> Fast response through call and WhatsApp</li>
              <li><Check size={16} /> 24x7 booking support</li>
              <li><Check size={16} /> Premium and well-presented companions</li>
              <li><Check size={16} /> Availability across major Udaipur locations</li>
              <li><Check size={16} /> Clear information before confirmation</li>
              <li><Check size={16} /> Privacy-focused adult companionship service</li>
            </ul>
          </div>

          {/* What Makes Us Different */}
          <div className="premium-box alt">
            <div className="eyebrow">Our Difference</div>
            <h3>Best Escort Services Udaipur – What Makes Us Different?</h3>
            <p className="box-desc">
              Girls of Passion is focused on delivering one of the best escort services Udaipur experiences through quality, privacy, and professional support. We believe that a premium companionship service should not only provide availability but also ensure a smooth, respectful, and confidential experience.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> Carefully reviewed profiles</li>
              <li><Check size={16} /> Premium companion categories</li>
              <li><Check size={16} /> Quick booking assistance</li>
              <li><Check size={16} /> Transparent communication</li>
              <li><Check size={16} /> Location-based availability</li>
              <li><Check size={16} /> Respectful adult-only interaction</li>
              <li><Check size={16} /> Reliable customer support</li>
              <li><Check size={16} /> Confidential handling of inquiries</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Verified Profiles & Premium Companionship */}
      <section className="section alt" id="areas">
        <div className="shell grid-2">
          {/* Verified Profiles */}
          <div className="content-panel">
            <span className="eyebrow">Verified & Genuine</span>
            <h3>Udaipur Escorts Service with Verified and Genuine Profiles</h3>
            <p>
              A professional Udaipur escorts service should offer genuine profiles, clear communication, and privacy protection. At Girls of Passion, we understand that clients want confidence before booking. That is why we focus on verified profiles and professional coordination.
            </p>
            <div className="checklist-grid">
              <span className="check-item"><CheckCircle2 size={16} /> Authenticity</span>
              <span className="check-item"><CheckCircle2 size={16} /> Good presentation</span>
              <span className="check-item"><CheckCircle2 size={16} /> Professional communication</span>
              <span className="check-item"><CheckCircle2 size={16} /> Friendly behaviour</span>
              <span className="check-item"><CheckCircle2 size={16} /> Comfort in social settings</span>
              <span className="check-item"><CheckCircle2 size={16} /> Respectful client interaction</span>
              <span className="check-item"><CheckCircle2 size={16} /> Privacy awareness</span>
            </div>
            <p className="note-text">
              Whether you are looking for a companion for a dinner date, hotel visit, private event, city outing, or social company, our team helps you check suitable available options based on your preferences.
            </p>
          </div>

          {/* Premium Companionship */}
          <div className="content-panel">
            <span className="eyebrow">Elite Matches</span>
            <h3>Premium Adult Companionship in Udaipur</h3>
            <p>
              Udaipur is a luxury destination, and many clients expect a refined companionship experience that matches the city’s charm. Girls of Passion offers premium adult companionship for clients who prefer elegance, privacy, and smooth communication.
            </p>
            <div className="suitability-tag-grid">
              <span className="tag-item">Dinner dates</span>
              <span className="tag-item">Hotel companionship</span>
              <span className="tag-item">Resort meetings</span>
              <span className="tag-item">Private social occasions</span>
              <span className="tag-item">Business travel companionship</span>
              <span className="tag-item">City tours</span>
              <span className="tag-item">Lakeside evenings</span>
              <span className="tag-item">Luxury lifestyle experiences</span>
              <span className="tag-item">Event companionship</span>
            </div>
            <p className="note-text">
              Every client has different expectations. Some prefer a sophisticated companion for a formal evening, while others may want a friendly and relaxed companion for private social company. Our support team helps clients find a suitable option based on availability, location, and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Expanded VIP & Russian Escort Info (New Content block for better ranking) */}
      <section className="section" id="services">
        <div className="shell grid-2">
          <div className="editorial-card-v3">
            <Sparkles size={24} className="gold-text" />
            <h3>High Profile Russian Escorts & VIP Call Girls in Udaipur</h3>
            <p>
              We coordinate with international models and high-profile companion agencies to maintain an elite list of Russian companion options in Udaipur. These profiles bring international elegance, premium social presentation, and distinct visual style, making them highly sought-after for luxury desert resort stays and high-end lakeside heritage gatherings.
            </p>
            <p>
              Each companion is fluent in conversation and respects the absolute privacy parameters expected by our elite clients. For inquiries regarding specific languages, styling preferences, or travel itineraries, contact our dedicated support agents.
            </p>
          </div>
          <div className="editorial-card-v3">
            <Award size={24} className="gold-text" />
            <h3>Top Rated Independent Companions & College Girls</h3>
            <p>
              For clients seeking a more casual, warm, and friendly social experience, our directory coordinates with local college companions and independent call girls in Udaipur. These options are ideal for relaxed city guides, visiting local historic spots around the City Palace, or simply having a polite partner for a dinner outing.
            </p>
            <p>
              By offering direct booking without advance deposits via Cash on Delivery, we build a trusted environment for local residents and travellers. Let us arrange a prompt booking starting from ₹3999.
            </p>
          </div>
        </div>
      </section>

      {/* VIP Escort Services & Area Coverage */}
      <section className="section alt">
        <div className="shell grid-2">
          {/* VIP Services */}
          <div className="premium-box">
            <span className="eyebrow">VIP Category</span>
            <h3>VIP Escort Services Udaipur for Premium Experiences</h3>
            <p className="box-desc">
              Our VIP escort services Udaipur are designed for clients who prefer high-class companionship, refined presentation, and premium support. VIP companions are suitable for luxury hotels, private resorts, business evenings, exclusive events, and elegant social occasions.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> Sophisticated appearance</li>
              <li><Check size={16} /> Professional communication</li>
              <li><Check size={16} /> Premium presentation</li>
              <li><Check size={16} /> Confidence in luxury settings</li>
              <li><Check size={16} /> Priority booking support</li>
              <li><Check size={16} /> Discreet coordination</li>
              <li><Check size={16} /> Personalized assistance</li>
            </ul>
            <p className="box-footer-text">
              If you are looking for a premium adult companion in Udaipur, our VIP category offers a more refined and exclusive experience.
            </p>
          </div>

          {/* Area Coverage */}
          <div className="premium-box alt">
            <span className="eyebrow">Locations</span>
            <h3>Escort Service Udaipur Available Across Major Locations</h3>
            <p className="box-desc">
              Our escort service Udaipur is available across popular areas, hotels, resorts, tourist zones, and residential locations in the city. Whether you are staying near Lake Pichola, Fateh Sagar, City Palace, or any premium resort area, our team can help you check profile availability.
            </p>
            <div className="location-grid-v2">
              <span className="loc-badge"><MapPin size={12} /> Lake Pichola</span>
              <span className="loc-badge"><MapPin size={12} /> Fateh Sagar Lake</span>
              <span className="loc-badge"><MapPin size={12} /> City Palace area</span>
              <span className="loc-badge"><MapPin size={12} /> Hiran Magri</span>
              <span className="loc-badge"><MapPin size={12} /> Sukher</span>
              <span className="loc-badge"><MapPin size={12} /> Bhuwana</span>
              <span className="loc-badge"><MapPin size={12} /> Udaipur railway station area</span>
              <span className="loc-badge"><MapPin size={12} /> Airport Road</span>
              <span className="loc-badge"><MapPin size={12} /> Luxury hotels</span>
              <span className="loc-badge"><MapPin size={12} /> Private apartments</span>
              <span className="loc-badge"><MapPin size={12} /> Resorts and villas</span>
              <span className="loc-badge"><MapPin size={12} /> Business locations</span>
              <span className="loc-badge"><MapPin size={12} /> Tourist areas</span>
            </div>
            <p className="box-footer-text">
              This wide coverage makes it easier for clients searching for Udaipur escorts service near me or escort service Udaipur near me to find location-based options quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Steps Section */}
      <section className="section">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Booking Guide</span>
            <h2>Call and WhatsApp Booking Process</h2>
            <p className="subtitle">
              Booking with Girls of Passion is simple, fast, and discreet. Our website and support process are designed for adults who want easy access and clear communication.
            </p>
          </div>
          <div className="booking-steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h4>Browse Profiles</h4>
              <p>Browse available companion profiles on our verified platform.</p>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h4>Select Category</h4>
              <p>Select your preferred profile or specific companion category.</p>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h4>Contact Support</h4>
              <p>Contact our support team through call or WhatsApp Booking.</p>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h4>Share Details</h4>
              <p>Share your preferred location, timing, and companion requirement.</p>
            </div>
            <div className="step-card">
              <div className="step-number">05</div>
              <h4>Confirm & Meet</h4>
              <p>Confirm availability and booking details. Pay on arrival (Cash on Delivery).</p>
            </div>
          </div>
          <p className="step-footer-text">
            Our team responds quickly and assists you with profile availability, location coordination, and basic booking information. Whether you are a first-time client or a regular visitor, the process is simple and private.
          </p>
        </div>
      </section>

      {/* Privacy Standards & Trusted Service */}
      <section className="section alt">
        <div className="shell grid-2">
          {/* Privacy Standards */}
          <div className="premium-box alt">
            <span className="eyebrow">Confidentiality</span>
            <h3>Private and Discreet Udaipur Escort Service</h3>
            <p className="box-desc">
              Privacy is one of the most important factors when choosing a Udaipur escort service. At Girls of Passion, confidentiality is always a top priority. We understand that clients want their personal details, communication, and booking information to remain private.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> Secure communication</li>
              <li><Check size={16} /> Confidential booking process</li>
              <li><Check size={16} /> No unnecessary personal questions</li>
              <li><Check size={16} /> Discreet coordination</li>
              <li><Check size={16} /> Privacy-focused support</li>
              <li><Check size={16} /> Respect for client identity and preferences</li>
            </ul>
            <p className="box-footer-text">
              Every inquiry is handled professionally so that clients can feel comfortable and confident while booking.
            </p>
          </div>

          {/* Trusted Service */}
          <div className="premium-box">
            <span className="eyebrow">Discreet Booking</span>
            <h3>Trusted Udaipur Call Girls Services</h3>
            <p className="box-desc">
              Many clients search for terms like call girl Udaipur, Udaipur call girl, call girls service Udaipur, or top call girls service in Udaipur when looking for adult companionship online. At Girls of Passion, we present this service in a more professional, respectful, and privacy-focused way.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> Verified companion profiles</li>
              <li><Check size={16} /> Fast booking assistance</li>
              <li><Check size={16} /> Private communication</li>
              <li><Check size={16} /> Premium companionship options</li>
              <li><Check size={16} /> Udaipur location coverage</li>
              <li><Check size={16} /> Professional support</li>
              <li><Check size={16} /> Respectful adult-only service</li>
              <li><Check size={16} /> 24x7 Booking Dispatch</li>
            </ul>
            <p className="box-footer-text">
              We focus on building trust through genuine profiles, discreet service, and clear communication before confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Local Options, Model Profiles, Support, Pricing, Hotels Card Grids */}
      <section className="section">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Service Guidelines</span>
            <h2>Select Companion Profile Type</h2>
            <p className="subtitle">
              Browse companion profiles below tailored for hotels, dinners, and events.
            </p>
          </div>
          
          <div className="features-container">
            {/* Local Companion Options */}
            <div className="feature-block-card">
              <h3>Local Udaipur Companion Options</h3>
              <p>
                Girls of Passion also provides local companion options for clients who prefer someone familiar with the city lifestyle. Local companions can be suitable for relaxed meetings, city outings, private social company, and comfortable companionship experiences.
              </p>
              <ul className="minimal-bullet-list">
                <li><ChevronRight size={14} /> Residents of Udaipur</li>
                <li><ChevronRight size={14} /> Travellers who want local guidance</li>
                <li><ChevronRight size={14} /> Private social meetings</li>
                <li><ChevronRight size={14} /> Short-duration companionship</li>
                <li><ChevronRight size={14} /> City-based availability</li>
              </ul>
            </div>

            {/* Model and Premium Companion Profiles */}
            <div className="feature-block-card">
              <h3>Model and Premium Companion Profiles</h3>
              <p>
                For clients who prefer stylish, modern, and well-presented profiles, Girls of Passion offers model and premium companion categories. These profiles are suitable for clients looking for confidence, elegance, and a polished social presence.
              </p>
              <ul className="minimal-bullet-list">
                <li><ChevronRight size={14} /> Luxury hotel meetings</li>
                <li><ChevronRight size={14} /> Private dinners</li>
                <li><ChevronRight size={14} /> Social events</li>
                <li><ChevronRight size={14} /> Business evenings</li>
                <li><ChevronRight size={14} /> Resort companionship</li>
                <li><ChevronRight size={14} /> Special occasions</li>
              </ul>
            </div>

            {/* 24x7 Support */}
            <div className="feature-block-card">
              <h3>24x7 Udaipur Escort Service Support</h3>
              <p>
                Girls of Passion offers 24x7 booking support for adults looking for private companionship in Udaipur. Whether you need help during the day, evening, or late night, our support team aims to respond quickly and professionally.
              </p>
              <ul className="minimal-bullet-list">
                <li><ChevronRight size={14} /> Profile availability</li>
                <li><ChevronRight size={14} /> Location-based options</li>
                <li><ChevronRight size={14} /> Booking confirmation</li>
                <li><ChevronRight size={14} /> Timing coordination</li>
                <li><ChevronRight size={14} /> Category selection</li>
                <li><ChevronRight size={14} /> Privacy-related questions</li>
              </ul>
            </div>

            {/* Transparent Pricing */}
            <div className="feature-block-card">
              <h3>Transparent Pricing and Clear Communication</h3>
              <p>
                A reliable escort service Udaipur should always provide clear information before booking. At Girls of Passion, we believe in transparent communication so that clients can make informed decisions.
              </p>
              <ul className="minimal-bullet-list">
                <li><ChevronRight size={14} /> Companion category</li>
                <li><ChevronRight size={14} /> Profile selection details</li>
                <li><ChevronRight size={14} /> Duration requirements</li>
                <li><ChevronRight size={14} /> Location specifications</li>
                <li><ChevronRight size={14} /> Timing settings</li>
                <li><ChevronRight size={14} /> Special preferences</li>
              </ul>
            </div>

            {/* Affordable Premium Companionship */}
            <div className="feature-block-card">
              <h3>Affordable Premium Companionship in Udaipur</h3>
              <p>
                Girls of Passion aims to provide a premium companionship experience with flexible options. We understand that different clients have different preferences and budgets, so our platform offers multiple companion categories.
              </p>
              <ul className="minimal-bullet-list">
                <li><ChevronRight size={14} /> Clear pricing details</li>
                <li><ChevronRight size={14} /> Flexible booking options</li>
                <li><ChevronRight size={14} /> No confusing booking process</li>
                <li><ChevronRight size={14} /> Multiple profile categories</li>
                <li><ChevronRight size={14} /> Premium and standard options</li>
                <li><ChevronRight size={14} /> Value-focused companionship</li>
              </ul>
            </div>

            {/* Hotel and Resort Companionship */}
            <div className="feature-block-card">
              <h3>Hotel and Resort Companionship in Udaipur</h3>
              <p>
                Udaipur is famous for its luxury hotels, lake-view resorts, villas, and royal hospitality. Many travellers visit the city for holidays, weddings, business trips, and romantic getaways. Girls of Passion provides discreet companionship booking support for clients staying at hotels and resorts.
              </p>
              <ul className="minimal-bullet-list">
                <li><ChevronRight size={14} /> Dinner dates</li>
                <li><ChevronRight size={14} /> Private evenings</li>
                <li><ChevronRight size={14} /> Social company</li>
                <li><ChevronRight size={14} /> Business travel support</li>
                <li><ChevronRight size={14} /> Resort stays</li>
                <li><ChevronRight size={14} /> Luxury experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Adult Only & Call Girls Service & Privacy Detail Paragraphs */}
      <section className="section alt">
        <div className="shell grid-2">
          {/* Adult Only Guidelines */}
          <div className="premium-box">
            <span className="eyebrow">Rules</span>
            <h3>Adult-Only Service with Respectful Guidelines</h3>
            <p className="box-desc">
              Girls of Passion is strictly for adults aged 18 years and above. Clients must communicate respectfully and follow all applicable local laws and platform guidelines.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> Adult-only access</li>
              <li><Check size={16} /> Respectful communication</li>
              <li><Check size={16} /> Consent-based interaction</li>
              <li><Check size={16} /> Privacy protection</li>
              <li><Check size={16} /> Professional coordination</li>
              <li><Check size={16} /> Lawful and responsible behaviour</li>
              <li><Check size={16} /> Clear communication before confirmation</li>
            </ul>
            <p className="box-footer-text">
              We aim to maintain a safe, discreet, and respectful platform for both clients and companions.
            </p>
          </div>

          {/* Call Girls Service */}
          <div className="premium-box alt">
            <span className="eyebrow">Platform Details</span>
            <h3>Udaipur Call Girls Service and Private Companion Booking</h3>
            <p className="box-desc">
              Clients often search for Udaipur call girls service, best call girls service in Udaipur, or top call girls service in Udaipur when looking for private adult companionship. Girls of Passion offers a more reliable and professional platform where adults can check verified profiles and get booking support with privacy.
            </p>
            <ul className="gold-bullet-list">
              <li><Check size={16} /> Quick call and WhatsApp support</li>
              <li><Check size={16} /> Verified companion profiles</li>
              <li><Check size={16} /> Discreet booking process</li>
              <li><Check size={16} /> Udaipur-wide availability</li>
              <li><Check size={16} /> Premium companion categories</li>
              <li><Check size={16} /> Clear communication</li>
              <li><Check size={16} /> 24x7 assistance support</li>
            </ul>
            <p className="box-footer-text">
              For the latest availability, contact our support team directly and share your preferred location and timing.
            </p>
          </div>
        </div>
      </section>

      {/* Extended Editorial Text Paragraphs */}
      <section className="section">
        <div className="shell text-editorial-container">
          <div className="editorial-block">
            <span className="eyebrow font-gold">Why Privacy Matters</span>
            <h3>Why Privacy Matters in Udaipur Companionship Services</h3>
            <p>
              Privacy is essential in adult companionship. Clients want assurance that their identity and booking details will remain confidential. Girls of Passion follows a discreet process to make every interaction private and comfortable.
            </p>
            <p>
              We do not make the booking process complicated. Our team only asks for the details required to check availability and coordinate the booking. Every step is handled with professionalism, respect, and confidentiality. This privacy-first approach makes Girls of Passion a dependable choice for adults looking for a premium Udaipur escort service.
            </p>
          </div>

          <div className="editorial-block" style={{ marginTop: 40 }}>
            <span className="eyebrow font-gold">Elite Experiences</span>
            <h3>Experience Premium Companionship in Udaipur Today</h3>
            <p>
              If you are looking for a trusted and premium Udaipur escort service, Girls of Passion is here to assist you with verified profiles, fast booking support, and complete privacy. Our platform offers multiple companion categories, including premium, VIP, model, independent-style, and local companion options.
            </p>
            <p>
              Whether you are searching for best escort services Udaipur, VIP escort services Udaipur, escort service Udaipur, or a private companion near you, our team can help you find suitable available options based on your preference.
            </p>
          </div>
        </div>
      </section>

      {/* Book Udaipur Escort Service Now Panel */}
      <section className="section alt">
        <div className="shell booking-cta-panel">
          <div className="cta-left">
            <span className="eyebrow text-dark">Get Started</span>
            <h2 className="text-dark">Book Udaipur Escort Service Now</h2>
            <p className="text-dark-muted">
              Ready to explore a premium adult companionship experience in Udaipur? Contact Girls of Passion for discreet support, verified profiles, and smooth booking assistance.
            </p>
            <ul className="dark-bullet-list">
              <li><Check size={16} /> Call now for availability</li>
              <li><Check size={16} /> WhatsApp booking available</li>
              <li><Check size={16} /> 24x7 support</li>
              <li><Check size={16} /> Service across Udaipur</li>
              <li><Check size={16} /> Verified companion profiles</li>
              <li><Check size={16} /> Private and discreet booking process</li>
              <li><Check size={16} /> Premium and VIP options available</li>
            </ul>
          </div>
          <div className="cta-right flex-center-col">
            <div className="cta-phone-card">
              <Phone size={24} className="gold-text" />
              <span>Call Us 24x7</span>
              <a href={`tel:${siteConfig.phone}`} className="phone-link">{siteConfig.phone}</a>
            </div>
            <div className="cta-wa-card">
              <MessageCircle size={24} className="green-text" />
              <span>WhatsApp Booking</span>
              <a href={`https://wa.me/${siteConfig.whatsapp}`} className="wa-link">Chat Online</a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section" id="contact">
        <div className="shell form-wrap-v2">
          <div className="form-info-pane">
            <span className="eyebrow">Reservation Desk</span>
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

      {/* Frequently Asked Questions */}
      <section className="section alt" id="faq">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p className="subtitle">
              Common queries answered about our premium adult companion options, pricing packages, and locations.
            </p>
          </div>
          <div className="faq-grid-v2">
            <details className="faq-details-v2" open>
              <summary className="faq-summary-v2">What is Girls of Passion?</summary>
              <div className="faq-content-v2">
                <p>Girls of Passion is a professional adult companionship platform in Udaipur for adults who want discreet booking support, verified profiles, and premium companion options.</p>
              </div>
            </details>
            <details className="faq-details-v2">
              <summary className="faq-summary-v2">Is Girls of Passion available across Udaipur?</summary>
              <div className="faq-content-v2">
                <p>Yes, booking support is available across major Udaipur locations, including Lake Pichola, Fateh Sagar, City Palace area, Hiran Magri, Sukher, Bhuwana, hotels, resorts, and private locations.</p>
              </div>
            </details>
            <details className="faq-details-v2">
              <summary className="faq-summary-v2">How can I book a companion in Udaipur?</summary>
              <div className="faq-content-v2">
                <p>You can browse available profiles and contact the support team through call or WhatsApp. Share your location, timing, and preference to check availability.</p>
              </div>
            </details>
            <details className="faq-details-v2">
              <summary className="faq-summary-v2">Is the booking process private?</summary>
              <div className="faq-content-v2">
                <p>Yes, the booking process is discreet and confidential. Client privacy is one of our top priorities.</p>
              </div>
            </details>
            <details className="faq-details-v2">
              <summary className="faq-summary-v2">Are the profiles verified?</summary>
              <div className="faq-content-v2">
                <p>Girls of Passion focuses on verified and genuine companion profiles to maintain trust, comfort, and service quality.</p>
              </div>
            </details>
            <details className="faq-details-v2">
              <summary className="faq-summary-v2">Do you offer VIP escort services Udaipur?</summary>
              <div className="faq-content-v2">
                <p>Yes, VIP companion options are available for clients who prefer premium presentation, refined communication, and priority booking support.</p>
              </div>
            </details>
            <details className="faq-details-v2">
              <summary className="faq-summary-v2">Is support available 24x7?</summary>
              <div className="faq-content-v2">
                <p>Yes, booking support is available 24x7, subject to profile availability, location, and timing.</p>
              </div>
            </details>
            <details className="faq-details-v2">
              <summary className="faq-summary-v2">Can I book a companion near my hotel or resort?</summary>
              <div className="faq-content-v2">
                <p>Yes, you can share your hotel or resort location, and our team will help you check suitable nearby options.</p>
              </div>
            </details>
            <details className="faq-details-v2">
              <summary className="faq-summary-v2">Is pricing shared before booking?</summary>
              <div className="faq-content-v2">
                <p>Yes, pricing and availability details are shared before confirmation so that clients can make an informed decision.</p>
              </div>
            </details>
            <details className="faq-details-v2">
              <summary className="faq-summary-v2">Who can use this service?</summary>
              <div className="faq-content-v2">
                <p>This service is strictly for adults aged 18 years and above. Clients must communicate respectfully and follow all applicable local laws.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
