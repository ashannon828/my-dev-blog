/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Heading, Text, Icon } from '@chakra-ui/react';
import { FaWix } from 'react-icons/fa';

import Layout from '../components/layout/Layout';
import BlogPostCard from '../components/BlogPostCard';
import ProjectCard from '../components/ProjectCard';

function index() {
  return (
    <Layout>
      <Heading>Hi, I&apos;m Andrew Shannon 👋</Heading>
      <Text pt="10px">
        I&apos;m in the midst of transitioning from being a big data guy to
        being a front end guy. I currently work as a UX writer at{' '}
        <Icon as={FaWix} w={7} h={7} />. This is my dev blog that I&apos;ll use
        to explore things I find interesting.
      </Text>
      <Heading mt={{ base: '60px', md: '80px' }}>Recent Posts:</Heading>
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
      <Heading mt={{ base: '60px', md: '80px' }}>Recent Projects:</Heading>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </Layout>
  );
}

export default index;
