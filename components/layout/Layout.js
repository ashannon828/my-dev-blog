import React from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Navbar from './navbar/Navbar';

function Layout(props) {
  return (
    <Stack width="100%" as="main">
      <Flex alignItems="center" direction="column">
        <Navbar />
        <Flex px="20px" maxW="700px" direction="column">
          {props.children}
        </Flex>
      </Flex>
    </Stack>
  );
}

export default Layout;
