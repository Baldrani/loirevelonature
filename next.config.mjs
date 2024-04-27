/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "a.storyblok.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
                port: "",
            },
        ],
    },
};

export default nextConfig;
