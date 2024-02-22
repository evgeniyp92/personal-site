# Implementing MDX on Next 14 With TailwindCSS

## Introduction

Next 14 is, in my opinion, a very powerful framework. While many have their gripes
about the overall ecosystem and how convoluted some aspects of building an app have become (looking at you, NextAuth), and the DX coming from Next 12 was so bad I had to spend two whole weeks learning how to live with this new iteration, I firmly believe the juice was worth the squeeze and Next is giving developers the tools to build a fairer, more performant, and more equitable web for end users.

That is not to say that the DX is not without any pitfalls. If you, like me, decided you wanted to use Markdown files for your blog running on Next 14, you may have run into more than a few issues getting it all to work. I wanted to use React Markdown and the Monaco Editor to start, but both gave me so much trouble that I started looking for other solutions instead, and I found that next added MDX support sometime in the past. So I decided I'd try implementing it, and after the better part of a day of throwing my hands up and shouting about css class specificity and Tailwind utility classes having a mind of their own as to when to apply and when to not (I found out the Next 14 documents lay a dirty trap for you, more on that later), I've finally figured it out and will share my results with you here.

## Assumptions

I'm going to assume if you're here you already have some experience in Next.js, React and Next14, so if something is missing, or I've made a mistake somewhere, or you'd like me to elaborate, feel free to reach out to me at contact@evgeniypimenov.com and I'll have a look at your feedback.

## Overview

We are going to be installing and configuring the following modules:

- MDX Parsing on Next14
- Setting up Remark and Rehype to extend our Markdown and make our code snippets look nice and fancy
- Configuring TailwindCSS to give us styles for our Markdown

## Setting up Next 14 to parse MDX

~Under construction, check back later~
