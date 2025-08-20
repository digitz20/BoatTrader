
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
    domains: [
        'placehold.co',
        'storage.googleapis.com',
        'images.boatsgroup.com',
        'servedby.boatsgroup.com',
        'servedbyadbutler.com',
        'images.boattrader.com',
        'www.boattrader.com',
    ]
  },
};

export default nextConfig;
