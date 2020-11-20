import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import MenuItem from './MenuItem';

function Navbar() {
  return (
    <Flex
      bg="tomato"
      height="60px"
      width="100%"
      as="nav"
      justifyItems="flex-end"
    >
      <Box bg="white" maxW="700px">
        <MenuItem href="/" text="Home" />
        <MenuItem href="/about" text="About" />
        <MenuItem href="/blog" text="Blog" />
      </Box>
    </Flex>
  );
}

export default Navbar;
