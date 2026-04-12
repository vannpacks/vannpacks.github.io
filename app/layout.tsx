import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WenFan Wang — HCI Researcher",
  description: "Personal website of WenFan Wang, incoming PhD student in Information Science at Cornell Tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 px-6 text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} WenFan Wang. Built with Next.js.
        </footer>
      </body>
    </html>
  );
}
