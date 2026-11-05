/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ["/data/data/**", "/data/**", "/proc/**", "/sys/**", "**/node_modules/**"],
    };
    return config;
  },
};
export default nextConfig;
