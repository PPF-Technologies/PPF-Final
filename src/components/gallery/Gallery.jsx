import React from "react";
import { SimpleGrid, GridItem, Box, Heading, Text} from "@chakra-ui/react";
import Image from "next/image";
import camio from "../../assets/camio.png";
import carimage from "../../assets/carimage.png";
import journey from "../../assets/journey.png";
import toppicks1 from "../../assets/topPicks1.png";
import toppicks2 from "../../assets/topPicks2.png";
import toppicks3 from "../../assets/topPicks3.png";
import toppicks4 from "../../assets/topPicks4.png";

const Gallery = () => {
  // List of images for easy maintenance
  const imagesLeftColumn = [camio, carimage, toppicks2, toppicks3];
  const imagesRightColumn = [journey, toppicks1, camio, toppicks4];

  return (
    <Box w="full" px={{ base: 4, md: 16 }} py={8}>
      {/* Heading */}
      <Heading
              fontFamily="" mb={{base:2, md:4}} textAlign="center" fontSize={{base:"20px", md:"32px"}} fontWeight="700">
        Gallery
      </Heading>
      <Text mb={{base:5, md:10}} textAlign="center" fontSize={{base:"16px", md:"20px"}} fontWeight="400" color="#121212CC">
      "Unmatched Protection, Unbeatable Shine"
      </Text>

      {/* Image Grid */}
      <SimpleGrid columns="2" spacing={4}>
        {/* Left column */}
        <GridItem>
          {imagesLeftColumn.map((src, index) => (
            <Box key={index} overflow="hidden" boxShadow="md" borderRadius="lg" mb={4}>
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
          ))}
        </GridItem>

        {/* Right column */}
        <GridItem>
          {imagesRightColumn.map((src, index) => (
            <Box key={index} overflow="hidden" boxShadow="md" borderRadius="lg" mb={4}>
              <Image
                src={src}
                alt={`Gallery Image ${index + 5}`}
                layout="responsive"
                objectFit="cover"
              />
            </Box>
          ))}
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default Gallery;
