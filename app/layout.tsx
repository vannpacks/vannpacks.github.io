import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vannwang.com"),
  title: {
    default: "Vann Wang — HCI Researcher",
    template: "%s · Vann Wang",
  },
  description: "Wen-Fan (Vann) Wang is a Ph.D. student at Cornell Tech researching human–AI collaboration and creativity-support tools.",
  openGraph: {
    title: "Vann Wang — HCI Researcher",
    description: "Human–AI collaboration, creativity-support tools, generative AI, and mixed reality.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 px-6 text-center text-sm" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
          © {new Date().getFullYear()} Wen-Fan (Vann) Wang · New York, NY
        </footer>
      </body>
    </html>
  );
}
