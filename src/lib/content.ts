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
  url: "",
  duration: "30 min",
  blurb: "Intro call — roles, projects, or anything AI-security shaped.",
};

export const SUMMARY =
  "Security Engineer who builds secure, resilient systems and ships security tooling rather than just finding problems. Experienced across application security, detection engineering, cloud, and AI/LLM security, aligned with OWASP, MITRE ATT&CK, and NIST.";

export const BRIEF = [
  "Most of what I build answers one question: how do you let an AI system be genuinely useful without letting it be dangerous? That has become a transparent MCP proxy that enforces per-tool policy on every agent call, a red-team suite mapped to the OWASP LLM Top 10, and a SOC assistant that writes incident reports from playbooks and raw logs.",
  "At SecureAIs I ran adversarial testing against production AI platforms and found 20+ critical issues — authentication bypass, prompt injection, token leakage — before any of it shipped, then built the PII detection and redaction pipeline that pushed sensitive-data protection accuracy from 65% to 95%.",
  "At SecureThings I spent a year on the build side: an event-driven scanning platform in Dockerized async Python that cut asset analysis from nine hours to under thirty minutes, backend risk-scoring logic to prioritize what actually mattered, and AWS/Azure hardening across 25+ security gaps.",
  "Off the clock: CTFs with UWB GreyHats, cloud hardening rabbit holes, and writing up what breaks.",
];

export type Edu = { school: string; degree: string; detail: string; from: string; to: string };

export const EDUCATION: Edu[] = [
  {
    school: "University of Washington",
    degree: "M.S. Cybersecurity Engineering",
    detail: "GPA 3.93 / 4.00",
    from: "Sep 2024",
    to: "Jun 2026",
  },
  {
    school: "Symbiosis Skills and Professional University",
    degree: "B.Tech, CSIT (Cybersecurity)",
    detail: "GPA 3.65 / 4.00",
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
      "Developed a PII detection and redaction pipeline using Presidio, regex-based validation, and packet analysis to protect sensitive data across 10k test samples — improving sensitive-data protection accuracy from 65% to 95%.",
      "Conducted adversarial testing and secure code reviews across AI platforms to uncover 20+ critical vulnerabilities including authentication bypass, prompt injection, and token leakage prior to production release.",
      "Integrated SAST, DAST, dependency scanning, and secret detection into CI/CD pipelines to give continuous security feedback during development, reducing security review cycles by 60%.",
      "Built and tested end-to-end authentication flows across engineering services — secure login, session handling, token validation, role-based access control, and protected API routes — to reduce unauthorized access risk across application workflows.",
    ],
    stack: ["Presidio", "Adversarial Testing", "SAST / DAST", "CI/CD", "AuthN / AuthZ"],
  },
  {
    org: "SecureThings", title: "Security Analyst Intern", place: "Pune, India",
    from: "Jun 2023", to: "May 2024", logo: "/Securethings-Logo.jpg",
    bullets: [
      "Built an event-driven scanning platform using Dockerized asynchronous Python, Nmap, and Nuclei — deployed via Amazon ECR and ECS, persisted to S3 and MongoDB, and triggered by AWS Lambda on new user requests — cutting asset analysis time from 9+ hours to under 30 minutes.",
      "Performed application and infrastructure security assessments using Nessus, Nmap, and Burp Suite to triage 15+ high-severity vulnerabilities with validated exploits.",
      "Designed backend risk-scoring logic to prioritize findings by exploitability, exposed services, affected technologies, severity, and business context for faster remediation decisions.",
      "Strengthened AWS and Azure environments by improving IAM permissions, container security controls, secrets handling, and exposed service configurations — remediating 25+ cloud and application security gaps.",
    ],
    stack: ["Python asyncio", "Docker", "AWS ECS / Lambda", "Nuclei", "Burp Suite", "MongoDB"],
  },
  {
    org: "Pune Metro Rail Project", title: "Security Intern", place: "Pune, India",
    from: "Jun 2022", to: "Jul 2022", logo: "/metro.jpg",
    bullets: [
      "Reviewed IAM roles and security group configurations across 20+ cloud resources to identify over-permissive access and exposed services, recommending least-privilege changes that reduced the attack surface across 15+ findings.",
    ],
    stack: ["AWS", "IAM", "Cloud Review"],
  },
];

export type Project = {
  n: string; name: string; kind: string; year: string;
  line: string; body: string; bullets: string[]; stack: string[];
  href?: string; image?: string; featured?: boolean;
};

export const WORK: Project[] = [
  {
    n: "01", name: "Inline Proxy", kind: "Security Gateway for AI Agents", year: "2026 — Present", featured: true,
    line: "A transparent MCP proxy that enforces policy on every tool call an agent makes.",
    body: "Role-aware, per-tool policy — allow, block, redact, rewrite, quarantine, or route to human approval — applied before an action runs rather than after. Fail-closed by default, with a pluggable asyncio pipeline and layered YAML policy packs.",
    bullets: [
      "Per-tool policy decisions on every agent call, fail-closed by default",
      "Defense-in-depth against prompt-injection exfiltration: PII/secret redaction with checksum-validated detectors and a tokenization vault",
      "Taint tracking, per-session risk scoring with auto-suspend, and an LLM behavioral anomaly monitor",
      "200+ tests in CI; roadmap covers GitHub/Jira/Slack connector packs, OIDC via Okta/Auth0, policy-as-code CI/CD, and audit streaming to Splunk/S3",
    ],
    stack: ["Python", "asyncio", "MCP", "YAML Policy", "SIEM"],
    href: "https://github.com/Harshj143/Inline-Proxy",
    image: "/fig-inline-proxy.svg",
  },
  {
    n: "02", name: "AegisLLM", kind: "LLM Red-Team Suite", year: "2026", featured: true,
    line: "Automated security testing for LLM applications, mapped to the OWASP LLM Top 10.",
    body: "A full offensive suite for language-model applications, including the ThreatForge Attack Suite for deeper penetration testing. Findings map directly to OWASP categories so they land as actionable security work rather than curiosities.",
    bullets: [
      "Automated prompt testing for injection and jailbreaks",
      "LLM-based judging to evaluate whether an injection actually succeeded",
      "Determinism probing and rate-limit analysis",
      "Configurable across OpenAI, Anthropic, and local models",
    ],
    stack: ["Python", "OWASP LLM Top 10", "Red Teaming"],
    href: "https://github.com/Harshj143/AegisLLM",
    image: "/fig-aegisllm.svg",
  },
  {
    n: "03", name: "SOC RAGBot", kind: "Incident Investigation", year: "2026", featured: true,
    line: "A SOC assistant that writes citation-aware incident reports from playbooks and raw logs.",
    body: "Retrieval-augmented investigation for security analysts. It combines institutional knowledge with live log data and refuses to answer beyond what its sources support — every claim binds back to where it came from.",
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
      "10 detection modules — IMDS exposure, SSRF patterns, audit tampering, credential chaining, S3 enumeration, over-privileged IAM",
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
    line: "Secure USB operations — scan, host, and format from one interface.",
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
  { k: "Top 1%", t: "TryHackMe", d: "Ranked in the top one percent globally across offensive and defensive challenges." },
  { k: "Winner", t: "Capture The Flag — UWB GreyHats", d: "Won the UW Bothell GreyHats CTF competition in applied exploitation and forensics." },
  { k: "Author", t: "Published on Medium", d: "Writes cybersecurity and technical blogs on AI security, cloud, and offensive tooling." },
];

export const CERTS = [
  "CompTIA Security+",
  "CompTIA PenTest+",
  "TCM Practical Ethical Hacking",
  "DevSecOps — TryHackMe",
  "Certified LLM Security Expert — RTL",
  "Oracle Cloud Infrastructure Foundations",
];

export const CAPABILITIES = [
  { g: "Security", items: ["Security tool development", "Threat modeling", "Application security reviews", "Penetration testing", "Secure code review"] },
  { g: "Languages", items: ["Python", "JavaScript", "Node.js", "Bash"] },
  { g: "Frameworks", items: ["ISO 27001 / 42001", "NIST", "SOC 2", "OWASP", "MITRE ATT&CK"] },
  { g: "Tooling", items: ["Burp Suite", "Metasploit", "Nmap", "Nuclei", "Splunk", "Docker"] },
  { g: "Cloud", items: ["AWS", "Azure", "Lambda", "S3", "CloudTrail", "GuardDuty"] },
  { g: "Data", items: ["MongoDB", "Postgres", "SQL"] },
];
