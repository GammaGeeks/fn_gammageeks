import { Button } from "../../ui/button";
import { Text } from "@chakra-ui/react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import logo from '../../../assets/logo/gammageeks2.png';
import './style.css'

export default function Hero() {
  return (
    <div id='home' className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/65 to-black/70 backdrop-blur-sm" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen grid grid-cols-1 lg:grid-cols-2 px-6 md:px-16">
        <div className="flex items-center justify-center md:p-0 p-10">
          <HeroText />
        </div>
        <div className="flex items-center justify-center sm:justify-end">
          <Tablet />
        </div>
      </div>
    </div>
  );
}

const Tablet = () => (
  <>
    {/* Tablet Design */}
    <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center mt-16 lg:mt-0 py-5 px-8 md:px-52"
      >
        {/* Landscape Tablet Device */}
        <div className="relative h-[600px] w-[1000px] rounded-lg border-[14px] border-white/90 p-16 flex flex-col bg-gradient-to-br from-gray-900/90 to-black/90 shadow-2xl shadow-black/50 backdrop-blur-sm overflow-hidden">
          {/* Tablet Camera & Speaker */}
          <div className="absolute right-8 top-8 flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full" />
            <div className="w-16 h-1 bg-gray-800 rounded-full" />
          </div>
          {/* Code Editor Content */}
          <motion.div 
            className="mt-12 text-left p-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-8" style={{ padding: "10px"}}>
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <div className="w-4 h-4 rounded-full bg-yellow-500" />
              <div className="w-4 h-4 rounded-full bg-green-500" />
            </div>
            <div className="font-mono text-base space-y-4" style={{ paddingLeft: "10px"}}>
              <div className="flex items-center text-white">
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
              </div>
            </div>
          </motion.div>
          {/* Animated Gradient Elements */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-purple-500/10 to-transparent" />
          <motion.div
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
        </div>
        {/* Decorative Background Glow */}
        <div className="absolute -z-10 w-full h-full blur-3xl opacity-20 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full animate-slow-pulse" />
      </motion.div>
  </>
)

const HeroText = () => (
  <>
    <div className="p-8 md:p-12 lg:p-16">
      <div className="flex items-center justify-center mb-12 md:mb-16 p-8">
        <img src={logo} alt="Logo" className="w-96 h-96 md:w-80 md:h-80 lg:w-96 lg:h-96" />
      </div>
      <div className="text-center md:text-left">
        <motion.div
          className="flex flex-col items-center md:items-center space-y-6 md:space-y-8 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-500 to-purple-400' fontWeight="bold" textStyle="5xl">EXPERIENCE INNOVATION</Text>
          <motion.p 
            className="text-2xl text-gray-300 max-w-lg px-6 md:px-0 leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Elevate your digital presence with cutting-edge solutions that transform ideas into remarkable experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 mt-12 px-4 md:px-0 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button colorPalette="purple" variant="solid" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 lg:px-10 lg:py-5 flex items-center gap-2 hover:opacity-90 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/20 text-lg lg:text-xl">
              Get In Touch <ArrowRight className="animate-bounce-x" size={20} />
            </Button>
            <Button className="bg-transparent border-2 border-white/30 px-8 py-4 lg:px-10 lg:py-5 flex items-center gap-2 hover:bg-white hover:text-black rounded-full transition-all duration-300 backdrop-blur-sm text-lg lg:text-xl">
              Our Work <ArrowRight size={20} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </>
)