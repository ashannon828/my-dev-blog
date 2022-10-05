import React from 'react';
import { Box, Heading, Image, Text } from '@chakra-ui/react';
import Layout from '../../components/layouts/Layout';

function caseStudy() {
  return (
    <Layout>
      <Heading>SpotOn content guidelines & style guide</Heading>
      <Box marginTop={'20px'}>
        <Text>
          This project is to share the content guidelines I've created for
          SpotOn with those unable to access a google drive link.
        </Text>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1664974131/Portfolio%20site/Content%20Guidelines/SpotOn_Content_Guidelines_page-0001_bmwxkb.jpg"
          alt="Content guidelines overview."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1664974130/Portfolio%20site/Content%20Guidelines/SpotOn_Content_Guidelines_page-0002_dvjl5l.jpg"
          alt="Content guidelines inclusive guidelines."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1664974130/Portfolio%20site/Content%20Guidelines/SpotOn_Content_Guidelines_page-0003_vghpld.jpg"
          alt="Content guidelines capitalization guidelines."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1664974130/Portfolio%20site/Content%20Guidelines/SpotOn_Content_Guidelines_page-0004_bykuvx.jpg"
          alt="Content guidelines punctuation guidelines."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1664974130/Portfolio%20site/Content%20Guidelines/SpotOn_Content_Guidelines_page-0005_aurclu.jpg"
          alt="Content guidelines capitalization numeric formatting."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1664974131/Portfolio%20site/Content%20Guidelines/SpotOn_Content_Guidelines_page-0006_pqtpxs.jpg"
          alt="Content guidelines truncating content."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1664974130/Portfolio%20site/Content%20Guidelines/SpotOn_Content_Guidelines_page-0007_hnpf3g.jpg"
          alt="Content guidelines avoid jargon."
        ></Image>
      </Box>
      <Box marginTop={'40px'}>
        <Image
          border="1px solid #E2E8F0"
          borderRadius="15px"
          src="https://res.cloudinary.com/dwhy1auam/image/upload/v1664974130/Portfolio%20site/Content%20Guidelines/SpotOn_Content_Guidelines_page-0008_pjccvi.jpg"
          alt="Content guidelines action label guidelines."
        ></Image>
      </Box>
    </Layout>
  );
}

export default caseStudy;
