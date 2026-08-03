import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogs";
import { siteConfig } from "@/lib/site";
import { Calendar, ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Official Blog & Guides - Udaipur Escort Service",
  description: "Read our official companion guides, adult service directories, and private booking tips in Udaipur.",
  alternates: {
    canonical: `${siteConfig.url}/blog`
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
        <div className="eyebrow">Insights & Guides</div>
        <h1>Our Premium Companionship Blog & Directory Guides</h1>
        <p className="lead">
          Stay informed with our latest news, private booking advice, location guides, and category overviews. All posts are verified and updated regularly.
        </p>

        {publishedPosts.length === 0 ? (
          <div className="no-posts-notice">
            <p>No blog posts are published yet. Please check back later.</p>
          </div>
        ) : (
          <div className="blog-grid" style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 30 }}>
            {publishedPosts.map((post) => (
              <article key={post.slug} className="blog-card" style={{
                background: "var(--bg-card)",
                border: "1px solid var(--line)",
                borderRadius: 14,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "var(--transition-smooth)"
              }}>
                <Link href={`/blog/${post.slug}`} className="blog-card-img-wrap" style={{
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
                      objectFit: "cover",
                      transition: "var(--transition-smooth)"
                    }}
                    className="blog-card-img"
                  />
                </Link>
                <div style={{ padding: 24, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div className="blog-card-date" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--gold)",
                    marginBottom: 10
                  }}>
                    <Calendar size={12} />
                    <span>{post.publishDate}</span>
                  </div>
                  <h3 style={{ fontSize: 18, color: "var(--ink)", marginBottom: 12, lineHeight: 1.3 }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: "var(--ink)" }} className="hover-gold">
                      {post.title}
                    </Link>
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 20, flexGrow: 1, lineHeight: 1.6 }}>
                    {post.description}
                  </p>
                  <Link href={`/blog/${post.slug}`} style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 13,
                    fontWeight: 800,
                    color: "var(--gold)"
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
