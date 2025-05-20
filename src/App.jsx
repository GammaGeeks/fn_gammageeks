import { Box } from '@chakra-ui/react'
// import ContactSection from './components/frontpage/ContactSection'
import Hero from './components/frontpage/Hero'
import Nav from './components/frontpage/Nav'
import ProjectShowcase from './components/frontpage/ProjectShowcase'
import Services from './components/frontpage/Services'
import WebsiteSections from './components/frontpage/Team'
import ContactSection from './components/frontpage/ContactSection'
import Footer from './components/frontpage/Footer'

function App() {

  return (
    <Box className="bg-gray-900 text-white">
      <Hero />
      <Nav />
      <Services />
      <ProjectShowcase />
      <WebsiteSections />
      <Footer />
    </Box>
  )
}

export default App
