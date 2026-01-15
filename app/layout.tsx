import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Girija Acharya | Senior QA Automation Engineer",
  description:
    "Senior QA Automation Engineer with 12+ years of experience in BFSI and Healthcare. Expert in Selenium, Playwright, API Automation, Performance Testing, CI/CD, Cloud, and AI-driven QA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ===== SEO Resume Schema (JSON-LD) ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Girija Acharya",
              jobTitle: "Senior QA Automation Engineer",
              url: "https://girija-portfolio-ochre.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/YOUR-LINKEDIN-URL"
              ],
              worksFor: {
                "@type": "Organization",
                name: "JPMorgan Chase & Co.",
              },
              knowsAbout: [
                "QA Automation",
                "Selenium",
                "Playwright",
                "API Automation",
                "Performance Testing",
                "BFSI",
                "Healthcare",
                "CI/CD",
                "Jenkins",
                "Azure",
                "Splunk",
                "Dynatrace",
                "AI-driven QA",
                "Robot Framework",
                "JMeter",
                "Burp Suite"
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
