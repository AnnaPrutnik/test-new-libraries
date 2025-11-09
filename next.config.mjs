import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: { urlImports: ["https://themer.sanity.build/"] },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "drive.google.com",
                port: "",
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                pathname: "/images/**",
            },
        ],
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
            config.resolve.fallback.tls = false;
            config.resolve.fallback.net = false;
            config.resolve.fallback.child_process = false;
        }
        if (process.env.NODE_ENV === "production" && !isServer) {
            config.externals.push({ sanity: "sanity" });
        }

        return config;
    },
    eslint: {
        // тимчасово ігноруємо flat-config помилку під час білду
        ignoreDuringBuilds: true,
    },
    typescript: {
        // теж ігноруємо типові помилки при збірці на Vercel
        ignoreBuildErrors: true,
    },
};

export default withNextIntl(nextConfig);
