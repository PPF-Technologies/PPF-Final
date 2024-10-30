import React from "react";
import { Box, Grid, Flex, Link } from "@chakra-ui/react";
import Image from "next/image";
import gallery1 from "../../assets/aboutGallery1.png";
import gallery2 from "../../assets/aboutGallery2.png";
import gallery3 from "../../assets/aboutGallery3.png";
import gallery4 from "../../assets/aboutGallery4.png";

const Gallery = () => {
  return (
    <Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={6}>
      {/* Main large image */}
      <Box
        position="relative"
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        h="600px"
        w="auto"
        borderWidth="3px"
        borderColor="gray.300"
      >
        <Image src={gallery1} alt="Gallery 1" layout="fill" objectFit="cover" />
      </Box>

      {/* Left column with images */}
      <Flex direction="column" gap={6}>
        <Box
          position="relative"
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          h="400px"
          w="auto"
        >
          <Image
            src={gallery2}
            alt="Gallery 2"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box
          position="relative"
          bg="white"
          borderRadius="lg"
          boxShadow="md"
          h="200px"
          w="auto"
        >
          <Image
            src={gallery3}
            alt="Gallery 3"
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Flex>

      {/* Large vertical box with three images */}
      <Box
        position="relative"
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        h="450px"
        w="auto"
        d="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Flex align="center" justify="space-between" mb={2}>
          <Box position="relative" h="200px" w={{base:"100%", lg:"fill"}}>
            <Image
              src={gallery1}
              alt="Gallery 1 - Small"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Flex>
        <Flex align="center" justify="space-between" mb={2}>
          <Box position="relative" h="150px" w={{base:"100%", lg:"fill"}}>
            <Image
              src={gallery2}
              alt="Gallery 2 - Small"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Flex>
        <Flex align="center" justify="space-between" mb={2}>
          <Box position="relative" h="270px" w={{base:"100%", lg:"fill"}}>
            <Image
              src={gallery3}
              alt="Gallery 3 - Small"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>

      {/* Right column with images */}
      <Box
        position="relative"
        bg="white"
        borderRadius="lg"
        boxShadow="md"
        h="400px"
        w={{base:"100%", lg:"600px"}}
      >
        <Image src={gallery4} alt="Gallery 4" layout="fill" objectFit="cover" />
      </Box>

      {/* App Store and Google Play links */}
        <Box position="relative" w={{base:"100%", lg:"350px"}} h="400px">
          <Image
            src={gallery1}
            alt="App Store"
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Box ml={4} position="relative" w={{base:"100%", lg:"500px"}} h="400px">
          <Image
            src={gallery2}
            alt="Google Play"
            layout="fill"
            objectFit="cover"
          />
        </Box>
    </Grid>
  );
};

export default Gallery;
