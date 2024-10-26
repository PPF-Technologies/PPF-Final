import React from "react";
import { Box, Container, Flex, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";
import Button2 from "./props/Button2";
import WButton from "./props/WButton";



const Hero = () => {
  return (
    <Box as="section" py={{ base: 10, md: 20 }}>
      <Container maxW={{base:"container.xl", '2xl':'full'}}  px={4}>
        <Flex direction={{ base: "column", md: "row" }} align="center"  spacing={{ md: 8 }} pr={{lg:14, '2xl':0}}>
          {/* Image Section */}
          <Box w="full" mb={{ base: 8, md: 0 }} maxW={{ md: "990px" }}>
            <Image
              src="/hero.svg" // Directly use the path from the public folder
              alt="Hero SUV"
              width={500}
              height={300}
              className="w-full h-auto"
              objectFit="cover"
              maxH={{ md: "475px", '2xl':'full' }}
            />
          </Box>

          {/* Text Section */}
          <Box textAlign={{ base: "center", md: "left" }} w="full" maxW={{base:"395px", '2xl':'30%'}} >
            <Heading as="h1" fontSize={{ base: "2xl", md: "4xl", '2xl':'5xl' }} fontWeight="bold" mb={4}>
              Unmatched Protection, Unbeatable Shine with Camio PPF
            </Heading>
            <Text mb={6} fontSize={{ base: "sm", md: "md" }}>
              Protect your vehicle with Camio's top-quality Paint Protection Film. Experience superior protection and lasting shine.
            </Text>
            <Flex alignItems={'center'} justifyContent={'center'} gap={2}> 
            <Button2>
              Explore Our Products
            </Button2>
            <WButton>
              +91 728377971
            </WButton>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
