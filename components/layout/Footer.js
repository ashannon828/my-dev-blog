import React from 'react';
import { Box, Flex, Link, Icon } from '@chakra-ui/react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <Box w="100%" h="150px" mt="40px" bg="gray.100">
      <Flex mt="20px" ali justifyContent="center">
        <Link
          _hover={{
            color: 'purple.300',
          }}
          color="purple.600"
          m="10px"
          href="https://github.com/ashannon828"
        >
          <Icon w={8} h={8} as={FaGithub} />
        </Link>
        <Link
          _hover={{
            color: 'purple.300',
          }}
          color="purple.600"
          m="10px"
          href="https://www.linkedin.com/in/andrew-shannon-23117856/"
        >
          <Icon w={8} h={8} as={FaLinkedin} />
        </Link>
      </Flex>
    </Box>
  );
}

export default Footer;
