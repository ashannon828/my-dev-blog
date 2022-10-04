import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import Layout from '../components/layouts/Layout';

import ProjectCard from '../components/ProjectCard';


import ContentGuidelines from '../public/static/images/project/contentGuidelines.png';
import FullContentGuidelines from '../public/static/images/project/fullContentGuidelines.png';
import SpotOnWallet from '../public/static/images/project/spotOnWallet.png';


function portfolio() {
  return (
    <Layout>
      <Box>
        <Heading as="h1">Projects ⚒️</Heading>
          <ProjectCard
            url="/my-projects/first-writer-at-spoton"
            projectImg={ContentGuidelines}
            projectName="First UX writer at SpotOn"
            projectDesc="This is a case study on my experience working as the first UX writer on a large design team. It includes the thigns I've tried that worked to scale the content process."
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
          <ProjectCard
            url="/my-projects/spoton-content-guidelines"
            projectImg={FullContentGuidelines}
            projectName="An example UX writing deliverable"
            projectDesc="SpotOn was in a unique situation where 3/4ths of the designers were not native English speakers. So I created a simplified version of content guidelines and style guide they could easily use as a reference."
          />
      </Box>
    </Layout>
  );
}

export default portfolio;
