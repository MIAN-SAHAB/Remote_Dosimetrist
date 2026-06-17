/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // ensure trailing slashes on all routes
  output: "standalone",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.remotedosimetrist.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['swiper'],
  },
  async headers() {
    // ---- Content-Security-Policy ----
    // Allow-lists are derived from what the site actually loads:
    //  - inline GTM/GA4 bootstrap + JSON-LD schema  -> 'unsafe-inline'
    //  - GTM/GA, reCAPTCHA, Google Maps embed, DoubleClick (Floodlight)
    //  - WordPress media/API on api.remotedosimetrist.com
    // NOTE: to test safely first, copy this value to a
    // 'Content-Security-Policy-Report-Only' header (instead of the
    // enforcing one) and watch the browser console for violations,
    // then switch back to 'Content-Security-Policy'.
    const csp = [
      "default-src 'self'",
      "media-src 'self' https://api.remotedosimetrist.com",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.google.com https://www.gstatic.com https://www.googleadservices.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://api.remotedosimetrist.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.gstatic.com https://www.google.com https://*.doubleclick.net",
      "font-src 'self' data:",
      "connect-src 'self' https://api.remotedosimetrist.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.google.com https://*.doubleclick.net",
      "frame-src 'self' https://www.google.com https://www.googletagmanager.com https://*.doubleclick.net",
      "worker-src 'self' blob:",
      "upgrade-insecure-requests",
    ].join('; ');

    const securityHeaders = [
      // Clickjacking protection (legacy header + modern CSP directive above)
      { key: 'X-Frame-Options', value: 'DENY' },
      // Prevent MIME content-type sniffing
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      // Limit referrer leakage
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      // Lock down powerful browser features by default
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'Content-Security-Policy', value: csp },
    ];

    return [
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
