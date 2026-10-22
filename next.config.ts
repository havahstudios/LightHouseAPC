import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder stock photos. Remove once real photos live in /public.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  // Send www.lighthouselawapc.com visitors to the main address so the site lives at one URL.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lighthouselawapc.com" }],
        destination: "https://lighthouselawapc.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
