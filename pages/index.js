import React from 'react';
import { Stack, Flex, Heading, Text } from '@chakra-ui/react';

function index() {
  return (
    <Stack align="center" as="main">
      <Flex mx={5} maxWidth="800px" direction="column">
        <Heading>Hey, I&apos;m Andrew Shannon</Heading>
        <Text>
          I&apos;m in the midst of transitioning from being a big data guy to
          being a front end guy. I currently work at Wix as a UX writer.
        </Text>
      </Flex>
    </Stack>
  );
}

export default index;
