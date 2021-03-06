/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, Code, Heading, List, Link, Text } from '@chakra-ui/react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';

const CodeBlock = (props) => {
  const codeBlock = props.children.props.children;
  const language = props.children.props.className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      code={codeBlock}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            margin: '20px 0',
            padding: '20px',
            borderRadius: '15px',
            maxWidth: '700px',
            overflowX: 'scroll',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

const InlineCode = (props) => {
  return <Code colorScheme="purple" {...props} />;
};

const MDXComponents = {
  h1: (props) => <Heading as="h1" {...props} />,
  h2: (props) => <Heading as="h2" {...props} />,
  h3: (props) => <Heading as="h3" {...props} />,
  br: (props) => <Box as="br" {...props} />,
  a: (props) => (
    <Link
      fontWeight="bold"
      color="purple.600"
      _hover={{ color: 'purple.300', textDecoration: 'underline' }}
      {...props}
    />
  ),
  p: (props) => <Text p="15px 0" as="p" {...props} />,
  ul: (props) => <Box pl='30px' as="ul" {...props} />,
  ol: (props) => <Box pl='30px' as="ol" {...props} />,
  li: (props) => <Box as="li" {...props} />,
  inlineCode: (props) => <InlineCode {...props} />,
  pre: (props) => <CodeBlock {...props} />,
};

export default MDXComponents;
