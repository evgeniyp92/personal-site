# Implementing Markdown Support on Next 14 With TailwindCSS

## Introduction

Next 14 is, in my opinion, a very powerful framework. While many have their gripes
about the overall ecosystem and how convoluted some aspects of building an app have become (looking at you, NextAuth), and the DX coming from Next 12 was so bad I had to spend two whole weeks learning how to live with this new iteration, I firmly believe the juice was worth the squeeze and Next is giving developers the tools to build a fairer, more performant, and more equitable web for end users.

That is not to say that the DX is not without any pitfalls. If you, like me, decided you wanted to use Markdown files for your blog running on Next 14, you may have run into more than a few issues getting it all to work. I wanted to use React Markdown and the Monaco Editor to start, but both gave me so much trouble that I started looking for other solutions instead, and I found that next added MDX support sometime in the past. So I decided I'd try implementing it, and after the better part of a day of throwing my hands up and shouting about css class specificity and Tailwind utility classes having a mind of their own as to when to apply and when to not (I found out the Next 14 documents lay a dirty trap for you, more on that later), I've finally figured it out and will share my results with you here.

## Assumptions

I'm going to assume if you're here you already have some experience in Next.js, React and Next14, so if something is missing, or I've made a mistake somewhere, or you'd like me to elaborate, feel free to reach out to me at contact@evgeniypimenov.com and I'll have a look at your feedback.

## Overview

We are going to be installing and configuring the following modules:

- MDX Parsing on Next14 together with Remark and Rehype
- Configuring TailwindCSS to give us styles for our Markdown

## Setting up Next 14 to parse MDX

~Under construction, check back later~

We'll start by adding the necessary baseline packages from the terminal. If you haven't already set up your Next 14 project, you should do so before this step.

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx @tailwindcss/typography remark-gfm rehype-highlight
```

This installs MDX integration for Next, the Loader module as well as React support. We will also install type support for MDX and the optional Tailwind Typography library. Remark-GFM is a module that will extend our markdown support to Github-Flavored Markdown, and Rehype-Highlight will color our code, making it more readable.

Next, in either your `/src` directory or the parent directory of `/app`, create `mdx-components.tsx` (or `.jsx` if you are not using TypeScript). This file is **mandatory** for MDX parsing to work.

```tsx
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
```

Next, update your `next.config.js` file in your project root to look like this.

**NB**: You must change the file extension from `.js` to `.mjs` since `remark` and `rehype` are ESM-only ecosystems

```js
import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';

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

export default withMDX(nextConfig); // optionally, add any additional middleware here
```

With these steps configured you should now have basic support for `.mdx` files in your project. Let's go ahead and test that everything is working as intended by creating a `mdx-test` directory in our `app` folder and adding a `page.mdx` file inside the newly created directory

We will use this content as our baseline

````md
# Hello, world! This is an H1

# Another H1

## This is an H2

### This is an H3

- One
- Two
- Three

```javascript
// a code sample
const x = 'Hello world!';
```
````

This content will let us validate that elements like headers, lists and code blocks are working as intended

Lets check everything is working correctly by visiting `localhost:3000/mdx-test`. Your page output should look something like this:

<img src='../../../assets/mdx-basic.png'></img>

## Configuring TailwindCSS for Markdown Styling

You'll notice at this point none of our markdown has any styling. This is because Tailwind normalizes all classes, in particular H1 through H6. We could use jsx tags inside the `.mdx` files to provide custom styling, but this would defeat the purpose of using markdown in the first place since we'd just be writing JSX/TSX code only.

We could define custom styling methods in `mdx-components.jsx` like the official Next documents suggest:

```js
import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 style={{ fontSize: '100px' }}>{children}</h1>,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}
```

But this is ugly and makes your project needlessly complex by having to switch between CSS-in-JSX and Tailwind's classes. There are absolutely valid reasons to use this file to define custom render methods though! Making use of Next's Image tag is one of the examples in the docs and will be something I cover at a later date, but writing inline styles for your markdown is not an efficient use of your time.

We have better ways to solve the issue of Markdown styles, and it's all thanks to Tailwind's Typography library.

In your `tailwind.config.js` file, add the following to your code

```js
module.exports = {
  (...) // existing config goes here
  plugins: [require('@tailwindcss/typography')],
};
```

This will make Tailwind include its typography classes in the bundle so they can be accessed and used anywhere in your project.

Next, in your `mdx-test` folder, create a `layout.jsx` file and add the following code

```jsx
export default function MDXLayout({ children }) {
  return (
    <article className='prose prose-base lg:prose-xl prose-pre:p-0'>
      {children}
    </article>
  );
}
```

This nested layout file will wrap all of the MDX rendered to HTML in the `page.mdx` with the Tailwind classes that will transform our Markdown into something much more visually pleasing:

- `prose` sets the general classes
- `prose-base` defines the default size of elements
- `lg:prose-xl` sets the element size to be bigger on larger screens
- `prose-pre:p-0` removes the default padding applied to the `pre` tag since `rehype-highlight` also applies padding to the `code` tag and we end up with ugly double padding if we don't specify this

Navigate over to the same page we had open earlier and you should now see your rendered Markdown styled much better:

<img src='../../../assets/mdx-styled.png'></img>

That's it! You're now off to the races.

## Future Work

This page isnt done and there is still more documentation to write, which I will add as I go through those steps

Notable on the list of todos is:

- Using dynamic routes and MDX-remote to avoid directory hell
- Writing custom rendering methods to take advantage of built in Next optimizations.

This article will be updated once I work through those issues, or perhaps I will create new ones that I will link to from here.

Until then, I hope you found this article informative, and if you have any questions, comments or concerns, please feel free to contact me at contact@evgeniypimenov.com
