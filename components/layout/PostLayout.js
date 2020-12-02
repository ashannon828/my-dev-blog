/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import { Heading, Text, Flex } from '@chakra-ui/react';
import Layout from './Layout';

function PostLayout({ meta, children }) {
  const { title, author, date } = meta;
  return (
    <Layout>
      <Heading>{title}</Heading>
      <Text>By {author}</Text>
      <Text>Posted on {date}</Text>

      {children}
    </Layout>
  );
}

export default PostLayout;
