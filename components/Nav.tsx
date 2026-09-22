"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/publications", label: "Publications" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md"
      style={{
        background: "rgba(10,10,15,0.85)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Link
        href="/"
        className="text-sm font-semibold tracking-wider uppercase"
        style={{ color: "var(--accent)", letterSpacing: "0.15em" }}
      >
        WW
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200 relative group"
              style={{ color: active ? "var(--accent)" : "var(--text-muted)" }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                style={{ background: "var(--accent)" }}
              />
            </Link>
          );
        })}
      </nav>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden"
        style={{ color: "var(--text-muted)" }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile nav */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-0 md:hidden"
          style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-4 text-sm border-b"
                style={{
                  color: active ? "var(--accent)" : "var(--text-muted)",
                  borderColor: "var(--border)",
                }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
