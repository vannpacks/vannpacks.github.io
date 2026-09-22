import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { getPublications } from "@/lib/publications";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications by Wen-Fan (Vann) Wang in human–computer interaction, generative AI, and mixed reality.",
};

export default function Publications() {
  const publications = getPublications();
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => Number(b) - Number(a));

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-16">
        <p className="eyebrow">Research output</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4" style={{ color: "var(--text)" }}>
          Publications
        </h1>
        <p className="text-sm max-w-xl leading-6" style={{ color: "var(--text-muted)" }}>
          {publications.length} peer-reviewed papers, posters, and demos spanning human–AI collaboration, creativity support, and mixed reality. My name is underlined.
        </p>
      </div>

      {years.map((year) => (
        <section key={year} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xs font-semibold tracking-widest uppercase flex-shrink-0" style={{ color: "var(--accent)" }}>
              {year}
            </h2>
            <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
          </div>

          <div className="space-y-6">
            {publications
              .filter((p) => p.year === year)
              .map((pub) => (
                <div key={pub.slug} className="card overflow-hidden">

                  {/* Teaser — full width on top */}
                  {pub.teaser && (
                    <div className="w-full h-52 overflow-hidden" style={{ borderBottom: "1px solid var(--border)" }}>
                      <Image
                        src={pub.teaser}
                        alt={pub.title}
                        width={800}
                        height={208}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-base font-semibold leading-snug mb-2" style={{ color: "var(--text)" }}>
                      {pub.title}
                    </h3>

                    {pub.authors && (
                      <p
                        className="text-sm mb-1"
                        style={{ color: "var(--text-muted)" }}
                        dangerouslySetInnerHTML={{ __html: pub.authors }}
                      />
                    )}

                    <p className="text-sm italic mb-4 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {pub.venue}
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
                      {pub.award && (
                        <span className="tag tag-accent">★ {pub.award}</span>
                      )}
                      {pub.paperurl && (
                        <a
                          href={pub.paperurl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm transition-colors hover:[color:var(--accent)]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Paper <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
