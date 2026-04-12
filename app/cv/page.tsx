import { Download } from "lucide-react";
import { education, experience, awards, services } from "@/lib/data";

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="flex items-start justify-between mb-16">
        <div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text)" }}>
            Curriculum Vitae
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            WenFan Wang
          </p>
        </div>
        <a
          href="/cv.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            background: "var(--bg-3)",
            border: "1px solid var(--border)",
            color: "var(--text)",
          }}
        >
          <Download size={14} />
          PDF
        </a>
      </div>

      {/* Education */}
      <Section title="Education">
        <div className="space-y-6">
          {education.map((e) => (
            <div key={e.degree + e.school}>
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <p className="text-base font-medium" style={{ color: "var(--text)" }}>{e.degree}</p>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>{e.school}</p>
                </div>
                <span className="text-sm font-mono flex-shrink-0 mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {e.years}
                </span>
              </div>
              {e.note && (
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{e.note}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <div className="space-y-6">
          {experience.map((e) => (
            <div key={e.role + e.org} className="flex items-start justify-between gap-4">
              <div>
                <p className="text-base font-medium" style={{ color: "var(--text)" }}>{e.role}</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{e.org}</p>
              </div>
              <span className="text-sm font-mono flex-shrink-0 mt-0.5" style={{ color: "var(--text-muted)" }}>
                {e.years}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* Awards */}
      <Section title="Awards & Honors">
        <div className="space-y-3">
          {awards.map((a) => (
            <div key={a.title} className="flex gap-5">
              <span className="text-sm font-mono flex-shrink-0 mt-0.5 w-12" style={{ color: "var(--text-muted)" }}>
                {a.year}
              </span>
              <span className="text-base" style={{ color: "var(--text)" }}>{a.title}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Service */}
      <Section title="Service">
        <div className="space-y-3">
          {services.map((s) => (
            <div key={s.role + s.org} className="flex items-start justify-between gap-4">
              <div>
                <span className="text-base" style={{ color: "var(--text)" }}>{s.role}</span>
                <span className="text-base" style={{ color: "var(--text-muted)" }}>, {s.org}</span>
              </div>
              <span className="text-sm font-mono flex-shrink-0 mt-0.5" style={{ color: "var(--text-muted)" }}>
                {s.years}
              </span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xs font-semibold tracking-widest uppercase flex-shrink-0" style={{ color: "var(--accent)" }}>
          {title}
        </h2>
        <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </div>
      {children}
    </section>
  );
}
