"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ================= COUNTER ================= */
function CounterCard({
  label,
  value,
  suffix,
  desc,
}: {
  label: string;
  value: number;
  suffix?: string;
  desc: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, Math.max(20, Math.floor(1200 / value)));
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="p-6 rounded-2xl bg-[#11162A] shadow text-center">
      <p className="text-4xl font-extrabold text-teal-400">
        {count}
        {suffix}
      </p>
      <p className="text-gray-300 font-semibold mt-1">{label}</p>
      <p className="text-gray-500 text-sm mt-1">{desc}</p>
    </div>
  );
}

/* ================= CARDS ================= */
function TechCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-8 rounded-3xl bg-[#0E1325] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-xl font-bold text-teal-400 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {items.map((i, idx) => (
          <li key={idx}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-8 rounded-3xl bg-[#0B0F19] shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
      <h3 className="text-xl font-bold text-teal-400 mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

/* ================= PAGE ================= */
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B0F19] via-[#0E1325] to-black text-gray-200">

      {/* ================= HERO ================= */}
      <section className="container mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Girija Acharya
          </h1>
          <p className="mt-6 text-2xl text-teal-400 font-semibold">
            Senior QA Automation Engineer · Quality Engineering Leader
          </p>
          <p className="mt-8 text-lg text-gray-400 max-w-xl leading-relaxed">
            12+ years of experience in BFSI and Healthcare delivering
            enterprise-scale quality solutions using Selenium, Playwright,
            API Automation, Performance Testing, CI/CD, Cloud, and AI-driven QA.
          </p>
        </motion.div>

        <div className="relative flex justify-center">
          <div className="absolute -inset-4 bg-teal-500/20 blur-3xl rounded-3xl" />
          <Image
            src="/profile.jpg"
            alt="Girija Acharya Senior QA Automation Engineer"
            width={380}
            height={380}
            priority
            className="relative rounded-3xl shadow-[0_0_100px_rgba(45,212,191,0.35)] grayscale hover:grayscale-0 transition duration-700"
          />
        </div>
      </section>

      {/* ================= CAREER HIGHLIGHTS ================= */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-4 gap-6">
        <CounterCard label="Experience" value={12} suffix="+" desc="Years in QA & Automation" />
        <CounterCard label="Releases" value={50} suffix="+" desc="Production Releases" />
        <CounterCard label="Transactions" value={10} suffix="M+" desc="Financial Scale" />
        <CounterCard label="Organizations" value={4} desc="JPMorgan · Trianz · Infosys · RS Software" />
      </section>

      {/* ================= EXPERIENCE SUMMARY ================= */}
      <section className="container mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold mb-12">Experience Summary</h2>

        <div className="max-w-5xl text-gray-400 leading-relaxed">
          <ul className="space-y-3 list-disc list-inside">
            <li>12+ years of extensive QA experience in BFSI and Healthcare domains delivering enterprise-grade quality solutions.</li>
            <li>Strong expertise in Automation, Performance, Functional, API, and Security Testing.</li>
            <li>Proven experience in leveraging Generative AI to create automation tools and testing accelerators for faster and more accurate testing.</li>
            <li>Senior individual contributor handling major production releases.</li>
            <li>Groomed, mentored, and led teams for end-to-end test planning, strategy, execution, and delivery using Agile / SAFe methodologies.</li>
            <li>Hands-on experience across Automation, Sanity, GUI, API, Performance, Database, Functional, System, Integration, UAT, Security, and Regression Testing.</li>
            <li>Actively involved in requirement analysis, test strategy, execution, maintenance, and production issue support.</li>
            <li>Effective defect tracking and reporting using JIRA, Rally, Bugzilla, and HP QC/ALM.</li>
            <li>Extensive API Automation experience using SoapUI and ReadyAPI.</li>
            <li>Strong performance testing exposure using Apache JMeter.</li>
            <li>Built UI automation frameworks using Selenium (Python/Java) and Robot Framework (Hybrid/Data-Driven).</li>
            <li>Hands-on experience in Security Testing using Burp Suite and SoapUI.</li>
            <li>Developed Shell scripts for automated reporting and QA workflow support.</li>
            <li>Worked extensively with CI/CD pipelines using Jenkins and version control tools like Git.</li>
            <li>Experience in cross-browser and mobile automation using BrowserStack.</li>
            <li>Designed and developed internal tools for QA enhancement.</li>
            <li>Experience with Cloud environments (Microsoft Azure) and monitoring tools such as Splunk and Dynatrace.</li>
            <li>Working knowledge of Docker and Kubernetes.</li>
            <li>Familiar with ISO and CMM/CMMI quality standards.</li>
            <li>Actively involved in daily client interactions for reporting and business updates.</li>
            <li>Contributed techno-managerial inputs in project planning, design, resource management, and test execution.</li>
            <li>Highly result-oriented, committed, and continuously learning new tools and technologies.</li>
            <li>Strong hands-on experience in Python, Groovy, and Shell scripting.</li>
          </ul>
        </div>
      </section>

      {/* ================= EXPERIENCE & PROJECTS ================= */}
      <section className="container mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold mb-16">Experience & Flagship Projects</h2>

        <div className="relative border-l border-gray-700 pl-10 space-y-16">
          {[
            {
              title: "JPMorgan Chase & Co.",
              role: "Senior QA Engineer / QA Lead · 2022 – Present",
              project: "J.P. Morgan Markets (JPMM)",
              points: [
                "Institutional trading & analytics platform",
                "Handled millions of trading transactions",
                "50+ stable production releases",
                "~40% regression reduction via automation & CI/CD",
                "Tools: Selenium, Playwright, Robot Framework, ReadyAPI, JMeter, Jenkins, Splunk, Dynatrace, Azure",
              ],
            },
            {
              title: "Trianz (Client: Mastercard)",
              role: "QA Consultant · 2020 – 2022",
              project: "Mobile Payment Gateway (MPG)",
              points: [
                "Wallet, merchant & bank transactions",
                "High-volume payment processing",
                "API, performance & security testing",
              ],
            },
            {
              title: "Infosys (Clients: Visa & Merck)",
              role: "Senior Test Analyst · 2015 – 2020",
              project: "Visa Fraud & Merck Healthcare",
              points: [
                "Fraud risk management systems",
                "Healthcare automation in regulated environments",
                "BDD UI & API automation",
              ],
            },
            {
              title: "RS Software (Client: Visa Singapore)",
              role: "Test Engineer · 2013 – 2015",
              project: "Merchant Fraud Manager",
              points: [
                "Payment network & merchant fraud systems",
                "Functional, DB & UAT testing",
                "Strong BFSI QA foundation",
              ],
            },
          ].map((job, idx) => (
            <details key={idx} className="group">
              <summary className="cursor-pointer list-none">
                <span className="absolute -left-[11px] top-2 h-5 w-5 bg-teal-400 rounded-full" />
                <h3 className="text-2xl font-bold text-teal-400">{job.title}</h3>
                <p className="text-gray-300">{job.role}</p>
              </summary>

              <div className="mt-6 p-8 bg-[#0E1325] rounded-3xl shadow-xl">
                <p className="text-gray-400 mb-4">
                  <strong>Project:</strong> {job.project}
                </p>
                <ul className="space-y-2 text-gray-400">
                  {job.points.map((p, i) => (
                    <li key={i}>• {p}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section className="container mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold mb-16">Technology Stack</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <TechCard title="Automation" items={["Selenium", "Playwright", "Robot Framework", "TestNG"]} />
          <TechCard title="API & Performance" items={["ReadyAPI", "SoapUI", "Postman", "JMeter"]} />
          <TechCard title="Security" items={["Burp Suite", "OWASP Concepts"]} />
          <TechCard title="Languages" items={["Python", "Groovy", "Shell", "Java"]} />
          <TechCard title="CI/CD" items={["Jenkins", "Git", "SVN"]} />
          <TechCard title="Cloud & Monitoring" items={["Azure", "Splunk", "Dynatrace"]} />
        </div>
      </section>

      {/* ================= AI ================= */}
      <section className="container mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold mb-16">AI-Driven Quality Engineering</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <InfoCard title="AI Test Creation" desc="Generate test cases and automation scripts faster." />
          <InfoCard title="Regression Optimization" desc="AI-based prioritization to reduce execution time." />
          <InfoCard title="Defect & Log Analysis" desc="Accelerated RCA using AI-assisted log analysis." />
        </div>
      </section>

      {/* ================= WHY HIRE ME ================= */}
      <section className="container mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold mb-16">Why You Should Hire Me</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <InfoCard title="Senior QA Automation Engineer" desc="12+ years of BFSI & Healthcare experience." />
          <InfoCard title="Modern Tools + AI" desc="Playwright, Selenium, CI/CD, and AI-driven QA." />
          <InfoCard title="Proven Impact" desc="Stable releases, reduced regression, enterprise scale delivery." />
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="container mx-auto px-6 py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Senior QA Automation Engineer · BFSI · Selenium · Playwright · API · Performance · AI-Driven QA
        </p>
        <p className="text-teal-400 text-2xl font-semibold">
          g.acharya1434@gmail.com
        </p>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Girija Acharya · QA Automation · BFSI · Playwright · Selenium · AI
      </footer>
    </main>
  );
}
