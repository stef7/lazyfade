/** @type {import("next").NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "(images|source).unsplash.com",
      },
    ],
  },
};
