/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Heading, Text, Icon } from '@chakra-ui/react';
import { FaWix } from 'react-icons/fa';

import Layout from '../components/layout/Layout';
import BlogPostCard from '../components/BlogPostCard';
import ProjectCard from '../components/ProjectCard';

import ExpatriantImg from '../public/projectImages/expatriant.png';
import ThisBlog from '../public/projectImages/thisBlog.png';

function index() {
  return (
    <Layout>
      <Heading as="h3" size="sm">
        Hey there 👋
      </Heading>
      <Heading as="h1" size="2xl">
        I&apos;m Andrew Shannon
      </Heading>
      <Text mt="30px" mb="15px" as="p">
        I&apos;m in the midst of transitioning from being a big data guy to
        being a front end guy. I currently work as a UX writer at{' '}
        <Icon as={FaWix} w={7} h={7} />. This is my dev blog that I&apos;ll use
        to explore things I find interesting.
      </Text>
      <Heading mt={{ base: '40px', md: '60px' }}>Recent Posts:</Heading>
      <BlogPostCard />
      <BlogPostCard />
      <BlogPostCard />
      <Heading mt={{ base: '60px', md: '60px' }}>Recent Projects:</Heading>
      <ProjectCard
        url="https://jobs.expatriant.com/"
        projectImg={ExpatriantImg}
        projectName="Expatriant Job Board"
        projectDesc="A full stack job board app focused on helping expats in Russia find meaningful work. Built with Firebase Firestore, Node, Express and React. Scaled to more than 1000 active monthly users."
      />
      <ProjectCard
        url="/"
        projectImg={ThisBlog}
        projectName="My Programming Blog (This Blog 😁)"
        projectDesc="This blog is to document of my learnings, projects, exploration, fun...And everything in between. It's built with Next JS, MDX and hosted on Vercel."
      />
    </Layout>
  );
}

export default index;
