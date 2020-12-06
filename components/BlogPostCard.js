import React from 'react';
import { Flex, Heading, Link, Text } from '@chakra-ui/react';

function BlogPostCard() {
  return (
    <Flex mt="40px">
      <Link href="/">
        <Flex direction="column">
          <Heading size="md">This is a Blog Post Title</Heading>
          <Text p="15px 0" as="p">
            I am describing my blog post. Not quite sure what I should put here
            but it&apos;s good.
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}

export default BlogPostCard;
