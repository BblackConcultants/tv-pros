'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="TV Pro's Electronics" 
                className="w-auto h-14" 
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-blue focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <Link 
              href="/" 
              className={`${isActive('/') ? 'text-brand-blue' : 'text-brand-black'} hover:text-brand-blue px-3 py-2 font-medium`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`${isActive('/services') ? 'text-brand-blue' : 'text-brand-black'} hover:text-brand-blue px-3 py-2 font-medium`}
            >
              Services
            </Link>
            <Link 
              href="/portfolio" 
              className={`${isActive('/portfolio') ? 'text-brand-blue' : 'text-brand-black'} hover:text-brand-blue px-3 py-2 font-medium`}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive('/contact') ? 'text-brand-blue' : 'text-brand-black'} hover:text-brand-blue px-3 py-2 font-medium`}
            >
              Contact
            </Link>
            <a 
              href="tel:+27717343348" 
              className="bg-brand-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Call Now: +27 71 734 3348
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-4 space-y-1">
            <Link 
              href="/"
              className={`block px-3 py-2 text-base font-medium ${isActive('/') ? 'text-brand-blue' : 'text-brand-black'} hover:text-brand-blue`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services"
              className={`block px-3 py-2 text-base font-medium ${isActive('/services') ? 'text-brand-blue' : 'text-brand-black'} hover:text-brand-blue`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/portfolio"
              className={`block px-3 py-2 text-base font-medium ${isActive('/portfolio') ? 'text-brand-blue' : 'text-brand-black'} hover:text-brand-blue`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link 
              href="/contact"
              className={`block px-3 py-2 text-base font-medium ${isActive('/contact') ? 'text-brand-blue' : 'text-brand-black'} hover:text-brand-blue`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <a 
                href="tel:+27717343348" 
                className="block w-full text-center bg-brand-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Call Now: +27 71 734 3348
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
