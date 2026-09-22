import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import BioText from "@/components/BioText";
import { about, experience, news, selectedPublications } from "@/lib/data";

function ContactLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="icon-link"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="page-shell">
      <section className="hero-grid fade-up">
        <div className="hero-copy">
          <p className="eyebrow">Human–AI interaction researcher</p>
          <h1>{about.name}</h1>
          <p className="hero-role">{about.role}</p>
          <div className="location-line"><MapPin size={15} /> {about.location}</div>

          <div className="bio-copy"><BioText content={about.bio} /></div>

          <div className="interest-list" aria-label="Research interests">
            {about.interests.map((interest) => <span key={interest}>{interest}</span>)}
          </div>

          <div className="hero-actions">
            <a href={`mailto:${about.email}`} className="button button-primary"><Mail size={16} /> Get in touch</a>
            <a href="/cv.pdf" className="button" target="_blank" rel="noopener noreferrer"><Download size={16} /> CV</a>
            <div className="social-links">
              <ContactLink href={about.scholar} label="Google Scholar"><SiGooglescholar size={19} /></ContactLink>
              <ContactLink href={about.github} label="GitHub"><FaGithub size={19} /></ContactLink>
              <ContactLink href={about.linkedin} label="LinkedIn"><FaLinkedin size={19} /></ContactLink>
            </div>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-accent" aria-hidden="true" />
          <Image
            src="/avatar.png"
            alt={`Portrait of ${about.name}`}
            width={460}
            height={460}
            className="portrait"
            priority
          />
          <div className="portrait-caption">
            <span>Currently</span>
            <strong>Cornell Tech · New York</strong>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <div><p className="eyebrow">Recent work</p><h2>Selected publications</h2></div>
          <Link href="/publications" className="text-link">View all <ArrowUpRight size={14} /></Link>
        </div>
        <div className="publication-grid">
          {selectedPublications.map((pub) => (
            <a key={pub.title} href={pub.paperurl} target="_blank" rel="noopener noreferrer" className="publication-card">
              <div className="publication-image">
                <Image src={pub.teaser} alt="" width={640} height={360} className="object-cover" />
              </div>
              <div className="publication-body">
                <div className="publication-meta">
                  <span>{pub.venue}</span>
                  {pub.award && <span className="award">★ {pub.award}</span>}
                </div>
                <h3>{pub.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="home-columns">
        <section className="home-section">
          <div className="section-heading compact"><div><p className="eyebrow">Timeline</p><h2>Experience</h2></div></div>
          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={`${item.role}-${item.org}`}>
                <div className="timeline-dot" />
                <p className="timeline-date">{item.years}</p>
                <h3>{item.role}</h3>
                <p>{item.org}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="section-heading compact"><div><p className="eyebrow">Updates</p><h2>News</h2></div></div>
          <div className="news-list">
            {news.slice(0, 6).map((item, index) => (
              <div className="news-item" key={`${item.date}-${index}`}>
                <time>{item.date}</time><p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
