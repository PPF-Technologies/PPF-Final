import React from "react";
import ProductProp from "../props/ProductProp";
import Image from "next/image";
import {
  Box,
  Heading,
  Button,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi";
import whycamio1 from "../../assets/whyCamio1.png";
// import tpuSeries1 from "../../assets/tpuSeries1.png";
// import tpuSeries2 from "../../assets/tpuSeries2.png";
// import tpuSeries3 from "../../assets/tpuSeries3.png";
// import tpuSeries4 from "../../assets/tpuSeries4.png";

const WhyCamio = ({ products }) => {
  const features = [
    {
      title: "Superior Protection, Stunning Finish",
      description:
        "Engineered to shield and elevate your vehicle's appearance effortlessly.",
    },
    {
      title: "Precision-Crafted for Maximum Durability",
      description:
        "CAMIO PPF ensures lasting protection and an impeccable look for every journey.",
    },
  ];

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
      <h1>CAMIO Series</h1>
      <ProductProp
        imageSrc={whycamio1}
        title="CAMIO Elite TPU Protection Series"
        description="When it comes to safeguarding your vehicle’s paintwork, CAMIO PPF stands out as the ultimate solution."
        features={features}
        flexDirection="reverse-flex"
      />
      <Box
        width="100vw"
        p={4}
        bgGradient="linear(to-r, rgba(158, 194, 194, 0.2) 21.17%, rgba(213, 203, 159, 0.2) 91.44%)"
        position="relative"
        left="50%"
        right="50%"
        transform="translateX(-50%)"
      >
        <Heading as="h1" size="xl" textAlign="center" mb={8}>
          Available Products in TPU Series
        </Heading>

        <Flex justify="center" wrap="wrap" p={1}>
          {products.map((product) => (
            <Box
              key={product.id}
              borderWidth="1px"
              borderRadius="20px"
              overflow="hidden"
              bg="#FFFFFF"
              transition="box-shadow 0.3s"
              m={2}
              maxW="300px"
            >
              <Box className="aspect-square overflow-hidden p-5">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="responsive"
                  width={400}
                  height={400}
                  objectFit="cover"
                />
              </Box>

              <VStack spacing={5} p={5} align="start">
                <Heading fontSize="24px" fontWeight="700" pb={2}>
                  {product.name}
                </Heading>

                <Popover>
                  <PopoverTrigger>
                    <Button
                      variant="outline"
                      colorScheme="gray"
                      width="full"
                      rightIcon={<HiChevronDown />}
                    >
                      See Details
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>{product.name}</PopoverHeader>
                    <PopoverBody>{product.details}</PopoverBody>
                    <PopoverFooter>
                      <Button variant="outline" colorScheme="blue" width="full">
                        Close
                      </Button>
                    </PopoverFooter>
                  </PopoverContent>
                </Popover>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};
export default WhyCamio;
