import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Navbar from './navbar/Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <Box minH="100px" as="main">
      <NextSeo
        title="Andrew Shannon - Frontend Dev"
        description="This blog has things I find interesting on it."
      />
      <Flex
        alignItems={{ base: 'flex-start', md: 'center' }}
        direction="column"
      >
        <Navbar />
        <Flex width={{ base: '100%', md: '700px' }}>
          <Flex
            mt={{ base: '10px', md: '20px' }}
            px={{ base: '20px', md: 0 }}
            direction="column"
          >
            {children}
          </Flex>
        </Flex>
        <Footer />
      </Flex>
    </Box>
  );
}

export default Layout;
