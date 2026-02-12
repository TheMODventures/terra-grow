import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Page = 'home' | 'about' | 'cognivue' | 'solutions' | 'pricing' | 'blog' | 'security' | 'contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: 'About', page: 'about' },
  { label: 'Cognivue', page: 'cognivue' },
  { label: 'Solutions', page: 'solutions' },
  { label: 'Pricing', page: 'pricing' },
  { label: 'Blog', page: 'blog' },
  { label: 'Security', page: 'security' },
  { label: 'Contact', page: 'contact' },
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-terragrow-dark/90 backdrop-blur-md border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center"
            >
              <img 
                src="/images/logo.png" 
                alt="TerraGrow" 
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    currentPage === link.page
                      ? 'text-terragrow-white'
                      : 'text-terragrow-gray hover:text-terragrow-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => handleNavClick('contact')}
                className="bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium px-5 py-2.5 rounded-button transition-all duration-200 hover:-translate-y-0.5"
              >
                Request a Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-terragrow-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          className="absolute inset-0 bg-terragrow-dark/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => handleNavClick(link.page)}
              className={`text-2xl font-display font-semibold transition-colors duration-200 ${
                currentPage === link.page
                  ? 'text-terragrow-white'
                  : 'text-terragrow-gray hover:text-terragrow-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => handleNavClick('contact')}
            className="mt-4 bg-terragrow-blue hover:bg-terragrow-blue-light text-white font-medium px-8 py-3 rounded-button"
          >
            Request a Demo
          </Button>
        </div>
      </div>
    </>
  );
}
