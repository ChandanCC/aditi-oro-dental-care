import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
  trailingSlash: false,
  // Ensure proper asset handling for production
  output: 'export',
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV_NAME === 'production' ? '/aditi-oro-dental-care' : '',
  basePath: process.env.NODE_ENV_NAME === 'production' ? '/aditi-oro-dental-care' : '',
};

export default nextConfig;
