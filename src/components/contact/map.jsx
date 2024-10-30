import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

const Map = () => {
  return (
    <Flex
      justify="center"
      mb={10}
      gap="0px"
    >
      <Box 
        w="1140px"
        h="514.58px"
        maxW="100%"
        borderRadius="12.67px 12.67px 12.67px 12.67px"
        overflow="hidden" 
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13986.231223378098!2d77.13563755!3d28.792446750000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d008593e3cf77%3A0xe5e52d4421b456cf!2sSai%20mandir%20alipur!5e0!3m2!1sen!2sin!4v1730222106100!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>
    </Flex>
  );
};

export default Map;
