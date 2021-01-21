import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

export default function ExperienceCard({ company, empStartDate, empEndDate = "Present", jobTitle, jobDescription }) {

    return (
        <Box pt='20px'>
            <Heading as='h5' size='md'>{company}</Heading>
            <Flex flexDir='row' >
                <Text fontWeight="bold">{jobTitle}</Text>
                <Text pl='15px'>{empStartDate} - {empEndDate}</Text>
            </Flex>
            <Text>{jobDescription}</Text>
        </Box>
    )
}
