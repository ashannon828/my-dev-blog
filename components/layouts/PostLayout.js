/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';
import Layout from './Layout';

function PostLayout({ children, frontMatter }) {
  const { authoredBy, title, publishedOn, authImg, summary } = frontMatter;
  return (
    <Layout>
      <Heading as="h1" size="2xl">
        {title}
      </Heading>
      <Flex m="20px 0">
        <Image mr="10px" borderRadius="full" boxSize="24px" src={authImg} />
        <Text>
          {authoredBy} / {publishedOn}
        </Text>
      </Flex>
      <Box as="article">{children}</Box>
    </Layout>
  );
}

export default PostLayout;
