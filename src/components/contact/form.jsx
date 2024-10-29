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
  VStack,
  HStack,
  Icon,
  Text,
  Flex,
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
import Link from "next/link";

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
      justify="flex-start"
      minHeight="100vh"
      width="100%"
      p={4}
    >
      <Heading mb={10} fontSize="47px" fontWeight={700} lineHeight="61.1px">
        Contact Us
      </Heading>

      <Flex
        maxW={{ "2xl": "1500px" }}
        mx="auto"
        p={6}
        direction={{ base: "column", md: "row" }}
        spacing={6}
        width="100%"
      >
        {/* Contact information */}
        <Box w={{ base: "100%", md: "50%" }} px={3}>
          <Heading
            fontSize="43px"
            fontWeight={700}
            lineHeight="61.1px"
            color="#34113F"
            mb={4}
          >
            Have Questions?
            <br />
            Get in Touch!
          </Heading>

          <Text
            fontSize="16px"
            fontWeight="400"
            lineHeight="23.8px"
            color="#454D55"
            mb={4}
          >
            Rudra Enterprises
          </Text>

          <HStack mb={2}>
            <Box p={2} borderRadius="md" bg="#EDECE2">
              <FaMapMarkerAlt color="#344054" size={20} />
            </Box>
            <Text fontSize="16px" fontWeight="400" color="#344054">
              Ground Floor, Right Portion, KHASRA NO. 292/3, Thada Wali Gali,
              Near Bai Baba Mandir, Alipur, Delhi 110036
            </Text>
          </HStack>

          <HStack mb={2}>
            <Box p={2} borderRadius="md" bg="#EDECE2">
              <FaRegEnvelope color="#344054" size={20} />
            </Box>
            <Text fontSize="16px" fontWeight="400" color="#344054">
              temporary@gmail.com
            </Text>
          </HStack>

          <HStack mb={4}>
            <Box p={2} borderRadius="md" bg="#EDECE2">
              <FaPhoneAlt color="#344054" size={20} />
            </Box>
            <Text fontSize="16px" fontWeight="400" color="#344054">
              +91 9212302362 | +91 9315892606
            </Text>
          </HStack>

          <HStack spacing={4}>
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
        </Box>

        {/* Form */}
        <Box w={{ base: "100%", md: "50%" }} px={3}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
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

              <FormControl isRequired>
                <HStack>
                  <Icon as={FaPenSquare} color="#98A2B3" boxSize={5} />
                  <Select
                    name="subject"
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
                    <option value="">Subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                  </Select>
                </HStack>
              </FormControl>

              <FormControl isRequired>
                <Textarea
                  name="message"
                  placeholder="How can we help you? Feel free to get in touch!"
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

              <Checkbox
                name="agreeToTerms"
                isChecked={formData.agreeToTerms}
                onChange={handleChange}
                isRequired
                sx={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "left",
                }}
              >
                I agree that my data is collected and stored
              </Checkbox>

              <Box
                justifyContent="start"
                alignItems="center"
              >
                
                  <Button2>Get In Touch</Button2>
                
              </Box>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ContactForm;
