import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/types";

export function ProjectCard({ project }: { project: Project; index?: number }) {
  return (
    <article className="project-card">
      <Link className="project-image image-frame" href={`/experience/${project.slug}`}>
        <Image src={project.image.src} alt={project.image.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
        {project.image.isPlaceholder && <span className="placeholder-tag">Placeholder image</span>}
      </Link>
      <div className="project-body">
        <div>
          <p className="project-kicker">{project.client} · {project.year}</p>
          <h3><Link href={`/experience/${project.slug}`}>{project.title}</Link></h3>
          <p>{project.audience} · {project.duration}</p>
          <div className="tag-list">
            {project.focusAreas.map((area) => <span key={area}>{area}</span>)}
          </div>
          <Link className="text-link" href={`/experience/${project.slug}`}>
            View case study <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
