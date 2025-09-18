/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@untitledui/icons"],
    },
    // Cloudflare Pages configuration - use static export but handle API routes differently
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    // Skip API routes during static export
    skipTrailingSlashRedirect: true,
    distDir: 'out',
};

export default nextConfig;
