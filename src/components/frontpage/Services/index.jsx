import { Button } from '../../ui/button'
import { motion } from 'framer-motion'
import { Box, Flex, Heading, Stack, Text, chakra } from '@chakra-ui/react'
import React from 'react'

const MotionBox = motion(chakra.div);

// Service Card Component
const ServiceCard = ({ icon, title, description, delay }) => (
  <Box paddingY="5" paddingX="2" className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/3 hover:bg-[#ac684b] hover:text-black hover:rounded-md hover:scale-105">
    <Box gapY="5" className="wow fadeInUp group mb-12 text-center flex flex-col items-center" data-wow-delay={delay}>
      
      {/* Icon Container */}
      <Box className="relative z-10 mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-purple-200 text-purple-600de mx-auto">
        <span className="absolute inset-0 -z-[1] flex items-center justify-center rounded-xl bg-purple-700 bg-opacity-20 rotate-25 transition-transform duration-300 group-hover:rotate-45" />
        {icon}
      </Box>

      {/* Title */}
      <Heading as="h2" size="md" className="mb-2 text-lg font-semibold text-center" fontWeight="bold" colorPalette="teal">
        {title}
      </Heading>

      {/* Description */}
      <Text size="sm" className="mb-4 text-body-color dark:text-dark-6 text-center max-w-[280px]">
        {description}
      </Text>

      {/* Learn More Link */}
      <Button className="text-sm font-medium text-dark transition-colors hover:text-purple-600 dark:text-white dark:hover:text-purple-600 inline-block">
        Learn More →
      </Button>
      
    </Box>
  </Box>
)

// Service Icons Components
const ServiceIcons = {
  CustomSoftware: () => (
    <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.5613 2.89264H5.43883C3.80758 2.89264 2.45758 4.24264 2.45758 5.87389V25.6489C2.45758 27.2801 3.80758 28.6301 5.43883 28.6301H14.4388L12.4701 33.4926C12.2451 34.0551 12.4701 34.7301 13.0326 35.0114C13.2013 35.0676 13.3701 35.1239 13.5388 35.1239C13.9326 35.1239 14.3263 34.9551 14.5513 34.6176L17.2513 28.6301H19.7488L22.4488 34.6176C22.6738 34.9551 23.0676 35.1239 23.4613 35.1239C23.6301 35.1239 23.7988 35.0676 23.9676 35.0114C24.5301 34.7301 24.7551 34.0551 24.5301 33.4926L22.5613 28.6301H31.5613C33.1926 28.6301 34.5426 27.2801 34.5426 25.6489V5.87389C34.5426 4.24264 33.1926 2.89264 31.5613 2.89264ZM31.5613 25.6489H5.43883V5.87389H31.5613V25.6489Z" fill="white"/>
      <path d="M11.6238 9.47389C10.7801 8.68639 9.43008 8.68639 8.58633 9.47389L8.47383 9.58639C7.63008 10.3739 7.63008 11.7239 8.47383 12.5114L12.4701 16.2239L8.47383 19.9364C7.63008 20.7239 7.63008 22.0739 8.47383 22.8614L8.58633 22.9739C9.43008 23.7614 10.7801 23.7614 11.6238 22.9739L16.7426 18.1676C17.5863 17.3801 17.5863 16.0301 16.7426 15.2426L11.6238 9.47389Z" fill="white"/>
      <path d="M28.5238 19.8239H19.5238C18.3988 19.8239 17.4988 20.7239 17.4988 21.8489C17.4988 22.9739 18.3988 23.8739 19.5238 23.8739H28.5238C29.6488 23.8739 30.5488 22.9739 30.5488 21.8489C30.5488 20.7239 29.6488 19.8239 28.5238 19.8239Z" fill="white"/>
    </svg>
  ),
  // MobileApp: () => (
  //   <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <path d="M25.5613 2.89264H11.4388C9.80758 2.89264 8.45758 4.24264 8.45758 5.87389V31.1239C8.45758 32.7551 9.80758 34.1051 11.4388 34.1051H25.5613C27.1926 34.1051 28.5426 32.7551 28.5426 31.1239V5.87389C28.5426 4.24264 27.1926 2.89264 25.5613 2.89264ZM25.5613 29.6301H11.4388V7.34889H25.5613V29.6301Z" fill="white"/>
  //     <path d="M18.5 31.1239C19.6246 31.1239 20.5375 30.211 20.5375 29.0864C20.5375 27.9618 19.6246 27.0489 18.5 27.0489C17.3754 27.0489 16.4625 27.9618 16.4625 29.0864C16.4625 30.211 17.3754 31.1239 18.5 31.1239Z" fill="white"/>
  //   </svg>
  // ),
  // WebDev: () => (
  //   <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <path d="M31.5613 4.89264H5.43883C3.80758 4.89264 2.45758 6.24264 2.45758 7.87389V29.1239C2.45758 30.7551 3.80758 32.1051 5.43883 32.1051H31.5613C33.1926 32.1051 34.5426 30.7551 34.5426 29.1239V7.87389C34.5426 6.24264 33.1926 4.89264 31.5613 4.89264Z" fill="white"/>
  //     <path d="M11.6238 13.4739L15.7426 18.1676L11.6238 22.8614C11.2301 23.2551 11.2301 23.8739 11.6238 24.2676C12.0176 24.6614 12.6363 24.6614 13.0301 24.2676L17.7426 19.5551C18.1363 19.1614 18.1363 18.5426 17.7426 18.1489L13.0301 13.4364C12.6363 13.0426 12.0176 13.0426 11.6238 13.4364C11.2301 13.8301 11.2301 14.4489 11.6238 14.8426" fill="white"/>
  //     <path d="M25.3738 22.8239H19.3738C18.8113 22.8239 18.3613 23.2739 18.3613 23.8364C18.3613 24.3989 18.8113 24.8489 19.3738 24.8489H25.3738C25.9363 24.8489 26.3863 24.3989 26.3863 23.8364C26.3863 23.2739 25.9363 22.8239 25.3738 22.8239Z" fill="white"/>
  //   </svg>
  // ),
  Cloud: () => (
    <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.5613 14.8926C28.5613 10.2364 24.8051 6.48014 20.1488 6.48014C16.7738 6.48014 13.9051 8.44889 12.6676 11.2614C8.84258 11.7676 5.89258 15.0614 5.89258 19.0551C5.89258 23.3801 9.39258 26.8801 13.7176 26.8801H27.8863C31.2613 26.8801 34.0176 24.1239 34.0176 20.7489C34.0176 17.5926 31.5763 15.0051 28.5613 14.8926ZM27.8863 23.8989H13.7176C11.0176 23.8989 8.87383 21.7551 8.87383 19.0551C8.87383 16.4114 10.9613 14.2676 13.6051 14.2114C14.1676 14.2114 14.6176 13.8176 14.7301 13.2551C15.4613 10.6676 17.6551 9.46139 20.1488 9.46139C23.1638 9.46139 25.5488 11.8464 25.5488 14.8614C25.5488 15.4239 25.9988 15.8739 26.5613 15.8739C29.0551 15.8739 31.0363 17.8551 31.0363 20.3489C31.0363 22.8426 29.6301 23.8989 27.8863 23.8989Z" fill="white"/>
    </svg>
  ),
  DataAnalytics: () => (
    <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.5613 4.89264H5.43883C3.80758 4.89264 2.45758 6.24264 2.45758 7.87389V29.1239C2.45758 30.7551 3.80758 32.1051 5.43883 32.1051H31.5613C33.1926 32.1051 34.5426 30.7551 34.5426 29.1239V7.87389C34.5426 6.24264 33.1926 4.89264 31.5613 4.89264ZM5.43883 29.1239V7.87389H31.5613V29.1239H5.43883Z" fill="white"/>
      <path d="M9.43883 24.1239H11.4388V19.1239C11.4388 18.5614 11.8888 18.1114 12.4513 18.1114H15.4388V14.1239C15.4388 13.5614 15.8888 13.1114 16.4513 13.1114H19.4388V11.1239C19.4388 10.5614 19.8888 10.1114 20.4513 10.1114H27.4388C28.0013 10.1114 28.4513 10.5614 28.4513 11.1239V24.1239H30.4513C31.0138 24.1239 31.4638 24.5739 31.4638 25.1364C31.4638 25.6989 31.0138 26.1489 30.4513 26.1489H9.43883C8.87633 26.1489 8.42633 25.6989 8.42633 25.1364C8.42633 24.5739 8.87633 24.1239 9.43883 24.1239Z" fill="white"/>
    </svg>
  ),
  Consulting: () => (
    <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.5613 4.89264H5.43883C3.80758 4.89264 2.45758 6.24264 2.45758 7.87389V29.1239C2.45758 30.7551 3.80758 32.1051 5.43883 32.1051H31.5613C33.1926 32.1051 34.5426 30.7551 34.5426 29.1239V7.87389C34.5426 6.24264 33.1926 4.89264 31.5613 4.89264Z" fill="white"/>
      <path d="M18.5 8.89264C13.8438 8.89264 10.0313 12.7051 10.0313 17.3614C10.0313 19.6114 10.9313 21.6364 12.4500 23.1551L11.2125 27.3614C11.1000 27.8114 11.3250 28.2614 11.7750 28.4301C11.9438 28.4864 12.1125 28.4864 12.2813 28.4301L16.4875 27.1926C17.1625 27.4176 17.8375 27.5864 18.5688 27.6989C23.2250 27.6989 27.0375 23.8864 27.0375 19.2301C27.0375 14.5739 23.1688 8.89264 18.5 8.89264Z" fill="white"/>
    </svg>
  ),
  GraphicDesign: () => (
    <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.5613 4.89264H6.43883C4.80758 4.89264 3.45758 6.24264 3.45758 7.87389V29.1239C3.45758 30.7551 4.80758 32.1051 6.43883 32.1051H30.5613C32.1926 32.1051 33.5426 30.7551 33.5426 29.1239V7.87389C33.5426 6.24264 32.1926 4.89264 30.5613 4.89264Z" fill="white"/>
      <path d="M27.5613 11.8926C27.5613 13.5239 26.2113 14.8739 24.5801 14.8739C22.9488 14.8739 21.5988 13.5239 21.5988 11.8926C21.5988 10.2614 22.9488 8.91139 24.5801 8.91139C26.2113 8.91139 27.5613 10.2614 27.5613 11.8926Z" fill="white"/>
      <path d="M29.5613 24.8926L23.5613 18.8926L19.5613 22.8926L13.5613 16.8926L7.56131 24.8926V27.8926H29.5613V24.8926Z" fill="white"/>
    </svg>
  ),
  Photography: () => (
    <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.5613 9.89264H26.5613L24.5613 7.89264H16.5613L14.5613 9.89264H5.43883C3.80758 9.89264 2.45758 11.2426 2.45758 12.8739V27.1239C2.45758 28.7551 3.80758 30.1051 5.43883 30.1051H31.5613C33.1926 30.1051 34.5426 28.7551 34.5426 27.1239V12.8739C34.5426 11.2426 33.1926 9.89264 31.5613 9.89264Z" fill="white"/>
      <path d="M18.5 13.8926C15.1875 13.8926 12.5 16.5801 12.5 19.8926C12.5 23.2051 15.1875 25.8926 18.5 25.8926C21.8125 25.8926 24.5 23.2051 24.5 19.8926C24.5 16.5801 21.8125 13.8926 18.5 13.8926ZM18.5 23.8926C16.2938 23.8926 14.5 22.0989 14.5 19.8926C14.5 17.6864 16.2938 15.8926 18.5 15.8926C20.7063 15.8926 22.5 17.6864 22.5 19.8926C22.5 22.0989 20.7063 23.8926 18.5 23.8926Z" fill="white"/>
    </svg>
  )
}

// Services Data
const servicesData = [
  {
    icon: <ServiceIcons.CustomSoftware />,
    title: "Custom Software Development",
    description: "We build custom software that streamlines operations, enhances user experience, and grows with your business.",
    delay: ".1s"
  },
  // {
  //   icon: <ServiceIcons.MobileApp />,
  //   title: "Mobile App Development",
  //   description: "We develop intuitive, feature-rich mobile apps for iOS and Android, guiding you from idea to launch.",
  //   delay: ".15s"
  // },
  // {
  //   icon: <ServiceIcons.WebDev />,
  //   title: "Web Development",
  //   description: "We create responsive, secure, and visually stunning websites that elevate your brand and engage your audience.",
  //   delay: ".2s"
  // },
  {
    icon: <ServiceIcons.Cloud />,
    title: "Cloud Solutions & Migration",
    description: "We provide secure, scalable cloud solutions and seamless migration services, minimizing downtime and maximizing performance.",
    delay: ".25s"
  },
  {
    icon: <ServiceIcons.DataAnalytics />,
    title: "Data Analytics & AI Integration",
    description: "We integrate analytics and AI to deliver actionable insights, optimize operations, and drive business growth.",
    delay: ".1s"
  },
  {
    icon: <ServiceIcons.Consulting />,
    title: "IT Consulting & Strategy",
    description: "Our consulting services offer expert guidance to help you define, plan, and execute a tech roadmap that aligns with your business goals.",
    delay: ".15s"
  },
  {
    icon: <ServiceIcons.GraphicDesign />,
    title: "Graphic Design",
    description: "We craft visually compelling designs, from logos to full brand kits, that effectively communicate your message and leave a lasting impression.",
    delay: ".2s"
  },
  {
    icon: <ServiceIcons.Photography />,
    title: "Photography",
    description: "Capture your audience’s attention with high-quality photography that tells a powerful story, whether for products, events, or lifestyle shots.",
    delay: ".25s"
  }
]

function Services() {
  return (
    <>
      <Flex id='services' className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <Box
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundColor: "darkgray",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box className="absolute inset-0 bg-gd-services backdrop-blur-sm" />
        </Box>

        {/* Content */}
        <Box w="100%" className="relative z-10">
          <Box
            className='-mx-4 flex flex-wrap items-center'
            paddingX={{ base: "8", md: "32" }}
            paddingBottom={{ base: "8", md: "16", lg: "16" }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <MotionBox
              className="w-full px-4 lg:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Text className='bg-clip-text text-transparent text-center md:text-start bg-gradient-to-r from-blue-400 via-green-500 to-purple-400' fontWeight="bold" textStyle="5xl">
                Our Services
              </Text>
              <p className="text-sm font-playfair font-semibold md:text-xl lg:text-2xl text-center lg:text-left">
                We provide a diverse range of services tailored to meet your specific needs. From design to development, we deliver impactful solutions that drive your business forward. Let us help you reach your goals with our expertise and innovative approach.
              </p>
            </MotionBox>
            <MotionBox
              className='w-full px-4 lg:w-2/3'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Box className="flex flex-wrap">
                {servicesData.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    delay={service.delay}
                  />
                ))}
              </Box>
            </MotionBox>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default Services
