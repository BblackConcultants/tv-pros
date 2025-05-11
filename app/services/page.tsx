import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { generateMetadata } from '../config/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'TV Repair Services',
  description: 'Professional TV repair services including motherboard replacement, power supply repairs, backlight fixing, screen repairs, and software updates.',
  path: '/services'
});

export default function ServicesPage() {
  const services = [
    {
      title: 'Motherboard Replacement',
      description: 'Our expert technicians specialize in diagnosing and replacing faulty motherboards in all TV brands. We use high-quality replacement parts and ensure your TV functions like new.',
      features: [
        'Comprehensive motherboard diagnostics',
        'Original or compatible replacement parts',
        'Expert installation and testing',
        'Warranty on parts and labor'
      ]
    },
    {
      title: 'Power Supply Repairs',
      description: 'Having power issues with your TV? Our skilled team can diagnose and fix power supply problems, from simple component replacements to complete PSU overhauls.',
      features: [
        'Power supply unit testing',
        'Component-level repairs',
        'Complete PSU replacement',
        'Voltage regulation fixes'
      ]
    },
    {
      title: 'Backlight Repairs',
      description: 'Dim or uneven display? Our backlight repair service restores your TV\'s brightness and picture quality to its original glory.',
      features: [
        'LED strip replacement',
        'Backlight driver repair',
        'Diffuser panel inspection',
        'Brightness uniformity testing'
      ]
    },
    {
      title: 'Screen Repairs',
      description: 'We repair and replace damaged TV screens, handling everything from dead pixels to cracked panels for all major TV brands.',
      features: [
        'LCD/LED panel replacement',
        'Dead pixel repair',
        'Screen calibration',
        'Anti-glare coating restoration'
      ]
    },
    {
      title: 'Software Updates',
      description: 'Keep your TV running smoothly with our software update and reload services, fixing smart TV issues and improving performance.',
      features: [
        'System software updates',
        'Smart TV app troubleshooting',
        'Factory reset services',
        'Custom settings optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our TV Repair Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional TV repair services in Johannesburg and surrounding areas
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-brand-black mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-brand-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-black mb-6">
            Ready to Get Your TV Fixed?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us now for professional TV repair services
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="tel:+27717343348"
              className="bg-brand-blue text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Call +27 71 734 3348
            </a>
            <a
              href="/contact"
              className="border-2 border-brand-blue text-brand-blue px-8 py-3 rounded-md text-lg font-medium hover:bg-brand-blue hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
