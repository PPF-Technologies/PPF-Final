import React from 'react'
import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Text, Box, Heading,
  ListItem, UnorderedList,
} from '@chakra-ui/react'
import Image from 'next/image'
import camio from '@/assets/camio.png'

const productData = [
  {
    series: 'Camio TPU Series',
    products: [
      {
        title: 'Camio TPU Clear Gloss',
        image: camio,
        description: 'CAMIO TPU Clear Gloss offers premium paint protection with an ultra-high gloss finish. Ideal for luxury vehicles, it enhances the natural shine of the paintwork while providing superior protection against scratches, road debris, and environmental elements.',
        details: {
          keyFeatures: ["Ultra-gloss finish for enhanced shine.",
            "Self-healing technology for minor scratches.",
            "Ultra-gloss finish for enhanced shine.",
            "Ultra-gloss finish for enhanced shine.",
            "Ultra-gloss finish for enhanced shine.",
            "Ultra-gloss finish for enhanced shine."],
          usages: ['Usage 1', 'Usage 2', 'Usage 3', 'Usage 4'],
          specifications: ["Ultra-gloss finish for enhanced shine.",
            "Self-healing technology for minor scratches.",
            "Ultra-gloss finish for enhanced shine.",
            "Ultra-gloss finish for enhanced shine.",
            "Ultra-gloss finish for enhanced shine.",
            "Ultra-gloss finish for enhanced shine."]
        }
      },

    ]
  },
  {
    series: 'Camio TPH Series',
    products: [
      {
        title: 'Camio TPH Clear Gloss',
        image: camio,
        description: 'The CAMIO TPH (Thermoplastic Hybrid) Series offers a budget-friendly solution without compromising on essential features. Perfect for those who seek reliable protection at an accessible price, the TPH series combines a high-gloss or matte finish with self-healing and hydrophobic properties. Each product in the TPH series comes with a 3-year warranty, offering excellent value for money.',
        details: {
          keyFeatures: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
          usages: ['Usage 1', 'Usage 2', 'Usage 3', 'Usage 4'],
          specifications: ['Spec 1', 'Spec 2', 'Spec 3', 'Spec 4', 'Spec 5']
        }
      },

    ]
  }
];

const ProductsTab = () => {

  return (
    <div className='lg:px-24'>
      <Tabs maxW={{ '2xl': '1500px' }} mx={{ '2xl': 'auto' }}>
        <TabList
          justifyContent="center"
          borderBottomWidth="0" // Removes default full-width bottom border
        >
          {productData.map((tab, index) => (
            <Tab
              fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }} fontWeight={'semibold'}
              key={index}
              _selected={{ borderBottom: '2px solid', borderColor: 'black' }} // Customizes selected tab border
            >
              {tab.series}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {productData.map((tab, index) => (
            <TabPanel key={index}>
              {tab.products.map((product, productIndex) => (
                <Flex
                  key={productIndex}
                  mb={8}
                  alignItems="center"
                  direction={{ base: 'column', md: 'row' }} // Stack on small screens, row on larger
                >
                  <Box width={{ base: '100%', md: '50%' }} padding={{ base: 4, md: 8, lg: 16, '2xl': 28 }}>
                    <Image
                      src={product.image}
                      alt="Product image"
                      width={{ base: '100%', md: 500 }}
                      height={{ base: 'auto', md: 500 }}

                    />
                  </Box>
                  <Box height={'620px'} width={{ base: '100%', md: '50%' }} padding={{ base: 4, md: 8 }}>
                    <Heading
              fontFamily="" as="h3" py={{ base: 2, md: 4 }} fontSize={{ base: 'lg', md: '2xl', lg: '4xl' }}>
                      {product.title}
                    </Heading>
                    <Text py={{ base: 2, md: 4 }} fontSize={{ base: 'sm', md: 'md' }}>
                      {product.description}
                    </Text>
                    <Tabs>
                      <TabList>
                        <Tab py={{ base: 3, md: 6 }}>Key Features</Tab>
                        <Tab py={{ base: 3, md: 6 }}>Usages</Tab>
                        <Tab py={{ base: 3, md: 6 }}>Specifications</Tab>
                      </TabList>
                      <TabPanels height="230px" overflowY={'auto'}>
                        <TabPanel>
                          <UnorderedList>
                            {product.details.keyFeatures.map((feature, i) => (
                              <ListItem py={1} key={i} fontSize={{ base: 'sm', md: 'md' }}>
                                {feature}
                              </ListItem>
                            ))}
                          </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                          <UnorderedList>
                            {product.details.usages.map((usage, i) => (
                              <ListItem py={1} key={i} fontSize={{ base: 'sm', md: 'md' }}>
                                {usage}
                              </ListItem>
                            ))}
                          </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                          <UnorderedList>
                            {product.details.specifications.map((spec, i) => (
                              <ListItem py={1} key={i} fontSize={{ base: 'sm', md: 'md' }}>
                                {spec}
                              </ListItem>
                            ))}
                          </UnorderedList>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </Box>
                </Flex>
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>


    </div>
  )
}

export default ProductsTab
