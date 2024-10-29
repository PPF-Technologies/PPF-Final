import React from "react";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
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
    <div className="max-w-full mx-auto p-8">
      <Card overflow="hidden" boxShadow="none" border="none">
        <div
          className={`lg:flex ${flexDirection === "reverse-flex" ? "flex-row-reverse" : "flex-row"} gap-8`} 
        >
          <div className="p-6 flex items-center w-full md:w-1/2">
            <Image
              src={imageSrc}
              alt="Luxury SUV with protection film"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="p-8 w-full md:w-1/2">
            <CardHeader padding="0">
              <Heading
                as="h2"
                fontSize="42px"
                fontWeight="700"
                textAlign="left"
                mb={8}
              >
                {title}
              </Heading>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: "1.8",
                  textAlign: "left",
                  marginBottom: "32px",
                }}
              >
                {description}
              </p>
            </CardHeader>
            <CardBody padding="0">
              <div className="space-y-10 flex flex-col">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="pt-2">
                      <HiOutlineCheckCircle
                        className="text-[#007660]"
                        size={28}
                      />
                    </div>
                    <div>
                      <Heading fontSize="30px" fontWeight="500" mb={2}>
                        {feature.title}
                      </Heading>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: 400,
                          lineHeight: "1.7",
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
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductProp;
