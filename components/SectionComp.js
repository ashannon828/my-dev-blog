import React from 'react'
import { Box, Heading } from '@chakra-ui/react';

export default function SectionComp({ title, children }) {
    return (
        <Box>
            <Heading mt={{ base: '40px', md: '60px' }}>{title}:</Heading>
            {children}
        </Box>
    )
}
