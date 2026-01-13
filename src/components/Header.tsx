import { useState, useEffect } from "react";
import { Search, User, Menu, X, Sun, Moon } from "lucide-react";
import Button from "./ui/Button";

interface HeaderProps {
  onNavigate: (page: "home" | "style-guide") => void;
  currentPage: "home" | "style-guide";
}

interface NavLink {
  name: string;
  href: string;
  page?: "home" | "style-guide";
}

const Header = ({ onNavigate, currentPage }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Check if dark mode is already enabled
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = (): void => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "#", page: "home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Style Guide", href: "#style-guide", page: "style-guide" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: NavLink
  ): void => {
    if (link.page) {
      e.preventDefault();
      onNavigate(link.page);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-background/80 py-3 shadow-lg border-b border-border"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group"
          onClick={() => onNavigate("home")}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-xl flex items-center justify-center transform rotate-12 transition-transform group-hover:rotate-0 shadow-lg shadow-primary-600/30">
            <span className="text-white text-xl sm:text-2xl font-bold -rotate-12 group-hover:rotate-0 transition-transform">
              M
            </span>
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Magic<span className="text-primary-600">Unbound</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`text-sm font-medium hover:text-primary-600 transition-colors relative group ${
                link.page === currentPage
                  ? "text-primary-600"
                  : "text-foreground"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all group-hover:w-full ${
                  link.page === currentPage ? "w-full" : "w-0"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle - Icon Only */}
          <button
            onClick={toggleTheme}
            className="p-2.5 sm:p-3 rounded-full hover:bg-muted transition-all active:scale-95 text-foreground"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          {/* Search - Icon Only on Mobile, Hidden on Small Screens */}
          <button
            className="hidden sm:flex p-2.5 sm:p-3 rounded-full hover:bg-muted transition-all active:scale-95 text-foreground"
            aria-label="Search"
          >
            <Search size={22} />
          </button>

          {/* Login Button - Responsive */}
          <Button
            variant="primary"
            size="md"
            leftIcon={<User size={18} />}
            className="!rounded-full"
          >
            <span className="hidden sm:inline">Login</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 sm:p-2.5 rounded-lg hover:bg-muted transition-colors text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-background border-l border-border z-50 lg:hidden shadow-2xl overflow-y-auto">
            <div className="flex flex-col h-full p-6 sm:p-8">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8 sm:mb-12">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => {
                    onNavigate("home");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center rotate-12 shadow-lg shadow-primary-600/30">
                    <span className="text-white text-lg font-bold -rotate-12">
                      M
                    </span>
                  </div>
                  <span className="text-xl font-bold text-foreground">
                    Magic<span className="text-primary-600">Unbound</span>
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors text-foreground"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-4 sm:gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-xl sm:text-2xl font-bold hover:text-primary-600 transition-colors ${
                      link.page === currentPage
                        ? "text-primary-600"
                        : "text-foreground"
                    }`}
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Mobile Menu Footer */}
              <div className="mt-auto pt-6 sm:pt-8 border-t border-border flex flex-col gap-3 sm:gap-4">
                <div className="flex gap-3 sm:gap-4">
                  <Button
                    variant="ghost"
                    onClick={toggleTheme}
                    className="flex-1 justify-center gap-2"
                  >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    <span>{isDark ? "Light" : "Dark"} Mode</span>
                  </Button>
                  <Button variant="ghost" className="!p-3">
                    <Search size={20} />
                  </Button>
                </div>
                <Button variant="primary" size="lg" className="w-full">
                  Login / Sign Up
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
