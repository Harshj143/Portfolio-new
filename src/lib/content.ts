export const SUBJECT = {
  first: "HARSH",
  last: "JANNAWAR",
  role: "Security Engineer",
  focus: "Application, Cloud & AI Security",
  location: "San Francisco, California",
  status: "Open to full-time roles",
  fileNo: "HJ-2026-01",
  clearance: "PUBLIC",
  email: "hjannawar014@gmail.com",
  github: "https://github.com/Harshj143",
  linkedin: "https://linkedin.com/in/harsh-jannawar",
  resume: "/resume.pdf",
};

/**
 * Scheduling. Drop a Cal.com or Calendly event link into `url` and the
 * "Book a call" actions light up everywhere; leave it empty and they fall
 * back to email so the site never ships a dead button.
 */
export const BOOKING = {
  /** Public Cal.com booking page — used for the fallback link and rel=noreferrer target. */
  url: "https://cal.com/harsh-jannawar-tefrwu/30min",
  /** The same event as "<username>/<slug>", which is what the embed wants. */
  calLink: "harsh-jannawar-tefrwu/30min",
  duration: "30 min",
  blurb: "Intro call about roles, projects, or anything AI-security shaped.",
};

export const SUMMARY =
  "Security Engineer who builds secure, resilient systems and ships security tooling rather than just finding problems. Experienced across application security, detection engineering, cloud, and AI/LLM security, aligned with OWASP, MITRE ATT&CK, and NIST.";

export const BRIEF = [
  "Most of what I build answers one question: how do you let an AI system be genuinely useful without letting it be dangerous? That has become a transparent MCP proxy that enforces per-tool policy on every agent call, a red-team suite mapped to the OWASP LLM Top 10, and a SOC assistant that writes incident reports from playbooks and raw logs.",
  "At SecureAIs I ran adversarial testing against production AI platforms and found 20+ critical issues including authentication bypass, prompt injection, and token leakage before any of it shipped, then built the PII detection and redaction pipeline that pushed sensitive-data protection accuracy from 65% to 95%.",
  "At SecureThings I spent a year on the build side: an event-driven scanning platform in Dockerized async Python that cut asset analysis from nine hours to under thirty minutes, a lightweight telemetry agent for devices with almost no RAM to spare, and AWS/Azure hardening across 25+ security gaps.",
  "My M.S. thesis at the University of Washington, an AI Security Compliance and Testing Framework for LLM Systems, is published through ProQuest.",
  "Off the clock: CTFs with UWB GreyHats, cloud hardening rabbit holes, and writing up what breaks.",
];

export type Edu = { school: string; degree: string; detail: string; place: string; from: string; to: string };

export const EDUCATION: Edu[] = [
  {
    school: "University of Washington",
    degree: "M.S. Cybersecurity Engineering",
    detail: "GPA 3.93 / 4.00",
    place: "Seattle, WA",
    from: "Sep 2024",
    to: "Jun 2026",
  },
  {
    school: "Symbiosis Skills and Professional University",
    degree: "B.Tech, CSIT (Cybersecurity)",
    detail: "GPA 3.65 / 4.00",
    place: "Pune, India",
    from: "Aug 2020",
    to: "May 2024",
  },
];

export type Role = {
  org: string; title: string; place: string; from: string; to: string;
  logo?: string; bullets: string[]; stack: string[];
};

export const RECORD: Role[] = [
  {
    org: "SecureAIs", title: "AI Cybersecurity Engineering Intern", place: "California, USA",
    from: "Jun 2025", to: "Aug 2025", logo: "/secureais_logo.png",
    bullets: [
      "Drove 40+ paying users by improving data protection accuracy from 65% to 95%: developed a PII detection and redaction pipeline using Presidio, regex-based validation, and packet analysis across 10k test samples.",
      "Reduced security review cycles by 60% through CI/CD automation: integrated SAST, DAST, dependency scanning, and secret detection into engineering pipelines to give continuous security feedback during development.",
      "Identified 20+ critical vulnerabilities across AI platforms: ran adversarial testing and secure code reviews to uncover authentication bypass, prompt injection, and token leakage prior to production release.",
      "Implemented end-to-end authentication flows across engineering services: built and tested secure login, session handling, token validation, role-based access control, and protected API routes to reduce unauthorized access risk.",
    ],
    stack: ["Presidio", "Adversarial Testing", "SAST / DAST", "CI/CD", "AuthN / AuthZ"],
  },
  {
    org: "SecureThings", title: "Security Analyst Intern", place: "Pune, India",
    from: "Jun 2023", to: "May 2024", logo: "/Securethings-Logo.jpg",
    bullets: [
      "Cut asset analysis time from 9+ hours to under 30 minutes: built an event-driven scanning platform with Dockerized asynchronous Python workflows running Nmap and Nuclei, deployed via AWS Lambda and ECS, normalizing findings against CVE, CWE, and EDB-ID before storing them in MongoDB and S3.",
      "Built a lightweight device monitoring tool for resource-constrained security telemetry: data collection agents in Python and Bash for devices with limited RAM and storage, streaming logs to an EC2-hosted pipeline, with a dashboard to analyze security events.",
      "Triaged 15+ high-severity vulnerabilities with validated exploits: performed application and infrastructure security assessments using Nessus, Nmap, and Burp Suite.",
      "Remediated 25+ cloud and application security gaps: strengthened AWS and Azure environments through IAM permissions, container security controls, secrets handling, and exposed service configurations.",
    ],
    stack: ["Python asyncio", "Docker", "AWS Lambda / ECS", "Nuclei", "Burp Suite", "MongoDB"],
  },
  {
    org: "Pune Metro Rail Project", title: "Security Intern", place: "Pune, India",
    from: "Jun 2022", to: "Jul 2022", logo: "/metro.jpg",
    bullets: [
      "Reduced attack surface across 15+ findings: reviewed IAM roles and security group configurations across 20+ cloud resources, identifying over-permissive access and exposed services and recommending least-privilege changes.",
      "Improved audit readiness and incident response coverage by 30%: mapped 12+ controls to monitoring signals in CloudWatch and GuardDuty, supporting alignment with ISO/IEC 27001:2022 and the NIST Cybersecurity Framework.",
    ],
    stack: ["AWS", "IAM", "CloudWatch", "GuardDuty", "ISO 27001", "NIST CSF"],
  },
];

export type Project = {
  n: string; name: string; kind: string; year: string;
  line: string; body: string; bullets: string[]; stack: string[];
  href?: string; image?: string; featured?: boolean;
};

export const WORK: Project[] = [
  {
    n: "01", name: "Inline Proxy", kind: "Security Gateway for AI Agents", year: "2026", featured: true,
    line: "A transparent MCP proxy that enforces policy on every tool call an agent makes.",
    body: "Role-aware policy on every tool: allow, block, redact, or route to human approval. The decision happens before an action runs rather than after, which is what lets it break the prompt-injection exfiltration chain instead of just recording it.",
    bullets: [
      "Blocks the full prompt-injection exfiltration chain, verified end to end: taint tracking stops a poisoned GitHub issue from publishing a repo's .env",
      "194 tools policed at roughly 0.1 ms p99, with 0% false positives across 200+ real tool descriptions",
      "Default-deny policy packs for GitHub, Jira, and Slack, each extracted from upstream server source",
      "OIDC identity, Ed25519-signed policy bundles, and SIEM audit streaming to Splunk and S3",
    ],
    stack: ["Python", "asyncio", "MCP", "YAML Policy", "SIEM"],
    href: "https://github.com/Harshj143/Inline-Proxy",
    image: "/fig-inline-proxy.svg",
  },
  {
    n: "02", name: "AegisLLM", kind: "LLM Red-Team Suite", year: "2026", featured: true,
    line: "Automated security testing for LLM applications, mapped to the OWASP LLM Top 10.",
    body: "Runs thousands of injection and jailbreak prompts against a target, scores each one with LLM-as-a-Judge, and diffs the result against baseline models so a finding is a regression you can act on rather than a screenshot.",
    bullets: [
      "Thousands of injection and jailbreak prompts, scored by LLM-as-a-Judge",
      "Differential testing against baseline models to separate real findings from noise",
      "ThreatForge, a genetic-algorithm prompt-evolution engine that breeds new attacks",
      "Recon module fingerprints the target model, detects RAG, and enumerates connected tools",
    ],
    stack: ["Python", "Flask", "OWASP LLM Top 10"],
    href: "https://github.com/Harshj143/AegisLLM",
    image: "/fig-aegisllm.svg",
  },
  {
    n: "03", name: "SOC RAGBot", kind: "Incident Investigation", year: "2026", featured: true,
    line: "A SOC assistant that writes citation-aware incident reports from playbooks and raw logs.",
    body: "Retrieval-augmented investigation for security analysts. It combines institutional knowledge with live log data and refuses to answer beyond what its sources support, so every claim binds back to where it came from.",
    bullets: [
      "Citation-aware retrieval with enriched metadata and source binding to prevent hallucination",
      "Semantic caching to cut latency on repeated investigations",
      "Deterministic guard layer for prompt injection and jailbreak detection",
      "Enterprise audit and replay layer capturing full interaction logs",
    ],
    stack: ["Python", "RAG", "LLM Ops"],
    href: "https://github.com/Harshj143/soc-ragbot",
    image: "/fig-soc-ragbot.svg",
  },
  {
    n: "04", name: "Cloud Detection Engine", kind: "Detection Engineering", year: "2026",
    line: "Three-layer cloud threat detection modeled on the 2019 Capital One breach.",
    body: "Ingests CloudTrail, WAF, and VPC flow logs, runs ten detection modules over them, scores entity risk, then explains findings for three different audiences and maps each one to a compliance control.",
    bullets: [
      "10 detection modules covering IMDS exposure, SSRF patterns, audit tampering, credential chaining, S3 enumeration, and over-privileged IAM",
      "Composite per-entity risk scoring across correlated alerts",
      "Deterministic mapping to PCI-DSS 4.0, GLBA, OWASP Top 10, and MITRE ATT&CK",
    ],
    stack: ["Python", "CloudTrail", "MITRE ATT&CK", "PCI-DSS"],
    href: "https://github.com/Harshj143/Cloud-Detection-Engine",
  },
  {
    n: "05", name: "InboxGuard", kind: "Email Security", year: "2026",
    line: "Phishing detection that reasons over an email instead of keyword-matching it.",
    body: "Built on Gemini function calling, so the model inspects headers, links, and body content as separate signals and explains why a message was flagged.",
    bullets: [
      "Function calling to inspect headers, URLs, and content independently",
      "Explains its verdict rather than returning a bare score",
      "Ships as a web app with a browser extension",
    ],
    stack: ["Python", "Gemini API", "Flask"],
    href: "https://github.com/Harshj143/InboxGuard",
  },
  {
    n: "06", name: "PromptStrike", kind: "Injection Testing CLI", year: "2025",
    line: "A CLI for automated prompt-injection testing across three attack modes.",
    body: "Python 3.11 with Poetry and Pydantic, built to run injection campaigns in CI the same way you would run any other test suite.",
    bullets: [
      "Goal Hijack, Tool Coercion, and RAG Contamination attack modes",
      "Typed configuration via Pydantic, packaged with Poetry",
    ],
    stack: ["Python 3.11", "Pydantic", "Poetry"],
    href: "https://github.com/Harshj143/PromptStrike-LLM-Security-Testing-Framework-",
  },
  {
    n: "07", name: "RTeamF", kind: "Recon Automation", year: "2026",
    line: "Subdomain discovery, vulnerability detection, and CVE matching in one pipeline.",
    body: "Automated domain scanning that goes from a bare domain to a mapped attack surface, with results stored securely in AWS S3 and MongoDB.",
    bullets: [
      "Live domain checks and open port scanning",
      "Technology stack fingerprinting and vulnerability detection",
      "CWE and CVE retrieval with Exploit Database IDs",
    ],
    stack: ["Python", "AWS S3", "MongoDB"],
    href: "https://github.com/Harshj143/RTeamF",
  },
  {
    n: "08", name: "DRedrive", kind: "USB Security", year: "2024",
    line: "Scan, host, and format untrusted drives from one interface.",
    body: "A GUI toolkit for handling untrusted drives in environments where repeatedly re-plugging hardware is itself the risk.",
    bullets: [
      "ClamAV malware scanning on insert",
      "Local-network file hosting without external transfer",
      "Drive formatting and management without repeated unplugging",
    ],
    stack: ["Python", "ClamAV", "GUI"],
    href: "https://github.com/Harshj143/Dredrive",
  },
];

export const COMMENDATIONS = [
  { k: "Published", t: "M.S. Thesis, University of Washington", d: "AI Security Compliance and Testing Framework for LLM Systems. ProQuest Dissertations & Theses, 32738510." },
  { k: "Top 1%", t: "TryHackMe", d: "Ranked in the top one percent globally, across DevSecOps, penetration testing, red team, and blue team paths." },
  { k: "Winner", t: "Capture The Flag, UWB GreyHats", d: "Won the UW Bothell GreyHats CTF competition in applied exploitation and forensics." },
  { k: "Author", t: "Published on Medium", d: "Writes cybersecurity and technical blogs on AI security, cloud, and offensive tooling." },
];

export const CERTS = [
  "CompTIA Security+",
  "CompTIA PenTest+",
  "DevSecOps (TryHackMe)",
  "TCM Practical Ethical Hacking",
  "Oracle Cloud Infrastructure Foundations",
];

export const CAPABILITIES = [
  { g: "Security", items: ["Security development", "Threat modeling", "Application security", "Penetration testing", "Secure code review", "DevSecOps", "Vulnerability management", "Detection engineering"] },
  { g: "Languages", items: ["Python", "TypeScript", "JavaScript", "Node.js", "Bash", "SQL"] },
  { g: "Frameworks", items: ["ISO 27001 / 42001", "NIST", "SOC 2", "OWASP Top 10"] },
  { g: "Tools", items: ["Burp Suite", "Nmap", "Nessus", "Nuclei", "Metasploit", "Splunk", "Git"] },
  { g: "Cloud", items: ["AWS", "Lambda", "S3", "Docker", "Container security", "IAM"] },
  { g: "Data", items: ["MongoDB", "Postgres", "SQL"] },
];
