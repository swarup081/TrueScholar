
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exclude pino and thread-stream from the bundler to avoid the "why-is-node-running" error
  serverExternalPackages: ['pino', 'thread-stream'],
};

export default nextConfig;