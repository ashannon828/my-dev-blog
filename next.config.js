const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withImages();
module.exports = withMDX({
  pageExtensions: ['js', 'mdx'],
});
