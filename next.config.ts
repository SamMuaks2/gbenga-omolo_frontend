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
        hostname: 'backend-gbenga.onrender.com', 
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