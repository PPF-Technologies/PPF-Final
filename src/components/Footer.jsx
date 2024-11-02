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
  HStack,
  VStack,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      bg="linear-gradient(-49.05deg, #282B33 20.98%, #4A7280 72.1%, #D2B6A0 99.13%)"
      color="white"
      py={{ base: 8, md: 4 }}
      m={{lg:4,'2xl':10}}
      borderRadius={{lg:25}}
      
    >
      <Container maxW="100%" px={{ base: 8, lg: 16 }} py={{ base: 8, lg: 16 }}>
        <Stack spacing={10}>
          {/* Newsletter Section */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            wrap="wrap"
          >
            <Heading
              fontFamily=""
              as="h2"
              color="#FFFFEE"
              fontSize={{ base: "35px", lg: "45px" }}
              fontWeight="600"
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
              <InputGroup size="30px" bg="transparent">
                <Input
                  placeholder="Enter Your Email"
                  fontSize="30px"
                  fontWeight="400"
                  color="#FFFFEE"
                  _placeholder={{ color: "white", fontSize: "30px" }}
                  borderColor="white"
                  borderWidth={0}
                  borderBottomWidth={1}
                  borderRadius={0}
                  pl={0}
                  pb={{ base: 4, lg: 6 }}
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
            <Box>
              <VStack align="start" spacing={6}>
                <Text
                  fontSize={{ base: "20px", lg: "24px" }}
                  fontWeight="500"
                  mb={{ base: 2, lg: 4 }}
                >
                  Social Media
                </Text>
                <HStack spacing={{ base: 4, lg: 6 }}>
                  {["Instagram", "Twitter", "YouTube"].map((platform) => (
                    <Link
                      href="#"
                      display="flex"
                      alignItems="center"
                      aria-label={platform}
                      key={platform}
                    >
                      <Text
                        mr={1}
                        fontWeight="400"
                        fontSize="18px"
                        color="#E0E0E0"
                      >
                        {platform}
                      </Text>
                      <Icon color="#FFBB4E" as={BsArrowUpRight} />
                    </Link>
                  ))}
                </HStack>
              </VStack>
            </Box>

            {/* Links Section (Company, Help Center, Contact Information) */}
            <Box w="100%">
              <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={8}>
                <Box>
                  <Stack spacing={3}>
                    <Text fontWeight="500" fontSize="18px" mb="12px">
                      Company
                    </Text>
                    <Stack spacing={{ base: 2 }}>
                      {[
                        "About",
                        "Products",
                        "Installation Guide",
                        "Blog",
                        "Contact Us",
                        "FAQ",
                      ].map((link) => (
                        <Text
                          fontSize={{ base: "14px", lg: "16px" }}
                          fontWeight="400"
                          color="#E0E0E0"
                          key={link}
                        >
                          <Link href="#">{link}</Link>
                        </Text>
                      ))}
                    </Stack>
                  </Stack>
                </Box>

                <Box>
                  <Stack spacing={{ base: 3 }}>
                    <Text fontWeight="500" fontSize="18px" mb="12px">
                      Help Center
                    </Text>
                    <Stack spacing={2}>
                      {[
                        "Community",
                        "Knowledge Base",
                        "Academy",
                        "Support",
                      ].map((help) => (
                        <Text
                          fontSize={{ base: "14px", lg: "16px" }}
                          fontWeight="400"
                          color="#E0E0E0"
                          key={help}
                        >
                          <Link href="#">{help}</Link>
                        </Text>
                      ))}
                    </Stack>
                  </Stack>
                </Box>

                {/* Contact Information Section */}
                <Box display={{ base: "none", lg: "flex" }}>
                  <VStack align="start" spacing={4} gap="14px">
                    <HStack
                      spacing={{ base: 1, lg: 3 }}
                      alignItems="flex-start"
                    >
                      <Icon
                        as={IoLocationOutline}
                        border="2px"
                        borderRadius="md"
                        borderColor="#676767"
                        color="#FFBB4E"
                        boxSize={8}
                        p={1}
                        mt={1}
                      />
                      <Text
                        fontSize={{ base: "14px", lg: "16px" }}
                        fontWeight="400"
                        color="#E0E0E0"
                        width="100%" // Set width to 100%
                      >
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
                        boxSize={8}
                        p={1}
                      />
                      <Text
                        fontSize={{ base: "14px", lg: "16px" }}
                        fontWeight="400"
                        color="#E0E0E0"
                        width="100%" // Set width to 100%
                      >
                        9212302362 / 9315892606
                      </Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Icon
                        as={HiOutlineMail}
                        border="2px"
                        borderRadius="md"
                        borderColor="#676767"
                        color="#FFBB4E"
                        boxSize={8}
                        p={1}
                      />
                      <Text
                        fontSize={{ base: "14px", lg: "16px" }}
                        fontWeight="400"
                        color="#E0E0E0"
                        width="100%" // Set width to 100%
                      >
                        contact@company.com
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              </SimpleGrid>
            </Box>
          </SimpleGrid>

          {/* Contact Information Section */}
          <Box display={{ base: "flex", lg: "none" }}>
            <VStack align="start" spacing={4} gap="14px">
              <HStack spacing={{ base: 1, lg: 3 }} alignItems="flex-start">
                <Icon
                  as={IoLocationOutline}
                  border="2px"
                  borderRadius="md"
                  borderColor="#676767"
                  color="#FFBB4E"
                  boxSize={8}
                  p={1}
                  mt={1}
                />
                <Text
                  fontSize={{ base: "14px", lg: "16px" }}
                  fontWeight="400"
                  color="#E0E0E0"
                  w="80%"
                >
                  Ground Floor, Right Portion, KHASRA NO. 29/23, Theke Wali
                  Gali, Near Sai Baba Mandir, Alipur, Delhi 110036
                </Text>
              </HStack>
              <HStack spacing={3}>
                <Icon
                  as={FiPhone}
                  border="2px"
                  borderRadius="md"
                  borderColor="#676767"
                  color="#FFBB4E"
                  boxSize={8}
                  p={1}
                />
                <Text
                  fontSize={{ base: "14px", lg: "16px" }}
                  fontWeight="400"
                  color="#E0E0E0"
                  width="100%" // Set width to 100%
                >
                  9212302362 / 9315892606
                </Text>
              </HStack>
              <HStack spacing={3}>
                <Icon
                  as={HiOutlineMail}
                  border="2px"
                  borderRadius="md"
                  borderColor="#676767"
                  color="#FFBB4E"
                  boxSize={8}
                  p={1}
                />
                <Text
                  fontSize={{ base: "14px", lg: "16px" }}
                  fontWeight="400"
                  color="#E0E0E0"
                  width="100%" // Set width to 100%
                >
                  contact@company.com
                </Text>
              </HStack>
            </VStack>
          </Box>

          {/* Footer Bottom */}
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            pt={4}
            mb={-16}
            borderTop="1px"
            borderColor="whiteAlpha.300"
            spacing={4}
          >
            <Text fontSize={{ base: "10px", lg: "16px" }}>
              © {currentYear} Copyright By Camio PPF
            </Text>
            <Image src={logo} width={150} height="auto"  alt="logo" />
            <HStack spacing={4}>
              {["Terms", "Privacy", "Cookies", "Legal", "Recalls"].map(
                (policy) => (
                  <Link
                    href="#"
                    fontSize={{ base: "10px", lg: "16px" }}
                    key={policy}
                  >
                    {policy}
                  </Link>
                )
              )}
            </HStack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
