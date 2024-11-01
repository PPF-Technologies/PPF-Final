import React from 'react';
import { Flex, Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';

// Define the values in an array of objects
const valuesData = [
  {
    title: 'Quality',
    description: 'We are committed to offering only the highest quality products, rigorously tested to ensure they meet our exacting standards.',
  },
  {
    title: 'Innovation',
    description: 'Innovation drives us. We continually invest in research and development to bring you the latest in paint protection technology.',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Your satisfaction is our priority. We work closely with our clients to provide exceptional service and products tailored to their needs.',
  },
  {
    title: 'Integrity',
    description: 'We believe in transparency and honesty in all our dealings, ensuring you can trust CAMIO PPF to protect your investment.',
  },
];

const Values = () => {
  return (
    <Flex direction="column" align="center" p={8}>
      <Heading mb={6} fontSize="24px" fontWeight="700" lineHeight={"37px"}>
        Our Values
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 4 }} w="100%" spacing={6}>
        {valuesData.map((value, index) => (
          <Box
            key={index}
            textAlign="center"
            px={4}
            py={6}
            borderRight={{ base: "none", lg: index < valuesData.length - 1 ? "3px solid" : "none" }} 
            borderBottom={{ base: "3px solid", lg: "none" }} 
            borderImage="linear-gradient(270deg, rgba(76, 111, 255, 0) 0%, #4C6FFF 50%, rgba(76, 111, 255, 0) 100%) 1"
          >
            <Heading fontSize="18px" fontWeight="700" lineHeight={"21.78px"} mb={2}>
              {value.title}
            </Heading>
            <Text fontSize="18px" fontWeight="400" lineHeight={"21.78px"}>
              {value.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

export default Values;
