import type { Metadata } from "next";
import { Download } from "lucide-react";
import {
  activities,
  awards,
  education,
  invitedTalks,
  professionalExperience,
  researchExperience,
  services,
  skills,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Curriculum vitae of Wen-Fan (Vann) Wang.",
};

type ExperienceItem = {
  role: string;
  org: string;
  years: string;
  description: string;
  location?: string;
  advisor?: string;
};

export default function CV() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <div className="flex items-start justify-between mb-16">
        <div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: "var(--text)" }}>Curriculum Vitae</h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>Wen-Fan (Vann) Wang</p>
        </div>
        <a
          href="/cv.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
          style={{ background: "var(--bg-3)", border: "1px solid var(--border)", color: "var(--text)" }}
        >
          <Download size={14} /> PDF
        </a>
      </div>

      <Section title="Education">
        <div className="space-y-6">
          {education.map((item) => (
            <Entry
              key={item.degree + item.school}
              title={item.degree}
              org={`${item.school} · ${item.location}`}
              years={item.years}
              note={item.note}
            />
          ))}
        </div>
      </Section>

      <Section title="Research Experience">
        <ExperienceList items={researchExperience} />
      </Section>

      <Section title="Professional Experience">
        <ExperienceList items={professionalExperience} />
      </Section>

      <Section title="Awards & Honors">
        <div className="space-y-3">
          {awards.map((item, index) => (
            <div key={`${item.title}-${index}`} className="flex gap-5">
              <span className="text-sm font-mono flex-shrink-0 mt-0.5 w-12" style={{ color: "var(--text-muted)" }}>{item.year}</span>
              <div>
                <p className="text-base" style={{ color: "var(--text)" }}>{item.title}</p>
                <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Invited Talks">
        {invitedTalks.map((item) => (
          <Entry key={item.title} title={item.title} org={item.venue} years={item.date} note={item.note} />
        ))}
      </Section>

      <Section title="Academic Service">
        <div className="space-y-5">
          {services.map((item) => (
            <Entry key={item.role + item.org} title={item.role} org={item.org} years={item.years} note={item.note} />
          ))}
        </div>
      </Section>

      <Section title="Activities">
        <div className="space-y-5">
          {activities.map((item) => (
            <Entry key={item.role + item.org} title={item.role} org={item.org} years={item.years} />
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <div className="space-y-3">
          {skills.map((item) => (
            <div key={item.label} className="grid grid-cols-[110px_1fr] gap-4 text-sm">
              <span className="font-medium" style={{ color: "var(--text)" }}>{item.label}</span>
              <span className="leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.items}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="space-y-7">
      {items.map((item) => (
        <div key={item.role + item.org + item.years}>
          <Entry
            title={item.role}
            org={[item.org, item.location].filter(Boolean).join(" · ")}
            years={item.years}
            note={item.advisor ? `Advisor: ${item.advisor}` : ""}
          />
          <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--text-muted)" }}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function Entry({ title, org, years, note = "" }: { title: string; org: string; years: string; note?: string }) {
  return (
    <div>
      <div className="flex items-start justify-between gap-4 mb-1">
        <div>
          <p className="text-base font-medium" style={{ color: "var(--text)" }}>{title}</p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>{org}</p>
        </div>
        <span className="text-sm font-mono flex-shrink-0 mt-0.5 text-right" style={{ color: "var(--text-muted)" }}>{years}</span>
      </div>
      {note && <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{note}</p>}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <h2 className="text-xs font-semibold tracking-widest uppercase flex-shrink-0" style={{ color: "var(--accent)" }}>{title}</h2>
        <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </div>
      {children}
    </section>
  );
}
