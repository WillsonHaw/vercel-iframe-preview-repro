/** @type {import('next').NextConfig} */
const nextConfig = {
  headers() {
    return [
      {
        // Apply these headers to all routes.
        source: "/:path*",
        headers: [
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
      {
        // Headers for embedded media
        source: "/embed/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            // Todo: Add proper list of valid sources
            value:
              "frame-ancestors *.justwatch.com *.moviecycle.com http://localhost:*",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
