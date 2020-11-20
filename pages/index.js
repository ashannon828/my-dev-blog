/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Stack, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { SiWix } from 'react-icons/si';

function index() {
  return (
    <Stack align="center" as="main">
      <Flex mx={5} maxWidth="700px" direction="column">
        <Heading>Hey, I&apos;m Andrew Shannon</Heading>
        <Text>
          I&apos;m in the midst of transitioning from being a big data guy to
          being a front end guy. I currently work at{' '}
          <Icon as={SiWix} w={7} h={7} /> as a UX writer.
        </Text>
      </Flex>
    </Stack>
  );
}

export default index;
