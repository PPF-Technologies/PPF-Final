import React from "react";
import { Stack, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import Image from "next/image";

const ProductProp = ({
  imageSrc,
  title,
  description,
  features,
  children,
  flexDirection = "flex",
}) => {
  return (
    <div className="max-w-full mx-auto p-4 md:p-8">
      <Card overflow="hidden" boxShadow="none" border="none">
        <div
          className={`md:flex flex-col ${
            flexDirection === "reverse-flex"
              ? "md:flex-row-reverse"
              : "md:flex-row"
          } gap-6 md:gap-8`}
        >
          {/* Image Section */}
          <div className="p-4 flex justify-center items-center w-full md:w-1/2">
            <Image
              src={imageSrc}
              alt="Luxury SUV with protection film"
              width={560}
              height={446}
              className="w-full h-auto"
            />
          </div>

          {/* Content Section */}
          <Stack
            spacing={6}
            justify="center"
            maxW={{ base: "100%", md: "50%" }}
            // align={{ base: "center", md: "flex-start" }}
            textAlign="left"
            p={{ base: 4 }}
          >
            <CardHeader padding="0">
              <Heading
                as="h2"
                fontSize={{ base: "28px", md: "36px", lg: "42px" }}
                fontWeight="700"
                textAlign="left"
                mb={{ base: "18px", md: "24px" }}
              >
                {title}
              </Heading>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "1.6",
                  textAlign: "left",
                  marginBottom: "36px",
                }}
              >
                {description}
              </p>
            </CardHeader>
            <CardBody padding="0">
              <div className="space-y-8 flex flex-col">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="pt-2">
                      <HiOutlineCheckCircle
                        className="text-[#007660]"
                        size={24}
                      />
                    </div>
                    <div>
                      <Heading
                        fontSize={{ base: "20px", md: "24px", lg: "30px" }}
                        fontWeight="500"
                        mb="24px"
                      >
                        {feature.title}
                      </Heading>
                      <p
                        style={{
                          fontSize: "16px",
                          fontWeight: 400,
                          lineHeight: "1.6",
                        }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
                {children}
              </div>
            </CardBody>
          </Stack>
        </div>
      </Card>
    </div>
  );
};

export default ProductProp;
