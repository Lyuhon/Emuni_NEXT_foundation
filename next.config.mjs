// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;










/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static Export для SSG
    output: 'export',
    trailingSlash: true,

    // ВАЖНО: для static export обязательно true
    images: {
        unoptimized: true,
    },

    // Удаление console.log в продакшене
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },

    // Experimental features
    experimental: {
        // optimizeCss убран - вызывает проблемы при static export
        optimizePackageImports: ['lucide-react'],
    },

    // Основные оптимизации
    productionBrowserSourceMaps: false,
    reactStrictMode: true,
    compress: true,

    // Webpack оптимизации
    webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
            config.optimization = {
                ...config.optimization,
                minimize: true,
                splitChunks: {
                    chunks: 'all',
                    cacheGroups: {
                        framework: {
                            name: 'framework',
                            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
                            priority: 40,
                            enforce: true,
                        },
                        commons: {
                            name: 'commons',
                            minChunks: 2,
                            priority: 20,
                        },
                    },
                },
                usedExports: true,
            };
        }
        return config;
    },
};

export default nextConfig;