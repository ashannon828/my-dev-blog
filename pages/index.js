/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Heading, Text, Icon } from '@chakra-ui/react';
import { FaWix } from 'react-icons/fa';

import Layout from '../components/layout/Layout';
import BlogPostCard from '../components/BlogPostCard';
import ProjectCard from '../components/ProjectCard';

import ExpatriantImg from '../public/projectImages/expatriant.png';

function index() {
  return (
    <Layout>
      <Heading as="h3" size="sm">
        Hey there 👋
      </Heading>
      <Heading as="h1" size="2xl">
        I&apos;m Andrew Shannon
      </Heading>
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
      <ProjectCard
        url="https://jobs.expatriant.com/"
        projectImg={ExpatriantImg}
        projectName="Expatriant Job Board"
        projectDesc="A job board focused on helping expats in Russia find meaningful work. Built with Firebase Firestore, Node, Express and React. Scaled to more than 1000 active monthly users."
      />
    </Layout>
  );
}

export default index;
