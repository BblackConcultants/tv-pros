'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';

const brands = [
  {
    name: 'Samsung',
    logo: '/brands/samsung.svg',
    description: 'Very popular for smart TVs and overall reliability'
  },
  {
    name: 'LG',
    logo: '/brands/lg.svg',
    description: 'Known for OLED technology and WebOS smart interface'
  },
  {
    name: 'Hisense',
    logo: '/brands/hisense.svg',
    description: 'Affordable, good quality; manufactured locally in some cases'
  },
  {
    name: 'TCL',
    logo: '/brands/tcl.svg',
    description: 'Gaining popularity for value and smart features'
  },
  {
    name: 'Skyworth',
    logo: '/brands/skyworth.svg',
    description: 'Budget-friendly with Android TV features'
  },
  {
    name: 'Sinotec',
    logo: '/brands/sinotec.svg',
    description: 'A local favourite for low-cost, entry-level TVs'
  },
  {
    name: 'Sony',
    logo: '/brands/sony.svg',
    description: 'Premium quality with strong image and sound performance'
  },
  {
    name: 'Philips',
    logo: '/brands/philips.svg',
    description: 'Known for Ambilight and decent smart features'
  },
  {
    name: 'Telefunken',
    logo: '/brands/telefunken.svg',
    description: 'Budget option, often rebranded electronics'
  },
  {
    name: 'JVC',
    logo: '/brands/jvc.svg',
    description: 'Often found in supermarkets or general retailers, good for basic needs'
  },
  {
    name: 'Sansui',
    logo: '/brands/sansui.svg',
    description: 'Often found in supermarkets or general retailers, good for basic needs'
  },
  {
    name: 'Orion',
    logo: '/brands/orion.svg',
    description: 'Often found in supermarkets or general retailers, good for basic needs'
  }
];

export default function BrandsSlider() {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto container-padding">
        <h2 className="text-3xl md:text-4xl text-center text-brand-black mb-12 text-shadow">
          Brands We Service
        </h2>
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="py-4"
          >
            {brands.map((brand) => (
              <SwiperSlide key={brand.name}>
                <div className="flex flex-col items-center justify-center p-4 h-24 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                  <div className="relative w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300">

                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
