import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { generateMetadata } from '../config/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Service Areas',
  description: 'TV repair services in Johannesburg, Sandton, Fourways, Midrand, and surrounding areas. Professional TV repairs at your location.',
  path: '/areas'
});

export default function AreasPage() {
  const areas = [
    'Sandton',
    'Fourways',
    'Bryston',
    'Linden',
    'Northcliffe',
    'Lanseria',
    'Midrand',
    'Suninghill',
    'Poshof',
    'Lonehill',
    'Rivonia',
    'Kylami',
    'Centurion',
    'Krugersdorp',
    'Roordport'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Service Areas
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Professional TV repair services across Johannesburg and surrounding areas
          </p>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-brand-black mb-8 text-center">
              Areas We Service
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {areas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-md p-4 text-center hover:bg-brand-blue hover:text-white transition-colors"
                >
                  <p className="font-medium">{area}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center text-gray-600">
              <p className="mb-4">
                Don't see your area listed? Give us a call! We might still be able to help.
              </p>
              <a
                href="tel:+27717343348"
                className="bg-brand-blue text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors inline-block"
              >
                Call +27 71 734 3348
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-black mb-4">
              Find Us
            </h2>
            <p className="text-gray-600">
              Located at 7 Pongola Ave, Randpark Ridge, Johannesburg, 2001
            </p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.6647205143844!2d27.9493!3d-26.1033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a0d8b0b8b8b7%3A0x1e9b3c3c3c3c3c3c!2s7%20Pongola%20Ave%2C%20Randpark%20Ridge%2C%20Johannesburg%2C%202001!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza"
              className="w-full h-full rounded-lg shadow-md"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
