import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpenCheck, Download, GraduationCap, MessageCircleMore, UsersRound } from "lucide-react";
import { about, profile } from "@/data/profile";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { impact } from "@/data/impact";
import { testimonials } from "@/data/testimonials";
import { resources } from "@/data/resources";
import type { Service } from "@/data/types";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";

const serviceIcons = { workshop: BookOpenCheck, educator: GraduationCap, capacity: UsersRound, facilitation: MessageCircleMore };

export default function Home() {
  const personSchema = { "@context": "https://schema.org", "@type": "Person", name: profile.name, jobTitle: profile.role, description: profile.introduction, url: profile.siteUrl };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span />{profile.eyebrow}</p>
              <h1 id="hero-title">Empowering people through <em>meaningful</em> learning experiences.</h1>
              <p className="hero-intro">{profile.introduction}</p>
              <div className="hero-actions">
                <Link className="button" href="#contact">Work With Me <ArrowRight aria-hidden="true" /></Link>
                <Link className="hero-text-link" href="#experience">View My Work <ArrowRight aria-hidden="true" /></Link>
              </div>
              <div className="hero-meta"><span>{profile.location}</span><span className="availability-dot" /><span>{profile.availability}</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-portrait image-frame">
                <Image src={profile.portrait.src} alt={profile.portrait.alt} fill priority sizes="(max-width: 800px) 92vw, 42vw" />
                {profile.portrait.isPlaceholder && <span className="placeholder-tag">Portrait placeholder</span>}
              </div>
            </div>
          </div>
        </section>

        <Reveal><section id="about" className="section about-section" aria-labelledby="about-heading"><div className="shell">
          <SectionIntro label="About me" />
          <div className="about-grid"><div><h2 id="about-heading">{about.heading}</h2><p className="lead-copy">{about.intro}</p></div><div className="about-story">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <h3>Areas of expertise</h3><div className="expertise-list">{about.expertise.map((item) => <span key={item}>{item}</span>)}</div>
          </div></div>
          <div className="experience-snapshot"><div className="snapshot-label"><span>Experience</span><strong>At a glance</strong></div>{about.snapshot.map((item) => <div key={item.label} className="snapshot-item"><strong>{item.value}</strong><span>{item.label}</span></div>)}</div>
        </div></section></Reveal>

        <Reveal><section id="services" className="section services-section" aria-labelledby="services-heading"><div className="shell">
          <SectionIntro label="Services" />
          <div className="section-title-row"><h2 id="services-heading">What I Offer</h2><p>Practical, participatory support shaped around your people, purpose, and context.</p></div>
          <div className="services-grid">{services.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
          <Link className="section-cta" href="#contact">Have a specific training need? Let&apos;s talk <ArrowRight aria-hidden="true" /></Link>
        </div></section></Reveal>

        <Reveal><section id="experience" className="section experience-section" aria-labelledby="experience-heading"><div className="shell">
          <SectionIntro label="Selected work" />
          <div className="section-title-row section-title-light"><h2 id="experience-heading">Featured Experience</h2><p>Programs, workshops, and learning experiences delivered with educators, organisations, and communities.</p></div>
          <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
          <p className="placeholder-disclosure">All featured project details and images are placeholders awaiting verified portfolio information.</p>
        </div></section></Reveal>

        <section className="impact-section" aria-labelledby="impact-heading"><div className="shell impact-grid">
          <div className="impact-intro"><p className="eyebrow eyebrow-light"><span />IMPACT AT A GLANCE</p><h2 id="impact-heading">Experience measured in meaningful participation.</h2><p>Replace these placeholders with verified figures to show the scale and reach of the work.</p></div>
          <div className="stats-grid">{impact.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
        </div></section>

        <Reveal><section className="section testimonials-section" aria-labelledby="testimonials-heading"><div className="shell">
          <SectionIntro label="Testimonials" />
          <div className="testimonial-heading-row"><h2 id="testimonials-heading">What People Say</h2></div>
          <div className="testimonials-grid">{testimonials.map((testimonial, index) => <figure key={index} className="testimonial-card"><span className="placeholder-label">Approved quote placeholder</span><blockquote>“{testimonial.quote}”</blockquote><figcaption><strong>{testimonial.name}</strong><span>{testimonial.designation}, {testimonial.organisation}</span></figcaption></figure>)}</div>
        </div></section></Reveal>

        <Reveal><section id="insights" className="section insights-section" aria-labelledby="insights-heading"><div className="shell">
          <SectionIntro label="Ideas & resources" />
          <div className="section-title-row"><h2 id="insights-heading">Insights</h2><p>Practical thoughts on education, facilitation, learning, and social impact.</p></div>
          <div className="resources-grid">{resources.map((resource) => <article className="resource-card" key={resource.slug}><div className="resource-image image-frame"><Image src={resource.image.src} alt={resource.image.alt} fill sizes="(max-width: 800px) 100vw, 33vw" /><span className="placeholder-tag">Placeholder image</span></div><div className="resource-meta"><span>{resource.category}</span><span>{resource.date}</span></div><h3><Link href={`/insights/${resource.slug}`}>{resource.title}</Link></h3><p>{resource.excerpt}</p><Link className="text-link" href={`/insights/${resource.slug}`}>Read more <ArrowUpRight aria-hidden="true" /></Link></article>)}</div>
        </div></section></Reveal>

        <section id="contact" className="section contact-section" aria-labelledby="contact-heading"><div className="shell contact-grid">
          <div className="contact-copy"><p className="eyebrow"><span />LET&apos;S COLLABORATE</p><h2 id="contact-heading">Looking for an experienced facilitator or educator?</h2><p>I work with NGOs, schools, nonprofits, CSR teams, and social-impact organisations to design and deliver engaging learning experiences.</p>
            <div className="contact-details"><div><span>Email</span><strong>{profile.email}</strong></div><div><span>Phone / WhatsApp</span><strong>{profile.phone}</strong></div><div><span>Location</span><strong>{profile.location}</strong></div><div><span>Availability</span><strong>{profile.availability}</strong></div></div>
            {profile.cvUrl ? <a className="text-link" href={profile.cvUrl} download>Download CV <Download aria-hidden="true" /></a> : <span className="disabled-link" aria-disabled="true"><Download aria-hidden="true" /> CV available once uploaded</span>}
          </div><ContactForm />
        </div></section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
    </>
  );
}

function SectionIntro({ label }: { label: string }) { return <p className="section-intro">{label}</p>; }

function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];
  return <article className="service-card"><div className="service-top"><Icon aria-hidden="true" /></div><h3>{service.title}</h3><p>{service.description}</p><details><summary>Learn More <span aria-hidden="true">+</span></summary><p>{service.details}</p></details></article>;
}
