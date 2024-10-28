import React from "react";
import icon from "@/assets/icons/icon.png";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Advantage = () => {
  const advantages = [
    {
      title: "Comprehensive Protection",
      description:
        "CAMIO PPF provides robust protection for your vehicle's paintwork:",
      advantages: [
        {
          icon: icon,
          title: "Superior Defense Against Road Debris:",
          description:
            "Protects against stone chips, gravel, and other road hazards.",
        },
        {
          icon: icon,
          title: "UV Protection:",
          description:
            "Guards against fading and oxidation from harmful sun rays.",
        },
        {
          icon: icon,
          title: "Scratch and Impact Resistance:",
          description: "Shields your vehicle from minor abrasions and impacts.",
        },
        {
          icon: icon,
          title: "Corrosion Prevention:",
          description:
            "Protects against corrosive elements such as bird droppings and tree sap.",
        },
        {
          icon: icon,
          title: "Weather Resistance:",
          description:
            "Guards against extreme weather conditions, including rain, snow, and ice.",
        },
        {
          icon: icon,
          title: "No Residue Upon Removal:",
          description:
            "Leaves no sticky residue, ensuring a clean and damage-free removal.",
        },
      ],
    },
    {
      title: "Advanced Technology",
      description: "Innovative features set CAMIO PPF apart:",
      advantages: [
        {
          icon: icon,
          title: "Self-Healing Technology:",
          description:
            "Minor scratches and swirl marks automatically heal when exposed to heat, keeping the film looking flawless.",
        },
        {
          icon: icon,
          title: "Non-Yellowing Formula:",
          description:
            "Maintains clarity and transparency over time, preventing discoloration and yellowing.",
        },
        {
          icon: icon,
          title: "Hydrophobic Properties:",
          description:
            "Water and contaminants bead off easily, reducing maintenance efforts and keeping your vehicle cleaner.",
        },
        {
          icon: icon,
          title: "High Gloss and Matte Finishes:",
          description:
            "Available in both glossy and matte options to match your desired look.",
        },
      ],
    },
    {
      title: "Durability and Longevity",
      description: "CAMIO PPF is engineered for long-term performance:",
      advantages: [
        {
          icon: icon,
          title: "Long-Lasting Protection:",
          description:
            "Designed to endure for years without peeling, cracking, or degradation.",
        },
        {
          icon: icon,
          title: "5-Year Warranty:",
          description:
            "Backed by a comprehensive warranty, offering assurance of quality and reliability.",
        },
      ],
    },
    {
      title: "Customizable and Versatile",
      description: "Find the perfect fit for your vehicle:",
      advantages: [
        {
          icon: icon,
          title: "Tailored Coverage:",
          description:
            "Customizable for any vehicle type, from cars to motorcycles, ensuring comprehensive protection for every surface.",
        },
        {
          icon: icon,
          title: "Seamless Application:",
          description:
            "Designed to fit precisely and conform to vehicle contours for a smooth, invisible finish.",
        },
        {
          icon: icon,
          title: "Variety of Finishes:",
          description:
            "Choose from various finishes, including high gloss, matte, and color options to suit your personal style and vehicle type.",
        },
      ],
    },
    {
      title: "Enhanced Aesthetics",
      description: "Elevate the appearance of your vehicle:",
      advantages: [
        {
          icon: icon,
          title: "Showroom Shine:",
          description:
            "The high-gloss finish enhances the paintwork, giving your vehicle a polished, sleek look.",
        },
        {
          icon: icon,
          title: "Elegant Matte Finish:",
          description:
            "Achieve a sophisticated, non-reflective appearance with the matte option, adding a touch of modern style.",
        },
      ],
    },
    {
      title: "Ease of Maintenance",
      description: "CAMIO PPF simplifies vehicle upkeep:",
      advantages: [
        {
          icon: icon,
          title: "Low Maintenance:",
          description:
            "Requires minimal effort to keep clean. Regular washing is sufficient to remove dirt and contaminants.",
        },
        {
          icon: icon,
          title: "Resistant to Stains:",
          description:
            "The hydrophobic layer helps repel stains and makes cleaning easier.",
        },
      ],
    },
    {
      title: "Value for Money",
      description: "Experience premium protection without breaking the bank:",
      advantages: [
        {
          icon: icon,
          title: "Affordable Premium Protection:",
          description:
            "Offers high-end features and performance at a competitive price.",
        },
        {
          icon: icon,
          title: "Cost-Effective Investment:",
          description:
            "Protects your vehicle's paintwork, potentially saving on costly repairs and repainting in the future.",
        },
      ],
    },
    {
      title: "Trusted Quality",
      description: "Experience the confidence of a reputable product:",
      advantages: [
        {
          icon: icon,
          title: "Proven Performance",
          description:
            "CAMIO PPF is trusted by vehicle owners and professionals alike for its high-quality and dependable protection.",
        },
        {
          icon: icon,
          title: "Industry Expertise:",
          description:
            "Developed by experts with extensive experience in paint protection technology. ",
        },
      ],
    },
  ];
  return (
    <Box>
      <Heading as={"h3"} mx={"auto"} width={"45%"} textAlign={"center"}>
        Discover the CAMIO Advantage: Premium Protection for Your Vehicle
      </Heading>
      <Box p={4} px={10}>
        {advantages.map((adv, i) => (
          <Box key={i} py={4}>
            <Heading as={"h4"} fontSize={"lg"}>
              {adv.title}
            </Heading>
            <Text fontSize={"sm"} color={"gray.600"} pb={6}>
              {adv.description}
            </Text>
            <Flex flexWrap={'wrap'} gap={4}  >
              {adv.advantages.map((adv, i) => (
                <Flex key={i} width={{base:'46%', lg:"46%"}}  bg={'#F4F6FA'} p={4} gap={2} alignItems={'center'} borderRadius={'lg'}>
                  <Box mb={2}>
                    <Image src={adv.icon} width={40} height={40} />
                  </Box>
                  <Box>
                    <Heading as={"h5"} fontSize={"sm"}>
                      {adv.title}
                    </Heading>
                    <Text fontSize={"sm"} color={"gray.600"}>
                      {adv.description}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Advantage;
