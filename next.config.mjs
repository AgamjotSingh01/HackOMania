/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'default',
        unoptimized: true, // Important for disabling optimization
    },
};

export default nextConfig;
