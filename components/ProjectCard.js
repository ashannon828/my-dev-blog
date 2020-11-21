import React from 'react';
import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import ExpatriantImg from '../public/projectImages/expatriant.png';

function ProjectCard() {
  return (
    <Flex mt="40px">
      <Link href="https://jobs.expatriant.com/" isExternal>
        <Flex
          p="20px"
          border="1px solid #E2E8F0"
          borderRadius="15px"
          _hover={{ background: '#F7FAFC' }}
        >
          <Image
            src={ExpatriantImg}
            alt="Expatriant project image"
            boxSize="100px"
            objectFit="cover"
            border="1px solid #EDF2F7"
            borderRadius="15px"
          />
          <Flex direction="column" mx="20px">
            <Heading>Expatriant Job Board</Heading>
            <Text>
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
