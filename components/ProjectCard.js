import React from 'react';
import { Flex, Heading, Image, Link, Text } from '@chakra-ui/react';

function ProjectCard({ url, projectImg, projectName, projectDesc }) {
  return (
    <Flex mt="40px">
      <Link href={url} isExternal>
        <Flex
          p={{ base: '10px', md: '20px' }}
          border="1px solid #E2E8F0"
          borderRadius="15px"
          _hover={{ background: '#F7FAFC' }}
          alignItems="center"
        >
          <Image
            src={projectImg}
            alt="Expatriant project image"
            boxSize={{ base: '75px', md: '100px' }}
            objectFit="cover"
            border="1px solid #EDF2F7"
            borderRadius="15px"
          />
          <Flex direction="column" mx={{ base: '10px', md: '20px' }}>
            <Heading size="md">{projectName}</Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{projectDesc}</Text>
          </Flex>
        </Flex>
      </Link>
    </Flex>
  );
}

export default ProjectCard;
