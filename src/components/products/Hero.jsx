import React from 'react';
import { Box, Flex, Heading, Text, Button,  Stack } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import heroimg from '../../assets/camio.png'
import Button2 from '../props/Button2';


const Hero = () => {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      p={{ base: 4, md: 8 }}
      bg="white"
      rounded="xl"
     width={'full'}
     px={{lg:20}}
 
      maxW={{'2xl':"1200px"}} // Max width for large displays
     
    >
      <Stack
        spacing={6}
        maxW={{ base: '100%', md: '50%' }}
        align={{ base: 'center', md: 'flex-start' }}
        textAlign={{ base: 'center', md: 'left' }}
        p={{base:4}}
        
      >
        <Heading
          as="h1"
          fontSize={{ base: '3xl', md: '4xl', lg:'5xl' }}
          fontWeight="bold"
        >
          Explore CAMIO PPF:
          <br />
          Choose the Perfect Protection for Your Vehicle
        </Heading>
        <Text
         border={'1px solid'}
         borderColor={'#BFBFBF'}
          fontSize="md"
          px={4}
          py={2}
          rounded="lg"
          display="inline-block"
        >
          “Unparalleled Protection with CAMIO TPU and TPH Series”
        </Text>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
       <strong style={{ color: 'black' }}>At CAMIO</strong>, we offer two premium Paint Protection Film (PPF) series—TPU and TPH—designed to meet different needs and budgets. Both series deliver top-tier protection and aesthetic enhancement, while preserving your vehicle’s paint. Whether you want the flexibility of TPU or the affordability of TPH, CAMIO has you covered.
    </Text>
        <Button2>
          Who We Are
        </Button2>
      </Stack>

      <Box
        boxSize={{ base: '100%', md: '50%' }}
        mt={{ base: 8, md: 0 }}
        p={4}
        rounded="2xl"
        overflow="hidden"
        className='flex justify-center'
        
      >
        <Image
          src={heroimg} // Replace with actual image path
          alt="CAMIO PPF Showcase"
          objectFit="cover"
          rounded="2xl"
          boxShadow="md"
          width={500}
          height={500}
          
        />
      </Box>
    </Flex>
  );
};

export default Hero;
