 /** @type {import('next').NextConfig} */
const nextConfig = {
    output: {
        dir: "out",
        publicPath: "/assets/",
        staticFolder: "static",
      },
    images: {
        unoptimized: true,
    },
};


export default nextConfig;