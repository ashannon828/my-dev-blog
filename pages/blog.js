/* eslint-disable import/no-unresolved */
import React from 'react';
import { Heading } from '@chakra-ui/react';
import Layout from '../components/layouts/Layout';

import BlogPostCard from '../components/BlogPostCard';

import { frontMatter as blogPosts } from './blog/*.mdx';

export const getStaticProps = async () => {
  const sortedPosts = await blogPosts.sort(
    (a, b) => new Date(b.publishedOn) - new Date(a.publishedOn)
  );
  return {
    props: { posts: sortedPosts },
  };
};

function blog({ posts }) {
  return (
    <Layout>
      <Heading>Blog 📓</Heading>
      {posts.map((frontMatter) => (
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
