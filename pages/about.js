import React from 'react';
import { Box, Heading, Flex, Image, Text } from '@chakra-ui/react';
import Layout from '../components/layout/Layout';
import picOfMe from '../public/me.jpeg';

function about() {
  return (
    <Layout>
      <Heading>About Me 👨‍💻</Heading>

      <Text mt="30px" mb="15px" as="p">
        Hey, I’m Andrew. I grew up in a small town in Maine and graduated from
        Florida Atlantic University with a degree in management information
        systems.
      </Text>
      <Text m="15px 0" as="p">
        I’m in the process of transitoning from a big data guy into a front end
        developer. My programming journey began the same way as, well, probably
        everyone else’s — with “Hello World”.
      </Text>
      <Text m="15px 0" as="p">
        I love being able to create anything I think is cool or interestng.
        While most projects that I create end up dying on my hard drive (I’m
        looking at you compound interest calculator), I’m proud to say I’ve
        launched a functioning job board that I’m constantly adding features to.
      </Text>
      <Text m="15px 0" as="p">
        I spend my free time tinkering with code, making music, cooking and
        exploring my new city, Kyiv, Ukraine.
      </Text>
      <Flex m="30px 0 15px 0" justifyContent="center">
        <Image align="center" mr="10px" borderRadius="full" src={picOfMe} />
      </Flex>
    </Layout>
  );
}

export default about;
