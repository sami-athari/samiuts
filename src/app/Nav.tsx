'use client'; // Tambahkan ini di baris pertama

import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out 
        ${isScrolled ? 'bg-[#1e1e42] shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto flex justify-between items-center py-5 px-6 md:px-16">
        {/* Logo dan teks "team." */}
        <div className="text-xl font-bold text-white">
          <a href="#" className={`text-5xl font-bold ${isScrolled ? 'text-white' : 'text-white'}`}>
            team<span className="text-blue-600">.</span>
          </a>
        </div>
        
        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Link navigasi */}
        <div className={`flex-col space-y-4 md:space-y-0 md:space-x-8 md:flex md:flex-row absolute md:relative md:flex ${isOpen ? 'flex' : 'hidden'} top-full left-0 w-full md:w-auto bg-[#1e1e42] md:bg-transparent md:top-auto md:left-auto md:p-0 p-5`}>
          <a href="#products" className={`text-sm ${isScrolled ? 'text-white' : 'text-white'} underline`}>
            Products
          </a>
          <a href="#blog" className={`text-sm ${isScrolled ? 'text-white' : 'text-white'} underline`}>
            Blog
          </a>
          <a href="#support" className={`text-sm ${isScrolled ? 'text-white' : 'text-white'} underline`}>
            Support
          </a>
          <a href="#login" className={`text-sm ${isScrolled ? 'text-white' : 'text-white'} underline`}>
            Login
          </a>

          {/* Tombol Get Access */}
          <button 
            className="text-white px-10 py-2 rounded-md hover:bg-blue-700 transition" 
            style={{ backgroundColor: 'rgba(59, 130, 246, 0.5)' }} // Menggunakan rgba untuk opacity 50%
          >
            Get Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
