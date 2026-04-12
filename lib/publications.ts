import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Publication = {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  date: string;
  year: string;
  paperurl: string;
  teaser: string | null;
  abstract: string;
  award: string | null;
};

export function getPublications(): Publication[] {
  const dir = path.join(process.cwd(), "old_md");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "about.md");

  const publications = files.map((filename) => {
    const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
    const { data, content } = matter(raw);

    // Strip leading backslash Jekyll artifact and trim
    const abstract = content.replace(/^\s*\\\s*/, "").trim();

    // Detect award from excerpt
    const excerpt: string = data.excerpt ?? "";
    let award: string | null = null;
    if (/honorable mention/i.test(excerpt)) award = "Honorable Mention";
    else if (/best paper/i.test(excerpt)) award = "Best Paper";

    // Teaser image path
    const teaserFile: string | null = data.header?.teaser ?? null;
    const teaser = teaserFile ? `/publication/${teaserFile}` : null;

    // Authors: may be an array or a string
    const rawAuthors = data.authors;
    let authors = "";
    if (Array.isArray(rawAuthors)) {
      authors = rawAuthors.join(", ");
    } else if (typeof rawAuthors === "string") {
      authors = rawAuthors;
    }

    const rawDate = data.date;
    const dateObj: Date = rawDate instanceof Date ? rawDate : new Date(rawDate ?? filename.slice(0, 10));
    const date = dateObj.toISOString().slice(0, 10); // YYYY-MM-DD
    const year = date.slice(0, 4);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title ?? "",
      authors,
      venue: data.venue ?? "",
      date,
      year,
      paperurl: data.paperurl ?? "",
      teaser,
      abstract,
      award,
    };
  });

  // Sort newest first
  return publications.sort((a, b) => b.date.localeCompare(a.date));
}
