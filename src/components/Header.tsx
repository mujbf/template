import { useState, useEffect } from "react";
import { Search, User, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import Typography from "./ui/Typography";

interface HeaderProps {
  onNavigate: (page: "home" | "style-guide") => void;
  currentPage: "home" | "style-guide";
}

const Header = ({ onNavigate, currentPage }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { name: "Home", href: "#", action: () => onNavigate("home") },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    {
      name: "Style Guide",
      href: "#style-guide",
      action: () => onNavigate("style-guide"),
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate("home")}
        >
          <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center transform rotate-12 transition-transform hover:rotate-0">
            <Typography
              variant="h3"
              as="span"
              className="text-white -rotate-12 hover:rotate-0 transition-transform"
            >
              M
            </Typography>
          </div>
          <Typography
            variant="h3"
            as="span"
            className="font-bold tracking-tight text-foreground"
          >
            Magic<span className="text-primary-500">Unbound</span>
          </Typography>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.action) {
                  e.preventDefault();
                  link.action();
                }
              }}
              className={`text-sm font-medium hover:text-primary-500 transition-colors relative group ${
                (link.name === "Home" && currentPage === "home") ||
                (link.name === "Style Guide" && currentPage === "style-guide")
                  ? "text-primary-500"
                  : ""
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary-500 transition-all group-hover:w-full ${
                  (link.name === "Home" && currentPage === "home") ||
                  (link.name === "Style Guide" && currentPage === "style-guide")
                    ? "w-full"
                    : "w-0"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="p-2 !rounded-full w-10 h-10"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="p-2 !rounded-full w-10 h-10 hidden sm:flex"
          >
            <Search size={20} />
          </Button>
          <Button
            variant="primary"
            size="md"
            leftIcon={<User size={18} />}
            className="rounded-full"
          >
            <span className="hidden sm:inline">Login</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-background border-l border-border z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-8">
                <div className="flex items-center justify-between mb-12">
                  <div
                    className="flex items-center gap-2"
                    onClick={() => {
                      onNavigate("home");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center rotate-12">
                      <Typography
                        variant="h4"
                        className="text-white -rotate-12"
                      >
                        M
                      </Typography>
                    </div>
                    <Typography variant="h3" className="font-bold">
                      Magic<span className="text-primary-500">Unbound</span>
                    </Typography>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.a
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      key={link.name}
                      href={link.href}
                      className={`text-2xl font-bold hover:text-primary-500 transition-colors ${
                        (link.name === "Home" && currentPage === "home") ||
                        (link.name === "Style Guide" &&
                          currentPage === "style-guide")
                          ? "text-primary-500"
                          : ""
                      }`}
                      onClick={(e) => {
                        if (link.action) {
                          e.preventDefault();
                          link.action();
                        }
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-auto pt-8 border-t border-border flex flex-col gap-4">
                  <div className="flex gap-4">
                    <Button
                      variant="ghost"
                      onClick={toggleTheme}
                      className="flex-1 justify-center gap-2"
                    >
                      {isDark ? <Sun size={20} /> : <Moon size={20} />}
                      <span>{isDark ? "Light" : "Dark"} Mode</span>
                    </Button>
                    <Button variant="ghost" className="p-3">
                      <Search size={20} />
                    </Button>
                  </div>
                  <Button variant="primary" size="lg" className="w-full">
                    Login / Sign Up
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
