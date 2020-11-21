import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';

function about() {
  return (
    <Layout>
      <Heading>About Me 👨‍💻</Heading>
      <Text pt="10px">
        I’m in the process of transitoning from a big data guy into a front end
        developer. My programming journey began the same way as, well, probably
        everyone else’s — with “Hello World”. I love being able to create
        something, anything I think is cool or interestng. While most projects
        that I create end up dying on my hard drive (I’m looking at you compound
        interest calculator), I’m proud to say I’ve launched a functioning job
        board that I’m constantly adding features to.
      </Text>
    </Layout>
  );
}

export default about;
