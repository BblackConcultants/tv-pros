import Image from 'next/image';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
              Expert TV Repair Services in Johannesburg
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional TV repair and maintenance services by experienced technicians
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="tel:+27717343348"
                className="bg-brand-blue text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                Call Now
              </a>
              <a
                href="/services"
                className="border-2 border-brand-blue text-brand-blue px-8 py-3 rounded-md text-lg font-medium hover:bg-brand-blue hover:text-white transition-colors"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-black mb-12">
            Our Professional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Motherboard Replacement',
                description: 'Expert motherboard diagnostics and replacement services'
              },
              {
                title: 'Power Supply Repairs',
                description: 'Fix and replace faulty power supply units'
              },
              {
                title: 'Backlight Repairs',
                description: 'Restore your TV\'s brightness with our backlight repair service'
              },
              {
                title: 'Screen Repairs',
                description: 'Professional LCD, LED, and OLED screen repair solutions'
              },
              {
                title: 'Software Updates',
                description: 'System updates and software reload services'
              },
              {
                title: 'Diagnostic Services',
                description: 'Comprehensive TV diagnostics and troubleshooting'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-brand-black mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Professional TV Repair Services?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert technicians are ready to help you with any TV repair needs
          </p>
          <a
            href="tel:+27717343348"
            className="bg-brand-blue text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors inline-block"
          >
            Call +27 71 734 3348
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
