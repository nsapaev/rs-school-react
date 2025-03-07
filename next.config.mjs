/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/rs-school-react',
  reactStrictMode: true,
  images: {
    // domains: ['localhost', 'flagcdn.com', 'upload.wikimedia.org'],
    unoptimized: true,
  },
};
