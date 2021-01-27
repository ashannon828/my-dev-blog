import React from 'react';
import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';

function ProjectCard({ url, projectImg, projectName, projectDesc }) {
  return (
    <Box mt="2rem">
      <Link href={url} isExternal>
        <Flex
          p={{ base: '1rem', md: '1.2rem' }}
          border="1px solid #E2E8F0"
          borderRadius="15px"
          _hover={{ background: '#F7FAFC' }}
          alignItems="center"
        >
          <Image
            src={projectImg}
            alt="Expatriant project image"
            boxSize={{ base: '4rem', md: '6rem' }}
            objectFit="cover"
            border="1px solid #EDF2F7"
            borderRadius="15px"
          />
          <Flex direction="column" mx={{ base: '1rem', md: '1.2rem' }}>
            <Heading size="md">{projectName}</Heading>
            <Text fontSize={{ base: 'sm', md: 'md' }}>{projectDesc}</Text>
          </Flex>
        </Flex>
      </Link>
    </Box>
  );
}

export default ProjectCard;
