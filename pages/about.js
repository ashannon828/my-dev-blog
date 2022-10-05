import React from 'react';
import { Heading, Flex, Image, Text } from '@chakra-ui/react';
import Layout from '../components/layouts/Layout';

function about() {
  return (
    <Layout>
      <Heading>About Me 👨‍💻</Heading>

      <Text mt="30px" mb="15px" as="p">
        Hey, I'm Andrew. I grew up in a small town in Maine and graduated from
        Florida Atlantic University with a degree in management information
        systems.
      </Text>
      <Text m="15px 0" as="p">
        I enjoy creating, so I thought I wanted to be a front-end developer. I
        embarked on a multiyear journey to teach myself a modern front-end
        framework so that I could build websites like this spiffy blog you're
        reading now.
      </Text>
      <Text m="15px 0" as="p">
        The funny part is I found UX writing, which showed me I didn't need to
        be a dev to use my creativity and contribute to a product team. It only
        took me 18 months working as a UX writer at Wix and working 6 months as
        a front-end developer to realize this.
      </Text>
      <Text m="15px 0" as="p">
        In my free time, I enjoy producing music, tinkering with code, cooking,
        reading about content design, and exploring my new city, Houston, Texas.
      </Text>
      <Flex m="30px 0 15px 0" justifyContent="center">
        <Image
          align="center"
          mr="10px"
          borderRadius="full"
          src="/static/images/author/me.jpeg"
        />
      </Flex>
    </Layout>
  );
}

export default about;
