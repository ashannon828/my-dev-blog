import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
// import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';

// SyntaxHighlighter.registerLanguage('jsx', jsx);

const Syntax = ({ children }) => {
  return <SyntaxHighlighter language="jsx">{children}</SyntaxHighlighter>;
};

export default Syntax;
