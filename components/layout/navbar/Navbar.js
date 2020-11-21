import React from 'react';
import { Button, Flex, Link } from '@chakra-ui/react';
import MenuItem from './MenuItem';

function Navbar() {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      height={{ sm: '60px', md: '80px' }}
      as="nav"
    >
      <Button variant="link">
        <Link href="/">AS</Link>
      </Button>
      <Flex alignItems="center">
        <MenuItem href="/" text="Home" />
        <MenuItem href="/about" text="About" />
        <MenuItem href="/blog" text="Blog" />
        <MenuItem href="/portfolio" text="Portfolio" />
      </Flex>
    </Flex>
  );
}

export default Navbar;
