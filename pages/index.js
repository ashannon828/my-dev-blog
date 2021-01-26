/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Heading, Text, Icon } from '@chakra-ui/react';
import { FaWix } from 'react-icons/fa';

import Layout from '../components/layouts/Layout';

import SectionComp from '../components/SectionComp'
import ExperienceCard from '../components/ExperienceCard'
import { frontMatter as blogPosts } from './blog/*.mdx';
import BlogPostCard from '../components/BlogPostCard';

import ProjectCard from '../components/ProjectCard';

import ExpatriantImg from '../public/static/images/project/expatriant.png';
import ThisBlog from '../public/static/images/project/thisBlog.png';

function index() {
  const sortedPosts = blogPosts.sort((a, b) => new Date(b.publishedOn) - new Date(a.publishedOn)).slice(0, 2)
  return (
    <Layout>
      <Heading as="h3" size="sm">
        Hey 👋
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

      <SectionComp title="Experience">
        <ExperienceCard company="Wix.com" jobTitle="UX Writer" empStartDate="February 2020" jobDescription="I write clear concise microcopy for Wix's Stores mobile app and their new Point of Sale product. I also manage the localization process ford 22 supported languages." />
        <ExperienceCard company="Expatriant.com" jobTitle="Co-Founder & Full-stack Dev" empStartDate="September 2018" jobDescription="I post about living and working abroad, cost of living and built a full stack job board app to help expats find meaningful work." />
        <ExperienceCard company="Cisco Systems" jobTitle="Business Analyst" empStartDate="July 2015" empEndDate="August 2018" jobDescription="I performed data mining and munging activities as well as maintained all Cisco defect data in an enterprise Hadoop data lake." />
      </SectionComp>

      <SectionComp title="Blog Posts">
        {sortedPosts.map((frontMatter) => (
          <BlogPostCard
            key={frontMatter.title}
            title={frontMatter.title}
            summary={frontMatter.summary}
            href={frontMatter.__resourcePath.replace('.mdx', '')}
          />
        ))}
      </SectionComp>

      <SectionComp title="Projects">
        <ProjectCard
          url="https://jobs.expatriant.com/"
          projectImg={ExpatriantImg}
          projectName="Expatriant Job Board"
          projectDesc="A full stack job board app focused on helping expats in Russia find meaningful work. Built with Firebase Firestore, Node, Express and React. Scaled to more than 1000 active monthly users."
        />
        <ProjectCard
          url="/"
          projectImg={ThisBlog}
          projectName="My Programming Blog (This Blog)"
          projectDesc="This blog is to document of my learnings, projects, exploration, fun...And everything in between. It's built with Next JS, MDX and hosted on Vercel."
        />
      </SectionComp>
    </Layout>
  );
}

export default index;