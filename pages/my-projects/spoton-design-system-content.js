import React from 'react';
import { Box, Heading, Image, Link, Text } from '@chakra-ui/react';
import Layout from '../../components/layouts/Layout';

function caseStudy() {
  return (
    <Layout>
      <Heading>Design system component guidelines</Heading>
      <Box marginTop={'20px'}>
        <Text>
          This project is to share the component content guidelines that I've
          created for SpotOn's design system. It is also available in{' '}
          <Link
            isExternal
            color="purple.500"
            href="https://drive.google.com/file/d/1CU0pa5OUF8rh9TfArVo8gkewRox7TNzD/view?usp=sharing"
          >
            PDF form
          </Link>
          .
        </Text>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1665663792/Portfolio%20site/Design%20system%20content/component_guidelines-compressed_page-0001_fefw81.jpg"
          alt="Content guidelines overview."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1665663792/Portfolio%20site/Design%20system%20content/component_guidelines-compressed_page-0002_fjktre.jpg"
          alt="Content guidelines inclusive guidelines."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1665663792/Portfolio%20site/Design%20system%20content/component_guidelines-compressed_page-0003_fungpz.jpg"
          alt="Content guidelines capitalization guidelines."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1665663795/Portfolio%20site/Design%20system%20content/component_guidelines-compressed_page-0004_z8j2rt.jpg"
          alt="Content guidelines punctuation guidelines."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1665663792/Portfolio%20site/Design%20system%20content/component_guidelines-compressed_page-0005_axh9ru.jpg"
          alt="Content guidelines capitalization numeric formatting."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1665663792/Portfolio%20site/Design%20system%20content/component_guidelines-compressed_page-0006_hxz3yr.jpg"
          alt="Content guidelines truncating content."
        ></Image>
      </Box>
    </Layout>
  );
}

export default caseStudy;
