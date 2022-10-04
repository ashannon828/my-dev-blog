import React from 'react';
import { Box, Flex, Link, IconButton, Text } from '@chakra-ui/react';

import { FiGithub, FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <Box
      position='absolute'
      bottom='-2rem'
      w="100%"
      align="center"
      bg="gray.100"
    >
      <Flex mt="2rem" justifyContent="center">
        <Link
          _hover={{
            color: 'purple.300',
          }}
          m="0 30px"
          href="https://github.com/ashannon828"
          isExternal={true}
        >
          <IconButton
            variant="outline"
            colorScheme="purple"
            aria-label="My Github"
            size="lg"
            icon={<FiGithub />}
          />
        </Link>

        <Link
          _hover={{
            color: 'purple.300',
          }}
          m="0 30px"
          href="https://www.linkedin.com/in/andrew-shannon-23117856/"
          isExternal={true}
        >
          <IconButton
            variant="outline"
            colorScheme="purple"
            aria-label="My LinkedIn"
            size="lg"
            icon={<FiLinkedin />}
          />
        </Link>
      </Flex>
      <Text m='2rem 0'>Built with Next.js & Chakra UI and hosted on Vercel</Text>
    </Box>
  );
}

export default Footer;


// 