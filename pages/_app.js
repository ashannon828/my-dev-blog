/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
