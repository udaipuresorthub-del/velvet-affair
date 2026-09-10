import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogs";
import { siteConfig } from "@/lib/site";
import { Calendar, ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Udaipur Companion Guides & Escort Service Insights | Velvet Affair",
  description:
    "Read expert companion guides on booking call girls in Udaipur, luxury hotel etiquette, lakeside date ideas, and discreet companionship tips.",
  alternates: {
    canonical: `${siteConfig.url}/blog`
  },
  openGraph: {
    title: "Udaipur Companion Guides & Escort Service Insights | Velvet Affair",
    description:
      "Read expert companion guides on booking call girls in Udaipur, luxury hotel etiquette, lakeside date ideas, and discreet companionship tips.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: ["/images/udaipur-escort-service.jpg"],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Udaipur Companion Guides & Escort Service Insights | Velvet Affair",
    description:
      "Read expert companion guides on booking call girls in Udaipur, luxury hotel etiquette, lakeside date ideas, and discreet companionship tips.",
    images: ["/images/udaipur-escort-service.jpg"]
  }
};

function getIndianDateString() {
  const utcDate = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(utcDate.getTime() + istOffset);
  const yyyy = istDate.getUTCFullYear();
  const mm = String(istDate.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(istDate.getUTCDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export default function BlogListingPage() {
  const today = getIndianDateString();
  const publishedPosts = blogPosts
    .filter((post) => post.publishDate <= today)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));

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
        "name": "Blog",
        "item": `${siteConfig.url}/blog`
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
        <div className="eyebrow">Editorial Guides & Articles</div>
        <h1>Companionship Insights & Udaipur Escort Guides</h1>
        <p className="lead" style={{ fontSize: 16, color: "var(--muted)", maxWidth: 840, lineHeight: 1.8, marginBottom: 30 }}>
          Stay well-informed with our curated directory of luxury lifestyle articles, hotel etiquette advice, destination recommendations, and private companion reservation tips across Udaipur.
        </p>

        {publishedPosts.length === 0 ? (
          <div className="no-posts-notice">
            <p>No blog posts are published yet. Please check back later.</p>
          </div>
        ) : (
          <div className="blog-grid" style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 30 }}>
            {publishedPosts.map((post) => (
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
                    <Calendar size={13} />
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
                    Read Article <ChevronRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
