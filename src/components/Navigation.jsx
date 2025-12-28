import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const navItems = [
  { id: "about", icon: FaUser, label: "About" },
  { id: "education", icon: FaGraduationCap, label: "Education" },
  { id: "experience", icon: FaBriefcase, label: "Experience" },
  { id: "projects", icon: FaCode, label: "Projects" },
  { id: "contact", icon: FaEnvelope, label: "Contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation - Side */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      >
        <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                      : "text-white-600 hover:text-blue-500 hover:bg-white/20"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white-900 text-white px-3 py-1.5 rounded-md text-sm whitespace-nowrap pointer-events-none"
                >
                  {item.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Navigation - Bottom */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden transition-all duration-300 ${
          isScrolled ? "scale-95" : "scale-100"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-lg">
          <div className="flex gap-4 items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <div
                    className={`p-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white"
                        : "text-white-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
