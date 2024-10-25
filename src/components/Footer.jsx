"use client";

import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Icon,
  Image,
  HStack,
  VStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bg="linear-gradient(119.05deg, #282B33 20.98%, #4A7280 72.1%, #D2B6A0 99.13%)"
      color="white"
      py={16}
    >
      <Container maxW="100%" px={20}>
        <Stack spacing={20}>
          {/* Newsletter Section */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
          >
            <Heading
              as="h2"
              color="#FFFFEE"
              fontSize="6xl"
              fontWeight="medium"
              mb={{ base: 4, md: 0 }}
              maxW={{ base: "100%", md: "60%" }}
            >
              Stay Connected <br />
              and Inspired!
            </Heading>
            <Box
              flex="1"
              mt={{ base: 4, md: 0 }}
              maxW={{ base: "100%", md: "40%" }}
            >
              <InputGroup size="lg" bg="transparent">
                <Input
                  placeholder="Enter Your Email"
                  fontSize="2xl"
                  _placeholder={{ color: "white", fontSize: "4xl" }}
                  borderColor="white"
                  borderWidth={0}
                  borderBottomWidth={1}
                  borderRadius={0}
                  pl={0}
                  _focus={{
                    borderColor: "white",
                    boxShadow: "none",
                  }}
                />

                <InputRightElement>
                  <Icon as={BsArrowUpRight} boxSize={6} color="#FFBB4E" />
                </InputRightElement>
              </InputGroup>
            </Box>
          </Flex>

          {/* Navigation and Contact Section */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {/* Social Media Links Section */}
            <Box w={{ base: "100%", md: "40%" }}>
              <VStack align="start">
                <Text fontSize="lg" fontWeight="medium" mb={4}>
                  Social Media
                </Text>
                <HStack spacing={6}>
                  <Link
                    href="#"
                    display="flex"
                    alignItems="center"
                    aria-label="Instagram"
                  >
                    <Text mr={1} fontWeight="light">
                      Instagram
                    </Text>
                    <Icon color="#FFBB4E" as={BsArrowUpRight} />
                  </Link>
                  <Link
                    href="#"
                    display="flex"
                    alignItems="center"
                    aria-label="Twitter"
                  >
                    <Text mr={1} fontWeight="light">
                      Twitter
                    </Text>
                    <Icon color="#FFBB4E" as={BsArrowUpRight} />
                  </Link>
                  <Link
                    href="#"
                    display="flex"
                    alignItems="center"
                    aria-label="YouTube"
                  >
                    <Text mr={1} fontWeight="light">
                      YouTube
                    </Text>
                    <Icon color="#FFBB4E" as={BsArrowUpRight} />
                  </Link>
                </HStack>
              </VStack>
            </Box>

            {/* Links Section (Company, Help Center, Contact Information) */}
            <Box w={{ base: "100%", md: "100%" }}>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                <Box>
                  <Stack spacing={4}>
                    <Text fontWeight="semibold" mb={2}>
                      Company
                    </Text>
                    <Link href="#">About</Link>
                    <Link href="#">Products</Link>
                    <Link href="#">Installation Guide</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Contact Us</Link>
                    <Link href="#">FAQ</Link>
                  </Stack>
                </Box>
                <Box>
                  <Stack spacing={4}>
                    <Text fontWeight="semibold" mb={2}>
                      Help Center
                    </Text>
                    <Link href="#">Community</Link>
                    <Link href="#">Knowledge Base</Link>
                    <Link href="#">Academy</Link>
                    <Link href="#">Support</Link>
                  </Stack>
                </Box>
                <Box>
                  <VStack align="start" spacing={4}>
                    <HStack spacing={3} alignItems="flex-start">
                      <Icon
                        as={IoLocationOutline}
                        border="2px"
                        borderRadius="md"
                        borderColor="#676767"
                        color="#FFBB4E"
                        boxSize={10}
                        p={2}
                        mt={1}
                      />
                      <Text>
                        Ground Floor, Right Portion, KHASRA NO. 29/23, Theke
                        Wali Gali, Near Sai Baba Mandir, Alipur, Delhi 110036
                      </Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Icon
                        as={FiPhone}
                        border="2px"
                        borderRadius="md"
                        borderColor="#676767"
                        color="#FFBB4E"
                        boxSize={10}
                        p={2}
                      />
                      <Text>9212302362 / 9315892606</Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Icon
                        as={HiOutlineMail}
                        border="2px"
                        borderRadius="md"
                        borderColor="#676767"
                        color="#FFBB4E"
                        boxSize={10}
                        p={2}
                      />
                      <Text>contact@company.com</Text>
                    </HStack>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>
          </SimpleGrid>

          {/* Footer Bottom */}
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            pt={8}
            borderTop="1px"
            borderColor="whiteAlpha.300"
          >
            <Text>© {currentYear} Copyright By Camio PPF</Text>
            <Image
              src="/path-to-your-logo.png" // Replace with your logo path
              alt="Camio Logo"
              height="40px"
            />
            <HStack spacing={4}>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Cookies</Link>
              <Link href="#">Legal</Link>
              <Link href="#">Recalls</Link>
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
