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
        "Safeguards your paint from harmful UV rays, preventing fading and degradation.",
    },
    {
      icon: icon,
      title: "Superior Durability",
      description:
        "Resistant to cracking, peeling, and bubbling, providing long-term protection against environmental hazards.",
    },
    {
      icon: icon,
      title: "Chemical Resistant",
      description:
        "Protects against acidic contaminants, such as bird droppings, tree sap, and road salt.",
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
        "Stretches easily to conform to complex surfaces, making installation smoother and faster.",
    },
  ];

  return (
    <Box px={{ base: 0, sm:4, lg: 14 }} py={10} maxW={{'2xl':'1500px'}} mx={{'2xl':'auto'}}>
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
