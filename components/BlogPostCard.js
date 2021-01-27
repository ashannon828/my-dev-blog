import React from 'react';
import { Flex, Heading, Link, Text } from '@chakra-ui/react';

function BlogPostCard({ title, summary, href }) {
  return (
    <Flex mt="2rem">
      <Link href={href}>
        <Flex direction="column">
          <Heading size="md">{title}</Heading>
          <Text p="1rem 0" as="p">
            {summary}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}

export default BlogPostCard;
