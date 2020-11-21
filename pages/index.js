/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Heading, Text, Icon } from '@chakra-ui/react';
import { SiWix } from 'react-icons/si';

import Layout from '../components/layout/Layout';

function index() {
  return (
    <Layout>
      <Heading>Hi, I&apos;m Andrew Shannon 👋</Heading>
      <Text pt="10px">
        I&apos;m in the midst of transitioning from being a big data guy to
        being a front end guy. I currently work as a UX writer at{' '}
        <Icon as={SiWix} w={7} h={7} />. This is my dev blog that I&apos;ll use
        to explore things I find interesting.
      </Text>
    </Layout>
  );
}

export default index;
