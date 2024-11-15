/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        turbo: {
            rules: {
                '*.svg': {
                    loaders: ['@svgr/webpack'],
                    as: '*.js',
                },
            },
        },
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        config.devtool = "eval-source-map";
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
    images: {
        dangerouslyAllowSVG: true,
        
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
                port: "",
            },
            {
                protocol: "http",
                hostname: "**",
                port: "",
            },
        ],
    },
};


export default nextConfig
