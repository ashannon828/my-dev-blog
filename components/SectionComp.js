import React from 'react'
import { Box, Heading } from '@chakra-ui/react';

export default function SectionComp({ title, children }) {
    return (
        <Box mt={{ base: '40px', md: '60px' }}>
            <Heading >{title}:</Heading>
            {children}
        </Box>
    )
}
