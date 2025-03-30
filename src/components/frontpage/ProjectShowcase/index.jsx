import React from 'react';
import { motion } from 'framer-motion';
import { Heading, chakra, Flex, Box, Text } from '@chakra-ui/react';

const MotionBox = motion(chakra.div);

const projects = [
  {
    title: "Kigaluxe Web Application",
    description: "Kigaluxe is a web application that provides a platform for users to explore and book luxury accommodations in Kigali, Rwanda. The application features a user-friendly interface, and advanced search options.",
    imageUrl: "https://d1frnxkutzpamu.cloudfront.net/utils/gammageeks/kigaluxe.png",
    stack: "UI/UX, React, Node.js",
  },
  {
    title: "Tura Estate Web Application",
    description: "Tura Estate is a web application that offers a comprehensive solution for real estate management. It allows users to list properties, manage bookings, and communicate with potential buyers or renters.",
    imageUrl: "https://tura-s3.s3.af-south-1.amazonaws.com/utils/gammageeks/tura.png",
    stack: "UI/UX, React, Node.js",
  },
];

const ProjectShowcase = () => {
  return (
    <Flex id='projects' className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <Box
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundColor: "purple",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 backdrop-blur-sm" />
      </Box>

      {/* Content */}
      <Box w="100%" className="relative z-10">
        <MotionBox
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          marginY={{ base: "24", md: "18", lg: "16" }}
          paddingX={{ base: "8", md: "32" }}
          paddingTop={{ base: "8", md: "16" }}
          display="flex"
          flexDirection="column"
        >
          <Heading as="h4" className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400' fontWeight="bold" textStyle="5xl">
            Our Digital <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400'> Services & Solutions</span>
          </Heading>
          <Text className="text-sm font-playfair font-semibold md:text-xl lg:text-2xl text-center lg:text-left">
            Our goal is to build strong relationships with our clients by earning their trust and satisfaction. We strive to provide exceptional service that makes them feel valued and appreciated.
          </Text>
        </MotionBox>
        <Box
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          paddingX={{ base: "8", md: "32" }}
          paddingBottom={{ base: "8", md: "16" }}
        >
          {
            projects.map((project, index) => (
              <MotionBox
                className="flex flex-col items-center justify-center p-4 md:p-8"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box className="flex-1">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover rounded-lg shadow-lg" />
                </Box>
                <Box className="flex-1 space-y-4">
                  <Heading className="font-montserrat" as="h4" fontWeight="bold" fontSize="2xl" marginY="4" color="white">
                    {project.title}
                  </Heading>
                  <Text className="text-base font-semibold md:text-lg lg:text-xl text-gray-300" marginY="2">
                    {project.description}
                  </Text>
                  <Text className="text-sm md:text-base lg:text-lg text-gray-400 italic">
                    Tech Stack: {project.stack}
                  </Text>
                </Box>
              </MotionBox>
            )
          )}
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectShowcase;