import React from "react";
import { Box, Container, Flex, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";
import Button2 from "./props/Button2";



const Hero = () => {
  return (
    <Box as="section" py={{ base: 10, md: 20 }}>
      <Container maxW={{base:"container.xl", '2xl':'full'}}  px={4}>
        <Flex direction={{ base: "column", md: "row" }} align="center"  spacing={{ md: 8 }} pr={{lg:14, '2xl':0}}>
          {/* Image Section */}
          <Box w="full" mb={{ base: 8, md: 0 }} maxW={{ md: "990px", lg:'65%' }}>
            <Image
              src="/hero.svg" // Directly use the path from the public folder
              alt="Hero SUV"
              width={600}
              height={400}
              className="w-full h-auto"
             
              // maxH={{ md: "475px",lg:'full', '2xl':'full' }}
            />
          </Box>

          {/* Text Section */}
          <Box textAlign={{ base: "center", md: "left" }} w="full" maxW={{base:"395px", lg:'45%','2xl':'30%'}} >
            <Heading as="h1" fontSize={{ base: "2xl", md: "4xl",lg:'5xl', '2xl':'5xl' }} fontWeight="bold" mb={4}>
              Unmatched Protection, Unbeatable Shine with Camio PPF
            </Heading>
            <Text mb={6} fontSize={{ base: "sm", md: "md" }}>
              Protect your vehicle with Camio's top-quality Paint Protection Film. Experience superior protection and lasting shine.
            </Text>
            
            <Button2>
              Explore Our Products
            </Button2>
            
           
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
