/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';

import Layout from '../components/layouts/Layout';

import SectionComp from '../components/SectionComp';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';

import ContentGuidelines from '../public/static/images/project/contentGuidelines.png';
import FullContentGuidelines from '../public/static/images/project/fullContentGuidelines.png';
import SpotOnWallet from '../public/static/images/project/spotOnWallet.png';

function index() {
  return (
    <Layout>
      <Box>
        <Heading as="h3" size="sm">
          Hey 👋
        </Heading>
        <Heading as="h1" size="2xl">
          I&apos;m Andrew Shannon
        </Heading>
        <Text mt="1.4rem" mb="1rem" as="p">
          My 10-second elevator pitch is that I use words and data to guide
          users where they need to be in digital and physical environments.
          Right now, I'm the one and only content strategist & UX writer at
          SpotOn, where I promote content <Text as="b">IS</Text> design to a
          team of 20+ designers and write for high-priority products.
        </Text>

        <SectionComp title="Experience">
          <ExperienceCard
            company="SpotOn"
            jobTitle="Content Strategist / UX Writer"
            empStartDate="September 2021"
            jobDescription="As the only UX writer with a team of 20+ designers, I create content guidelines, promote content IS design, and write content for high-priority products."
          />
          <ExperienceCard
            company="Wix.com"
            jobTitle="UX Writer"
            empStartDate="February 2020"
            empEndDate="September 2021"
            jobDescription="I wrote clear and concise microcopy for Wix's Stores mobile app and their new Point of Sale product. I also manage the localization process for 22 supported languages."
          />
          <ExperienceCard
            company="Expatriant.com"
            jobTitle="Co-Founder & Full-stack Dev"
            empStartDate="September 2018"
            jobDescription="I post about living and working abroad, cost of living and built a full stack job board app to help expats find meaningful work."
          />
          <ExperienceCard
            company="Cisco Systems"
            jobTitle="Business Analyst"
            empStartDate="July 2015"
            empEndDate="August 2018"
            jobDescription="I performed data mining and munging activities and maintained all Cisco defect data in an enterprise Hadoop data lake."
          />
          <Box m="1rem" align="center">
            <Link
              isExternal
              href="https://docs.google.com/document/d/1XcWx4yNA4Mw6IE8NNwt5XC_ei0SngQiRSSem58ZqGp0/edit?usp=sharing"
            >
              <Button colorScheme="purple">View Resume</Button>
            </Link>
          </Box>
        </SectionComp>

        <SectionComp title="Recent Projects">
          <ProjectCard
            url="/my-projects/first-writer-at-spoton"
            projectImg={ContentGuidelines}
            projectName="First UX writer at SpotOn"
            projectDesc="This is a case study of my experience working as the first UX writer on a large design team. It includes the things I've tried that worked to scale the content process."
          />
          <ProjectCard
            url="/my-projects/case-study-spoton-wallet"
            projectImg={SpotOnWallet}
            projectName="SpotOn Wallet"
            projectDesc="As a strategically important product for SpotOn, I was integrated into the product team from inception until beta release. I wrote all of the content in the app and used the team's feedback to iterate quickly."
          />
          <ProjectCard
            url="/my-projects/spoton-content-guidelines"
            projectImg={FullContentGuidelines}
            projectName="SpotOn content guidelines & style guide"
            projectDesc="SpotOn was in a unique situation where 3/4ths of the designers were not native English speakers. So I created a simplified version of content guidelines and style guide they could easily use as a reference."
          />
        </SectionComp>
      </Box>
    </Layout>
  );
}

export default index;
