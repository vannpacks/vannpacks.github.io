import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Research",
  description: "Research systems by Wen-Fan (Vann) Wang spanning human–AI collaboration and mixed reality.",
};

const projects = [
  {
    title: "Analyze–Experiment–Resituate",
    year: "2026",
    venue: "UIST ’26",
    image: "/publication/UIST26_AER.png",
    href: "/publication/UIST26_AER_Main_compressed.pdf",
    description: "A framework and prototype for helping professional digital artists interpret references, experiment with stylistic possibilities, and reflect on emerging art styles.",
    tags: ["Generative AI", "Digital art", "Field study"],
  },
  {
    title: "MoveTogether",
    year: "2026",
    venue: "CHI ’26 · Honorable Mention",
    image: "/publication/CHI26_movetogether.png",
    href: "/publication/CHI26_MoveTogether.pdf",
    description: "A mixed-reality system that embeds cooperation into the shared physical manipulation of a single tracked prop.",
    tags: ["Mixed reality", "Embodied interaction", "Co-op play"],
  },
  {
    title: "Trinketry",
    year: "2026",
    venue: "C&C ’26",
    image: "/publication/CandC26_Trinketry.png",
    href: "https://dl.acm.org/doi/full/10.1145/3803784.3816878",
    description: "An element-centered visual exploration system for extracting, recombining, tracing, and retrieving promising fragments from generative design work.",
    tags: ["Creativity support", "Visual exploration", "Provenance"],
  },
  {
    title: "GenTune",
    year: "2025",
    venue: "UIST ’25",
    image: "/publication/UIST25_GenTune.png",
    href: "https://dl.acm.org/doi/10.1145/3746059.3747774",
    description: "A traceable-prompt interface that lets environment designers connect image elements to prompt labels for precise, globally consistent refinement.",
    tags: ["Image generation", "Controllability", "Professional workflows"],
  },
  {
    title: "AIdeation",
    year: "2025",
    venue: "CHI ’25",
    image: "/publication/CHI25_AIdeation.png",
    href: "https://dl.acm.org/doi/10.1145/3706598.3714148",
    description: "A human–AI ideation system that supports concept designers in brainstorming and recombining visual references, validated through lab and studio field studies.",
    tags: ["Human–AI collaboration", "Concept design", "Field deployment"],
  },
];

export default function Research() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <header className="mb-14 max-w-2xl">
        <p className="eyebrow">Selected systems</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">Research</h1>
        <p className="text-base leading-7" style={{ color: "var(--text-muted)" }}>
          I build and study interactive systems that give creative professionals more agency, traceability, and control when working with AI.
        </p>
      </header>

      <div className="space-y-5">
        {projects.map((project) => (
          <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="card group grid md:grid-cols-[260px_1fr] overflow-hidden">
            <div className="h-48 md:h-full min-h-48 overflow-hidden" style={{ borderRight: "1px solid var(--border)" }}>
              <Image src={project.image} alt="" width={640} height={360} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.025]" />
            </div>
            <div className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div><p className="text-xs font-mono mb-2" style={{ color: "var(--accent)" }}>{project.year} · {project.venue}</p><h2 className="text-xl font-semibold tracking-tight">{project.title}</h2></div>
                <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ color: "var(--text-muted)" }} />
              </div>
              <p className="text-sm leading-7 mb-5" style={{ color: "var(--text-muted)" }}>{project.description}</p>
              <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
