import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org", // Allow images from upload.wikimedia.org
      "cdn.analyticsvidhya.com", // Allow images from cdn.analyticsvidhya.com
      "miro.medium.com",
      "climatecommunication.yale.edu",
      "www.slideteam.net",
      "cdn1-public.infotech.com"
    ],
  },
};

export default nextConfig;
