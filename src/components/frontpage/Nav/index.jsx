import { useState, useEffect } from "react";
import logo from "../../../assets/logo/gammageeks.png";
import { Button } from "../../ui/button";
import { Box, Text } from "@chakra-ui/react";

const Nav = () => {
  const [navBackground, setNavBackground] = useState("transparent");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("#home");

  const navItems = [
    { href: "#home", text: "HOME", color: "blue-400" },
    { href: "#services", text: "SERVICES", color: "green-400" },
    { href: "#projects", text: "PROJECTS", color: "purple-400" },
    { href: "#about", text: "ABOUT", color: "orange-400" },
    { href: "#team", text: "TEAM", color: "red-400" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 100 ? "bg-black/90 shadow-md" : "transparent");
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActivePage(`#${currentSection}`);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${navBackground} backdrop-blur-md shadow-lg`}>
      <Box className="w-full px-6">
        <Box
          className="flex justify-between items-center py-4"
          paddingX={{ base: "8", md: "24" }}
        >
          {/* Logo */}
          <a href="#home">
            <Box paddingY='4' paddingX={{base: 4, md: 8}}><img src={logo} alt="Logo" className="w-72 object-contain hover:scale-105 transition-transform duration-300"/></Box>
          </a>

          {/* Desktop Menu - Aligned to right */}
          <Box
            className="hidden lg:flex items-center justify-end space-x-6 gap-0 lg:gap-12"
            as="nav"  
            paddingY="4"
            paddingX="8"
            ml="auto"
          >
            <Box className="flex justify-end gap-4">
              {navItems.map((item) => (
                <NavLink 
                  key={item.href} 
                  href={item.href} 
                  isActive={activePage === item.href} 
                  color={item.color}
                  onClick={() => setActivePage(item.href)}
                >
                  <Text textStyle={"lg"} fontWeight="medium" color={activePage === item.href ? item.color : "white"}>
                    {item.text}
                  </Text>
                </NavLink>
              ))}
            </Box>
            <Box className="flex items-center">
              <Button
                colorPalette="purple"
                variant="solid"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 lg:px-10 lg:py-5 flex items-center gap-2 hover:opacity-90 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/20 text-lg lg:text-xl"
                onClick={() => window.scrollTo({ top: document.getElementById("contact").offsetTop, behavior: "smooth" })}
              >
                Get in touch
              </Button>
            </Box>
          </Box>

          {/* Mobile Menu Button */}
          <Box
            paddingX={{ base: 4, md: 8 }}
            className="lg:hidden"
          >
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-blue-400 transition">
              {isMobileMenuOpen ? (
                <CloseIcon />
              ) : (
                <MenuIcon />
              )}
            </button>
          </Box>
        </Box>

        {/* Mobile Menu */}
        <Box className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "h-screen opacity-100 py-4" : "max-h-0 opacity-0"}`}>
          <Box
            as="nav"
            h="full"
            paddingY="4"
            paddingX="4"
            gap="4"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            backgroundColor="black/90"
          >
            {navItems.map((item) => (
              <MobileNavLink 
                key={item.href} 
                href={item.href} 
                isActive={activePage === item.href} 
                color={item.color}
                onClick={() => {
                  setActivePage(item.href);
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.text}
              </MobileNavLink>
            ))}
            <Button
              variant="solid"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.scrollTo({ top: document.getElementById("contact").offsetTop, behavior: "smooth" });
              }}
              as="a"
              href="#contact"
              color="white"
              colorPalette="green"
              w="100%"
              paddingY="4"
              paddingX="8"
            >
              Get in touch
            </Button>
          </Box>
        </Box>
      </Box>
    </nav>
  );
};

// Reusable NavLink for desktop with dynamic colors
const NavLink = ({ href, children, isActive, color, onClick }) => (
  <a href={href} onClick={onClick} className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition group`}>
    <span className={isActive ? `text-${color}` : `text-white hover:text-${color} font-montserrat`}>{children}</span>
    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-${color} transition-transform duration-300 
      ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} mt-2`} />
  </a>
);

// Reusable MobileNavLink for mobile with dynamic colors
const MobileNavLink = ({ href, children, isActive, color, onClick }) => (
  <a href={href} onClick={onClick} className={`block px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-lg transition 
      ${isActive ? `text-${color} bg-white/10` : `text-white hover:bg-white/10 hover:text-${color}`}`}>
    {children}
  </a>
);

// SVG Menu Icons
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Nav;
