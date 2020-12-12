import React from 'react';
import { Heading } from '@chakra-ui/react';
import Layout from '../components/layouts/Layout';

import BlogPostCard from '../components/BlogPostCard';

import { frontMatter as blogPosts } from './blog/*.mdx';

function blog() {
  console.log(blogPosts);
  return (
    <Layout>
      <Heading>Blog 📓</Heading>
      {blogPosts.map((frontMatter) => (
        <BlogPostCard
          key={frontMatter.title}
          title={frontMatter.title}
          summary={frontMatter.summary}
        />
      ))}
    </Layout>
  );
}

export default blog;
