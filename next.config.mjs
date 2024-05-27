/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*.googleusercontent.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'mch-buymeacoffee.s3.amazonaws.com'
          }
        ],
      },
};

export default nextConfig;
