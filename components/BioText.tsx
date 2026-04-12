"use client";

import ReactMarkdown from "react-markdown";

export default function BioText({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <p style={{ color: "var(--text-muted)" }}>{children}</p>
        ),
        strong: ({ children }) => (
          <strong style={{ color: "var(--text)", fontWeight: 600 }}>{children}</strong>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)" }}
            className="underline underline-offset-2"
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
