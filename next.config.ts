
import type {NextConfig} from 'next';
console.log("***###", process.env.NODE_ENV_NAME) ;
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      }
    ],
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure proper asset handling for production
  output: 'export',
  distDir: 'out',
  assetPrefix: process.env.NODE_ENV_NAME === 'production' ? '/aditi-oro-dental-care' : '',
  basePath: process.env.NODE_ENV_NAME === 'production' ? '/aditi-oro-dental-care' : '',
};

export default nextConfig;
