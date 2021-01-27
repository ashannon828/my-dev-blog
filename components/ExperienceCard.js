import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function ExperienceCard({ company, empStartDate, empEndDate = "Present", jobTitle, jobDescription }) {

    return (
        <Box pt='1.2rem' bg='white'>
            <Heading as='h5' size='md'>{company}</Heading>
            <Flex flexDir='row' >
                <Text fontWeight="bold">{jobTitle}</Text>
                <Text ml='1.6rem'>{empStartDate} - {empEndDate}</Text>
            </Flex>
            <Text>{jobDescription}</Text>
        </Box>
    )
}
