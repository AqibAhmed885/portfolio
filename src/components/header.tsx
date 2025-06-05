"use client";
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out animate-slide-down ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-xl border-b border-black/10 shadow-lg shadow-black/5' 
            : 'bg-white/95 backdrop-blur-2xl border-b border-white/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <div className="z-50">
              <a 
                href="#home" 
                className="text-xl md:text-2xl font-bold text-gray-800 font-mono hover:text-indigo-600 transition-colors duration-300"
              >
                <span className="inline-block animate-pulse">
                  <span className="text-indigo-600">&lt;</span>
                  Aqib
                  <span className="text-indigo-600">/&gt;</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-600 hover:text-indigo-600 font-medium text-sm lg:text-base transition-colors duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <a
                href="#contact"
                className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Let&#39;s Talk</span>
                <svg 
                  className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center space-y-1.5 z-50"
              aria-label="Toggle menu"
            >
              <span 
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span 
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleMenu}
        ></div>
        
        {/* Menu Panel */}
        <div 
          className={`absolute top-16 right-0 w-80 max-w-sm h-full bg-white/98 backdrop-blur-xl border-l border-gray-200 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="p-6 pt-8">
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li 
                  key={item.name}
                  className={`transform transition-all duration-300 ${
                    isMenuOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms' }}
                >
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className="block text-lg font-semibold text-gray-700 hover:text-indigo-600 hover:pl-4 transition-all duration-300 py-3 border-b border-gray-100"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href="#contact"
                onClick={toggleMenu}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                Get In Touch
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;