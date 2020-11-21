import React from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Navbar from './navbar/Navbar';

function Layout(props) {
  return (
    <Stack width="100%" as="main">
      <Flex px="20px" alignItems="center" direction="column">
        <Navbar />
        <Flex maxW="700px" direction="column">
          {props.children}
        </Flex>
      </Flex>
    </Stack>
  );
}

export default Layout;
