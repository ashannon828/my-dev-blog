/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, Heading, Link, Text } from '@chakra-ui/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';

const SyntaxHighlighter = (props) => {
  const codeBlock = props.children.props.children;
  const language = props.children.props.className.replace(/language-/, '');
  return (
    <Highlight
      pt={10}
      {...defaultProps}
      code={codeBlock}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre padding="10px" className={className} style={style}>
            {tokens.map((line, i) => (
              <Box key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </Box>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};

const MDXComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  br: (props) => <Box {...props} />,
  a: (props) => (
    <Link
      fontWeight="bold"
      color="purple.600"
      _hover={{ color: 'purple.300', textDecoration: 'underline' }}
      {...props}
    />
  ),
  p: (props) => <Text as="p" {...props} />,
  ul: (props) => <Box as="ul" {...props} />,
  li: (props) => <Box as="li" {...props} />,
  pre: (props) => <SyntaxHighlighter {...props} />,
};

export default MDXComponents;
