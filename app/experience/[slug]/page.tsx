import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectCard } from "@/components/project-card";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.overview,
    alternates: { canonical: `/experience/${project.slug}` },
    openGraph: { title: project.title, description: project.overview, type: "article" },
    twitter: { card: "summary", title: project.title, description: project.overview },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content" className="detail-page">
        <section className="case-hero">
          <div className="shell">
            <Link className="back-link" href="/#experience"><ArrowLeft aria-hidden="true" /> Back to experience</Link>
            <p className="eyebrow"><span />CASE STUDY · PLACEHOLDER</p>
            <h1>{project.title}</h1>
            <p className="case-deck">{project.overview}</p>
            <div className="case-facts">
              <Fact label="Organisation" value={project.client} />
              <Fact label="Year" value={project.year} />
              <Fact label="Audience" value={project.audience} />
              <Fact label="Duration" value={project.duration} />
              <Fact label="My role" value={project.role} />
            </div>
            <div className="case-hero-image image-frame">
              <Image src={project.image.src} alt={project.image.alt} fill priority sizes="100vw" />
              <span className="placeholder-tag">Workshop image placeholder</span>
            </div>
          </div>
        </section>

        <section className="section case-content"><div className="shell story-grid">
          <aside><span className="story-index">01</span><h2>Context & challenge</h2></aside>
          <div className="story-copy"><p>{project.challenge}</p><h3>Objectives</h3><ul className="check-list">{project.objectives.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></div>
        </div></section>
        <section className="section case-content case-content-alt"><div className="shell story-grid">
          <aside><span className="story-index">02</span><h2>Approach & methodology</h2></aside>
          <div className="story-copy"><p>{project.approach}</p><h3>Program highlights</h3><ol className="number-list">{project.highlights.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></div>
        </div></section>
        <section className="section case-content"><div className="shell story-grid">
          <aside><span className="story-index">03</span><h2>Outcomes & impact</h2></aside>
          <div className="story-copy"><p className="placeholder-notice">These outcomes are intentionally marked as placeholders until verified project information is provided.</p><ul className="outcome-list">{project.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div></section>

        <section className="case-gallery" aria-labelledby="gallery-heading"><div className="shell">
          <p className="eyebrow eyebrow-light"><span />PROGRAM MOMENTS</p><h2 id="gallery-heading">Inside the learning experience</h2>
          <div className="gallery-grid">{project.gallery.map((image, index) => <figure className="image-frame" key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Placeholder image 0{index + 1}</figcaption></figure>)}</div>
        </div></section>

        <section className="section related-section"><div className="shell">
          <div className="section-title-row"><h2>Related experience</h2><p>Explore other examples of learning and facilitation work.</p></div>
          <div className="project-grid project-grid-related">{related.map((item, index) => <ProjectCard key={item.slug} project={item} index={index} />)}</div>
        </div></section>
        <section className="detail-cta"><div className="shell"><p>Planning a program or learning experience?</p><h2>Let&apos;s shape it together.</h2><Link className="button button-light" href="/#contact">Start a conversation <ArrowRight aria-hidden="true" /></Link></div></section>
      </main>
      <SiteFooter />
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) { return <div><span>{label}</span><strong>{value}</strong></div>; }
