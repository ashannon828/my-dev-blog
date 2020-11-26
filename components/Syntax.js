import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Syntax = ({ children }) => {
  return <SyntaxHighlighter language="jsx">{children}</SyntaxHighlighter>;
};

export default Syntax;
