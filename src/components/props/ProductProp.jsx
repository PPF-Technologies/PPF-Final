import React from "react";
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { HiOutlineCheckCircle } from "react-icons/hi";
import Image from "next/image";

const ProductProp = ({ imageSrc, title, description, features, children, flexDirection = "flex" }) => {
  return (
    <div className="max-w-100% mx-auto p-6">
      <Card overflow="hidden">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 flex items-center">
            <Image
              src={imageSrc}
              alt="Luxury SUV with protection film"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="p-6">
            <CardHeader padding="0">
              <Heading
                as="h2"
                fontSize="38px"
                fontWeight="700"
                textAlign="left"
                mb={6}
              >
                {title}
              </Heading>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  textAlign: "left",
                  marginBottom: "24px",
                }}
              >
                {description}
              </p>
            </CardHeader>

            <CardBody padding="0">
              <div className={`space-y-8 ${flexDirection === "reverse-flex" ? "flex-col-reverse" : "flex-col"}`}>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <HiOutlineCheckCircle
                      className="text-[#007660]"
                      size={24}
                    />
                    <div>
                      <Heading fontSize="28px" fontWeight="500">
                        {feature.title}
                      </Heading>
                      <p style={{ fontSize: "18px", fontWeight: 400 }}>
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
