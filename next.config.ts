
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.boattrader.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'servedby.boatsgroup.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.boatsgroup.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'servedbyadbutler.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
