import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, CheckCircle2, LockKeyhole, MapPin, ShieldCheck } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import {
  companionTypes,
  contentSections,
  faqs,
  overviewRows,
  serviceAreas,
  siteConfig,
  trustPoints
} from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: siteConfig.url,
  areaServed: "Udaipur, Rajasthan",
  description:
    "Adult-only social companionship support with private inquiry handling and verified profile coordination.",
  sameAs: [siteConfig.url]
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">18+ private social companionship in Udaipur</div>
          <h1>Udaipur Companion Service</h1>
          <p>
            A discreet adult-only platform for premium social companionship, verified profile coordination, and
            respectful inquiry support across the City of Lakes.
          </p>
          <div className="hero-actions">
            <Link className="button gold" href="#contact">
              <CalendarCheck size={18} /> Check availability
            </Link>
            <Link className="button outline" href="/profiles">
              View profiles
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div>
            <div className="eyebrow">Premium, private, respectful</div>
            <h2>Companionship support shaped for Udaipur travellers and residents.</h2>
            <p className="lead">
              Udaipur is known for lakeside hotels, royal hospitality, destination weddings, and refined evenings. Our
              platform helps adults make private social companionship inquiries with clear communication, genuine
              profile review, and discreet coordination.
            </p>
            <div className="stats">
              <div className="stat">
                <strong>24x7</strong>
                <span>Inquiry support</span>
              </div>
              <div className="stat">
                <strong>18+</strong>
                <span>Adult-only access</span>
              </div>
              <div className="stat">
                <strong>Private</strong>
                <span>Discreet handling</span>
              </div>
            </div>
          </div>
          <div className="media-grid">
            <Image src="/images/luxury-escort-service-udaipur.jpg" alt="Premium companion in Udaipur" width={640} height={800} />
            <Image src="/images/hotel-escort-service-udaipur.jpg" alt="Hotel companionship setting" width={420} height={520} />
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="shell overview-wrap">
          <div>
            <div className="eyebrow">Quick overview</div>
            <h2>Premium adult companionship in the City of Lakes.</h2>
            <p>
              A clear snapshot of how the platform works for travellers, business guests, residents, hotel stays,
              private social meetings, and refined events across Udaipur.
            </p>
          </div>
          <div className="overview-table">
            {overviewRows.map(([label, value]) => (
              <div className="overview-row" key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="shell">
          <div className="eyebrow">Service categories</div>
          <h2>Choose the right social profile for your occasion.</h2>
          <div className="cards">
            {companionTypes.map((item) => (
              <article className="card" key={item.title}>
                <Image src={item.image} alt={item.title} width={420} height={520} />
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="shell split">
          <div>
            <div className="eyebrow">Why clients choose us</div>
            <h2>Trust, privacy, and smooth coordination from inquiry to confirmation.</h2>
            <p>
              The experience is built for adults who expect genuine profiles, fast replies, professional support, and a
              discreet process without unnecessary questions.
            </p>
          </div>
          <div className="trust-list">
            {trustPoints.map((point) => (
              <div className="trust-item" key={point}>
                <CheckCircle2 size={20} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="shell split">
          <div>
            <div className="eyebrow">Udaipur-wide coverage</div>
            <h2>Available around hotels, resorts, city landmarks, and travel zones.</h2>
            <p>
              Share your preferred area and timing, and the support team can check suitable profile availability. Every
              inquiry is handled with privacy and respectful communication.
            </p>
            <div className="pill-list">
              {serviceAreas.map((area) => (
                <span className="pill" key={area}>
                  <MapPin size={14} /> {area}
                </span>
              ))}
            </div>
          </div>
          <Image src="/images/udaipur-nightlife-escort.jpg" alt="Udaipur evening companionship" width={640} height={760} />
        </div>
      </section>

      <section className="section alt" id="complete-content">
        <div className="shell">
          <div className="eyebrow">Complete service details</div>
          <h2>Everything clients need to know before making a private inquiry.</h2>
          <div className="content-grid">
            {contentSections.map((section) => (
              <article className="content-block" key={section.title}>
                <h3>{section.title}</h3>
                {section.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="eyebrow">How it works</div>
          <h2>Simple inquiry, clear coordination, no unnecessary details.</h2>
          <div className="process">
            <div className="step">
              <ShieldCheck />
              <h3>Review profiles</h3>
              <p>Browse categories and choose the presentation style that fits your social occasion.</p>
            </div>
            <div className="step">
              <LockKeyhole />
              <h3>Submit inquiry</h3>
              <p>Send your area, timing, and preference through the private form, call, or WhatsApp.</p>
            </div>
            <div className="step">
              <CalendarCheck />
              <h3>Check availability</h3>
              <p>The support team confirms suitable options based on location and schedule.</p>
            </div>
            <div className="step">
              <MapPin />
              <h3>Coordinate privately</h3>
              <p>Final details are handled discreetly under adult-only, lawful, respectful guidelines.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="shell form-wrap">
          <div>
            <div className="eyebrow">Discreet booking support</div>
            <h2>Send an availability inquiry.</h2>
            <p>
              Use this form for adult social companionship inquiries only. The platform does not permit unlawful,
              coercive, or explicit requests. Respect, consent, and privacy are required for every interaction.
            </p>
            <div className="notice">
              Contact numbers are configurable through environment variables, so you can keep using the same database
              and storage setup without committing secrets.
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>

      <section className="section alt" id="faq">
        <div className="shell">
          <div className="eyebrow">FAQ</div>
          <h2>Common questions</h2>
          <div className="faq">
            {faqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
