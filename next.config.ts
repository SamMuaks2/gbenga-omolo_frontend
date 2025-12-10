// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
// };

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["localhost"],
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "4000",
//         pathname: "/uploads/**",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'your-production-domain.com', // Replace with your actual domain
        pathname: '/uploads/**',
      },
    ],
    // Alternative: Allow all domains (not recommended for production)
    // domains: ['localhost'],
  },
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Disable x-powered-by header
  poweredByHeader: false,
};

module.exports = nextConfig;