/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Разрешает картинки с любых сайтов
      },
    ],
  },
  // Можно добавить другие настройки, если потребуется
};

module.exports = nextConfig;
