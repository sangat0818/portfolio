import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { getResource, resources } from "@/data/resources";
import { profile } from "@/data/profile";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return resources.filter((resource) => resource.published).map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resource = getResource((await params).slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.excerpt,
    alternates: { canonical: `/insights/${resource.slug}` },
    openGraph: { title: resource.title, description: resource.excerpt, type: "article" },
    twitter: { card: "summary", title: resource.title, description: resource.excerpt },
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const resource = getResource((await params).slug);
  if (!resource) notFound();
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.excerpt,
    author: { "@type": "Person", name: profile.name },
    url: `${profile.siteUrl}/insights/${resource.slug}`,
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="detail-page article-page">
        <article>
          <header className="article-header"><div className="article-shell">
            <Link className="back-link" href="/#insights"><ArrowLeft aria-hidden="true" /> Back to insights</Link>
            <div className="article-meta"><span>{resource.category}</span><span>{resource.date}</span><span>{resource.readTime}</span></div>
            <h1>{resource.title}</h1><p>{resource.excerpt}</p>
          </div></header>
          <div className="shell article-image image-frame"><Image src={resource.image.src} alt={resource.image.alt} fill priority sizes="100vw" /><span className="placeholder-tag">Resource image placeholder</span></div>
          <div className="article-body">
            <p className="placeholder-notice">This page demonstrates the resource template. Replace the bracketed copy with the final article before launch.</p>
            {resource.body.map((paragraph, index) => <section key={paragraph}><h2>{["The starting point", "What this means in practice", "A useful next step"][index]}</h2><p>{paragraph}</p></section>)}
          </div>
        </article>
        <section className="detail-cta"><div className="shell"><p>Would this help your team?</p><h2>Bring the learning into practice.</h2><Link className="button button-light" href="/#contact">Talk about a program <ArrowRight aria-hidden="true" /></Link></div></section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </>
  );
}
