"use client"; // This line marks the component as a Client Component

import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Textarea,
  HStack,
  Icon,
  Text,
  Flex,
  Grid,
} from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhoneAlt,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaUser,
  FaPenSquare,
} from "react-icons/fa";
import Image from "next/image";
import whatsApp from "../../assets/icons/whatsapp.svg";
import Button2 from "../props/Button2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    console.log("Form submitted:", formData);
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      width="100%"
      px={{ base: "20px", lg: "150px" }}
    >
      <Heading
        my={{ base: "20px", lg: "50px" }}
        fontSize={{ base: "30px", md: "47px" }}
        fontWeight={700}
        lineHeight="61.1px"
        textAlign="center"
      >
        Contact Us
      </Heading>

      <Flex
        maxW={{ base: "100%", md: "1500px" }}
        mx="auto"
        p={{ base: 4, md: 6 }}
        direction={{ base: "column", lg: "row" }}
        spacing={6}
        width="100%"
        justify="center"
        my={{ base: "30px", lg: "50px" }}
      >
        {/* Contact information */}
        <Box
          w={{ base: "100%", lg: "490px" }}
          h="auto"
          px={3}
          mb={{ base: 6, lg: 0 }}
        >
          <Heading
            fontSize={{ base: "30px", md: "35px", lg: "43px" }} // Responsive font size
            fontWeight={700}
            lineHeight="61.1px"
            color="#34113F"
            mb={2}
          >
            Have Questions?
            <br />
            Get in Touch!
          </Heading>

          <Text
            fontSize={{ base: "12px", md: "14px", lg: "16px" }} // Responsive font size
            fontWeight="400"
            lineHeight="23.8px"
            color="#454D55"
            mb={8}
          >
            Rudra Enterprises
          </Text>

          <HStack mb={6}>
            <Box p={2} borderRadius="md" bg="#EDECE2">
              <FaMapMarkerAlt color="#344054" size={20} />
            </Box>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="400"
              color="#344054"
            >
              Ground Floor, Right Portion, KHASRA NO. 292/3, Thada Wali Gali,
              Near Bai Baba Mandir, Alipur, Delhi 110036
            </Text>
          </HStack>

          <HStack mb={6}>
            <Box p={2} borderRadius="md" bg="#EDECE2">
              <FaRegEnvelope color="#344054" size={20} />
            </Box>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="400"
              color="#344054"
            >
              temporary@gmail.com
            </Text>
          </HStack>

          <HStack mb={6}>
            <Box p={2} borderRadius="md" bg="#EDECE2">
              <FaPhoneAlt color="#344054" size={20} />
            </Box>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="400"
              color="#344054"
            >
              +91 9212302362 | +91 9315892606
            </Text>
          </HStack>

          <Flex align="center" pr={10} justifyContent="center" width="100%">
            <HStack spacing={6}>
              <Box bg="#EDECE2" p={2} borderRadius="md">
                <FaInstagram color="#1B1B1B" size={24} />
              </Box>
              <Box bg="#EDECE2" p={2} borderRadius="md">
                <FaFacebook color="#1B1B1B" size={24} />
              </Box>
              <Box bg="#EDECE2" p={2} borderRadius="md">
                <FaYoutube color="#1B1B1B" size={24} />
              </Box>
              <Box bg="#EDECE2" p={2} borderRadius="md">
                <Image src={whatsApp} alt="WhatsApp" width={24} height={24} />
              </Box>
            </HStack>
          </Flex>
        </Box>

        {/* Form */}
        <Box w={{ base: "100%", md: "592px" }} h="auto" px={3}>
          <Flex justify="center">
            <form onSubmit={handleSubmit}>
              <Stack spacing={{ base: 6, md: 8, lg: 12 }}>
                {" "}
                <Grid
                  templateColumns="repeat(2, 1fr)" // Responsive grid
                  gap={6} // Adjust gap for responsiveness
                >
                  <FormControl isRequired>
                    <HStack>
                      <Icon as={FaUser} color="#98A2B3" boxSize={5} />
                      <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        border="none"
                        borderRadius="none"
                        borderBottom="2px solid #98A2B3"
                        focusBorderColor="transparent"
                        value={formData.name}
                        onChange={handleChange}
                        sx={{
                          "::placeholder": {
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textAlign: "left",
                            color: "#98A2B3",
                          },
                        }}
                      />
                    </HStack>
                  </FormControl>

                  <FormControl isRequired>
                    <HStack>
                      <Icon as={FaRegEnvelope} color="#98A2B3" boxSize={5} />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        border="none"
                        borderRadius="none"
                        borderBottom="2px solid #98A2B3"
                        focusBorderColor="transparent"
                        value={formData.email}
                        onChange={handleChange}
                        sx={{
                          "::placeholder": {
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textAlign: "left",
                            color: "#98A2B3",
                          },
                        }}
                      />
                    </HStack>
                  </FormControl>

                  <FormControl>
                    <HStack>
                      <Icon as={FaPhoneAlt} color="#98A2B3" boxSize={5} />
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        border="none"
                        borderRadius="none"
                        borderBottom="2px solid #98A2B3"
                        focusBorderColor="transparent"
                        value={formData.phone}
                        onChange={handleChange}
                        sx={{
                          "::placeholder": {
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textAlign: "left",
                            color: "#98A2B3",
                          },
                        }}
                      />
                    </HStack>
                  </FormControl>

                  <FormControl>
                    <HStack>
                      <Icon as={FaPenSquare} color="#98A2B3" boxSize={5} />
                      <Select
                        name="subject"
                        placeholder="Select Subject"
                        border="none"
                        borderRadius="none"
                        borderBottom="2px solid #98A2B3"
                        focusBorderColor="transparent"
                        value={formData.subject}
                        onChange={handleChange}
                        sx={{
                          "::placeholder": {
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "24px",
                            textAlign: "left",
                            color: "#98A2B3",
                          },
                        }}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="support">Support</option>
                        <option value="feedback">Feedback</option>
                      </Select>
                    </HStack>
                  </FormControl>
                </Grid>
                <FormControl isRequired>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    border="none"
                    borderRadius="none"
                    borderBottom="2px solid #98A2B3"
                    focusBorderColor="transparent"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    sx={{
                      "::placeholder": {
                        fontSize: "16px",
                        fontWeight: 400,
                        lineHeight: "24px",
                        textAlign: "left",
                        color: "#98A2B3",
                      },
                    }}
                  />
                </FormControl>
                <HStack spacing={3}>
                  <Checkbox
                    name="agreeToTerms"
                    isChecked={formData.agreeToTerms}
                    onChange={handleChange}
                    colorScheme="teal"
                  >
                    <Text fontSize="14px" color="#3B3D3F">
                      I agree to the terms and conditions
                    </Text>
                  </Checkbox>
                </HStack>
                <Button2 style={{ width: "100px", alignSelf: "flex-start" }}>
                  Get In Touch
                </Button2>
              </Stack>
            </form>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
