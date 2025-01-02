import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  // Optionally, add any other Next.js config below
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint errors during builds
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore TypeScript errors during builds
  },
  webpack: (config, { isServer }) => {
    // Fix for certain modules not working in the server environment
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Disable 'fs' module in client-side builds
      };
    }
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ["prisma"], // Exemple si vous utilisez Prisma ou autres dépendances externes
  },
  redirects: async () => {
    return [
      {
        source: '/api/reports',
        destination: '/api/reports-dynamic',  // Vous pouvez ajuster la destination ici
        permanent: false,
      },
    ];
  },
  reactStrictMode: false, // Désactive le mode strict si vous voulez éviter certaines vérifications
};

const withMDX = createMDX({
  extension: /\.mdx?$/, // Specify file extension for MDX
  options: {
    remarkPlugins: [], // Add markdown plugins here, as desired
    rehypePlugins: [], // Add rehype plugins here, if needed
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
