// const createMDX = require('@next/mdx')(); // immediately invoking an import to get the returned function?
// const remarkGfm = require('remark-gfm');

import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';
// TODO add rehype-highlight for syntax marking -- https://mdxjs.com/guides/syntax-highlighting/

/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});

export default withMDX(nextConfig);
