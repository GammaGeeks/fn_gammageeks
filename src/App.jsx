import ContactSection from './components/frontpage/ContactSection'
import Hero from './components/frontpage/Hero'
import Nav from './components/frontpage/Nav'
import ProjectShowcase from './components/frontpage/ProjectShowcase'
import Services from './components/frontpage/Services'
import WebsiteSections from './components/frontpage/Team'

function App() {

  return (
    <>
      <Hero />
      <Nav />
      <Services />
      <ProjectShowcase />
      <WebsiteSections />
      <ContactSection />
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2023 Your Company Name. All rights reserved.</p> 
        <p>Privacy Policy | Terms of Service</p>
      </footer>
    </>
  )
}

export default App
