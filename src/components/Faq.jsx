"use client";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import React from "react";

const Faq = () => {
  return (
    <Box width={"full"} py={10} px={4} bg="gray.50">
      {/* Main FAQ Heading */}
      <Heading as="h1" textAlign="center" fontSize="3xl" mb={8} fontWeight="bold">
        Frequently Asked Questions
      </Heading>

      {/* Accordion with enhanced UI */}
      <Accordion
        allowToggle
        className="max-w-2xl mx-auto"
       
        bg="white"
        borderRadius="md"
        border="1px solid"
        borderColor="gray.200"
        boxShadow="md"
      >
        {/* FAQ Item 1 */}
        <AccordionItem border="none">
          <h2>
            <AccordionButton _hover={{ bg: "gray.100" }} py={6} px={4} borderBottom="1px solid" borderColor="gray.200">
              <Box flex="1" textAlign="left" fontWeight="medium" fontSize="lg">
                What is your return policy?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={4}>
            <Text lineHeight="taller">
              We offer a 30-day return policy for all unused products in their
              original packaging. Simply contact our support team to start the
              process, and we’ll guide you through every step.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <Divider />

        {/* FAQ Item 2 */}
        <AccordionItem border="none">
          <h2>
            <AccordionButton _hover={{ bg: "gray.100" }} py={6} px={4} borderBottom="1px solid" borderColor="gray.200">
              <Box flex="1" textAlign="left" fontWeight="medium" fontSize="lg">
                How long does shipping take?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={4}>
            <Text lineHeight="taller">
              Shipping typically takes 3-7 business days within the U.S. For
              international orders, it may take up to 14 business days,
              depending on the destination.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <Divider />

        {/* FAQ Item 3 */}
        <AccordionItem border="none">
          <h2>
            <AccordionButton _hover={{ bg: "gray.100" }} py={6} px={4} borderBottom="1px solid" borderColor="gray.200">
              <Box flex="1" textAlign="left" fontWeight="medium" fontSize="lg">
                Can I track my order?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} px={4}>
            <Text lineHeight="taller">
              Absolutely! Once your order has been shipped, you'll receive an
              email with a tracking number and a link to track your package in
              real-time.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Faq;
