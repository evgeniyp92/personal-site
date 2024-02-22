const withMDX = require('@next/mdx')(); // immediately invoking an import to get the returned function?

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default nextConfig;
