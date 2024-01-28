/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname:
          "/yossydev/difference-between-remote-and-local-for-next-image/assets/**",
      },
    ],
  },
};

export default nextConfig;
