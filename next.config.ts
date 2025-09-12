const nextConfig = {
  output: 'export', // Enables static export (creates 'out' folder)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export if using <Image />
  },
}

export default nextConfig