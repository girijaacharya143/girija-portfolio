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

/* ================= SEO + SOCIAL METADATA ================= */
export const metadata: Metadata = {
  metadataBase: new URL("https://girijaacharya.dev"),

  title: "Girija Acharya | Senior QA Automation Engineer",
  description:
    "Senior QA Automation Engineer with 12+ years of experience in BFSI and Healthcare. Expert in Selenium, Playwright, API Automation, Performance Testing, CI/CD, Cloud, and AI-driven QA.",

  alternates: {
    canonical: "https://girijaacharya.dev",
  },

  openGraph: {
    title: "Girija Acharya | Senior QA Automation Engineer",
    description:
      "Senior QA Automation Engineer | BFSI & Healthcare | Selenium · Playwright · API · Performance · AI-Driven QA",
    url: "https://girijaacharya.dev",
    siteName: "Girija Acharya – QA Automation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Girija Acharya | Senior QA Automation Engineer",
      },
    ],
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    title: "Girija Acharya | Senior QA Automation Engineer",
    description:
      "Senior QA Automation Engineer | Selenium · Playwright · API · Performance · AI-Driven QA",
    images: ["/og-image.png"],
  },
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
              url: "https://girijaacharya.dev",
              telephone: "+91-8884030561",
              sameAs: [
                "https://www.linkedin.com/in/girija-a-91511b19b/",
                "https://www.naukri.com/mnjuser/profile?id=&altresid"
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
                "Security Testing",
                "BFSI",
                "Healthcare",
                "CI/CD",
                "Jenkins",
                "Azure",
                "Splunk",
                "Dynatrace",
                "AI-driven QA"
              ],
              hasOccupation: [
                {
                  "@type": "Occupation",
                  name: "Senior QA Engineer / QA Lead",
                  hiringOrganization: {
                    "@type": "Organization",
                    name: "JPMorgan Chase & Co."
                  }
                },
                {
                  "@type": "Occupation",
                  name: "QA Consultant",
                  hiringOrganization: {
                    "@type": "Organization",
                    name: "Trianz (Client: Mastercard)"
                  }
                },
                {
                  "@type": "Occupation",
                  name: "Senior Test Analyst",
                  hiringOrganization: {
                    "@type": "Organization",
                    name: "Infosys (Clients: Visa & Merck)"
                  }
                },
                {
                  "@type": "Occupation",
                  name: "Test Engineer",
                  hiringOrganization: {
                    "@type": "Organization",
                    name: "RS Software (Client: Visa Singapore)"
                  }
                }
              ]
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
