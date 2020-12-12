import React from 'react';
import { Flex, Heading, Link, Text } from '@chakra-ui/react';

function BlogPostCard({ title, summary }) {
  return (
    <Flex mt="40px">
      <Link href="/">
        <Flex direction="column">
          <Heading size="md">{title}</Heading>
          <Text p="15px 0" as="p">
            {summary}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}

export default BlogPostCard;
