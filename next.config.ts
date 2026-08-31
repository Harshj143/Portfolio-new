import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // harshjannawar.com/resume serves the PDF while keeping the clean URL,
    // so the link stays shareable rather than bouncing to /resume.pdf
    return [
      { source: "/resume", destination: "/resume.pdf" },
      { source: "/cv", destination: "/resume.pdf" },
    ];
  },
};

export default nextConfig;
