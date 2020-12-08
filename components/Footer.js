import React from 'react';
import { Box, Flex, Link, Icon, IconButton } from '@chakra-ui/react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { FiGithub, FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <Box
      position="absolute"
      bottom={0}
      w="100%"
      h="150px"
      mt="40px"
      bg="gray.100"
    >
      <Flex mt="40px" ali justifyContent="center">
        <Link
          _hover={{
            color: 'purple.300',
          }}
          m="0 30px"
          href="https://github.com/ashannon828"
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
    </Box>
  );
}

export default Footer;
