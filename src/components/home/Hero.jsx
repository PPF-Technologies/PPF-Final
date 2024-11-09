"use client";

import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button2 from "../props/Button2";
import Link from "next/link";
import car1 from "../../assets/herocar.png";
import car2 from "../../assets/herocar2.png";
import car3 from "../../assets/herocar3.png";
import car4 from "../../assets/herocar4.png";
import car5 from "../../assets/herocar5.png";
import car6 from "../../assets/herocar6.png";
import car7 from "../../assets/herocar7.png";
import car8 from "../../assets/herocar8.png";
import car9 from "../../assets/herocar9.png";
import car10 from "../../assets/herocar10.png";
import car11 from "../../assets/herocar11.png";
import car12 from "../../assets/herocar12.png";
import car13 from "../../assets/herocar13.png";
import car14 from "../../assets/herocar14.png";
import car15 from "../../assets/herocar15.png";
import car16 from "../../assets/herocar16.png";
import car17 from "../../assets/herocar17.png";
import car18 from "../../assets/herocar18.png";
import car19 from "../../assets/herocar19.png";
import car20 from "../../assets/herocar20.png";
import car21 from "../../assets/herocar21.png";
import car22 from "../../assets/herocar22.png";
import car23 from "../../assets/herocar23.png";
import car24 from "../../assets/herocar24.png";
import car25 from "../../assets/herocar25.png";
import car26 from "../../assets/herocar26.png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(5);
  const [isHovered, setIsHovered] = useState(false);

  const imagesArr = [
    car1,
    car2,
    car3,
    car4,
    car5,
    car6,
    car7,
    car8,
    car9,
    car10,
    car11,
    car12,
    car13,
    car14,
    car15,
    car16,
    car17,
    car18,
    car19,
    car20,
    car21,
    car22,
    car23,
    car24,
    car25,
    car26,
  ];

  // const imagePositions = [
  //   { top: "2.5px", left: "2.5px" },
  //   { top: "2.5px", left: "187.3px" },
  //   { top: "2.5px", left: "373.15px" },
  //   { top: "2.5px", left: "558.47px" },
  //   { top: "5.13px", left: "743.8px" },
  //   { top: "2.5px", left: "929.12px" },
  //   { top: "2.5px", left: "1114.44px" },
  //   { top: "2.5px", left: "1299.77px" },
  //   { top: "2.5px", left: "1485.09px" },
  //   { top: "141.5px", left: "2.5px" },
  //   { top: "141.5px", left: "193.09px" },
  //   { top: "141.5px", left: "403.2px" },
  //   { top: "141.5px", left: "624.34px" },
  //   { top: "141.5px", left: "816.67px" },
  //   { top: "141.5px", left: "989.23px" },
  //   { top: "141.5px", left: "2.5px" },
  //   { top: "141.5px", left: "1219.63px" },
  //   { top: "142.75px", left: "1411.96px" },
  //   { top: "144px", left: "1604.3px" },
  //   { top: "280.49px", left: "27.55px" },
  //   { top: "280.49px", left: "251.44px" },
  //   { top: "280.49px", left: "453.29px" },
  //   { top: "280.49px", left: "655.14px" },
  //   { top: "280.49px", left: "856.99px" },
  //   { top: "280.49px", left: "1058.85px" },
  //   { top: "280.49px", left: "1260.7px" },
  //   { top: "280.49px", left: "1462.55px" },
  // ];

  useEffect(() => {
    let intervalId;
    if (isHovered) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === imagesArr.length - 1 ? 0 : prevIndex + 1
        );
      }, 800);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovered, imagesArr.length]);

  return (
    <Box
      as="section"
      py={{ base: 10, md: 20 }}
      maxWidth={{ "2xl": "1500px" }}
      mx={{ "2xl": "auto" }}
    >
      <Container maxW={{ base: "container.xl", "2xl": "full" }} px={4}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          spacing={{ md: 8 }}
          gap={4}
        >
          {/* Image Section */}
          <Box
            w="full"
            mb={{ base: 8, md: 0 }}
            maxW={{ md: "990px", lg: "50%" }}
            p={4}
            position="relative" // Parent needs to be relative
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className="relative w-full aspect-[3/2] justify-center"
              style={{ position: "relative", height: "auto" }}
            >
              <Image
                src={imagesArr[currentImageIndex]}
                alt="Hero SUV"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain transition-opacity duration-[1ms]"
                priority
                style={{
                  position: "absolute", // Absolute position inside the parent container
                  // top: imagePositions[currentImageIndex]?.top || 0, // Use dynamic top value
                  // left: imagePositions[currentImageIndex]?.left || 0, // Use dynamic left value
                  opacity: isHovered ? "1" : "0.99",
                }}
              />
            </div>
          </Box>

          {/* Text Section */}
          <Box
            textAlign={{ base: "center", md: "left" }}
            w="full"
            maxW={{ lg: "50%" }}
          >
            <Heading
              fontFamily=""
              as="h1"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl", "2xl": "5xl" }}
              fontWeight="bold"
              mb={4}
            >
              Unmatched Protection, Unbeatable Shine with Camio PPF
            </Heading>
            <Text mb={6} fontSize={{ base: "md", md: "md" }}>
              Shield your vehicle with CAMIO's top-tier Paint Protection Film,
              trusted by professionals worldwide.
            </Text>
            <Link href={"/products"}>
              <Box className="flex justify-center md:block">
                <Button2>Explore Our Products</Button2>
              </Box>
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;
