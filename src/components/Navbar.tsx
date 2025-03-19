
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navbarClasses = cn(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12',
    isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'
  );

  const navLinks = [
    { title: 'Education', href: '#education' },
    { title: 'Stories', href: '#stories' },
    { title: 'Insights', href: '#insights' },
    { title: 'Resources', href: '#resources' },
    { title: 'About', href: '#about' },
  ];

  return (
    <header className={navbarClasses}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-masterplan-primary font-semibold text-xl opacity-0 animate-fade-in">
          Masterplan
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-masterplan-text font-medium hover:text-masterplan-primary transition-colors opacity-0',
                `animate-fade-in-delay-${index % 3 + 1}`
              )}
            >
              {link.title}
            </a>
          ))}
          <button className="bg-masterplan-primary text-white rounded-full px-6 py-2 font-medium text-sm transition-all hover:shadow-lg hover:bg-opacity-90 opacity-0 animate-fade-in-delay-3">
            Join Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass fixed top-16 left-0 right-0 p-6 animate-slide-in-right">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-masterplan-text font-medium hover:text-masterplan-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <button className="bg-masterplan-primary text-white rounded-full px-6 py-2 font-medium text-sm transition-all hover:shadow-lg hover:bg-opacity-90 mt-4">
              Join Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
