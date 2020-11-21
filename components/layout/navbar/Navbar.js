import React from 'react';
import { Flex, IconButton, Link, Center } from '@chakra-ui/react';
import { GoHome } from 'react-icons/go';

import MenuItem from './MenuItem';

function Navbar() {
  return (
    <Flex
      justifyContent="center"
      width="100%"
      height={{ base: '60px', md: '100px' }}
      as="nav"
    >
      <Flex
        pl={{ base: '10px', md: 0 }}
        justifyContent="space-between"
        width="800px"
      >
        <Center>
          <Link href="/">
            <IconButton fontSize="20px" aria-label="Home" icon={<GoHome />} />
          </Link>
        </Center>
        <Flex alignItems="center">
          <MenuItem href="/about" text="About" />
          <MenuItem href="/blog" text="Blog" />
          <MenuItem href="/portfolio" text="Portfolio" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Navbar;
