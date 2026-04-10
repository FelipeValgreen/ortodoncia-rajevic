/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/diagnostico-inicial',
        destination: '/diagnostico-inicial.html',
      },
    ]
  },
}

export default nextConfig;
