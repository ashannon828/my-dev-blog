import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import Navbar from '../navbar/Navbar';
import Footer from '../Footer';

function Layout({ children }) {
  return (
    <Box paddingBottom="10rem" minH="100vh" as="main">
      <NextSeo
        title="Andrew Shannon - UX Writer"
        description="This site documents my work as a UX writer & content strategist."
      />
      <Flex
        alignItems={{ base: 'flex-start', md: 'center' }}
        direction="column"
      >
        <Navbar />
        <Box width={{ base: '100%', md: '700px' }}>
          <Flex
            mt='1rem'
            px={{ base: '1rem', md: 0 }}
            direction="column"
          >
            {children}
          </Flex>
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
}

export default Layout;
