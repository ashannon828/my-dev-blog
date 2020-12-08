const withImages = require('next-images');
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
// });

const withMdxEnhanced = require('next-mdx-enhanced');

module.exports = withMdxEnhanced({
  layoutPath: 'components/layouts',
  defaultLayout: false,
  fileExtensions: ['mdx'],
  remarkPlugins: [],
  rehypePlugins: [],
  usesSrc: false,
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
  reExportDataFetching: false,
})(withImages());
