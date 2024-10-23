"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
  Card,
  CardHeader,
  CardBody,
} from "@chakra-ui/react";
import topPicks1 from "../assets/topPicks1.png";
import topPicks2 from "../assets/topPicks2.png";
import topPicks3 from "../assets/topPicks3.png";
import topPicks4 from "../assets/topPicks4.png";
import topPicks5 from "../assets/topPicks5.png";
import Image from "next/image";


const PremiumProtection = () => {
  return (
    <Box py={12} m={6}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box>
            <Button
              colorScheme="white"
              rightIcon={<span>→</span>}
              size="lg"
              borderRadius="full"
              border="1px solid"
              borderColor="#E2E2E2"
              color="black"
              fontSize="sm"
              px={8}
              py={0}
              mb={4}
            >
              Features that we provide
            </Button>

            <Heading size="3xl" mb={8}>
              Top Picks for Premium Protection
            </Heading>
            <Text color="#000000" mb={8}>
              Explore our best-selling CAMIO PPF products, trusted for their
              unmatched protection and flawless finish.
            </Text>
          </Box>

          <Grid
            bgGradient="linear(96.56deg, rgba(158, 194, 194, 0.3) 27.8%, rgba(213, 203, 159, 0.3) 53.91%)"
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
            p={12}
            mb={10}
            borderRadius="3xl"
          >
            {/* First Product Card */}
            <Card
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="sm"
            >
              <CardBody p={4}>
                <VStack align="start" spacing={2}>
                  <Text fontWeight="bold" fontSize="sm">
                    CAMIO TPU CLEAR GLOSS
                  </Text>
                  <Image
                    src={topPicks1}
                    alt="CAMIO TPU CLEAR GLOSS"
                    borderRadius="md"
                    width="100%"
                    height="auto"
                    objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/300" // Fallback image for debugging
                  />
                  <Text fontSize="sm" color="black">
                    High gloss finish with self-healing protection—perfect for a
                    pristine look.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            {/* Second Product Card */}
            <Card
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="sm"
            >
              <CardBody p={4}>
                <VStack align="start" spacing={2}>
                  <Text fontWeight="bold" fontSize="sm">
                    CAMIO TPU BLACK GLOSS
                  </Text>
                  <Image
                    src={topPicks2}
                    alt="CAMIO TPU BLACK GLOSS"
                    borderRadius="md"
                    width="100%"
                    height="auto"
                    objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/300" // Fallback image for debugging
                  />
                  <Text fontSize="sm" color="black">
                    Glossy black finish with top protection, ideal for standout
                    sports cars.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            {/* Third Product Card */}
            <Card
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="sm"
            >
              <CardBody p={4}>
                <VStack align="start" spacing={2}>
                  <Text fontWeight="bold" fontSize="sm">
                    CAMIO TPU MATTE
                  </Text>
                  <Image
                    src={topPicks3}
                    alt="CAMIO TPU MATTE"
                    borderRadius="md"
                    width="100%"
                    height="auto"
                    objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/300" // Fallback image for debugging
                  />
                  <Text fontSize="sm" color="black">
                    Matte finish with self-healing, non-yellowing features,
                    ideal for luxury vehicles.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            <Box display="flex" justifyContent="center" alignItems="center">
            <Button
              colorScheme="black"
              size="lg"
              borderRadius="full"
              bg="#FFCE50"
              color="black"
            
              rightIcon={
                <Box
                  as="span"
                  bg="white"
                  borderRadius="full"
                  width="30px"
                  height="30px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxShadow="0 2px 4px rgba(0, 0, 0, 0.3)"
                >
                  <span style={{ color: "black" }}>→</span>
                </Box>
              }
            >
              Explore Our Products
            </Button>
          </Box>

            {/* Fourth Product Card */}
            <Card
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="sm"
            >
              <CardBody p={4}>
                <VStack align="start" spacing={2}>
                  <Text fontWeight="bold" fontSize="sm">
                    CAMIO TPH GLOSS
                  </Text>
                  <Image
                    src={topPicks4}
                    alt="CAMIO TPH GLOSS"
                    borderRadius="md"
                    width="100%"
                    height="auto"
                    objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/300" // Fallback image for debugging
                  />
                  <Text fontSize="sm" color="black">
                    Affordable gloss finish with 3-year warranty, great
                    protection for everyday vehicles.
                  </Text>
                </VStack>
              </CardBody>
            </Card>

            {/* Fifth Product Card */}
            <Card
              bg="white"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="sm"
            >
              <CardBody p={4}>
                <VStack align="start" spacing={2}>
                  <Text fontWeight="bold" fontSize="sm">
                    CAMIO TPU CLEAR GLOSS
                  </Text>
                  <Image
                    src={topPicks5}
                    alt="CAMIO TPU CLEAR GLOSS"
                    borderRadius="md"
                    width="100%"
                    height="auto"
                    objectFit="cover"
                    fallbackSrc="https://via.placeholder.com/300" // Fallback image for debugging
                  />
                  <Text fontSize="sm" color="black">
                    High gloss finish with premium, self-healing protection,
                    ideal for a pristine look.
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          </Grid>

          
        </VStack>
      </Container>
    </Box>
  );
};

export default PremiumProtection;
