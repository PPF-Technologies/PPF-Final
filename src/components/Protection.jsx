import { Box, Heading, Text, Grid, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import scratchIcon from "../assets/icons/scratch.png";
import { FiChevronRight } from "react-icons/fi";

const Protection = () => {
  // Array containing icon and text data
  const protectionData = [
    { icon: scratchIcon, label: "Various Life Scratches" },
    { icon: scratchIcon, label: "Stone Chips" },
    { icon: scratchIcon, label: "Snow-Removing Sand & Calcium Chloride" },
    { icon: scratchIcon, label: "Door Dings" },
    { icon: scratchIcon, label: "Paint Scuff" },
    { icon: scratchIcon, label: "Painted Surface Discoloration" },
    { icon: scratchIcon, label: "Surface Damage by Various Impacts" },
    { icon: scratchIcon, label: "Bug Acid & Bird Droppings" },
    {
      icon: scratchIcon,
      label: "All Sorts of Water/Oil Stains & Contaminations",
    },
    { icon: scratchIcon, label: "Unique Design" },
  ];

  return (
    <Box bg={"gray.900"} color={"white"} minHeight="100vh" py={10} px={5}>
        <Button
              bg={"transparent"}
              margin={{ base: "auto", lg: 'auto' }}
              borderStyle={"solid"}
              borderRadius={"full"}
              fontWeight={500}
              fontSize={{ base: "12px", md: "14px" }} // Responsive font size
              _hover={{ bg: "transparent" }}
              borderWidth={"1px"}
              borderColor={"#E2E2E2"}
              color={'white'}
              
            >
              <Text pb={1}>Features</Text> <FiChevronRight />
            </Button>
      {/* Heading with gradient */}
      <Heading
        as="h2"
        textAlign="center"
        mb={8}
        bgGradient="linear(to-r, red.400, yellow.400)"
        bgClip="text"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="bold"
      >
        CLEAR AND COMPLETE <Text as="span" display="block">PROTECTION AGAINST</Text>
      </Heading>

      {/* Grid for two rows, five items each */}
      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={8}
        px={{ base: "20px", lg: "100px" }} // Responsive padding
        justifyItems="center"
      >
        {protectionData.map((item, index) => (
          <Flex
            key={index}
            direction="column"
            align="center"
            bg="transparent"
            borderRadius="full"
            border={'1px solid gray.700'}

            p={4}
            boxShadow="xl"
            transition="transform 0.3s ease"
            
          >
            {/* Icon with animation */}
            <Image
              src={item.icon}
              alt={item.label}
              width={60}
              height={60}
              style={{
                transition: "transform 0.3s ease",
              }}
            />
            <Text
              mt={4}
              fontSize="md"
              fontWeight="bold"
            >
              {item.label}
            </Text>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default Protection;
