import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";
import { about, news, experience, selectedPublications } from "@/lib/data";
import BioText from "@/components/BioText";

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex items-center gap-1.5 text-base transition-colors hover:[color:var(--accent)]"
      style={{ color: "var(--text-muted)" }}
    >
      {icon}
      {label}
    </a>
  );
}


export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="mb-20 fade-up">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-36 h-36 rounded-2xl flex-shrink-0 overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            <Image
              src="/avatar.png"
              alt={about.name}
              width={144}
              height={144}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-2 glow-text" style={{ color: "var(--text)" }}>
              {about.name}
            </h1>
            <p className="text-lg mb-4" style={{ color: "var(--text-muted)" }}>
              {about.role}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              {about.email && (
                <SocialLink href={`mailto:${about.email}`} icon={<Mail size={18} />} label="Email" />
              )}
              {about.scholar && (
                <SocialLink href={about.scholar} icon={<SiGooglescholar size={18} />} label="Scholar" />
              )}
              {about.github && (
                <SocialLink href={about.github} icon={<FaGithub size={18} />} label="GitHub" />
              )}
              {about.linkedin && (
                <SocialLink href={about.linkedin} icon={<FaLinkedin size={18} />} label="LinkedIn" />
              )}
              {about.twitter && (
                <SocialLink href={about.twitter} icon={<FaTwitter size={18} />} label="Twitter" />
              )}
            </div>
          </div>
        </div>

        <div className="text-base leading-relaxed">
          <BioText content={about.bio} />
        </div>
      </section>

      {/* News */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--accent)" }}>
          News
        </h2>
        <div className="card divide-y overflow-y-auto" style={{ borderColor: "var(--border)", maxHeight: "260px" }}>
          {news.map((item, i) => (
            <div key={i} className="flex gap-5 px-5 py-4">
              <span className="text-sm font-mono flex-shrink-0 mt-0.5 w-32" style={{ color: "var(--text-muted)" }}>
                {item.date}
              </span>
              <span className="text-base" style={{ color: "var(--text)" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Selected Publications */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--accent)" }}>
          Selected Publications
        </h2>
        <div className="space-y-3">
          {selectedPublications.map((pub) => (
            <a
              key={pub.title}
              href={pub.paperurl}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 p-4 group"
              style={{ textDecoration: "none" }}
            >
              {pub.teaser && (
                <Image
                  src={pub.teaser}
                  alt={pub.title}
                  width={80}
                  height={56}
                  className="rounded flex-shrink-0 object-cover"
                  style={{ width: 80, height: 56 }}
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium leading-snug mb-1 group-hover:[color:var(--accent)] transition-colors" style={{ color: "var(--text)" }}>
                  {pub.title}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{pub.venue}</span>
                  {pub.award && (
                    <span className="tag tag-accent text-xs">★ {pub.award}</span>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/publications" className="text-xs font-medium transition-colors hover:[color:var(--accent)]" style={{ color: "var(--text-muted)" }}>
            All publications →
          </Link>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--accent)" }}>
          Experience
        </h2>
        <div className="space-y-4">
          {experience.map((e) => (
            <div key={e.role + e.org} className="flex items-start justify-between gap-4">
              <div>
                <span className="text-base" style={{ color: "var(--text)" }}>{e.role}</span>
                <span className="text-base" style={{ color: "var(--text-muted)" }}>, {e.org}</span>
              </div>
              <span className="text-sm font-mono flex-shrink-0 mt-0.5" style={{ color: "var(--text-muted)" }}>
                {e.years}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quicklinks */}
      <section>
        <h2 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: "var(--accent)" }}>
          Explore
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/cv", label: "View CV" },
            { href: "/publications", label: "Publications" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all group"
              style={{
                background: "var(--bg-3)",
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              {link.label}
              <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
