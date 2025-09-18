/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
    // Cloudflare Pages configuration - remove static export to support API routes
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
