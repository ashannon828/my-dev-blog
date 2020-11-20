import React from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Navbar from './navbar/Navbar';

function Layout(props) {
  return (
    <Stack alignItems="center" mx="10px" as="main">
      <Navbar />
      <Box width="700px">
        <Flex mt="10px" bg="tomato" width="100%" direction="column">
          {props.children}
        </Flex>
      </Box>
    </Stack>
  );
}

export default Layout;
