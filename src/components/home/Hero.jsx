import React from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Button2 from "../props/Button2";
import Link from "next/link";
import car from "@/assets/herocar.png"




const Hero = () => {
  return (
    <Box as="section" py={{ base: 10, md: 20 }} maxWidth={{'2xl':'1500px'}} mx={{'2xl':'auto'}}>
      <Container maxW={{ base: "container.xl", '2xl': 'full' }} px={4}>
        <Flex direction={{ base: "column", md: "row" }} align="center" spacing={{ md: 8 }} gap={4} >
          {/* Image Section */}
          <Box w="full" mb={{ base: 8, md: 0 }} maxW={{ md: "990px", lg: '50%' }} p={4}>
            <Image
              src={car} // Directly use the path from the public folder
              alt="Hero SUV"
              width={600}
              height={400}
              className="w-full h-auto"

            // maxH={{ md: "475px",lg:'full', '2xl':'full' }}
            />
          </Box>

          {/* Text Section */}
          <Box textAlign={{ base: "center", md: "left" }} w="full" maxW={{ base: "395px", lg: '50%'}}  >
            <Heading as="h1" fontSize={{ base: "3xl", md: "4xl", lg: '5xl', '2xl': '5xl' }} fontWeight="bold" mb={4}>
              Unmatched Protection, Unbeatable Shine with Camio PPF
            </Heading>
            <Text mb={6} fontSize={{ base: "md", md: "md" }}>
              Protect your vehicle with Camio&apos;s top-quality Paint Protection Film. Experience superior protection and lasting shine.
            </Text>

            <Link href={'/products'} >
              <Box className="flex justify-center md:block">
              <Button2 >
                Explore Our Products
              </Button2>
                </Box></Link>


          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
