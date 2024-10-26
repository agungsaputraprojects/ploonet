/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: false, // Set true jika menggunakan next export
    // domains: [], // Tambahkan jika menggunakan gambar dari external domain
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ko/produksi",
        permanent: true,
      },
      {
        source: "/ko",
        destination: "/ko/produksi",
        permanent: true,
      },
      {
        source: "/en",
        destination: "/en/produksi",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
