import { Button } from '../../ui/button'
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'

// Service Card Component
const ServiceCard = ({ icon, title, description, delay }) => (
  <Box paddingY="5" paddingX="2" className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4 hover:bg-purple-400 hover:text-black hover:rounded-md hover:scale-105">
    <Box gapY="5" className="wow fadeInUp group mb-12 text-center flex flex-col items-center" data-wow-delay={delay}>
      
      {/* Icon Container */}
      <Box className="relative z-10 mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-xl bg-purple-200 text-purple-600 mx-auto">
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
      <path d="M30.5801 8.30514H27.9926C28.6113 7.85514 29.1176 7.34889 29.3426 6.73014C29.6801 5.88639 29.6801 4.48014 27.9363 2.84889C26.0801 1.04889 24.3926 1.04889 23.3238 1.33014C20.9051 1.94889 19.2738 4.76139 18.3738 6.78639C17.4738 4.76139 15.8426 2.00514 13.4238 1.33014C12.3551 1.04889 10.6676 1.10514 8.81133 2.84889C7.06758 4.53639 7.12383 5.88639 7.40508 6.73014C7.63008 7.34889 8.13633 7.85514 8.75508 8.30514H5.71758C4.08633 8.30514 2.73633 9.65514 2.73633 11.2864V14.9989C2.73633 16.5739 4.03008 17.8676 5.60508 17.9239V31.6489C5.60508 33.5614 7.18008 35.1926 9.14883 35.1926H27.5426C29.4551 35.1926 31.0863 33.6176 31.0863 31.6489V17.8676C32.4926 17.6426 33.5613 16.4051 33.5613 14.9426V11.2301C33.5613 9.59889 32.2113 8.30514 30.5801 8.30514ZM23.9426 3.69264C23.9988 3.69264 24.1676 3.63639 24.3363 3.63639C24.7301 3.63639 25.3488 3.80514 26.1926 4.59264C26.8676 5.21139 27.0363 5.66139 26.9801 5.77389C26.6988 6.56139 23.8863 7.40514 20.6801 7.74264C21.4676 5.99889 22.6488 4.03014 23.9426 3.69264ZM10.4988 4.64889C11.3426 3.86139 11.9613 3.69264 12.3551 3.69264C12.5238 3.69264 12.6363 3.74889 12.7488 3.74889C14.0426 4.08639 15.2801 5.99889 16.0676 7.79889C12.8613 7.46139 10.0488 6.61764 9.76758 5.83014C9.71133 5.66139 9.88008 5.26764 10.4988 4.64889Z" fill="white" />
    </svg>
  ),
  MobileApp: () => (
    <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.5998 1.01245H5.39981C2.98105 1.01245 0.956055 2.9812 0.956055 5.4562V30.6562C0.956055 33.075 2.9248 35.0437 5.39981 35.0437H30.5998C33.0186 35.0437 34.9873 33.075 34.9873 30.6562V5.39995C34.9873 2.9812 33.0186 1.01245 30.5998 1.01245ZM5.39981 3.48745H30.5998C31.6123 3.48745 32.4561 4.3312 32.4561 5.39995V11.1937H3.4873V5.39995C3.4873 4.38745 4.38731 3.48745 5.39981 3.48745ZM3.4873 30.6V13.725H23.0623V32.5125H5.39981C4.38731 32.5125 3.4873 31.6125 3.4873 30.6ZM30.5998 32.5125H25.5373V13.725H32.4561V30.6C32.5123 31.6125 31.6123 32.5125 30.5998 32.5125Z" fill="white" />
    </svg>
  ),
  WebDev: () => (
    <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.5613 21.4677L31.3675 20.1177C30.805 19.7239 30.0175 19.9489 29.6238 20.5114C29.23 21.1302 29.455 21.8614 30.0175 22.2552L31.48 23.2114L18.1488 31.5927L4.76127 23.2114L6.22377 22.2552C6.84252 21.8614 7.01127 21.0739 6.61752 20.5114C6.22377 19.8927 5.43627 19.7239 4.87377 20.1177L2.68002 21.4677C2.11752 21.8614 1.72377 22.4802 1.72377 23.1552C1.72377 23.8302 2.06127 24.5052 2.68002 24.8427L17.08 33.8989C17.4175 34.1239 17.755 34.1802 18.1488 34.1802C18.5425 34.1802 18.88 34.0677 19.2175 33.8989L33.5613 24.8989C34.1238 24.5052 34.5175 23.8864 34.5175 23.2114C34.5175 22.5364 34.18 21.8614 33.5613 21.4677Z" fill="white" />
      <path d="M20.1175 20.4552L18.1488 21.6364L16.18 20.3989C15.5613 20.0052 14.83 20.2302 14.4363 20.7927C14.0425 21.4114 14.2675 22.1427 14.83 22.5364L17.4738 24.1677C17.6988 24.2802 17.9238 24.3364 18.1488 24.3364C18.3738 24.3364 18.5988 24.2802 18.8238 24.1677L21.4675 22.5364C22.0863 22.1427 22.255 21.3552 21.8613 20.7927C21.4675 20.2302 20.68 20.0614 20.1175 20.4552Z" fill="white" />
      <path d="M7.74252 18.0927L11.455 20.4552C11.68 20.5677 11.905 20.6239 12.13 20.6239C12.5238 20.6239 12.9738 20.3989 13.1988 20.0052C13.5925 19.3864 13.3675 18.6552 12.805 18.2614L9.09252 15.8989C8.47377 15.5052 7.74252 15.7302 7.34877 16.2927C6.95502 16.9677 7.12377 17.7552 7.74252 18.0927Z" fill="white" />
    </svg>
  ),
  Cloud: () => (
    <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.355 2.0614H5.21129C3.29879 2.0614 1.72379 3.6364 1.72379 5.5489V12.6927C1.72379 14.6052 3.29879 16.1802 5.21129 16.1802H12.355C14.2675 16.1802 15.8425 14.6052 15.8425 12.6927V5.60515C15.8988 3.6364 14.3238 2.0614 12.355 2.0614ZM13.3675 12.7489C13.3675 13.3114 12.9175 13.7614 12.355 13.7614H5.21129C4.64879 13.7614 4.19879 13.3114 4.19879 12.7489V5.60515C4.19879 5.04265 4.64879 4.59265 5.21129 4.59265H12.355C12.9175 4.59265 13.3675 5.04265 13.3675 5.60515V12.7489Z" fill="white" />
      <path d="M31.0863 2.0614H23.9425C22.03 2.0614 20.455 3.6364 20.455 5.5489V12.6927C20.455 14.6052 22.03 16.1802 23.9425 16.1802H31.0863C32.9988 16.1802 34.5738 14.6052 34.5738 12.6927V5.60515C34.5738 3.6364 32.9988 2.0614 31.0863 2.0614ZM32.0988 12.7489C32.0988 13.3114 31.6488 13.7614 31.0863 13.7614H23.9425C23.38 13.7614 22.93 13.3114 22.93 12.7489V5.60515C22.93 5.04265 23.38 4.59265 23.9425 4.59265H31.0863C31.6488 4.59265 32.0988 5.04265 32.0988 5.60515V12.7489Z" fill="white" />
    </svg>
  ),
  DataAnalytics: () => (
    <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.5613 21.4677L31.3675 20.1177C30.805 19.7239 30.0175 19.9489 29.6238 20.5114C29.23 21.1302 29.455 21.8614 30.0175 22.2552L31.48 23.2114L18.1488 31.5927L4.76127 23.2114L6.22377 22.2552C6.84252 21.8614 7.01127 21.0739 6.61752 20.5114C6.22377 19.8927 5.43627 19.7239 4.87377 20.1177L2.68002 21.4677C2.11752 21.8614 1.72377 22.4802 1.72377 23.1552C1.72377 23.8302 2.06127 24.5052 2.68002 24.8427L17.08 33.8989C17.4175 34.1239 17.755 34.1802 18.1488 34.1802C18.5425 34.1802 18.88 34.0677 19.2175 33.8989L33.5613 24.8989C34.1238 24.5052 34.5175 23.8864 34.5175 23.2114C34.5175 22.5364 34.18 21.8614 33.5613 21.4677Z" fill="white" />
    </svg>
  ),
  Consulting: () => (
    <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.5998 1.01245H5.39981C2.98105 1.01245 0.956055 2.9812 0.956055 5.4562V30.6562C0.956055 33.075 2.9248 35.0437 5.39981 35.0437H30.5998C33.0186 35.0437 34.9873 33.075 34.9873 30.6562V5.39995C34.9873 2.9812 33.0186 1.01245 30.5998 1.01245Z" fill="white" />
    </svg>
  ),
  GraphicDesign: () => (
    <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M33.5613 21.4677L31.3675 20.1177C30.805 19.7239 30.0175 19.9489 29.6238 20.5114C29.23 21.1302 29.455 21.8614 30.0175 22.2552L31.48 23.2114L18.1488 31.5927L4.76127 23.2114L6.22377 22.2552C6.84252 21.8614 7.01127 21.0739 6.61752 20.5114C6.22377 19.8927 5.43627 19.7239 4.87377 20.1177L2.68002 21.4677C2.11752 21.8614 1.72377 22.4802 1.72377 23.1552C1.72377 23.8302 2.06127 24.5052 2.68002 24.8427L17.08 33.8989C17.4175 34.1239 17.755 34.1802 18.1488 34.1802C18.5425 34.1802 18.88 34.0677 19.2175 33.8989L33.5613 24.8989C34.1238 24.5052 34.5175 23.8864 34.5175 23.2114C34.5175 22.5364 34.18 21.8614 33.5613 21.4677Z" fill="white" />
    </svg>
  ),
  Photography: () => (
    <svg width={37} height={37} viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.355 2.0614H5.21129C3.29879 2.0614 1.72379 3.6364 1.72379 5.5489V12.6927C1.72379 14.6052 3.29879 16.1802 5.21129 16.1802H12.355C14.2675 16.1802 15.8425 14.6052 15.8425 12.6927V5.60515C15.8988 3.6364 14.3238 2.0614 12.355 2.0614ZM13.3675 12.7489C13.3675 13.3114 12.9175 13.7614 12.355 13.7614H5.21129C4.64879 13.7614 4.19879 13.3114 4.19879 12.7489V5.60515C4.19879 5.04265 4.64879 4.59265 5.21129 4.59265H12.355C12.9175 4.59265 13.3675 5.04265 13.3675 5.60515V12.7489Z" fill="white" />
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
  {
    icon: <ServiceIcons.MobileApp />,
    title: "Mobile App Development",
    description: "We develop intuitive, feature-rich mobile apps for iOS and Android, guiding you from idea to launch.",
    delay: ".15s"
  },
  {
    icon: <ServiceIcons.WebDev />,
    title: "Web Development",
    description: "We create responsive, secure, and visually stunning websites that elevate your brand and engage your audience.",
    delay: ".2s"
  },
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
          <Box className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90 backdrop-blur-sm" />
        </Box>

        {/* Content */}
        <Box w="100%" className="relative z-10">
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: "8", md: "20" }}
            marginY={{ base: "20", md: "24", lg: "48" }}
            paddingX={{ base: "4", md: "8", lg: "12" }}
            align="center"
            justify="space-between"
            className="w-full"
          >
            {/* Services Header */}
            <Box direction="column" w={{ base: "100%", md: "30%" }}>
                <Text className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400' fontWeight="bold" textStyle="5xl">
                  Our Services
                </Text>
                <p className="text-sm font-playfair font-semibold md:text-xl lg:text-2xl text-center lg:text-left">
                  We provide a diverse range of services tailored to meet your specific needs. From design to development, we deliver impactful solutions that drive your business forward. Let us help you reach your goals with our expertise and innovative approach.
                </p>
            </Box>

            {/* Services Grid */}
            <Box direction="column" w={{ base: "100%", md: "70%" }} className="justify-center items-center lg:items-end lg:justify-start lg:col-span-3">
              <Box className="-mx-4 flex flex-wrap">
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
            </Box>
          </Stack>
        </Box>
      </Flex>
    </>
  )
}

export default Services
