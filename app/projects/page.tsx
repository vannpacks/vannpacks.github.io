import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description: "Research systems by Wen-Fan (Vann) Wang.",
};

type Project = {
  title: string;
  desc: string;
  tags: string[];
  category: "research" | "mixed-reality";
  link: string;
  year: string;
};

const projects: Project[] = [
  {
    title: "Analyze–Experiment–Resituate",
    desc: "An AI-assisted art-style exploration framework that helps professional digital artists interpret references, experiment with stylistic possibilities, and reflect on emerging styles.",
    tags: ["Generative AI", "Digital Art", "Field Study"],
    category: "research",
    link: "/publication/UIST26_AER_Main_compressed.pdf",
    year: "2026",
  },
  {
    title: "MoveTogether",
    desc: "A mixed-reality system that embeds cooperation into the shared physical manipulation of a single tracked prop.",
    tags: ["Mixed Reality", "Embodied Interaction", "Co-op Play"],
    category: "mixed-reality",
    link: "/publication/CHI26_MoveTogether.pdf",
    year: "2026",
  },
  {
    title: "Trinketry",
    desc: "An element-centered visual exploration system for extracting, recombining, tracing, and retrieving promising fragments from generative design work.",
    tags: ["Creativity Support", "Visual Exploration", "Provenance"],
    category: "research",
    link: "https://dl.acm.org/doi/full/10.1145/3803784.3816878",
    year: "2026",
  },
  {
    title: "GenTune",
    desc: "A traceable-prompt interface for precise and globally consistent refinement of generated environment designs.",
    tags: ["Image Generation", "Controllability", "Professional Workflows"],
    category: "research",
    link: "https://dl.acm.org/doi/10.1145/3746059.3747774",
    year: "2025",
  },
  {
    title: "AIdeation",
    desc: "A human–AI ideation system that supports concept designers in brainstorming and recombining visual references.",
    tags: ["Human–AI Collaboration", "Concept Design", "Field Deployment"],
    category: "research",
    link: "https://dl.acm.org/doi/10.1145/3706598.3714148",
    year: "2025",
  },
];

const categoryLabel: Record<Project["category"], string> = {
  research: "Human–AI",
  "mixed-reality": "Mixed Reality",
};

const categoryColor: Record<Project["category"], string> = {
  research: "var(--accent)",
  "mixed-reality": "var(--accent-2)",
};

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--text)" }}>Research</h1>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Interactive systems for creative work, human–AI collaboration, and mixed reality.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <div key={project.title} className="card p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h2 className="text-sm font-semibold" style={{ color: "var(--text)" }}>{project.title}</h2>
                  <span
                    className="tag text-xs"
                    style={{
                      color: categoryColor[project.category],
                      borderColor: categoryColor[project.category] + "44",
                      background: categoryColor[project.category] + "11",
                    }}
                  >
                    {categoryLabel[project.category]}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{project.desc}</p>
              </div>
              <span className="text-xs font-mono flex-shrink-0 mt-0.5" style={{ color: "var(--text-muted)" }}>{project.year}</span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              <div className="flex-1" />
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs transition-colors" style={{ color: "var(--text-muted)" }}>
                <ExternalLink size={12} /> Paper
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
