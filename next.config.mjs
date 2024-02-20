/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dvd6ljcj7w3pj.cloudfront.net',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
};

export default nextConfig;
