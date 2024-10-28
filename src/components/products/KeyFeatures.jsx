import { Box, Heading, Flex, VStack, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import icon from "@/assets/icons/icon.png";

const KeyFeatures = () => {
  const features = [
    {
      icon: icon,
      title: "Self-Healing Technology",
      description:
        "Automatically repairs light scratches, keeping your vehicle looking flawless.",
    },
    {
      icon: icon,
      title: "Ultra-Hydrophobic",
      description:
        "Water beads off effortlessly, making cleaning easier and reducing water spots.",
    },
    {
      icon: icon,
      title: "Non-Yellowing Formula",
      description:
        "Maintains long-lasting crystal clarity, keeping the film invisible over time.",
    },
    {
      icon: icon,
      title: "UV Protection",
      description:
        "Protects your paint from harmful UV rays, preventing fading and damage.",
    },
    {
      icon: icon,
      title: "Superior Durability",
      description:
        "Crack, peel, and bubble-resistant, ensuring long-lasting protection.",
    },
    {
      icon: icon,
      title: "Chemical Resistant",
      description:
        "Protects against acidic contaminants like bird droppings and tree sap.",
    },
    {
      icon: icon,
      title: "5-Year Warranty",
      description: "Long-lasting protection you can count on.",
    },
    {
      icon: icon,
      title: "Enhanced Flexibility",
      description:
        "Easily stretches to fit complex surfaces for faster installation.",
    },
  ];

  return (
    <Box px={{ base: 0, sm:4, lg: 14 }} py={10}>
      <Heading textAlign="center" py={14} fontSize={{ base: "xl", md: "4xl" }} color="gray.800">
        Key Features of Our Paint Protection Film
      </Heading>
      <Flex wrap="wrap" justify="center" gap={6}>
        {features.map((feature, i) => (
          <VStack
            key={i}
            border="1px solid"
            borderColor="gray.300"
            rounded="xl"
            width={{ base: "95%", sm: "46%",md:'30%', lg: "23%" }} 
            p={6}
            mb={6}
            spacing={4}
            bg="white"
            align={'start'}
          >
            <Box>
              <Image
                src={feature.icon}
                alt={feature.title}
                width={60} // Slightly larger for better visibility
                height={60}
               
              />
            </Box>
            <Heading as="h4" size="md" fontWeight={600} color="gray.800">
              {feature.title}
            </Heading>
            <Text textAlign="left" color="gray.600" fontSize={{ base: "sm", md: "md" }}>
              {feature.description}
            </Text>
          </VStack>
        ))}
      </Flex>
    </Box>
  );
};

export default KeyFeatures;
