import type { Metadata } from "next";
import { Download, Mail, MapPin } from "lucide-react";
import {
  about,
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
    <div className="max-w-4xl mx-auto px-6 py-20">
      <header className="mb-16 pb-10 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-start justify-between gap-8 flex-wrap">
          <div>
            <p className="eyebrow">Curriculum vitae</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">{about.name}</h1>
            <p className="text-lg mb-5" style={{ color: "var(--text-muted)" }}>{about.role}</p>
            <div className="flex gap-x-5 gap-y-2 flex-wrap text-sm" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1.5"><MapPin size={14} /> {about.location}</span>
              <a className="flex items-center gap-1.5 hover:underline" href={`mailto:${about.email}`}><Mail size={14} /> {about.email}</a>
            </div>
          </div>
          <a href="/cv.pdf" download className="button button-primary"><Download size={15} /> Download PDF</a>
        </div>
      </header>

      <Section title="Education">
        <div className="space-y-7">
          {education.map((item) => <Entry key={`${item.degree}-${item.school}`} title={item.degree} org={item.school} meta={item.years} sub={`${item.location}${item.note ? ` · ${item.note}` : ""}`} />)}
        </div>
      </Section>

      <Section title="Research experience">
        <ExperienceList items={researchExperience} />
      </Section>

      <Section title="Professional experience">
        <ExperienceList items={professionalExperience} />
      </Section>

      <Section title="Honors & awards">
        <div className="space-y-4">
          {awards.map((item, index) => (
            <div key={`${item.title}-${index}`} className="grid grid-cols-[52px_1fr] md:grid-cols-[68px_1fr] gap-4">
              <span className="text-xs font-mono pt-1" style={{ color: "var(--accent)" }}>{item.year}</span>
              <div><p className="font-medium">{item.title}</p><p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{item.detail}</p></div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Invited talks">
        {invitedTalks.map((item) => <Entry key={item.title} title={item.title} org={item.venue} meta={item.date} sub={item.note} />)}
      </Section>

      <Section title="Academic service">
        <div className="space-y-6">
          {services.map((item) => <Entry key={item.role + item.org} title={item.role} org={item.org} meta={item.years} sub={item.note} />)}
        </div>
      </Section>

      <Section title="Leadership & activities">
        <div className="space-y-6">
          {activities.map((item) => <Entry key={item.role + item.org} title={item.role} org={item.org} meta={item.years} />)}
        </div>
      </Section>

      <Section title="Skills">
        <dl className="grid md:grid-cols-[130px_1fr] gap-x-6 gap-y-4">
          {skills.map((skill) => (
            <div key={skill.label} className="contents">
              <dt className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{skill.label}</dt>
              <dd className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{skill.items}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </div>
  );
}

function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return <div className="space-y-9">{items.map((item) => (
    <div key={`${item.role}-${item.years}`}>
      <Entry
        title={item.role}
        org={item.org}
        meta={item.years}
        sub={[item.location, item.advisor ? `Advisor: ${item.advisor}` : ""].filter(Boolean).join(" · ")}
      />
      <p className="mt-3 text-sm leading-7 max-w-3xl" style={{ color: "var(--text-muted)" }}>{item.description}</p>
    </div>
  ))}</div>;
}

function Entry({ title, org, meta, sub = "" }: { title: string; org: string; meta: string; sub?: string }) {
  return (
    <div>
      <div className="flex items-start justify-between gap-5">
        <div><p className="font-semibold leading-snug">{title}</p><p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{org}</p></div>
        <span className="text-xs md:text-sm font-mono flex-shrink-0 pt-0.5 text-right" style={{ color: "var(--text-muted)" }}>{meta}</span>
      </div>
      {sub && <p className="text-xs mt-1.5" style={{ color: "var(--text-muted)" }}>{sub}</p>}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <div className="flex items-center gap-4 mb-7">
        <h2 className="text-xs font-semibold tracking-widest uppercase flex-shrink-0" style={{ color: "var(--accent)" }}>{title}</h2>
        <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </div>
      {children}
    </section>
  );
}
