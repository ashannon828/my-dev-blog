/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import '../styles/globals.css';
import React, { Component } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
