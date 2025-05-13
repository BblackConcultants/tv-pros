'use client';

import { useState } from 'react';
import Image from 'next/image';

const ITEMS_PER_PAGE = 12;

export default function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const images = Array.from({ length: 57 }, (_, i) => ({
    src: `/portfolio/IMG-20250507-WA${String(i + 12).padStart(4, '0')}.jpg`,
    alt: `Portfolio Image ${i + 1}`
  }));

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentImages = images.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-brand-gray py-16" 
        style={{
          backgroundImage: 'url("/hero-img.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            View our completed TV repair projects and success stories
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentImages.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-brand-blue text-white rounded-md disabled:opacity-50 hover:bg-opacity-90 transition-colors"
            >
              Previous
            </button>
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === page
                      ? 'bg-brand-blue text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-brand-blue text-white rounded-md disabled:opacity-50 hover:bg-opacity-90 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
