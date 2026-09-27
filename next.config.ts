import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Build the site as plain static HTML/CSS/JS into the `out/` folder,
  // so it can be hosted on Netlify (or any static host) without a Node server.
  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;
