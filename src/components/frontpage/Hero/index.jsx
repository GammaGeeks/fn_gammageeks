import { Button } from "../../ui/button";
import { Box, Container, Flex, Stack, Text, chakra } from "@chakra-ui/react"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from '../../../assets/logo/gammageeks2.png';
import './style.css'

const MotionBox = motion(chakra.div);

export default function Hero() {
  return (
    <Flex id='home' className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <Box 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <Box className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/90 to-black/80 backdrop-blur-none" />
      </Box>

      {/* Main Content */}
      <Box width="100%" className="relative z-10">
        <Stack 
          direction={{ base: "column", md: "row" }} 
          gap={{ base: "8", md: "10" }} 
          paddingTop={{ base: "20", md: "32", lg: "48" }} 
          align="center" 
          justify="space-between"
        >
          <HeroText w={{ base: "100%", md: "40%" }} />
          <Box display={{ base: "none", md: "block" }} w={{ base: "100%", md: "60%" }}>
            <Tablet />
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}

const Tablet = () => (
  <>
    {/* Tablet Design */}
    <MotionBox
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center mt-16 lg:mt-0 py-5 px-8 md:px-52"
      >
        {/* Landscape Tablet Device */}
        <Box className="relative h-[600px] w-[1000px] rounded-lg border-[14px] border-white/90 p-16 flex flex-col bg-gradient-to-br from-gray-900/90 to-black/90 shadow-2xl shadow-black/50 backdrop-blur-sm overflow-hidden">
          {/* Tablet Camera & Speaker */}
          <Box className="absolute right-8 top-8 flex items-center gap-2">
            <Box className="w-2 h-2 bg-gray-800 rounded-full" />
            <Box className="w-16 h-1 bg-gray-800 rounded-full" />
          </Box>
          {/* Code Editor Content */}
          <MotionBox 
            className="mt-12 text-left p-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Box className="flex items-center gap-2 mb-8" style={{ padding: "10px"}}>
              <Box className="w-4 h-4 rounded-full bg-red-500" />
              <Box className="w-4 h-4 rounded-full bg-yellow-500" />
              <Box className="w-4 h-4 rounded-full bg-green-500" />
            </Box>
            <Box className="font-mono text-base space-y-4" style={{ paddingLeft: "10px"}}>
              <Box className="flex items-center text-white">
                <span className="text-blue-400"><span className="text-purple-400 text-lg">const </span>innovation</span>
                <span className="text-white px-2">=</span>
                <span className="text-green-400">'Digital Excellence'</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ 
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="w-2.5 h-6 bg-purple-500 ml-2"
                />
              </Box>
            </Box>
          </MotionBox>
          {/* Animated Gradient Elements */}
          <Box className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-purple-500/10 to-transparent" />
          <MotionBox
            className="absolute w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -50, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </Box>
        {/* Decorative Background Glow */}
        <Box className="absolute -z-10 w-full h-full blur-3xl opacity-20 bg-gradient-to-r from-black via-pink-500 to-purple-500 rounded-full animate-slow-pulse" />
      </MotionBox>
  </>
)

const HeroText = () => (
  <>
    <Container className="p-8 md:p-12 lg:p-16">
      <MotionBox
        className="flex items-center justify-center mb-12 md:mb-16 p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={logo} alt="Logo" className="w-92 h-92 md:w-80 md:h-80 lg:w-92 lg:h-92" />
      </MotionBox>
      <Box className="text-center md:text-left">
        <MotionBox
          className="flex flex-col items-center md:items-center space-y-6 md:space-y-8 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text className='bg-clip-text font-montserrat text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400' fontWeight="bold" textStyle="5xl">Experience Innovation</Text>
          <motion.p 
            className="text-2xl text-gray-300 max-w-lg px-6 md:px-0 leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevate your digital presence with cutting-edge solutions that transform ideas into remarkable experiences.
          </motion.p>
          
          <MotionBox 
            className="flex flex-col sm:flex-row gap-6 mt-12 px-4 md:px-0 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              as="a"
              href="#contact"
              color="white"
              colorPalette="green"
              variant="solid"
            >
              Get In Touch <ArrowRight className="animate-bounce-x" size={20} />
            </Button>
            <Button
            
              as="a"
              href="#projects"
              color="white"
              colorPalette="yellow"
              variant="solid"
            >
              Our Work <ArrowRight size={20} />
            </Button>
          </MotionBox>
        </MotionBox>
      </Box>
    </Container>
  </>
)