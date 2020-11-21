import React from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import Navbar from './navbar/Navbar';

function Layout(props) {
  return (
    <Stack width="100%" as="main">
      <Flex
        alignItems={{ base: 'flex-start', md: 'center' }}
        direction="column"
      >
        <Navbar />
        <Flex width={{ base: '100%', md: '700px' }}>
          <Flex
            paddingTop={{ base: '10px', md: '20px' }}
            px={{ base: '20px', md: 0 }}
            direction="column"
          >
            {props.children}
          </Flex>
        </Flex>
      </Flex>
    </Stack>
  );
}

export default Layout;
