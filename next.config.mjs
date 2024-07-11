/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/github-pages',
  basePath: '/portfolio', 
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true, // This is important for Next.js static export
  },
};


export default nextConfig;
