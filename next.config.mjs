/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        ACCESS_TOKEN: 'sqassM0ZqCOjEZcagSm08V5YdPy7W62jNS9qFx71'
    },

    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
       
      },
    ],
  },
};

export default nextConfig;
