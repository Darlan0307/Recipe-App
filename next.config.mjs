/** @type {import('next').NextConfig} */


const nextConfig = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
        permanent: false,
      },
    ];
  }, 
  // images: {
  //   remotePatterns: [{ hostname: }],
  // },
};



export default nextConfig;
