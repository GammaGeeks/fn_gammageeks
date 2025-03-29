import { useState, useEffect } from "react";
import logo from "../../../assets/logo/gammageeks.png";
import { Button } from "../../ui/button";
import { Box } from "@chakra-ui/react";

const Nav = () => {
  const [navBackground, setNavBackground] = useState("transparent");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("#home");

  const navItems = [
    { href: "#home", text: "HOME" },
    { href: "#services", text: "SERVICES" },
    { href: "#projects", text: "PROJECTS" },
    { href: "#about", text: "ABOUT" },
    { href: "#team", text: "TEAM" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 100 ? "bg-black/90 shadow-md" : "transparent");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${navBackground} backdrop-blur-md shadow-lg`}>
      <div className="w-full px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home">
            <Box paddingY='4' paddingX='8'><img src={logo} alt="Logo" className="w-88 object-contain hover:scale-105 transition-transform duration-300"/></Box>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-around space-x-6 gap-0 lg:gap-12" style={{ padding: '15px 15px 15px 15px', marginRight: 40 }}>
            <div className="flex justify-around gap-4">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href} isActive={activePage === item.href} onClick={() => setActivePage(item.href)}>
                  {item.text}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center">
              <Button colorPalette="purple" variant="solid" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 lg:px-10 lg:py-5 flex items-center gap-2 hover:opacity-90 rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/20 text-lg lg:text-xl">
                Get in touch
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-white hover:text-blue-400 transition">
            {isMobileMenuOpen ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"}`}>
          <div className="space-y-4">
            {navItems.map((item) => (
              <MobileNavLink key={item.href} href={item.href} isActive={activePage === item.href} onClick={() => {
                setActivePage(item.href);
                setIsMobileMenuOpen(false);
              }}>
                {item.text}
              </MobileNavLink>
            ))}
            <Button text="Get Started" fullWidth />
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable NavLink for desktop
const NavLink = ({ href, children, isActive, onClick }) => (
  <a href={href} onClick={onClick} className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition group 
      ${isActive ? "text-blue-400" : "text-white hover:text-blue-400"}`}>
    <span className={isActive ? 'text-blue-400' : 'text-white'}>{children}</span>
    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transition-transform duration-300 
      ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
  </a>
);

// Reusable MobileNavLink for mobile
const MobileNavLink = ({ href, children, isActive, onClick }) => (
  <a href={href} onClick={onClick} className={`block px-4 py-2 text-sm font-medium uppercase tracking-wider rounded-lg transition 
      ${isActive ? "text-blue-400 bg-white/10" : "text-white hover:bg-white/10"}`}>
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
