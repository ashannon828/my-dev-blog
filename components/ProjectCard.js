import React from 'react';
import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import ExpatriantImg from '../public/projectImages/expatriant.png';

function ProjectCard() {
  return (
    <Flex mt="40px">
      <Link href="https://jobs.expatriant.com/" isExternal>
        <Flex
          p={{ base: '10px', md: '20px' }}
          border="1px solid #E2E8F0"
          borderRadius="15px"
          _hover={{ background: '#F7FAFC' }}
          alignItems="center"
        >
          <Image
            src={ExpatriantImg}
            alt="Expatriant project image"
            boxSize={{ base: '75px', md: '100px' }}
            objectFit="cover"
            border="1px solid #EDF2F7"
            borderRadius="15px"
          />
          <Flex direction="column" mx={{ base: '10px', md: '20px' }}>
            <Heading size="md">Expatriant Job Board</Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>
              A job board focused on helping expats in Russia find meaningful
              work. Built using React and Node.
            </Text>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}

export default ProjectCard;
