/* eslint-disable import/no-unresolved */
import React from 'react';
import { Heading } from '@chakra-ui/react';
import Layout from '../components/layouts/Layout';

import BlogPostCard from '../components/BlogPostCard';

import { frontMatter as blogPosts } from './blog/*.mdx';

function blog() {
  // const posts = postsSortedByDate

  return (
    <Layout>
      <Heading>Blog 📓</Heading>
      {blogPosts.map((frontMatter) => (
        <BlogPostCard
          key={frontMatter.title}
          title={frontMatter.title}
          summary={frontMatter.summary}
          href={frontMatter.__resourcePath.replace('.mdx', '')}
        />
      ))}
    </Layout>
  );
}

export default blog;
