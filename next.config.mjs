/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração de redirecionamento
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/pages/login',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
