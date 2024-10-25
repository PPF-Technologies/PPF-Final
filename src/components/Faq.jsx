"use client";
import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Icon,
} from "@chakra-ui/react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import AnimButton from "../components/props/Button";

const FAQData = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a hassle-free 30-day return policy. If you're unsatisfied with your purchase, return it within 30 days for a full refund.",
  },
  {
    question: "Do you offer free shipping?",
    answer:
      "Yes, we offer free shipping on orders over $50. Standard shipping rates apply for orders under $50.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this to track your package on our website.",
  },
  {
    question: "Do you offer assembly services?",
    answer:
      "Yes, we offer professional assembly services for an additional fee. You can select this option during checkout.",
  },
];

const FaqItem = ({ question, answer }) => (
  <AccordionItem
    border="none"
    mb={2}
    borderRadius="md"
    maxW="100%"
    mr={8}
    background="linear-gradient(96.56deg, rgba(194, 218, 218, 0.3) 27.8%, rgba(240, 237, 226, 0.3) 53.91%)" 
  >
    {({ isExpanded }) => (
      <>
        <AccordionButton p={4} _hover={{ bg: "gray.100" }} borderRadius="md">
          <Flex flex="1" justify="space-between" align="center">
            <Text fontWeight="medium" >{question}</Text>
            <Text fontSize="2xl" ml={2}>
              {isExpanded ? '×' : '+'}
            </Text>
          </Flex>
        </AccordionButton>
        <AccordionPanel
          pb={4}
          px={4}
          transition="max-height 0.3s ease-in-out, opacity 0.3s ease-in-out"
          maxHeight={isExpanded ? "200px" : "0px"} 
          overflow="hidden" 
        >
          <Text color="#6C6C6C">{answer}</Text>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
);


const Faq = () => {
  return (
    <Flex
      direction="row"
      align="top"
      justify="space-between"
      w="100%"
      maxW="100vw"
      mx={4}
      py={8}
      px={10}
      
    >
      <Box textAlign="start" mb={8} w="35%" >
        <Heading size="2xl" mb={4}>
          Frequently Asked Questions
        </Heading>
        <AnimButton>Customer Support</AnimButton>
      </Box>

      <Flex
        wrap="wrap"
        justify="flex-end"
        alignItems="flex-end"
        gap={4}
        w="60%"
      >
        <Accordion allowToggle w="100%">
          {FAQData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </Accordion>

        <Button
          variant="link"
          colorScheme="blue"
          alignSelf="flex-end"
          rightIcon={<FiChevronRight />}
          mt={4}
          mr={6}
        >
          More Questions
        </Button>
      </Flex>
    </Flex>
  );
};

export default Faq;
