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
    <Box width="100vw" height="auto">
      <Flex direction="column" align="center" justify="center" minHeight="100vh">
        <Box maxW={{ "2xl": "1500px" }} mx={{ "2xl": "auto" }}>
          <ProductProp
            imageSrc={whycamio1}
            title="CAMIO Elite TPU Protection Series"
            description="When it comes to safeguarding your vehicle’s paintwork, CAMIO PPF stands out as the ultimate solution."
            features={features}
            flexDirection="reverse-flex"
          />
        </Box>

        <Box
          width="100%"
          p={4}
          bgGradient="linear(to-r, rgba(158, 194, 194, 0.2) 21.17%, rgba(213, 203, 159, 0.2) 91.44%)"
          position="relative"
        >
          <Heading as="h1" size="xl" textAlign="center" mb={8}>
            Available Products in TPU Series
          </Heading>

          <Flex justify="center" wrap="wrap" gap={0} p={1}>
            {products.map((product) => (
              <Box
                key={product.id}
                width="310px"
                height="399px"
                borderWidth="1px"
                borderRadius="20px 20px 20px 20px"
                overflow="hidden"
                bg="#FFFFFF"
                transition="box-shadow 0.3s"
                m={2}
              >
                <Flex direction="column" height="100%">
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

                  <VStack spacing={5} p={5} align="start" flex="1">
                    <Heading fontSize="24px" fontWeight="700" pb={2}>
                      {product.name}
                    </Heading>
                  </VStack>

                  <Popover>
                    <PopoverTrigger>
                      <Flex justify="center" pb={4}>
                        <Button
                          variant="outline"
                          colorScheme="gray"
                          width="262px"
                          rightIcon={<HiChevronDown />}
                        >
                          See Details
                        </Button>
                      </Flex>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader>{product.name}</PopoverHeader>
                      <PopoverBody>{product.details}</PopoverBody>
                      <PopoverFooter>
                        {/* <Button variant="outline" colorScheme="blue" width="full">
                          Close
                        </Button> */}
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyCamio;
