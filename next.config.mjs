/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",            // sitio estático: se publica en Cloudflare Pages, Netlify, etc.
  images: { unoptimized: true },
};
export default nextConfig;
