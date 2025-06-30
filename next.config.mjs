// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: '**.v0.dev',
      },
    ],
    unoptimized: true,
    // domains: ['example.com'], // Uncomment and add specific domains if needed
  },
};

export default nextConfig;
