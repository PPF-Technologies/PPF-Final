"use client";
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  Button,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import Whyusimg1 from '../../assets/whyusimg1.png'

// import AnimButton from "../components/props/Button";

import Link from "next/link";
// import Button2 from "./props/Button2";
import Button3 from "../props/Button3";
import Image from "next/image";

const WhyUs = () => {
  // State to track the currently active accordion and image
  const [activeAccordion, setActiveAccordion] = useState(0);

  // Sample data for the accordions and images
  const accordionData = [
    {
      id: 1,
      title: "Superior Protection",
      content:
        "CAMIO PPF is made from premium-grade material that offers superior durability.",
      imageUrl: Whyusimg1,
    },
    {
      id: 2,
      title: "Self-Healing Technology",
      content:
        "Our film protects against scratches and harmful UV rays, maintaining the car’s appearance.",
      imageUrl: "/images/scratch-resistant.jpg",
    },
    {
      id: 3,
      title: "Non-Yellowing Formula",
      content:
        "CAMIO PPF incorporates self-healing properties to repair minor scratches automatically.",
      imageUrl: "/images/self-healing.jpg",
    },
    {
      id: 4,
      title: "Long-Lasting Durability",
      content:
        "CAMIO PPF incorporates self-healing properties to repair minor scratches automatically.",
      imageUrl: "/images/self-healing.jpg",
    },
    {
      id: 5,
      title: "Customizable Coverage",
      content:
        "CAMIO PPF incorporates self-healing properties to repair minor scratches automatically.",
      imageUrl: "/images/self-healing.jpg",
    },
    {
      id: 6,
      title: "Ultra Hydrophobic",
      content:
        "CAMIO PPF incorporates self-healing properties to repair minor scratches automatically.",
      imageUrl: "/images/self-healing.jpg",
    },
    {
      id: 7,
      title: "Enhanced Gloss Finish",
      content:
        "CAMIO PPF incorporates self-healing properties to repair minor scratches automatically.",
      imageUrl: "/images/self-healing.jpg",
    },
    {
      id: 8,
      title: "No Residue",
      content:
        "CAMIO PPF incorporates self-healing properties to repair minor scratches automatically.",
      imageUrl: "/images/self-healing.jpg",
    },
  ];

  return (
    <Box px={{ base: 2, lg: 36, md: 20, '2xl': 80 }}>
      {/* Button Section */}
      <Button
        bg={"transparent"}
        cursor={'default'}
        margin={{ base: "auto", lg: 0 }}
        borderStyle={"solid"}
        borderRadius={"full"}
        fontWeight={'semibold'}
        fontSize={{ base: "12px", md: "15px" }} // Responsive font size
        _hover={{ bg: "transparent" }}
        borderWidth={"1px"}
        borderColor={"#E2E2E2"}
        display={"flex"}
        alignItems={"center"}
      >
        <Text pb={1}>Why choose us</Text> <FiChevronRight />
      </Button>

      {/* Heading and Description Section */}
      <Flex
        mt={6}
        flexDirection={{ base: "column", lg: "row" }}

      >
        <Heading
          as={"h2"}
          fontWeight={600}
          width={{ base: "100%", lg: "55%" }}
          fontSize={{ base: "32px", lg: "48px" }}
          textAlign={{ base: "center", lg: "left" }}
        >
          Why is CAMIO PPF the Ultimate Choice for Vehicle Protection?
        </Heading>

        <Box width={{ base: "100%", lg: "45%" }} px={{ base: 0, lg: 6 }} borderColor={'#7F7F7F'}
          borderStyle={'solid'}
          borderLeftWidth={{ base: 0, lg: 1 }}
          borderTopWidth={{ base: 0, lg: 0 }}>
          <Text
            // className="lg:border-l border-[#7F7F7F] border-t lg:border-t-0"
            borderColor={'#7F7F7F'}
            borderStyle={'solid'}
            borderLeftWidth={{ base: 0, lg: 0 }}
            borderTopWidth={{ base: 1, lg: 0 }}
            pl={{ base: 0, lg: 10 }}
            fontWeight={400}
            fontSize={{ base: "16px", md: "18px" }} // Responsive font size
            color={"#515151"}
            textAlign={{ base: 'center', lg: "left" }}
            pt={{ base: 4, lg: 0 }}
            mt={{ base: 4, lg: 0 }}
          >
            When it comes to safeguarding your vehicle’s paintwork, CAMIO PPF
            stands out as the ultimate solution. Our Paint Protection Film (PPF)
            is engineered to offer unparalleled protection and aesthetic
            enhancement, making it the preferred choice for discerning vehicle
            owners.
          </Text>
          <Box px={8} py={4} className="flex justify-center lg:block" >
            <Link href={"/"}>
              <Button3>Learn More</Button3>
            </Link>
          </Box>
        </Box>
      </Flex>

      {/* Accordion and Image Section */}
      <Flex mt={16} flexDirection={{ base: 'column', lg: 'row' }} >
        {/* Left Side: Accordion */}
        <Box width={{ base: '100%', lg: "55%" }} pr={6}>
          <Accordion allowToggle>
            {accordionData.map((item, index) => (
              <AccordionItem key={item.id} flexShrink={0}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        onClick={() => setActiveAccordion(index)}
                        _expanded={{ bg: "gray.100" }}
                        _hover={{ bg: "gray.100" }}
                        _focus={{ boxShadow: "none" }}
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          py={2}
                          gap={16}
                          display="flex"
                          alignItems="center"
                          color={isExpanded ? "black" : "gray.500"}
                        >
                          <Text fontWeight={600} mr={2}>
                            {item.id}.
                          </Text>
                          <Text fontWeight={600}>{item.title}</Text>
                        </Box>
                        <AccordionIcon color={isExpanded ? "black" : "gray.500"} />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={0} mt={2} mx={0} py={3}>
                      {item.content}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>

        </Box>

        {/* Right Side: Image */}
        <Box width={"45%"} px={8} display={{ base: 'none', lg: 'block' }}>
          <Image
            src={accordionData[activeAccordion].imageUrl}
            alt={`Accordion ${accordionData[activeAccordion].title} Image`}
            borderRadius="lg"
            boxShadow="md"
            width={200}
            height={500}
            className="w-auto h-[455px] rounded-xl"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyUs;
