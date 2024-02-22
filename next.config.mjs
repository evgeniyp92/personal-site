// const createMDX = require('@next/mdx')(); // immediately invoking an import to get the returned function?
// const remarkGfm = require('remark-gfm');

import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
