import { GitFork, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  category: "research" | "illustration" | "software";
  github?: string;
  link?: string;
  year: string;
};

const projects: Project[] = [
  {
    title: "AccessDraw",
    desc: "A browser-based illustration tool designed for users with motor disabilities, featuring adaptive brush controls and customizable input mappings.",
    tags: ["Accessibility", "Canvas API", "React", "User Study"],
    category: "research",
    github: "#",
    link: "#",
    year: "2024",
  },
  {
    title: "Embodied Prototyping Toolkit",
    desc: "A set of physical prototyping materials and templates designed to help HCI researchers externalize interaction ideas through bodystorming.",
    tags: ["Prototyping", "Bodystorming", "Design Research"],
    category: "research",
    link: "#",
    year: "2023",
  },
  {
    title: "Between the Lines",
    desc: "An ongoing illustration series exploring the space between technical diagrams and expressive drawing. Ink on paper, digitally composited.",
    tags: ["Illustration", "Ink", "Series"],
    category: "illustration",
    link: "#",
    year: "2023",
  },
  {
    title: "Interaction Zine Vol. 1",
    desc: "A self-published zine combining hand-drawn illustrations with short essays on computing, touch, and the physicality of screens.",
    tags: ["Zine", "Illustration", "Writing"],
    category: "illustration",
    year: "2022",
  },
  {
    title: "Annotation Studio",
    desc: "A lightweight research tool for qualitative coding of video data with synchronized transcript views. Used in two published studies.",
    tags: ["Python", "Research Tool", "Video Analysis"],
    category: "software",
    github: "#",
    year: "2022",
  },
];

const categoryLabel: Record<Project["category"], string> = {
  research: "Research",
  illustration: "Illustration",
  software: "Software",
};

const categoryColor: Record<Project["category"], string> = {
  research: "var(--accent)",
  illustration: "var(--accent-2)",
  software: "#34d399",
};

const categories = ["all", "research", "illustration", "software"] as const;

export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="mb-16">
        <h1 className="text-3xl font-bold mb-3" style={{ color: "var(--text)" }}>
          Projects
        </h1>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Research systems, illustration work, and tools I&apos;ve built.
        </p>
      </div>

      {/* Category filter labels — static, visual only */}
      <div className="flex gap-2 flex-wrap mb-10">
        {categories.map((c) => (
          <span
            key={c}
            className="tag capitalize"
            style={
              c === "all"
                ? { color: "var(--text)", borderColor: "var(--border)" }
                : { color: categoryColor[c as Project["category"]], borderColor: categoryColor[c as Project["category"]] + "44", background: categoryColor[c as Project["category"]] + "11" }
            }
          >
            {c}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <div key={project.title} className="card p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                    {project.title}
                  </h3>
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
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {project.desc}
                </p>
              </div>
              <span className="text-xs font-mono flex-shrink-0 mt-0.5" style={{ color: "var(--text-muted)" }}>
                {project.year}
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
              <div className="flex-1" />
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  <GitFork size={12} /> Code
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs transition-colors"
                  style={{ color: "var(--text-muted)" }}
                >
                  <ExternalLink size={12} /> Visit
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
